import { Grid } from '@mui/material';
import SuccesSvg from 'public/static/assets/svg/error/succesSvg';
import React from 'react';

const Succes = () => {
  return (
    <Grid
      width={'100%'}
      height={'56px'}
      bgcolor={'#F3F3F3'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <SuccesSvg />
      <span style={{ fontSize: '16px', color: '#37B86D' }}>
        ثبت با موفقیت انجام شد
      </span>
    </Grid>
  );
};

export default Succes;
