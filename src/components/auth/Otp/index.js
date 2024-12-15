import { Box, Button, Stack } from '@mui/material';
import persianJs from 'persianjs';
import React, { useEffect } from 'react';
import { Controller } from 'react-hook-form';
import OtpInput from 'react-otp-input';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';
import useTimer from 'utils/useTimer';
import CircularProgressWithLabel from './Timer';
export default function Otp({
  control,
  changePageStep,
  name = 'otp',
  sendOtp,
  submitOfOtpAutomatic
}) {
  const isDeskop = !useIsMobile();
  const { seconds, start, reset, stop } = useTimer(60, false);
  useEffect(() => {
    start();
    return () => {
      if (stop) {
        stop();
      }
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Controller
        control={control}
        rules={{
          required: true
        }}
        render={({ field: { onChange: onChangeControll, value } }) => (
          <OtpInput
            isInputNum
            // hasErrored={hasErrored}
            errorStyle={{
              border: '2px solid red'
            }}
            separator={<span>-</span>}
            focusStyle={{
              border: '2px solid #483493',
              outline: 'none'
            }}
            containerStyle={{
              flexDirection: 'row-reverse',
              width: '100%',
              justifyContent: 'center'
            }}
            inputStyle={{
              width: isDeskop ? '60px' : '48px',
              height: isDeskop ? '60px' : '48px',
              border: '1px solid #9185BE',
              flexDirection: 'row-reverse',
              order: '2',
              borderRadius: '2px',
              margin: '0 5px'
            }}
            shouldAutoFocus={true}
            value={value}
            onChange={e => {
              if (e) {
                const val = persianJs(e).toEnglishNumber().toString();
                onChangeControll(val);
                if (val?.length == 5) {
                  submitOfOtpAutomatic(val);
                }
              } else {
                onChangeControll('');
              }
            }}
            numInputs={5}
          />
        )}
        name={name}
      />

      <Stack
        mt={'44px'}
        direction={'row'}
        alignItems="center"
        justifyContent={'space-between'}
      >
        <Box onClick={() => (seconds === 0 ? sendOtp(reset, start) : null)}>
          <CircularProgressWithLabel max={60} value={seconds} />
        </Box>

        <Button
          color="secondary"
          onClick={() => changePageStep('fristPage')}
          sx={{ padding: '14px 0' }}
          startIcon={<i className="icon-Edit" />}
        >
          ویرایش شماره
        </Button>
      </Stack>
    </>
  );
}
