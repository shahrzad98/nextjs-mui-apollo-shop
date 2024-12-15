import { Grid } from '@mui/material';
import ErrorSvg from 'public/static/assets/svg/error/errorSvg';
import React from 'react';

const Error = () => {
  return (
    <Grid
      width={'100%'}
      height={'56px'}
      bgcolor={'#F3F3F3'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <ErrorSvg />
      <span style={{ fontSize: '16px', color: '#FF5875' }}>
        مشکلی پیش آمده، لطفا دوباره تلاش کنید{' '}
      </span>
    </Grid>
  );
};

export default Error;
