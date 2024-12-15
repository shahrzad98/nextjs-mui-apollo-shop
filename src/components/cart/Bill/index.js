import { useUser, updateProfileMutatuin } from '@digify/theme-kit';
import {
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { currency } from 'utils/currency';
import { openSnackbar } from 'utils/snackbar';
import useIsMobile from '../../shared/Hooks/useIsMobile';
import OutOfStockModal from '../outOfStockModal';
import { Style } from './styled';

const CartBill = ({
  factor,
  handleNextStep,
  disabledBtn = false,
  loyaltyCredit,
  approximateDate,
  showApprox = false,
  activeStep,
  loading,
  paymentError,
  description,
  receiverInfo
}) => {
  const isDesktop = !useIsMobile();
  const [showFinishedStockModal, setShowFinishedStockModal] = useState(false);
  const { updateProfile, updateProfileLoading } = updateProfileMutatuin();

  const { data } = useUser();
  const { info } = data;
  const handleOpenSnackbar = (message = '') => {
    openSnackbar({
      severity: 'error',
      message
    });
  };

  useEffect(() => {
    if (paymentError?.items?.msg === 'variant run out') {
      setShowFinishedStockModal(true);

      return () => {
        setShowFinishedStockModal(false);
      };
    } else if (paymentError) {
      for (let i in paymentError) {
        let errorValue = paymentError[i];
        if (errorValue) {
          handleOpenSnackbar(errorValue);
        } else {
          handleOpenSnackbar('خطا در انجام عملیات.لطفا مجددا تلاش بفرمایید.');
        }
      }
    }
  }, [paymentError]);

  const renderButton = () => {
    switch (activeStep) {
      case 'items':
        return 'ثبت سفارش';

      case 'address':
        return 'تایید آدرس';

      case 'shipping':
        return 'تایید';

      case 'payment':
        return 'تایید و پرداخت';

      default:
        return;
    }
  };

  if (factor)
    return (
      <Style isDesktop={isDesktop} container>
        {showApprox ? (
          <>
            <Grid
              container
              item
              xs={12}
              justifyContent="center"
              alignItems="center"
              className="approximateDate"
            >
              زمان تقریبی دریافت سفارش
            </Grid>
            <Grid
              mb={4}
              justifyContent="center"
              alignItems="center"
              className="approximateDate_content"
              item
              xs={12}
            >
              <Typography variant="body1"> {approximateDate}</Typography>
            </Grid>
          </>
        ) : null}
        <Grid pb={4} item xs={12} display="flex" justifyContent="space-between">
          <Typography variant="body1">
            جمع کل ({factor.productsCount.toLocaleString()} کالا) :
          </Typography>
          <Typography variant="body1">
            {currency(factor.totalProductsCost.toLocaleString())}{' '}
            <span>تومان</span>
          </Typography>
        </Grid>

        {factor?.tax > 0 ? (
          <Grid
            pb={4}
            item
            xs={12}
            display="flex"
            justifyContent="space-between"
          >
            <Typography>مالیات :</Typography>
            <Typography>
              {currency(factor?.tax.toLocaleString())} <span>تومان</span>
            </Typography>
          </Grid>
        ) : null}

        <Grid pb={4} item xs={12} display="flex" justifyContent="space-between">
          {factor.discount > 0 ? (
            <>
              <Typography variant="body1"> تخفیف:</Typography>
              <Typography variant="body1">
                {factor.discount.toLocaleString()} <span>تومان</span>
              </Typography>
            </>
          ) : (
            <></>
          )}
        </Grid>

        {loyaltyCredit > 0 ? (
          <Grid
            pb={4}
            item
            xs={12}
            display="flex"
            justifyContent="space-between"
          >
            <Typography variant="body1">اعتبار هدیه:</Typography>
            <Typography variant="body1">
              {loyaltyCredit.toLocaleString()} <span>تومان</span>
            </Typography>
          </Grid>
        ) : null}
        {factor?.shippingCost ? (
          <Grid
            pb={4}
            item
            xs={12}
            display="flex"
            justifyContent="space-between"
          >
            <Typography variant="body1">هزینه ارسال :</Typography>
            <Typography variant="body1">
              {currency(factor.shippingCost.toLocaleString())}{' '}
              <span>تومان</span>
            </Typography>
          </Grid>
        ) : null}
        {factor?.packingCost ? (
          <Grid
            pb={4}
            item
            xs={12}
            display="flex"
            justifyContent="space-between"
          >
            <Typography>هزینه بسته بندی :</Typography>
            <Typography>
              {currency(factor.packingCost.toLocaleString())} <span>تومان</span>
            </Typography>
          </Grid>
        ) : null}
        <Grid item xs={12} display="flex" className="divider"></Grid>
        <Grid
          pb={4}
          mt={'20px'}
          item
          xs={12}
          display="flex"
          justifyContent="space-between"
        >
          <Typography variant="body1">جمع کل سفارش:</Typography>
          <Typography variant="body1">
            {factor.totalCost.toLocaleString()} <span>تومان</span>
          </Typography>
        </Grid>
        {activeStep === 'payment' ? (
          <Grid mb={2} item xs={12} display="flex">
            <TextField
              placeholder="لطفا توضیحات سفارش خود را اینجا بنویسید"
              variant="outlined"
              label="توضیحات"
              fullWidth
              value={description.description}
              onChange={e =>
                description.handleChangeDescription(e.target.value)
              }
              multiline
              rows={4}
            />
          </Grid>
        ) : null}
        {isDesktop && (
          <Grid
            // style={{ marginTop: activeStep === 'payment' ? '12px' : '44px' }}
            item
            xs={12}
            display="flex"
          >
            <Button
              disabled={disabledBtn || updateProfileLoading}
              onClick={async () =>
                activeStep === 'address' &&
                (!info.first_name || !info.last_name)
                  ? await updateProfile({
                      variables: {
                        content: {
                          first_name: receiverInfo?.firstName,
                          last_name: receiverInfo?.lastName,
                          phone_number: info?.phone_number
                        }
                      },
                      onCompleted: () => handleNextStep()
                    })
                  : handleNextStep()
              }
              style={{
                borderRadius: '2px',
                height: '60px',
                fontSize: '18px',
                fontWeight: 700
              }}
              fullWidth
              variant="contained"
              color="primary"
            >
              {loading || updateProfileLoading ? (
                <CircularProgress />
              ) : (
                renderButton()
              )}
            </Button>
          </Grid>
        )}
        {showFinishedStockModal && (
          <OutOfStockModal
            close={() => {
              setShowFinishedStockModal(false);
            }}
            variantId={paymentError.items.variant_id}
          />
        )}
      </Style>
    );
  else return <></>;
};

export default CartBill;
