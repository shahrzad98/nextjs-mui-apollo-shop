import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import Button from '@mui/material/Button';
import Page503Svg from 'public/static/assets/svg/error/503Svg';

const Custom503 = () => {
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
            <Page503Svg />
          </Grid>
          <Grid display={'flex'} justifyContent={'center'}>
            <Typography variant="h4" textAlign={'center'} component={'h4'}>
              سرویس در دسترس نیست
            </Typography>
          </Grid>
          <Grid display={'flex'} justifyContent={'center'}>
            <Typography
              fontSize={'18px'}
              textAlign={'center'}
              variant="body1"
              component={'caption'}
            >
              سرور موقتا در دسترس نیست! لطفا پس از مدتی، مجددا امتحان کنید.
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
              onClick={() => router.push(`/`)}
            >
              بازگشت به صفحه اصلی
            </Button>
          </Grid>
        </Box>
      </Grid>
    </>
  );
};

export default Custom503;
