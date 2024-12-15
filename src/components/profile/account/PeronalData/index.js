import { CardContent, Grid, TextField, Typography } from '@mui/material';
import SubmitBtns from './SubmitBtns';
import AdapterJalali from '@date-io/date-fns-jalali';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { openSnackbar } from 'utils/snackbar';
import { StyleCard, RedditTextField, DateField } from './styled';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';
import MobileSubmitBtns from './SubmitBtns/mobileBtn';
import { faIR } from '@mui/x-date-pickers';
import { useBasket } from '@digify/theme-kit';

const formListInputs = [
  { name: 'first_name', label: 'نام' },
  { name: 'last_name', label: 'نام خانوادگی' },
  { name: 'phone_number', label: 'شماره تماس', disabled: 'true' },
  { name: 'email', label: 'ایمیل' },
  { name: 'birthday', label: 'تاریخ تولد', type: 'date' },
  { name: 'marriage_date', label: 'تاریخ ازدواج', type: 'date' },
  { name: 'national_code', label: 'کدملی' },
  { name: 'card_number', label: 'شماره کارت' }
];

export default function PersonData({
  info,
  handleChange,
  handleSubmit: handleSubmitForChnage,
  updateLoading,
  error,
  handleCancel,
  handleEditMode,
  editMode
}) {
  const isMobile = useIsMobile();
  const { steps } = useBasket();
  const [cancel, setCancel] = useState(false);
  const {
    control,
    handleSubmit: handleSubmitFas,
    reset
  } = useForm({
    defaultValues: info
  });

  const onSubmit = data => {
    if (editMode) {
      if (data?.card_number?.length < 16) {
        openSnackbar({
          severity: 'error',
          message: ' شماره کارت وارد شده باید 16رقم باشد '
        });
        return;
      }

      handleSubmitForChnage(() => {
        handleEditMode(false);
        openSnackbar({
          message: 'اطلاعات شخصی با موفقیت تغییر کرد'
        });
        steps.addresses.handleChangeReceiverInfo({
          firstName: info.first_name,
          lastName: info.last_name
        });
      });
    } else {
      handleEditMode(true);
    }
  };
  useEffect(() => {
    reset({
      ...info,
      phone_number: info?.phone_number?.replace('+98', '0')
    });
  }, [info, reset, cancel]);

  useEffect(() => {
    if (error.national_code === 'national code is not valid') {
      openSnackbar({
        severity: 'error',
        message: 'شماره ملی وارد شده معتبر نمیباشد'
      });
    }
    if (error.national_code === 'this field is required') {
      openSnackbar({
        severity: 'error',
        message: 'شماره ملی اجباری میباشد'
      });
    }
    if (error.national_code === 'the national code must be unique') {
      openSnackbar({
        severity: 'error',
        message: 'کد ملی وارد شده تکراری میباشد!'
      });
    }
    if (error.email === 'the email must be unique') {
      openSnackbar({
        severity: 'error',
        message: 'ایمیل وارد شده تکراری میباشد!'
      });
    }
    if (error.email === 'Enter a valid email address.') {
      openSnackbar({
        severity: 'error',
        message: 'ایمیل وارد شده معتبر نمیباشد'
      });
    }
  }, [error]);

  function formatDate(date) {
    var d = date;
    if (d) {
      let month = '' + (d?.getMonth() + 1);
      let day = '' + d?.getDate();
      let year = d?.getFullYear();

      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;

      return [year, month, day].join('-');
    }
  }
  return (
    <StyleCard variant="outlined">
      <CardContent>
        <form onSubmit={handleSubmitFas(onSubmit)} style={{ width: '100%' }}>
          <SubmitBtns
            header
            {...{
              updateLoading,
              editMode,
              setCancel,
              handleCancel
            }}
          />
          <Grid container>
            {formListInputs.map((ele, index) => {
              switch (ele.type) {
                case 'date':
                  return (
                    <DateField
                      disabledState={!editMode}
                      odd={index % 2 === 0}
                      item
                      xs={12}
                      md={6}
                      key={index}
                    >
                      <Typography
                        p={2}
                        variant="body2"
                        sx={{
                          color: `${!editMode ? '#00000061' : '#c54882'}`
                        }}
                      >
                        {ele.label}
                      </Typography>
                      <Controller
                        name={ele.name}
                        control={control}
                        render={({ field }) => (
                          <LocalizationProvider
                            dateAdapter={AdapterJalali}
                            localeText={
                              faIR.components.MuiLocalizationProvider
                                .defaultProps.localeText
                            }
                          >
                            <DatePicker
                              mask="____/__/__"
                              name={ele.name}
                              label=" "
                              okText="تایید"
                              cancelText="لغو"
                              okLabel="تایید"
                              cancelLabel="لغو"
                              {...field}
                              onChange={e => {
                                handleChange(ele.name, formatDate(e));
                              }}
                              disabled={!editMode}
                              renderInput={params => (
                                <TextField
                                  label={'ele'}
                                  {...params}
                                  fullWidth
                                  InputLabelProps={{ shrink: false }}
                                />
                              )}
                            />
                          </LocalizationProvider>
                        )}
                      />
                    </DateField>
                  );
                default:
                  return (
                    <Grid item xs={12} md={6} key={index}>
                      <Controller
                        name={ele.name}
                        control={control}
                        render={({ field }) => (
                          <RedditTextField
                            disabled={ele.disabled ? true : !editMode}
                            name={ele.name}
                            {...field}
                            onChange={e => {
                              handleChange(ele.name, e.target.value);
                            }}
                            oddEv={index % 2 === 0}
                            label={ele.label}
                            id={ele.name}
                            variant="filled"
                            fullWidth
                            focused
                          />
                        )}
                      />
                    </Grid>
                  );
              }
            })}
          </Grid>
          {isMobile & editMode ? (
            <MobileSubmitBtns
              {...{
                updateLoading,
                editMode,
                setCancel,
                handleCancel
              }}
            />
          ) : null}
        </form>
      </CardContent>
    </StyleCard>
  );
}
