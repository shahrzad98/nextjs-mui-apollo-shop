import { Box, Grid, IconButton, TextField, Typography } from '@mui/material';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';
import DrawerModal from 'src/components/shared/DrawerModal';
import { useUser } from '@digify/theme-kit';
import { useEffect } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import { openSnackbar } from 'utils/snackbar';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';

export default function DarwerForSecurityGranted({
  drawer,
  toggleDrawer,
  fetchUserInfo
}) {
  const { handleChangePassword, error, updateLoading } = useUser();
  const ismobile = useIsMobile();
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      password: '',
      confirmPassword: ''
    }
  });
  const onSubmit = data => {
    if (data.newPass === data.confirmPassword) {
      handleChangePassword(
        data.password,
        data.newPass,
        () => {
          fetchUserInfo();
          openSnackbar({
            message: 'رمز عبور با موفقیت تغییر کرد'
          });
          toggleDrawer(false);
        },
        true
      );
    } else {
      openSnackbar({
        message: 'رمز های وارد شده باهم مطابقت ندارند ',
        severity: 'error'
      });
    }
  };
  const [showPass, setShowPass] = useState({
    confirmPassword: false,
    newPass: false
  });
  const handleClickShowPassword = type => {
    setShowPass(prevState => ({
      ...prevState,
      [type]: !prevState[type]
    }));
  };

  const inputsList = [
    {
      name: 'newPass',
      label: 'رمز عبور جدید',
      placeholder: 'رمز عبور جدید خود را وارد کنید',
      ruls: {
        minLength: {
          value: 8,
          message: 'رمز عبور باید حداقل ۸ کاراکتر باشد'
        },
        pattern: {
          value: /^(?=.*[A-Za-z])(?=.*\d).{8,}$/i,
          message: 'رمزعبور باید ترکیبی از حروف و اعداد باشد'
        }
      }
    },
    {
      name: 'confirmPassword',
      label: 'تکرار رمز عبور',
      placeholder: 'رمز عبور جدید خود را تکرار کنید',

      ruls: {
        minLength: {
          value: 8,
          message: 'رمز عبور باید حداقل ۸ کاراکتر باشد'
        },
        pattern: {
          value: /^(?=.*[A-Za-z])(?=.*\d).{8,}$/i,
          message: 'رمزعبور باید ترکیبی از حروف و اعداد باشد'
        }
      }
    }
  ];

  useEffect(() => {
    Object.entries(error).forEach(([, value]) => {
      if (value == 'This password is too common.') {
        openSnackbar({
          message: 'رمز عبور وارد شده ساده میباشد.',
          severity: 'error'
        });
      }
      if (value == 'This password is entirely numeric.') {
        openSnackbar({
          message: 'رمزعبور باید ترکیبی از حروف و اعداد باشد',
          severity: 'error'
        });
      }
      if (value == 'this field is incorrect') {
        openSnackbar({
          message: 'رمز عبور وارد شده, صحیح نمیباشد',
          severity: 'error'
        });
      }
    });
  }, [error]);
  return (
    <>
      <DrawerModal
        setOpen={toggleDrawer}
        open={drawer}
        heightContent={'70%'}
        body={
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box
              sx={{
                padding: '16px'
              }}
            >
              {ismobile && (
                <Box display={'flex'} justifyContent="flex-end">
                  <IconButton sx={{ padding: '14px 0' }} onClick={toggleDrawer}>
                    <i
                      style={{ fontSize: '20px' }}
                      className="icon-remove-add"
                    />
                  </IconButton>
                </Box>
              )}
              <Grid container spacing={3}>
                {ismobile && (
                  <Grid item xs={12} display={'flex'} justifyContent={'center'}>
                    <Typography variant="captions" fontWeight={500}>
                      ثبت رمز عبور
                    </Typography>
                  </Grid>
                )}
                {inputsList.map((ele, index) => {
                  return (
                    <Grid item xs={12} key={index}>
                      <Controller
                        name={ele.name}
                        control={control}
                        rules={{
                          required: {
                            value: true,
                            message: 'این فیلد الزامی است'
                          },
                          ...ele.ruls
                        }}
                        render={({ field }) => (
                          <TextField
                            sx={{ mt: 4, width: { xs: '100%', md: '70%' } }}
                            {...field}
                            focused
                            placeholder={ele.placeholder}
                            error={errors[ele.name]}
                            helperText={errors?.[ele.name]?.message || null}
                            InputProps={{
                              endAdornment: (
                                <IconButton
                                  onClick={() =>
                                    handleClickShowPassword(ele.name)
                                  }
                                >
                                  {!showPass?.[ele.name] ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              )
                            }}
                            variant="outlined"
                            type={showPass?.[ele.name] ? 'text' : 'password'}
                            label={ele.label}
                          />
                        )}
                      />
                    </Grid>
                  );
                })}
                <Grid item xs={12} mt={4}>
                  <LoadingButton
                    loading={updateLoading}
                    type="submit"
                    variant="contained"
                    sx={{
                      width: {
                        xs: '100%',
                        md: '70%'
                      }
                    }}
                  >
                    ثبت رمز عبور
                  </LoadingButton>
                </Grid>
              </Grid>
            </Box>
          </form>
        }
      />
    </>
  );
}
