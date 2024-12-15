import { useProductFeedback } from '@digify/theme-kit';
import { Grid, Skeleton, Typography, Stack, Pagination } from '@mui/material';
import Body from './body';
import Title from './title';
import Reply from './reply';
import { useState } from 'react';

export default function UserComment() {
  const { data, loading, paginationHandler } = useProductFeedback();
  const [page, setPage] = useState(1);
  if (loading)
    return Array.from({ length: 5 }, (_, i) => i + 1).map(item => (
      <Skeleton key={`comment-skeleton-${item}`} width={'100%'} height={250} />
    ));

  return (
    <Grid container spacing={4} mt={4}>
      <Grid item xs={12}>
        <Typography textAlign={'left'} variant="subtitle1">
          نظرات کاربران
        </Typography>
      </Grid>
      {!!data?.count &&
        data?.resultsPerPage.map((item, index) => (
          <>
            <Grid
              borderBottom={'0.5px solid rgba(28, 27, 32, 0.2)'}
              paddingBottom={'24px'}
              key={`result-per-page-${index}`}
              item
              xs={12}
            >
              <Title data={item} />
              <Body
                desc={item?.description}
                variant={item?.variant}
                images={data?.images}
              />
              <Reply replyData={item?.reply} />
            </Grid>
          </>
        ))}
      <Grid item container justifyContent={'center'} alignItems={'center'}>
        <Grid item>
          <Stack spacing={2}>
            <Pagination
              count={data.pages.length}
              shape="rounded"
              page={page}
              onChange={(e, newPage) => {
                paginationHandler(newPage);
                setPage(newPage);
              }}
            />
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
}
