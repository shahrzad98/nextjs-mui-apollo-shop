import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import { Controller, useForm } from 'react-hook-form';
import { Grid, Box, Tab, Typography, TextField, Button } from '@mui/material';
import { openSnackbar } from 'utils/snackbar';
const SMS_Email_Sender = ({ type, handlerNotif, setCallMe }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({});
  const onSubmitMethod = data => {
    handlerNotif(data)
      .then(() => {
        setCallMe(prevState => ({ ...prevState, message: type }));
      })
      .catch(() => {
        openSnackbar({
          severity: 'error',
          message: 'خطا در انجام عملیات'
        });
      });
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmitMethod)}>
        <Grid
          container
          flexDirection={'column'}
          alignItems={'center'}
          spacing={2}
        >
          <Grid item xs={12} mt={4} width={'100%'}>
            <Controller
              name={type === 'email' ? 'email' : 'phoneNumber'}
              control={control}
              render={({ field }) => (
                <TextField
                  sx={{ width: '100%' }}
                  name={type === 'email' ? 'email' : 'phoneNumber'}
                  label={type === 'email' ? 'ایمیل' : 'پیامک'}
                  {...register('phoneNumber', {
                    required: {
                      value: true,
                      message: 'این فیلد الزامی است'
                    },
                    ...(type !== 'email' && {
                      pattern: {
                        value: /^(\+98|0)?9\d{9}$/g,
                        message: 'شماره تلفن را به درستی وارد کنید'
                      }
                    })
                  })}
                  error={errors[type === 'email' ? 'email' : 'phoneNumber']}
                  helperText={
                    errors[type === 'email' ? 'email' : 'phoneNumber']
                      ?.message || null
                  }
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} md={5} mt={4} width={'100%'}>
            <Button fullWidth variant="contained" color="primary" type="submit">
              تایید
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

export default function BasicTabs({ handlerNotif, setCallMe }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: { xs: '100%', md: '70%' }, margin: 'auto' }}>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        <Typography
          sx={{
            mt: {
              xs: 0,
              md: 3
            }
          }}
          variant="h5"
          textAlign={'center'}
          component={'h5'}
        >
          انتخاب روش اطلاع رسانی
        </Typography>
      </Box>
      <Box mt={5} sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs"
          centered
        >
          {/* <Tab label="ایمیل" {...a11yProps(0)} /> */}
          <Tab label="پیامک" {...a11yProps(0)} />
        </Tabs>
      </Box>
      {/* <TabPanel value={value} index={0}>
        <SMS_Email_Sender
          type="email"
          setCallMe={setCallMe}
          handlerNotif={handlerNotif}
        />
      </TabPanel> */}
      <TabPanel value={value} index={0}>
        <SMS_Email_Sender
          type="sms"
          setCallMe={setCallMe}
          handlerNotif={handlerNotif}
        />
      </TabPanel>
    </Box>
  );
}
email: 'mr.snaros@gmail.com';
