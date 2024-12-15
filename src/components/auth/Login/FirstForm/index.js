import { LoadingButton } from '@mui/lab';
import { Grid, TextField, Typography } from '@mui/material';
import persianJs from 'persianjs';
import React from 'react';
import { Controller } from 'react-hook-form';

export default function FristPage({ control, errors, auth }) {
  const { loading } = auth;
  return (
    <Grid
      container
      justifyContent={'space-between'}
      sx={{ height: '100%', minHeight: { xs: '800px', md: '100%' } }}
    >
      <Grid item xs={12}>
        <Grid item xs={12} mb={3} mt={{ xs: '150px', md: '0' }}>
          <Typography variant="h2" textAlign={'center'}>
            ورود یا ثبت نام
          </Typography>
        </Grid>
        <Grid item xs={12} mb={{ xs: '117px', md: '60px' }}>
          <Typography variant="body1">
            برای ورود یا ثبت نام، شماره تماس خود را وارد کنید.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="phone_number"
            control={control}
            rules={{
              required: { value: true, message: 'این فیلد الزامی است' },
              pattern: {
                value: /^(\+98|0)?9\d{9}$/g,
                message: 'شماره تلفن را به درستی وارد کنید'
              },
              pattern: {
                value: /^[0-9]+$/g,
                message: 'شماره تلفن را به درستی وارد کنید'
              }
            }}
            render={({ field: { onChange, value } }) => (
              <TextField
                value={value}
                focused
                fullWidth
                name="phone_number"
                onChange={e => {
                  const enValue =
                    e.target.value?.length > 0
                      ? persianJs(e.target.value).toEnglishNumber().toString()
                      : '';
                  const reg = new RegExp('^[0-9]+$');
                  if (enValue === '' || reg.test(enValue)) {
                    onChange(enValue);
                  }
                }}
                error={errors.phone_number}
                helperText={errors?.phone_number?.message || null}
                placeholder="شماره تلفن خود را وارد کنید"
                variant="outlined"
                label={'شماره تماس'}
                type=" text"
              />
            )}
          />
        </Grid>
      </Grid>
      <Grid item xs={12} alignSelf={'flex-end'} mb={{ xs: '36px', md: '36px' }}>
        <LoadingButton
          loading={loading}
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          ورود
        </LoadingButton>
      </Grid>
    </Grid>
  );
}
