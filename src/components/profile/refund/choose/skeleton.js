import { Grid, Skeleton } from '@mui/material';
import React from 'react';

export default function SkeletonChoose() {
  return (
    <>
      {[...new Array(5)].map((ele, index) => (
        <Grid key={index} container mt={2} bgcolor={'#f1f1f1'} height="130px">
          <Grid item container xs={8}>
            <Grid
              item
              xs={6}
              md={2}
              pl={3}
              display={'flex'}
              alignItems="center"
            >
              <Skeleton
                variant="rectangular"
                sx={{ width: { xs: 118, md: 118 } }}
                height={100}
              />
            </Grid>
            <Grid
              item
              container
              xs={6}
              md={10}
              pl={3}
              display={'flex'}
              alignItems="center"
            >
              <Grid item xs={12} md={6}>
                <Skeleton variant="text" sx={{ width: { xs: 100, md: 200 } }} />
              </Grid>
              <Grid item xs={12} md={6}>
                <Skeleton variant="text" sx={{ width: { xs: 100, md: 200 } }} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item container xs={4}>
            <Grid item xs={12} md={6} alignSelf="center">
              <Skeleton variant="text" sx={{ width: { xs: 100, md: 200 } }} />
            </Grid>
            <Grid item xs={12} md={6} alignSelf="center">
              {/* <Skeleton variant="text" sx={{ width: { xs: 140, md: 200 } }} /> */}
            </Grid>
          </Grid>
        </Grid>
      ))}
    </>
  );
}
