import { Grid, Skeleton } from '@mui/material';
import React from 'react';

const ProductSkeleton = () => {
  return (
    <Grid
      container
      maxWidth="1280px"
      width={'100%'}
      justifyContent="center"
      spacing={3}
    >
      <Grid container my={2} justifyContent="center">
        <Skeleton variant="text" width="30%" />
      </Grid>
      {[...new Array(4)].map((_, i) => (
        <Grid key={i} item xs={6} md={3}>
          <Skeleton variant="rectangular" width="1" height="250px" />
          <Grid container my={1} justifyContent="center">
            <Skeleton variant="text" width="70%" />
          </Grid>
          <Grid container my={1} justifyContent="center">
            <Skeleton variant="text" width="50%" />
          </Grid>
          <Grid container my={1} justifyContent="center">
            <Skeleton variant="text" width="60%" />
          </Grid>
        </Grid>
      ))}
      <Grid container mt={5} justifyContent="center">
        <Skeleton variant="text" width="20%" />
      </Grid>
    </Grid>
  );
};

export default ProductSkeleton;
