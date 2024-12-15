import { Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';
export default function More({ userInformations, control, errors }) {
  return (
    <Grid container spacing={2} p={{ xs: 2, md: 0 }}>
      <Grid item xs={12} mt={4} mb={3}>
        <Typography variant="h5" component={'h1'}>
          اطلاعات‌ شما
        </Typography>
      </Grid>

      <Grid item xs={12} md={7} my={3}>
        <TextField
          variant="outlined"
          label={'نام'}
          value={userInformations?.first_name ?? ''}
          disabled
          fullWidth
          // type={'text'}
        />
      </Grid>
      <Grid item xs={12} md={7} my={3}>
        <TextField
          variant="outlined"
          fullWidth
          // type={'text'}
          label={'نام‌خانوادگی'}
          value={userInformations?.last_name ?? ''}
          disabled
        />
      </Grid>

      <Grid item xs={12} md={7} my={3}>
        <TextField
          variant="outlined"
          fullWidth
          // type={'text'}
          value={userInformations?.phone_number ?? ''}
          disabled
          label={'شماره تماس'}
        />
      </Grid>
      <Grid item xs={12} md={7} my={3}>
        <Controller
          name={`card_number`}
          control={control}
          rules={{
            required: {
              value: true,
              message: '   وارد کردن شماره کارت ضروری است'
            }
          }}
          render={({ field }) => {
            return (
              <TextField
                variant="outlined"
                value={userInformations.card_number}
                fullWidth
                label={'شماره کارت'}
                onChange={e => {
                  userInformations.handleChangeCardNumber(e.target.value);
                  field.onChange(e.target.value);
                }}
                error={errors?.card_number}
                helperText={errors?.card_number?.message}
              />
            );
          }}
        />
      </Grid>
    </Grid>
  );
}
