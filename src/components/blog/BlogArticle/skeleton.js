import React from 'react';
import { Box, Divider, Grid, Skeleton } from '@mui/material';

const BlogArticleSkeleton = () => {
  return (
    <Grid container>
      <Skeleton sx={{ height: '50vh', width: '100%' }} />
      <Grid
        container
        flexDirection="column"
        px={[3, 4]}
        border="1px solid #1C1B201A"
        borderRadius="2px"
      >
        <Grid
          borderBottom="1px solid #1C1B201A"
          py={3}
          container
          alignItems="center"
          justifyContent="space-between"
          color="#1C1B20B2"
        >
          <Skeleton variant="circular" width="50px" height="50px" />
          <Box display="flex" alignItems="center" gap={3}>
            <Skeleton variant="circular" width="50px" height="50px" />
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{ background: '#1C1B201A' }}
            />
            <Skeleton variant="circular" width="50px" height="50px" />
          </Box>
        </Grid>
        <Grid container flexDirection="column" py={4}>
          <Skeleton variant="text" width="60%" sx={{ fontSize: '2rem' }} />
          <Skeleton variant="text" sx={{ mt: 3 }} />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="text" width="50%" />
          <Grid container mt={5} gap={2}>
            {[...new Array(3)].map((_, i) => (
              <Skeleton
                key={i}
                variant="rectangular"
                width="70px"
                height="30px"
              />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BlogArticleSkeleton;
