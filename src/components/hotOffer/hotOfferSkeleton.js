import { Box, Grid, Skeleton } from '@mui/material';
import React from 'react';

const SliderSkeleton = ({ isPage }) => (
  <Grid
    container
    spacing={2}
    mt={3}
    flexDirection="row"
    flexWrap={isPage ? 'wrap' : 'nowrap'}
    overflow={isPage ? 'auto' : 'hidden'}
  >
    {[...new Array(10)].map((_, i) => (
      <Grid item key={i} {...(isPage && { md: 3, xs: 6 })}>
        <Skeleton
          variant="rectangular"
          width={isPage ? '100%' : 230}
          height={300}
        />
      </Grid>
    ))}
  </Grid>
);

export const TypeOneSkeleton = ({ isPage = false }) => {
  return (
    <Box width="1">
      <Skeleton variant="rectangular" width="1" height={350}>
        <Grid container visibility="visible" bgcolor="#ffffff30" height="1">
          <Grid
            container
            item
            xs={3}
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            pb={5}
          >
            <Skeleton variant="circular" width={50} height={50} />
            <Skeleton variant="text" width="70%" height={50} />
          </Grid>
          <Grid
            xs={9}
            item
            container
            alignItems="center"
            justifyContent="center"
          >
            <Skeleton variant="rectangular" width="95%" height={300} />
          </Grid>
        </Grid>
      </Skeleton>
      {isPage && (
        <Box py={4}>
          <Skeleton variant="text" width={300} />
        </Box>
      )}
      <SliderSkeleton isPage={isPage} />
    </Box>
  );
};

export const TypeTwoSkeleton = () => {
  return (
    <Skeleton variant="rectangular" width="1" height={400}>
      <Grid
        container
        height="1"
        flexDirection="row"
        bgcolor="#ffffff10"
        visibility="visible"
        flexWrap="nowrap"
      >
        <Grid
          container
          item
          xs={2}
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          pb={5}
        >
          <Skeleton variant="circular" width={50} height={50} />
          <Skeleton variant="text" width="70%" height={50} />
        </Grid>
        <Grid item xs={10}>
          <SliderSkeleton />
        </Grid>
      </Grid>
    </Skeleton>
  );
};

export const TypeThreeSkeleton = () => {
  return (
    <Skeleton variant="rectangular" width="1" height={700}>
      <Grid
        container
        height="1"
        flexDirection="row"
        bgcolor="#ffffff10"
        visibility="visible"
        flexWrap="nowrap"
      >
        <Grid
          container
          item
          xs={2}
          flexDirection="column"
          alignItems="center"
          justifyContent="space-around"
          pb={5}
        >
          <Grid container flexDirection="column" alignItems="center">
            <Skeleton variant="circular" width={50} height={50} />
            <Skeleton variant="text" width={100} height={50} />
          </Grid>
          <Skeleton variant="text" width="70%" height={50} />
          <Box
            display="flex"
            alignItems="center"
            gap={2}
            justifyContent="center"
          >
            <Skeleton variant="circular" width={30} height={30} />
            <Skeleton variant="circular" width={30} height={30} />
          </Box>
        </Grid>
        <Grid item xs={10}>
          <SliderSkeleton />
          <SliderSkeleton />
        </Grid>
      </Grid>
    </Skeleton>
  );
};
