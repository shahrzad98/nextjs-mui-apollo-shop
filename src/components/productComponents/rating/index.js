import { Box, Grid, Rating, Typography } from '@mui/material';
import React from 'react';

const RatingComponent = ({
  averageScore,
  voterNumber,
  isDesktop,
  feedbackCount
}) => {
  return (
    <>
      <Grid display={'flex'} alignItems={'center'}>
        <Rating name="customized-10" value={averageScore} max={1} readOnly />
        <Typography fontSize={'16px'} sx={{ ml: 2 }}>
          {averageScore}
        </Typography>
        {isDesktop && (
          <Box display={'flex'} width={'100%'} mx={3}>
            <Typography
              fontSize={'14px'}
              variant={'body2'}
              sx={{ color: 'rgba(28, 27, 32, 0.4)' }}
            >
              {`از ${voterNumber ? voterNumber : '-'} رای | ${
                feedbackCount ? feedbackCount : '-'
              } نظر`}
            </Typography>
          </Box>
        )}
      </Grid>
    </>
  );
};

export default RatingComponent;
