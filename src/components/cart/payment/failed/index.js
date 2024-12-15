import React from 'react';
import FailedSVG from 'public/static/assets/svg/payment/failed';
import PaymentForm from '../paymentForm';
export default function Failed_Page() {
  return (
    <>
      <PaymentForm
        svg={<FailedSVG />}
        message={
          <>
            سفارش شما ثبت نشد!
            <br />
            لطفا دوباره امتحان کنید
          </>
        }
      />
    </>
  );
}
