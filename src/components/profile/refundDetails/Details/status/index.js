import { Box, Grid, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import React from 'react';
import BaseStepper from 'src/components/shared/Stepper';
import { useRouter } from 'next/router';
// import { Grid } from 'swiper';

export default function Status({ step }) {
  const router = useRouter();

  return (
    <Grid container>
      <Grid item xs={0} md={6} display={{ xs: 'none', md: 'flex' }}>
        <Box
          py={3}
          ml={2}
          display={'flex'}
          className="pointer "
          onClick={() => {
            router.back();
          }}
        >
          <ArrowForwardIosIcon />
          <Typography variant="h5"> مرجوعی</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <BaseStepper
          steps={[{ label: 'درخواست' }, { label: 'بررسی' }, { label: 'نتیجه' }]}
          activeStep={step}
        />
      </Grid>
    </Grid>
  );
}
