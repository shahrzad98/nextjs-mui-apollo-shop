import React from 'react';
import SuccessSVG from 'public/static/assets/svg/payment/success';
import PaymentForm from '../paymentForm';
export default function Success() {
  return (
    <>
      <PaymentForm
        svg={<SuccessSVG />}
        message={<>سفارش شماباموفقیت ثبت شد.</>}
      />
    </>
  );
}
