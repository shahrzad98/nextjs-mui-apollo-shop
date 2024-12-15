import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import FourOhFourSvg from 'public/static/assets/svg/error/404Svg';
import { useRouter } from 'next/router';
import Button from '@mui/material/Button';

const Custom404 = () => {
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
            <FourOhFourSvg />
          </Grid>
          <Grid display={'flex'} justifyContent={'center'} mt={5}>
            <Typography variant="h4" textAlign={'center'} component={'h4'}>
              صفحه موردنظر شما پیدا نشد
            </Typography>
          </Grid>
          <Grid display={'flex'} justifyContent={'center'}>
            <Typography
              fontSize={'18px'}
              textAlign={'center'}
              variant="body1"
              component={'p'}
            >
              ممکن است این صفحه حذف شده باشد، یا اینکه شما آدرس آن را اشتباه
              وارد کرده باشید!
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

export default Custom404;
