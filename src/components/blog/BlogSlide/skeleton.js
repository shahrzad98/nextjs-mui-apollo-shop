import React from 'react';
import { Grid, Skeleton } from '@mui/material';

const BlogSlideSkeleton = () => {
  return (
    <>
      <Skeleton
        variant="rectangular"
        width="1"
        sx={{
          height: ['40vh', '70vh'],
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Grid
          container
          height="1"
          flexDirection="column"
          p={3}
          bgcolor="rgba(255,255,255,0.1)"
          visibility="visible"
        >
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            flex={1}
          >
            <Skeleton variant="circular" width="30px" height="30px" />
            <Skeleton variant="circular" width="30px" height="30px" />
          </Grid>
          <Skeleton
            variant="text"
            width="60%"
            sx={{
              fontSize: '2rem'
            }}
          />
        </Grid>
      </Skeleton>
      <Grid container mt={3} justifyContent="center">
        <Skeleton
          variant="rectangular"
          sx={{ width: '50px', height: '10px', borderRadius: '10px' }}
        />
      </Grid>
    </>
  );
};

export default BlogSlideSkeleton;
