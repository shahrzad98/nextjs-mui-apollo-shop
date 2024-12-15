import styled from '@emotion/styled';
import {
  CheckCircleOutlined,
  Close,
  HelpOutlineOutlined
} from '@mui/icons-material';
import {
  Button,
  CircularProgress,
  ClickAwayListener,
  Grid,
  IconButton,
  Radio,
  TextField,
  Tooltip,
  tooltipClasses,
  Typography
} from '@mui/material';
import IOSSwitch from 'src/components/shared/IOSSwitch';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import LoyaltyIcon from 'public/static/assets/svg/profile/loyalty';
import React, { useMemo, useState } from 'react';
import { currency } from 'utils/currency';
import DrawerModal from 'src/components/shared/DrawerModal';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';
import Digify from 'public/static/assets/svg/fa-digify';
import Style from './style';

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
    fontSize: '16px'
  }
}));

const Step4 = ({ payment, loyaltyGift }) => {
  const isDesktop = !useIsMobile();
  const isMobile = useIsMobile();
  const [loyaltyHint, setLoyaltyHint] = useState(false);
  const [openTooltip, setOpenTooltip] = useState(false);

  const handleTooltipClose = () => {
    setOpenTooltip(false);
  };

  const handleTooltipOpen = e => {
    e.stopPropagation();
    setOpenTooltip(!openTooltip);
  };

  // const errorMessage = error => {
  //   const errorMessages = [
  //     { 'Not found.': 'کد وارد شده معتبر نیست!' },
  //     { 'voucher expired': 'کد وارد شده منقضی شده ست!' },
  //     { 'voucher not started': 'زمان استفاده از کد تخفیف وارد شده,فرانرسیده است ' },
  //     { 'voucher is not active': 'کد وارد شده فعال نمیباشد' },
  //     { 'voucher already used': 'کدتخفیف قبلا استفاده شده است.' },
  //     { 'voucher does not belong to this customer': 'کد وارد شده مطلق به این فروشگاه نیست.' }
  //   ];
  //   for (let i in errorMessages) {
  //     if (errorMessages?.[i]?.[error?.detail]) {
  //       return (
  //         <p style={{ color: '#FF5875', marginTop: '5px' }}>
  //           {errorMessages?.[i]?.[error?.detail]}
  //         </p>
  //       );
  //     }
  //   }
  // };

  const errorMessage = useMemo(() => {
    const errorMessages = [
      { 'Not found.': 'کد وارد شده معتبر نیست!' },
      { 'voucher expired': 'کد وارد شده منقضی شده ست!' },
      {
        'voucher not started':
          'زمان استفاده از کد تخفیف وارد شده,فرانرسیده است '
      },
      { 'voucher is not active': 'کد وارد شده فعال نمیباشد' },
      { 'voucher already used': 'کدتخفیف قبلا استفاده شده است.' },
      {
        'voucher does not belong to this customer':
          'کد وارد شده مطلق به این فروشگاه نیست.'
      }
    ];
    for (let i in errorMessages) {
      if (errorMessages?.[i]?.[payment?.discount?.error.detail]) {
        return (
          <Typography variant="body2" color="#FF5875" mt={1}>
            {errorMessages?.[i]?.[payment?.discount?.error.detail]}
          </Typography>
        );
      }
    }
  }, [payment?.discount?.error]);

  return (
    <Style container>
      <DrawerModal
        heightContent="auto"
        setOpen={setLoyaltyHint}
        header={
          !isDesktop && (
            <Grid p={0} pr={0} pl={0} container justifyContent="space-between">
              <IconButton onClick={() => setLoyaltyHint(false)}>
                <Close />
              </IconButton>
            </Grid>
          )
        }
        body={
          <Grid container>
            <Grid
              // mt={isDesktop ? 0 : 1}
              p={isDesktop ? 2 : 1}
              pb={4}
              container
              justifyContent="center"
            >
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                gap={1}
                flexWrap="nowrap"
              >
                <Typography variant="h2">اعتبار وفاداری</Typography>
                <Digify width="116" height="44" />
              </Grid>
              <Typography variant="body1" mt={4}>
                اعتبار وفاداری به پاس قدردانی از خریدهای پیشینتان به شما تعلق
                می‌گیرد تا در خریدهای بعد از آن استفاده کنید. این مبلغ پس از
                گذشت چند روز و با پایان مهلت مرجوعی کالای خریداری شده، در
                کیف‌پولتان شارژ می‌شود.
              </Typography>
            </Grid>
          </Grid>
        }
        open={loyaltyHint}
      />
      <Grid className="packing" container>
        <Grid container p={isMobile ? 1 : 1.5}>
          <Grid container className="header" p={isMobile ? 1 : 1.5}>
            <Typography variant="subtitle1">شیوه پرداخت</Typography>
          </Grid>
        </Grid>
        {payment?.transaction.transactions.map(e => (
          <Grid
            onClick={e.handleSelectTransactionType}
            p={isMobile ? 2 : 3}
            alignItems="center"
            className="packingOption"
            justifyContent="space-between"
            key={e.id}
            container
          >
            <Grid style={{ display: 'flex', alignItems: 'center' }} gap={1}>
              <Radio color="primary" checked={e.selected} sx={{ p: 0 }} />
              <Typography
                variant="body2"
                color={e.selected ? '#1C1B20' : '#1C1B20B2'}
              >
                {e.name}
              </Typography>
            </Grid>
            {e.name === 'کارت به کارت' && (
              <ClickAwayListener onClickAway={handleTooltipClose}>
                <BootstrapTooltip
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  PopperProps={{
                    disablePortal: true
                  }}
                  onClose={handleTooltipClose}
                  open={openTooltip}
                  title="با روش کارت به کارت می‌توانید سفارش را بدون پرداخت هزینه ثبت کنید و پس از تایید فروشنده از موجودی محصولات، مبلغ سفارش را کارت به کارت کنید."
                >
                  <IconButton onClick={handleTooltipOpen}>
                    <HelpOutlineOutlined />
                  </IconButton>
                </BootstrapTooltip>
              </ClickAwayListener>
            )}
          </Grid>
        ))}
      </Grid>
      <Grid mt={4} className="packing" container>
        <Grid container p={isMobile ? 1 : 1.5}>
          <Grid container className="header" p={isMobile ? 1 : 1.5}>
            <Typography variant="subtitle1">
              اعتبار وفاداری
              <IconButton
                onClick={() => {
                  setLoyaltyHint(true);
                }}
              >
                <HelpOutlineOutlined />
              </IconButton>
            </Typography>
          </Grid>
        </Grid>
        <Grid
          p={isMobile ? 2 : 3}
          py={0}
          mt={2}
          justifyContent="space-between"
          alignItems="center"
          container
          color="#1C1B20"
        >
          <Typography variant="body1" color="inherit">
            موجودی :
          </Typography>
          <Typography variant="body1" color="inherit">
            {currency(payment?.loyaltyCredit.credit)}{' '}
            <Typography component="span" color="inherit" variant="body2">
              تومان
            </Typography>
          </Typography>
        </Grid>
        <Grid
          p={isMobile ? 2 : 3}
          py={0}
          pb={1}
          mt={2}
          justifyContent="space-between"
          alignItems="center"
          container
        >
          <Typography variant="body1" color="#1C1B20B2">
            استفاده از اعتبار
          </Typography>
          <IOSSwitch
            disabled={!payment?.loyaltyCredit.credit}
            checked={payment?.loyaltyCredit.selected}
            onClick={payment?.loyaltyCredit?.handleSelectLoyaltyCredit}
          />
        </Grid>
        {!!loyaltyGift && (
          <Grid container p={isMobile ? 2 : 3}>
            <Grid
              justifyContent="space-between"
              p={2}
              container
              className="loyaltyEarnCont"
            >
              <Typography
                variant="body2"
                color="#1C1B20"
                display="flex"
                alignItems="center"
                gap={1}
              >
                <LoyaltyIcon /> اعتبار هدیه این خرید
              </Typography>
              <Typography variant="body1" color="#1C1B20">
                {currency(loyaltyGift)}{' '}
                <Typography component="span" variant="body2" color="inherit">
                  تومان
                </Typography>
              </Typography>
              <Grid container>
                <Typography variant="caption" mt={1}>
                  (پس از پایان مهلت مرجوعی این اعتبار به شما تعلق میگیرد)
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        )}
        <Grid
          mt={1}
          pb={2}
          container
          justifyContent="center"
          alignItems="center"
          gap={1}
          flexWrap="nowrap"
        >
          <Typography variant="body1" fontWeight="bold" color="#AFB1B7">
            قدرت گرفته از{' '}
          </Typography>
          <Digify />
        </Grid>
      </Grid>
      <Grid mt={4} container>
        <TextField
          placeholder="کد تخفیف را وارد کنید"
          disabled={payment?.discount?.discount?.code}
          style={{ border: '1px dashed rgba(28, 27, 32, 0.4)' }}
          sx={{
            '& fieldset': {
              border: 'none'
            }
          }}
          value={payment?.discount?.code}
          onChange={e =>
            payment?.discount?.handleChangeDiscountCode(e.target.value)
          }
          fullWidth
          variant="outlined"
          InputProps={{
            endAdornment: (
              <Button
                disabled={payment?.discount?.loading}
                onClick={
                  payment?.discount?.discount?.code
                    ? payment?.discount?.handleRemoveDiscountCode
                    : payment?.discount?.handleSubmitDiscountCode
                }
                sx={{
                  color: 'rgba(28, 27, 32, 0.4)',
                  padding: 0,
                  height: '90%',
                  borderLeft: '1px solid rgba(28, 27, 32, 0.1)',
                  borderRadius: '2px'
                }}
                variant="text"
              >
                {payment?.discount?.discount?.code ? (
                  'حدف کد'
                ) : payment?.discount?.loading ? (
                  <CircularProgress />
                ) : (
                  'ثبت'
                )}
              </Button>
            ),
            startAdornment: payment?.discount?.discount?.code ? (
              <CheckCircleOutlined style={{ color: '#37B86D' }} />
            ) : Object.keys(payment?.discount?.error).length !== 0 ? (
              <CloseRoundedIcon
                onClick={() => {
                  payment?.discount?.handleRemoveDiscountCode();
                }}
                style={{ color: '#FF5875', cursor: 'pointer' }}
              />
            ) : (
              ''
            )
          }}
        />
      </Grid>
      <Grid container>
        {payment?.discount?.discount?.code &&
        payment?.discount?.discount?.type === 'percent' ? (
          <Typography variant="body2" color="#37B86D" mt={1}>
            مقدار {currency(payment?.discount?.discount?.amount * 100)} درصد کد
            تخفیف به قیمت {payment?.discount?.discount?.totalCost} تومان اعمال
            شد.
          </Typography>
        ) : payment?.discount?.discount?.code ? (
          <Typography variant="body2" color="#37B86D" mt={1}>
            مبلغ {currency(payment?.discount?.discount?.amount)} تومان کد تخفیف
            اعمال شد.
          </Typography>
        ) : (
          errorMessage
        )}
      </Grid>
    </Style>
  );
};

export default Step4;
//
