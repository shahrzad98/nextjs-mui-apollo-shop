import { LoadingButton } from '@mui/lab';
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';

export default function LoginPass({ errors, control, auth, phonenumber }) {
  const { changeLoginStep, changePageStep, handleSubmitVerifyphone, loading } =
    auth;

  const [showPass, setShowPass] = React.useState(false);
  const handleClickShowPassword = () => {
    setShowPass(!showPass);
  };
  const handlerOtpForgetPassword = () => {
    handleSubmitVerifyphone(phonenumber, true).then(() => {
      changePageStep('forgetPassword');
    });
  };
  return (
    <Grid
      container
      justifyContent={'space-between'}
      sx={{ height: '100%', minHeight: { xs: '800px', md: '100%' } }}
    >
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
        <Grid item xs={12} mb={'60px'}>
          <Typography variant="body1" textAlign={'center'}>
            برای ورود یا ثبت نام، رمزعبور خود را وارد کنید.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="password"
            control={control}
            rules={{
              required: {
                value: true,
                message: 'این فیلد الزامی است'
              }
            }}
            render={({ field }) => (
              <TextField
                focused
                fullWidth
                {...field}
                error={errors.password}
                helperText={errors?.password?.message || null}
                placeholder="رمز عبور خود را وارد کنید"
                variant="outlined"
                label={'رمز عبور'}
                name="password"
                InputProps={{
                  endAdornment: (
                    <IconButton onClick={handleClickShowPassword}>
                      {!showPass ? (
                        <i className="icon-view-off" />
                      ) : (
                        <i className="icon-view" />
                      )}
                    </IconButton>
                  )
                }}
                type={showPass ? 'text' : 'password'}
              />
            )}
          />
          <Grid display="flex" justifyContent={'flex-end'} my={'50px'}>
            <Button
              sx={{ padding: '0' }}
              onClick={() => handlerOtpForgetPassword('forgetPassword')}
            >
              <Typography
                color="secondary"
                sx={theme => ({
                  borderBottom: `1px solid ${theme.palette.secondary.main} `
                })}
              >
                فراموشی رمز عبور
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} alignSelf={'flex-end'}>
        <LoadingButton
          loading={loading}
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          ورود
        </LoadingButton>
        <Button
          type="submit"
          fullWidth
          onClick={() => {
            changeLoginStep('otp');
          }}
        >
          {' '}
          ورود با کد تایید{' '}
        </Button>
      </Grid>
    </Grid>
  );
}
