import { Grid, NoSsr, Typography } from '@mui/material';
import CartBill from 'src/components/cart/Bill';
import BottomNavCart from 'src/components/cart/bottomNav';
import CartProgressBar from 'src/components/cart/progressBar';
import Step1 from 'src/components/cart/Step1';
import Step2 from 'src/components/cart/Step2';
import Step3 from 'src/components/cart/Step3';
import Step4 from 'src/components/cart/Step4';
import { useBasket } from '@digify/theme-kit';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';
import EmptyCart from 'src/components/cart/EmptyCart';
import { Container } from '@mui/system';

const Cart = () => {
  const {
    steps,
    factor,
    activeStep,
    handleNextStep,
    paymentLoading,
    description,
    paymentError,
    handleChangStep
  } = useBasket();
  const isDesktop = !useIsMobile();
  if (steps.items.products?.length < 1 && !paymentLoading) {
    return (
      <Grid justifyContent={'center'} alignItems="center" container>
        <EmptyCart />
      </Grid>
    );
  }
  return (
    <NoSsr>
      <Container maxWidth="lg">
        <Grid
          justifyContent={'space-between'}
          spacing={{ xs: 1, md: 4 }}
          container
          sx={{
            padding: { xs: '0', lg: '0 86px' }
          }}
        >
          {activeStep !== 'items' && (
            <Grid container justifyContent="center">
              <CartProgressBar
                activeStep={
                  activeStep === 'address'
                    ? 1
                    : activeStep === 'shipping'
                    ? 2
                    : 3
                }
                handleChangStep={handleChangStep}
                steps={[
                  { label: 'آدرس سفارش', id: 'address' },
                  { label: 'بسته بندی و ارسال', id: 'shipping' },
                  { label: 'اطلاعات پرداخت', id: 'payment' }
                ]}
              />
            </Grid>
          )}
          {activeStep === 'items' && isDesktop ? (
            <Grid container item xs={12} mt={4}>
              <Typography variant="subtitle1" color="#1C1B20" fontWeight={500}>
                سبد خرید شما
              </Typography>
            </Grid>
          ) : activeStep === 'items' ? (
            <Grid
              container
              justifyContent="space-between"
              alignItems={'center'}
              item
              xs={12}
              mt={1}
              px={'8px'}
            >
              <h2
                style={{ fontSize: '20px', fontWeight: 500, color: '#1C1B20' }}
              >
                سبد خرید
              </h2>
              <p
                style={{ fontSize: '14px', fontWeight: 500, color: '#1C1B20' }}
              >
                {factor?.productsCount} کالا
              </p>
            </Grid>
          ) : (
            ''
          )}
          <Grid item xs={12} lg={7}>
            {activeStep === 'items' && <Step1 items={steps.items} />}
            {activeStep === 'address' && <Step2 address={steps.addresses} />}
            {activeStep === 'shipping' && (
              <Step3 shippingData={steps.shipping} />
            )}
            {activeStep === 'payment' && (
              <Step4
                payment={steps.payment}
                loyaltyGift={factor?.loyaltyGift}
              />
            )}
          </Grid>
          <Grid item xs={12} lg={5} pb={{ xs: '150px', lg: '0' }}>
            <CartBill
              description={description}
              showApprox={
                activeStep === 'shipping' &&
                steps.shipping.shippingMethod.approximateSendingDate
                  ? true
                  : activeStep === 'payment' &&
                    steps.shipping.shippingMethod.approximateSendingDate
                  ? true
                  : false
              }
              approximateDate={
                steps.shipping.shippingMethod.approximateSendingDate
              }
              loyaltyCredit={
                steps.payment.loyaltyCredit.selected ? factor?.loyalty : 0
              }
              disabledBtn={
                (activeStep === 'address' &&
                  (!steps.addresses.receiverInfo.firstName ||
                    !steps.addresses.receiverInfo.lastName ||
                    !steps.addresses.receiverInfo.phoneNumber)) ||
                (activeStep === 'address' &&
                  steps.addresses.addresses.filter(f => f.selected).length <
                    1) ||
                (activeStep === 'shipping' &&
                  steps.shipping.shippingMethod.shippingList.filter(
                    e => e.selected
                  ).length < 1) ||
                (activeStep === 'payment' &&
                  steps.payment.transaction.transactions.filter(e => e.selected)
                    .length < 1) ||
                paymentLoading
              }
              paymentError={paymentError}
              loading={paymentLoading}
              activeStep={activeStep}
              handleNextStep={handleNextStep}
              factor={factor}
              receiverInfo={steps.addresses.receiverInfo}
            />
          </Grid>
          {!isDesktop && (
            <BottomNavCart
              totalCost={factor?.totalCost}
              loading={paymentLoading}
              paymentError={paymentError}
              onClick={handleNextStep}
              disabledBtn={
                (activeStep === 'address' &&
                  steps.addresses.addresses.filter(f => f.selected).length <
                    1) ||
                (activeStep === 'shipping' &&
                  steps.shipping.shippingMethod.shippingList.filter(
                    e => e.selected
                  ).length < 1) ||
                (activeStep === 'payment' &&
                  steps.payment.transaction.transactions.filter(e => e.selected)
                    .length < 1) ||
                paymentLoading
              }
              step={
                activeStep === 'items'
                  ? 1
                  : activeStep === 'address'
                  ? 2
                  : activeStep === 'shipping'
                  ? 3
                  : activeStep === 'payment'
                  ? 4
                  : 1
              }
            />
          )}
        </Grid>
      </Container>
    </NoSsr>
  );
};

Cart.setPageConfig = {
  private: {
    step: [['address'], ['shipping'], ['payment']]
  }
};

export default Cart;
