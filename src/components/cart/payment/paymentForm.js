import React from 'react';
import { Grid, Button, Typography, Box } from '@mui/material';
import ThemeLink from 'src/components/shared/ThemeLink';
import { useRouter } from 'next/router';

/* 
/cart/payment/success?order={order_id}

------------------------------------------------------------------------

/cart/payment/failed?order={order_id}
*/
export default function PaymentForm({ message = '', svg = '' }) {
  const router = useRouter();
  const { order } = router.query;
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
          {svg}
          <Typography
            variant="h3"
            component={'h5'}
            textAlign="center"
            mt={3}
            fontSize={'18px'}
            color="text.secondary"
          >
            {message}
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
              <ThemeLink
                href={`/profile/orders/[orderId]`}
                as={`/profile/orders/${order}`}
              >
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ width: { xs: '90%', md: '200px' } }}
                >
                  پیگیری سفارش
                </Button>
              </ThemeLink>
            </Grid>
            <Grid item xs={12} md={6} textAlign={{ xs: 'center', md: 'left' }}>
              <ThemeLink href="/">
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{ width: { xs: '90%', md: '200px' } }}
                >
                  صفحه اصلی
                </Button>
              </ThemeLink>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
