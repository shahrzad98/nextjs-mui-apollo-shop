import { LoadingButton } from '@mui/lab';
import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Otp from '../../Otp';

export default function LoginOtp({
  phonenumber,
  control,
  auth,
  submitOfOtpAutomatic
}) {
  const { changeLoginStep, loading, changePageStep, handleSubmitVerifyphone } =
    auth;

  const sendOtp = (resetTimer, startTimer) => {
    handleSubmitVerifyphone(phonenumber, false).then(() => {
      resetTimer();
      startTimer();
    });
  };
  return (
    <Grid container justifyContent={'space-between'} style={{ height: '100%' }}>
      <Grid item xs={12}>
        <Grid
          item
          xs={12}
          mb={{ xs: '80px', md: 3 }}
          mt={{ xs: '150px', md: '0' }}
        >
          <Typography variant="h2" textAlign={'center'}>
            ورود به حساب
          </Typography>
        </Grid>
        <Grid item xs={12} mb={'40px'}>
          <Typography variant="body1" textAlign={'center'}>
            برای ورود به حساب کاربری، کد تایید ارسال
            <br />
            شده به شماره {phonenumber} را وارد کنید
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Otp
            {...{
              control,
              changePageStep,
              sendOtp,
              loading,
              submitOfOtpAutomatic
            }}
          />
        </Grid>
      </Grid>
      <Grid item xs={12} alignSelf={'flex-end'} mt={'106px'} mb={'36px'}>
        <LoadingButton
          loading={loading}
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          ورود
        </LoadingButton>
        <Button fullWidth onClick={() => changeLoginStep('password')}>
          ورود با رمز عبور
        </Button>
      </Grid>
    </Grid>
  );
}
