import React from 'react';
import { Box, Grid, Skeleton } from '@mui/material';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';

const BlogItemSkeleton = () => {
  const isMobile = useIsMobile();

  return (
    <Grid container flexDirection="column">
      {[...new Array(3)].map((_, i, arr) =>
        isMobile ? (
          <Grid key={i} container flexDirection="column" mb={3}>
            <Skeleton
              variant="rectangular"
              width="1"
              sx={{ height: '180px' }}
            />
            <Skeleton variant="text" sx={{ fontSize: '1.4rem', mt: 3 }} />
            <Skeleton variant="text" sx={{ fontSize: '1rem', mt: 3 }} />

            <Grid
              container
              flexDirection="row"
              alignItems="center"
              color="#1C1B2066"
              justifyContent="flex-end"
              gap={3}
              mb={1}
              mt={3}
            >
              <Skeleton variant="text" width="80px" sx={{ fontSize: '2rem' }} />
              <Skeleton variant="text" width="80px" sx={{ fontSize: '2rem' }} />
            </Grid>
            {i + 1 < arr.length && (
              <Box
                sx={{
                  mt: 3,
                  background: `linear-gradient(to right ,transparent ,#eeeeee ,#D1D1D2 ,#eeeeee ,transparent)`,
                  height: '1px',
                  width: '100%'
                }}
              />
            )}
          </Grid>
        ) : (
          <Grid key={i} container flexDirection="row" height="180px" mb={3}>
            <Grid width="23%" height="1">
              <Skeleton
                variant="rectangular"
                width="1"
                sx={{ height: '180px' }}
              />
            </Grid>
            <Grid
              width="77%"
              height="1"
              p={3}
              container
              flexDirection="column"
              flexWrap="nowrap"
              justifyContent="space-between"
            >
              <Skeleton variant="text" sx={{ fontSize: '1.4rem' }} />
              <Skeleton variant="text" sx={{ fontSize: '1.4rem', my: 3 }} />
              <Grid
                container
                flexDirection="row"
                alignItems="center"
                justifyContent="flex-end"
                gap={3}
                mb={1}
              >
                <Skeleton
                  variant="text"
                  width="90px"
                  sx={{ fontSize: '2rem' }}
                />
                <Skeleton
                  variant="text"
                  width="90px"
                  sx={{ fontSize: '2rem' }}
                />
              </Grid>
            </Grid>
          </Grid>
        )
      )}
    </Grid>
  );
};

export default BlogItemSkeleton;
