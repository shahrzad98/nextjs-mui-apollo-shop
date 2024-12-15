import { useAuth } from '@digify/theme-kit';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import AuthLayout from './AuthLayout';
import ChangePass from './ForgetPass/ChangePass';
import VerifyPhoneNumbe from './ForgetPass/VerifyPhoneNumber';
import FristPage from './Login/FirstForm';
import LoginOtp from './Login/LoginOtp';
import LoginPass from './Login/LoginPass';
import Register from './Register';
import { openSnackbar } from 'utils/snackbar';

export default function LoginNew() {
  const {
    control,
    handleSubmit: handleSubmitForm,
    getValues,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      phone_number: ''
    }
  });

  const auth = useAuth();
  const {
    handleSubmit,
    forgetPasswordStep,
    step,
    loginStep,
    error,
    handlerOtpAutomatic
  } = auth;

  const onCompleted = () => {
    switch (step) {
      case 'fristPage':
        openSnackbar({ message: 'رمز یکبار مصرف ارسال شد' });
        break;
      case 'isRegister':
        openSnackbar({ message: 'ثبت نام با موفقیت انجام شد' });
        reset();
        break;

      case 'forgetPassword':
        if (forgetPasswordStep == 'verifyPhoneNumber') {
          openSnackbar({ message: 'رمز یکبار مصرف ارسال شد' });
        } else if (forgetPasswordStep == 'changePassword') {
          openSnackbar({ message: ' رمزعبور باموفقیت تغییر کرد' });
          reset();
        }
        break;
      default:
        return 0;
    }
  };

  const onSubmit = data => {
    handleSubmit(data, onCompleted);
  };

  const submitOfOtpAutomatic = otp => {
    const data = {
      otp: otp,
      phone_number: getValues('phone_number')
    };
    handlerOtpAutomatic(data, onCompleted);
  };
  useEffect(() => {
    if (error) {
      for (let i in error) {
        let errorValue = error[i];
        if (errorValue) {
          openSnackbar({
            message: errorValue,
            severity: 'error'
          });
        } else {
          openSnackbar({
            message: 'خطا در انجام عملیات.لطفا مجددا تلاش بفرمایید.',
            severity: 'error'
          });
        }
      }
    }
  }, [error]);
  return (
    <AuthLayout {...{ auth }}>
      <form onSubmit={handleSubmitForm(onSubmit)}>
        {
          {
            fristPage: <FristPage {...{ control, errors, auth }} />,
            login:
              loginStep === 'otp' ? (
                <LoginOtp
                  {...{ errors, control, auth, submitOfOtpAutomatic }}
                  phonenumber={getValues('phone_number')}
                />
              ) : (
                <LoginPass
                  {...{ errors, control, auth }}
                  phonenumber={getValues('phone_number')}
                />
              ),
            isRegister: (
              <Register
                {...{ control, errors, auth, submitOfOtpAutomatic }}
                phonenumber={getValues('phone_number')}
              />
            ),
            forgetPassword:
              forgetPasswordStep === 'verifyPhoneNumber' ? (
                <VerifyPhoneNumbe
                  {...{ control, errors, auth, submitOfOtpAutomatic }}
                  phonenumber={getValues('phone_number')}
                />
              ) : (
                <ChangePass {...{ control, errors, auth }} />
              )
          }[step]
        }
      </form>
    </AuthLayout>
  );
}
