import { Grid, Typography } from '@mui/material';
import { useProductFeedback } from '@digify/theme-kit';
import React from 'react';
import Gallery from './gallery';
import UserComment from './userComment';
import { Box } from '@mui/system';
import CommentSvg from 'public/static/assets/svg/product/commentSvg';
const Comment = () => {
  const { data } = useProductFeedback();
  return (
    <>
      {data.count > 0 && data.count != undefined ? (
        <Grid sx={{ direction: 'rtl' }}>
          <Gallery />
          <UserComment />
        </Grid>
      ) : (
        <Box
          flexDirection={'column'}
          alignItems={'center'}
          display={'flex'}
          justifyContent={'center'}
        >
          <CommentSvg
            style={{
              marginTop: '70px'
            }}
          />
          <Typography
            textAlign={'center'}
            fontSize={'18px'}
            fontWeight={'bold'}
            pt={'31px'}
            color={'rgba(28, 27, 32, 0.4)'}
          >
            هیچ نظری موجود نیست
          </Typography>
        </Box>
      )}
    </>
  );
};

export default Comment;
