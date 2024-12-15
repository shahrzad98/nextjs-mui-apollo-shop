import { Grid } from '@mui/material';
import PendingSvg from 'public/static/assets/svg/error/pendingSvg';
import React from 'react';

const Pending = () => {
  return (
    <Grid
      width={'100%'}
      height={'56px'}
      bgcolor={'#F3F3F3'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <PendingSvg />
      <span style={{ fontSize: '16px', color: '#FFA24C' }}>
        مشکلی پیش آمده، لطفا دوباره تلاش کنید{' '}
      </span>
    </Grid>
  );
};

export default Pending;
