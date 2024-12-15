import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import Button from '@mui/material/Button';
import Page500Svg from 'public/static/assets/svg/error/500Svg';

const Custom500 = () => {
  const router = useRouter();
  return (
    <>
      <Grid
        flexDirection={'row'}
        height={'100vh'}
        mx={'auto'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Box>
          <Grid display={'flex'} justifyContent={'center'}>
            <Page500Svg />
          </Grid>
          <Grid display={'flex'} justifyContent={'center'} mt={5}>
            <Typography variant="h4" textAlign={'center'} component={'h4'}>
              خطای سرور داخلی
            </Typography>
          </Grid>
          <Grid display={'flex'} justifyContent={'center'} width={'362px'}>
            <Typography
              fontSize={'18px'}
              textAlign={'center'}
              variant="body1"
              component={'caption'}
            >
              در تنظیمات وب سایت مشکلی به وجود آمده است! لطفا پس از مدتی، مجددا
              امتحان کنید.
            </Typography>
          </Grid>
          <Grid display={'flex'} justifyContent={'center'} mt={'48px'}>
            <Button
              style={{
                backgroundColor: '#171C22',
                borderRadius: '2px',
                padding: '15px 24px 17px 24px',
                color: '#fff',
                fontWeight: 'bold'
              }}
              onClick={() => router.push('/')}
            >
              بازگشت به صفحه اصلی
            </Button>
          </Grid>
        </Box>
      </Grid>
    </>
  );
};

export default Custom500;
