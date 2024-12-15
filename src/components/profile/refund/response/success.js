import React from 'react';
import { Grid, Button, Typography, Box } from '@mui/material';
import SuccessSvg from 'public/static/assets/svg/profile/refund/successSvg';
import { useRefundOrder } from '@digify/theme-kit';

export default function SuccessResponse() {
  const { navigateToReturnedOrderPage, navigateToOrdersPage } =
    useRefundOrder();
  return (
    <Box
      minHeight={{ xs: '100vh', md: '80vh' }}
      width="100%"
      display={'flex'}
      alignItems="center"
    >
      <Grid container spacing={2} justifyContent={'center'} height="100%">
        <Grid
          item
          xs={12}
          mb={4}
          textAlign="center"
          alignSelf={{ xs: 'center', md: 'flex-end' }}
        >
          <SuccessSvg />
          <Typography
            variant="h3"
            component={'h5'}
            textAlign="center"
            my={3}
            fontSize={'18px'}
            // color="text.secondary"
          >
            درخواست مرجوعی شما با موفقیت ثبت شد
          </Typography>
          <Typography
            variant="h5"
            component={'h5'}
            textAlign="center"
            fontSize={'16px'}
            color="text.secondary"
            lineHeight={1.5}
          >
            دوست عزیز درخواست مرجوعی شما ثبت شد
            <br />
            نتیجه آن به زودی به شما اعلام می گردد
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          mb={2}
          alignSelf={{ xs: 'flex-end', md: 'flex-start' }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} textAlign={{ xs: 'center', md: 'right' }}>
              <Button
                onClick={navigateToReturnedOrderPage}
                variant="contained"
                color="primary"
                sx={{ width: { xs: '90%', md: '200px' } }}
              >
                پیگیری مرجوعی
              </Button>
            </Grid>
            <Grid item xs={12} md={6} textAlign={{ xs: 'center', md: 'left' }}>
              <Button
                onClick={navigateToOrdersPage}
                variant="outlined"
                color="primary"
                sx={{ width: { xs: '90%', md: '200px' } }}
              >
                بازگشت به سفارشات
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
