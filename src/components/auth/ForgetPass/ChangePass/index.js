import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';

export default function ChangePass({ control, errors }) {
  const [showPass, setShowPass] = React.useState({
    password: false,
    confirmPassword: false
  });

  const handleClickShowPassword = type => {
    setShowPass(prevState => ({
      ...prevState,
      [type]: !prevState[type]
    }));
  };

  return (
    <>
      <Grid
        container
        justifyContent={'space-between'}
        style={{ height: '100%' }}
      >
        <Grid item xs={12}>
          <Grid item xs={12} mb={3} mt={{ xs: '150px', md: '0' }}>
            <Typography variant="h2" textAlign={'center'}>
              بازیابی رمز عبور
            </Typography>
          </Grid>
          <Grid item xs={12} mb={'40px'}>
            <Typography variant="body1" textAlign={'center'}>
              لطفا رمز عبور جدید خود را وارد و تغییرات را ثبت کنید
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
                },
                minLength: {
                  value: 8,
                  message: 'رمز عبور باید حداقل ۸ کاراکتر باشد'
                },
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d).{8,}$/i,
                  message: 'رمزعبور باید ترکیبی از حروف و اعداد باشد'
                }
              }}
              render={({ field }) => (
                <TextField
                  fullWidth
                  {...field}
                  error={errors.password}
                  helperText={errors?.password?.message || null}
                  InputProps={{
                    endAdornment: (
                      <IconButton
                        onClick={() => handleClickShowPassword('password')}
                      >
                        {!showPass.password ? (
                          <i className="icon-view-off" />
                        ) : (
                          <i className="icon-view" />
                        )}
                      </IconButton>
                    )
                  }}
                  variant="outlined"
                  type={showPass?.password ? 'text' : 'password'}
                  label={'رمز عبور'}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} mt={'56px'}>
            <Controller
              name="confirmPassword"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: 'این فیلد الزامی است'
                },
                minLength: {
                  value: 8,
                  message: 'رمز عبور باید حداقل ۸ کاراکتر باشد'
                },
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d).{8,}$/i,
                  message: 'رمزعبور باید ترکیبی از حروف و اعداد باشد'
                }
              }}
              render={({ field }) => (
                <TextField
                  fullWidth
                  {...field}
                  error={errors.confirmPassword}
                  helperText={errors?.confirmPassword?.message || null}
                  InputProps={{
                    endAdornment: (
                      <IconButton
                        onClick={() =>
                          handleClickShowPassword('confirmPassword')
                        }
                      >
                        {!showPass?.confirmPassword ? (
                          <i className="icon-view-off" />
                        ) : (
                          <i className="icon-view" />
                        )}
                      </IconButton>
                    )
                  }}
                  variant="outlined"
                  type={showPass?.confirmPassword ? 'text' : 'password'}
                  label={'تکرار رمز عبور'}
                />
              )}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} alignSelf={'flex-end'} mt={'82px'}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            ثبت تغییرات
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
