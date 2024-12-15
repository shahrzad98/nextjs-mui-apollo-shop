import { Grid, Skeleton } from '@mui/material';
import React from 'react';

const BlogHomeSlideSkeleton = () => {
  return (
    <Grid container overflow="hidden">
      <Grid container justifyContent="center">
        <Skeleton variant="text" width="50%" />
      </Grid>
      <Grid display="flex" flexDirection="row" flexWrap="nowrap" mt={5} gap={3}>
        {[...new Array(4)].map((_, i) => {
          return (
            <Grid
              key={i}
              flexDirection="column"
              width={['280px', '415px', '385px']}
            >
              <Grid height={['190px', '274px']}>
                <Skeleton variant="rectangular" width="1" height="100%" />
              </Grid>
              <Skeleton variant="text" sx={{ fontSize: '1.6rem', mt: 2 }} />
              <Skeleton variant="text" sx={{ fontSize: '1rem', mt: 2 }} />
            </Grid>
          );
        })}
      </Grid>
      <Grid container justifyContent="center" mt={5}>
        <Skeleton variant="text" height="50px" width="30%" />
      </Grid>
    </Grid>
  );
};

export default BlogHomeSlideSkeleton;
