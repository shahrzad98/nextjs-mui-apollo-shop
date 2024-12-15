import * as React from 'react';
import { useProductFeedback } from '@digify/theme-kit';
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Grid,
  Pagination,
  Stack,
  SvgIcon,
  Typography
} from '@mui/material';
import { flatten } from 'lodash-es';
import { jalaliDateConvertor } from '../../../../utils/date';
import Image from 'next/image';
import { CommentContainer } from './info.style';
import { useEffect, useState } from 'react';
import useIsMobile from '../../shared/Hooks/useIsMobile';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Comments = () => {
  const [offset, setOffset] = useState(0);
  const feedback = useProductFeedback({});
  const { data, paginationHandler, loading, pageHandlerDesktop } = feedback;
  const images = flatten(data.results?.map(item => item.images));
  const isMobile = useIsMobile();
  const numberOfImages = isMobile ? 4 : 5;

  useEffect(() => {
    isMobile ? paginationHandler(offset) : pageHandlerDesktop(offset);
  }, [offset]);

  const commentsArray = isMobile ? data?.results : data?.resultsPerPage;

  function expandMoreHandle() {
    setOffset(offset + 1);
  }
  if (loading)
    return (
      <Box textAlign="center" mt={2}>
        <CircularProgress />
      </Box>
    );
  return (
    <>
      {!!data?.count ? (
        <CommentContainer>
          <Typography variant="body2" color="text.primary" mb={3}>
            تصاویر ارسالی کاربران
          </Typography>
          <Box mb={4}>
            {images?.slice(0, numberOfImages).map(item => (
              <img key={item.id} src={item.image} alt="" />
            ))}
          </Box>
          <Typography variant="body2" color="text.primary" mb={3}>
            نظرات کاربران
          </Typography>
          {!!commentsArray?.length &&
            commentsArray?.map((item, index) => (
              <>
                <Box key={index} className="rateWrapper">
                  <Stack direction="row" alignItems="center">
                    <Stack direction="row" alignItems="center" mr={5}>
                      {item.first_name ||
                        (item.last_name && (
                          <Typography variant="overline" color="text.secondary">
                            {item.first_name} - {item.last_name}
                          </Typography>
                        ))}
                      <Typography variant="overline" color="text.secondary">
                        .{jalaliDateConvertor(item.created_at)}
                      </Typography>
                    </Stack>

                    <Stack
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      className="rate"
                    >
                      <Typography variant="overline" mr={1}>
                        {item?.score}
                      </Typography>
                      <Image
                        src="/static/assets/svg/product/commentStar.svg"
                        width={8}
                        height={8}
                        alt="امتیاز"
                      />
                    </Stack>
                  </Stack>
                  <Divider className="divider" w={100} />
                </Box>
                <Grid container mb={3}>
                  <Grid item xs={9}>
                    <Typography variant="body1">{item?.description}</Typography>
                  </Grid>
                  {!isMobile && (
                    <Grid item xs={3}>
                      <Stack mb={4} className="commentImage">
                        {item?.images?.slice(0, 3).map(item => (
                          <img key={item.id} src={item.image} alt="" />
                        ))}
                      </Stack>
                    </Grid>
                  )}
                </Grid>
                {item?.variant?.option_values && (
                  <Stack direction="row" mb={isMobile ? 1 : 3}>
                    {item?.variant?.option_values?.map(item => (
                      <>
                        <Stack direction="row" key={item?.id}>
                          <Typography
                            variant="overline"
                            color="text.secondary"
                            mr={1}
                          >
                            {item?.option?.name}
                          </Typography>
                          <Typography
                            variant="overline"
                            color="text.secondary"
                            mr={1}
                          >
                            {item?.value}&nbsp;،
                          </Typography>
                        </Stack>
                      </>
                    ))}
                  </Stack>
                )}

                {isMobile && (
                  <Stack direction="row" justifyContent="flex-end" item xs={3}>
                    <Stack mb={isMobile ? 3 : 4} className="commentImage">
                      {item?.images?.slice(0, 3).map(item => (
                        <img key={item.id} src={item.image} alt="" />
                      ))}
                    </Stack>
                  </Stack>
                )}

                {!!item?.reply && (
                  <Stack direction={isMobile ? 'column' : 'row'} mb={3}>
                    <Grid item xs={isMobile ? 6 : 1}>
                      <Typography
                        variant="body2"
                        color="ذمشزن.20"
                        mb={!isMobile ?? 3}
                        p={!isMobile ?? 2}
                      >
                        پاسخ فروشنده
                      </Typography>
                    </Grid>
                    <Grid item xs={isMobile ? 12 : 8} className="reply">
                      <Typography variant="body1" color="black.40" mb={3}>
                        {item?.reply}
                      </Typography>
                    </Grid>
                  </Stack>
                )}
                {!isMobile && (
                  <Box mb={3}>
                    <Divider className="divider" />
                  </Box>
                )}
              </>
            ))}
        </CommentContainer>
      ) : (
        <Box margin="0 auto" textAlign="center" mt={6}>
          <Image
            src="/static/assets/svg/product/noComment.svg"
            width={72}
            height={66}
            alt="نظری وجود ندارد"
          />
          <Typography textAlign="center" color="black.40" mt={2}>
            هیچ نظری موجود نیست
          </Typography>
        </Box>
      )}
      {data?.pages?.length > 1 && !isMobile && (
        <Pagination
          page={offset}
          onChange={(event, page) => setOffset(page)}
          count={data?.pages?.length}
          shape="rounded"
        />
      )}
      {isMobile && commentsArray?.length < data.count && (
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          onClick={() => expandMoreHandle()}
        >
          <Button>
            <Typography color="info.dark">مشاهده بیشتر</Typography>
            <SvgIcon color="info.dark">
              <ExpandMoreIcon color="info" />
            </SvgIcon>
          </Button>
        </Stack>
      )}
    </>
  );
};

export default Comments;
