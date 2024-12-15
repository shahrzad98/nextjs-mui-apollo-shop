import {
  Box,
  Card,
  CardActions,
  CardContent,
  Grid,
  Skeleton,
  Stack
} from '@mui/material';
import React from 'react';

export default function AdrSkeleton({ firstEle }) {
  return (
    <Card
      sx={{
        marginTop: firstEle ? 0 : '16px',
        display: 'flex',
        height: '249px',
        alignItems: 'center'
      }}
      variant="outlined"
    >
      <Grid container px={{ xs: '12px', lg: '24px' }}>
        <Grid item xs={8} lg={8}>
          <Stack direction={'column'}>
            <CardContent sx={{ padding: '0' }}>
              <Skeleton variant="text" width="70px" />
              <Skeleton
                variant="text"
                width="130px"
                sx={{ marginTop: '16px' }}
              />
              <Skeleton
                variant="text"
                width="130px"
                sx={{ marginTop: '16px' }}
              />
            </CardContent>
            <CardActions sx={{ padding: ' 0 ', marginTop: '36px' }}>
              <Stack direction={'row'}>
                <Skeleton variant="text" width="70px" height={'50px'} />
                <Skeleton
                  variant="text"
                  width="70px"
                  height={'50px'}
                  sx={{ marginLeft: '10px' }}
                />
              </Stack>
            </CardActions>
          </Stack>
        </Grid>
        <Grid item xs={4} lg={4}>
          <Box
            sx={{
              height: { xs: '190px', md: '201px' },
              width: { xs: '100%', md: '100%' }
            }}
          >
            <Skeleton variant="rectangular" width="100%" height={'100%'} />
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}
