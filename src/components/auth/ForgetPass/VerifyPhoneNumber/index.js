import { LoadingButton } from '@mui/lab';
import { Grid, Typography } from '@mui/material';
import React from 'react';
import Otp from '../../Otp';

export default function VerifyPhoneNumbe({
  control,
  auth,
  phonenumber,
  submitOfOtpAutomatic
}) {
  const { changePageStep, handleSubmitVerifyphone, loading } = auth;
  const sendOtp = (resetTimer, startTimer) => {
    handleSubmitVerifyphone(phonenumber, true).then(() => {
      resetTimer();
      startTimer();
    });
  };
  return (
    <Grid container justifyContent={'space-between'} style={{ height: '100%' }}>
      <Grid item xs={12}>
        <Grid item xs={12} mb={3} mt={{ xs: '150px', md: '0' }}>
          <Typography variant="h2" textAlign={'center'}>
            بازیابی رمز عبور
          </Typography>
        </Grid>
        <Grid item xs={12} mb={'40px'}>
          <Typography variant="body1" textAlign={'center'}>
            لطفا کد تایید ارسال شده به شماره {phonenumber} را وارد کنید.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Otp
            name="otp"
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
      <Grid item xs={12} alignSelf={'flex-end'} mb={'36px'}>
        <LoadingButton
          loading={loading}
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          تایید و ادامه
        </LoadingButton>
      </Grid>
    </Grid>
  );
}
