import { Skeleton, Grid, Box } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';

export default function SkeletonFavorites() {
  return (
    <Grid container mb={2} py={'36px'} px={{ xs: '0', md: '118px' }}>
      <Grid
        item
        display="flex"
        p={'10px'}
        justifyContent={'space-between'}
        xs={12}
        mb={{ xs: 2, md: '37px' }}
      >
        <Skeleton variant="text" width={'200px'} />
        <Skeleton variant="text" width={'50px'} />
      </Grid>

      {[1, 2, 3, 4, 5, 6, 7, 8].map(({}, index) => (
        <Grid item xs={12} md={6} padding="5px" key={index}>
          <Stack
            direction={'row'}
            justifyContent="space-between"
            bgcolor={'#f1f1f1'}
            p={2}
          >
            <Stack direction={'row'}>
              <Box mr={1}>
                <Skeleton
                  variant="rectangular"
                  sx={{
                    width: { xs: '100px', md: '100px', lg: '140px' },
                    height: { xs: '100px', md: '100px', lg: '140px' }
                  }}
                />
              </Box>
              <Box>
                <Skeleton
                  sx={{
                    width: { xs: '100px', md: '100px', lg: '140px' }
                  }}
                  height={30}
                  variant="text"
                />
              </Box>
            </Stack>
            <Stack justifyContent={'space-between'} alignItems={'flex-end'}>
              <Skeleton width={40} height={40} variant="circular" />
              <Skeleton
                sx={{
                  width: { xs: '100px', md: '140px' }
                }}
                height={30}
                variant="text"
              />
            </Stack>
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
}
