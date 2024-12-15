import { Box, Grid, Skeleton } from '@mui/material';
import React from 'react';

export default function SkeletonReson() {
  return (
    <>
      <Grid
        container
        spacing={{ xs: 0, md: 0 }}
        sx={{
          padding: { xs: '10px', md: '20px' }
        }}
      >
        <Grid item container xs={8} md={8} display={'flex'}>
          <Grid item xs={6} md={2}>
            <Box width={'100px'} overflow="hidden" borderRadius={'5px'}>
              <Skeleton
                variant="rectangular"
                sx={{ width: { xs: '100%', md: 118 } }}
                height={100}
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'space-evenly'}
              ml={{ xs: 1, md: 3 }}
            >
              <Box>
                <Skeleton variant="text" sx={{ width: { xs: 100, md: 200 } }} />
              </Box>
              <Box display={'flex'} alignItems="center" sx={{ opacity: 0.5 }}>
                <Skeleton variant="text" sx={{ width: { xs: 100, md: 200 } }} />
                <Box>
                  <Skeleton
                    variant="text"
                    sx={{ width: { xs: 100, md: 200 } }}
                  />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid
          item
          xs={4}
          md={4}
          px={{ xs: 0, md: 4 }}
          display="flex"
          alignItems={{ xs: 'flex-end', md: 'flex-start' }}
          justifyContent={{ xs: 'flex-end', md: 'none' }}
        >
          <Box>
            <Skeleton variant="text" sx={{ width: { xs: 100, md: 200 } }} />
          </Box>
        </Grid>
        <Grid item xs={12} my={{ xs: 2, md: 0 }}>
          <Skeleton variant="text" sx={{ width: { xs: '60%', md: '40%' } }} />
        </Grid>
        <Grid item xs={12} md={7}>
          <Skeleton
            variant="text"
            sx={{ width: { xs: '100%', md: '100%' } }}
            height={'100px'}
          />
        </Grid>
        <Grid item xs={12} md={7}>
          <Skeleton
            variant="text"
            sx={{ width: { xs: '100%', md: '100%' } }}
            height={'200px'}
          />
        </Grid>
      </Grid>
    </>
  );
}
