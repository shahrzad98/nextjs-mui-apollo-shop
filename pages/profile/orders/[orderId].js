import React, { Fragment } from 'react';
import { useOrderDetail } from '@digify/theme-kit';
import {
  Box,
  Button,
  ButtonBase,
  Collapse,
  Grid,
  Skeleton,
  Typography
} from '@mui/material';
import ProfileLayout from 'src/components/profile/layout';
import ArrowBack from 'public/static/assets/svg/shared/ArrowBack';
import BaseStepper from 'src/components/shared/Stepper';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import BaseImg from 'src/components/shared/BaseImg';
import CardToCardModal from 'src/components/profile/orders/CardToCardModal';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { currency } from 'utils/currency';
import { openSnackbar } from 'utils/snackbar';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';

const renameItems = {
  reference_code: 'کد سفارش',
  created_at: 'تاریخ ثبت سفارش',
  address: 'آدرس',
  status: '',
  packingMethod: 'نحوه بسته بندی',
  paymentMethod: 'نحوه پرداخت',
  shipping_time_count: 'زمان ارسال',
  receiver_name: 'گیرنده',
  shippingMethod: 'نحوه ارسال',
  loyalty_amount: 'اعتبار وفاداری',
  pocket_cost: 'هزینه بسته بندی',
  customer_shipping_cost: 'هزینه ارسال',
  tax: 'مالیات',
  cost: 'ﻣﺒﻠﻎ کل',
  total_discount_cost: 'تخفیف',
  totalProductsCost: 'جمع کل کالاها',
  receiver_number: 'شماره تماس گیرنده',
  post_tracking_number: 'کد رهگیری',
  received_at: 'زمان تحویل',
  order_description: 'توضیحات سفارش'
};

const OrderDetail = () => {
  const orderDetailTable = React.useRef();
  const isMobile = useIsMobile();

  const { data, loading, navigateToOrdersPage } = useOrderDetail();
  const { invoice, items, status, orderId: id } = data;
  const [detailOpen, setDetailOpen] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const [cardToCardImage, setCardToCardImage] = React.useState(null);

  const expireTime = React.useMemo(() => {
    if (status.expired_at) {
      const now = new Date();
      const expireIn = new Date(status.expired_at);
      const result = (expireIn - now) / 1000;
      if (result <= 0 || isNaN(result)) return undefined;
      return {
        h: Math.floor(result / (60 * 60)) || undefined,
        m: Math.floor((result % (60 * 60)) / 60) || 0
      };
    }
    return undefined;
  }, [status.expired_at]);

  return (
    <ProfileLayout>
      {loading ? (
        <Box width="1" display="flex" flexDirection="column" gap={4}>
          <Skeleton variant="rectangular" height={200} />
          <Skeleton variant="rectangular" height={50} />
          <Skeleton variant="rectangular" height={300} />
        </Box>
      ) : (
        <Box>
          {status.handleSubmitCardToCardPayment && (
            <CardToCardModal
              {...{
                order: { ...status, id },
                setCardToCardImage,
                setOpenModal,
                openModal,
                cardToCardImage
              }}
            />
          )}
          {isMobile && (
            <ButtonBase gap={2} onClick={navigateToOrdersPage} sx={{ mb: 4 }}>
              <Typography
                variant="subtitle1"
                color="#1C1B20"
                display="flex"
                alignItems="center"
              >
                <ArrowForwardIosIcon fontSize="inherit" />
                سفارش {invoice.reference_code}
              </Typography>
            </ButtonBase>
          )}
          <Box border="1px solid #1C1B201A" borderRadius="2px" mb={3}>
            <Box
              p={3}
              borderBottom="1px solid #1C1B201A"
              display="flex"
              width="1"
              justifyContent="space-between"
              alignItems="center"
            >
              {!isMobile && (
                <ButtonBase
                  gap={2}
                  onClick={navigateToOrdersPage}
                  sx={{ mb: 4 }}
                >
                  <Typography
                    variant="subtitle2"
                    color="#1C1B20"
                    display="flex"
                    alignItems="center"
                  >
                    <ArrowForwardIosIcon fontSize="inherit" />
                    سفارش {invoice.reference_code}
                  </Typography>
                </ButtonBase>
              )}
              <Box
                display="flex"
                justifyContent="center"
                overflow="auto"
                width={isMobile ? '1' : '65%'}
              >
                <BaseStepper
                  steps={
                    status.paymentMethod === 'CARD_TO_CARD'
                      ? [
                          { label: 'درخواست' },
                          { label: 'پرداخت' },
                          { label: 'آماده سازی' },
                          { label: 'ارسال' },
                          { label: 'تحویل' }
                        ]
                      : [
                          { label: 'ثبت سفارش' },
                          { label: 'آماده سازی' },
                          { label: 'ارسال' },
                          { label: 'تحویل' }
                        ]
                  }
                  error={status.orderState === 'ERROR'}
                  activeStep={
                    status.paymentMethod === 'CARD_TO_CARD'
                      ? status.progressStep
                      : status.progressStep
                  }
                />
              </Box>
            </Box>
            <Box p={3}>
              {/* <Typography
                mb={2}
                textAlign={isMobile ? 'center' : 'left'}
                color="#1C1B20">
                {status.stepTitle}
              </Typography> */}
              <Typography
                variant="body2"
                textAlign={isMobile ? 'center' : 'left'}
                color="#1C1B2066"
              >
                {status.stepDescription}
              </Typography>
              <Grid
                display="flex"
                flexWrap="wrap"
                my={3}
                gap={2}
                justifyContent={isMobile ? 'center' : 'flex-start'}
                alignItems="center"
              >
                {(status?.handleRePayOrder ||
                  status?.handleSubmitCardToCardPayment) && (
                  <Box>
                    <Button
                      variant="contained"
                      onClick={() => {
                        status.handleRePayOrder
                          ? status.handleRePayOrder(id)
                          : setOpenModal(true);
                      }}
                    >
                      پرداخت
                    </Button>
                  </Box>
                )}
                {status.handleRemoveOrder && (
                  <Box>
                    <Button
                      sx={{ border: '1px solid #171C22' }}
                      onClick={() => {
                        status
                          .handleRemoveOrder(id)
                          .then(() => {
                            openSnackbar({
                              message: 'سفارش با موفقیت حذف شد.'
                            });
                          })
                          .catch(err => {
                            openSnackbar({
                              message: err?.message,
                              severity: 'error'
                            });
                          });
                      }}
                    >
                      حذف سفارش
                    </Button>
                  </Box>
                )}
                {status.handleUnrecivedOrder && (
                  <Box>
                    <Button
                      sx={{ border: '1px solid #171C22' }}
                      onClick={() => {
                        status.handleUnrecivedOrder();
                      }}
                    >
                      سفارش را تحویل نگرفتم
                    </Button>
                  </Box>
                )}
                {status.handleRecivedOrder && (
                  <Box>
                    <Button
                      variant="contained"
                      sx={{ border: '1px solid #171C22' }}
                      onClick={() => {
                        status.handleRecivedOrder();
                      }}
                    >
                      تحویل گرفتم
                    </Button>
                  </Box>
                )}
                {status?.handleRefundOrder && (
                  <Box>
                    <Button
                      sx={{ border: '1px solid #171C22' }}
                      onClick={() => {
                        status.handleRefundOrder();
                      }}
                    >
                      درخواست مرجوعی
                    </Button>
                  </Box>
                )}
              </Grid>
              <Box>
                {expireTime && (
                  <ExpireDate
                    remained={expireTime}
                    type={
                      status.statusName === 'WAITING_FOR_PAYMENT_APPROVAL' ||
                      status.statusName === 'WAITING_FOR_APPROVAL' ||
                      status.statusName === 'PAID'
                        ? 'merchant'
                        : 'customer'
                    }
                  />
                )}
              </Box>
            </Box>
          </Box>
          <Box
            border="1px solid #1C1B201A"
            borderRadius="2px"
            overflow="hidden"
            mb={3}
          >
            <Box
              p={3}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box
                component={Typography}
                display="flex"
                alignItems="center"
                variant="body1"
                className="pointer"
                color="#1C1B20"
                onClick={() => {
                  setDetailOpen(val => !val);
                }}
              >
                جزئیات سفارش
                <Box
                  width="20px"
                  height="20px"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  mr={1}
                  sx={{
                    transition: '.3s',
                    transform: `rotate(${detailOpen ? `-90` : `0`}deg)`
                  }}
                >
                  <ArrowBack color="#1C1B20" />
                </Box>
              </Box>
              {/* <Box
                color="#FFD2AA"
                whiteSpace="nowrap"
                onClick={() => {
                  printPageArea(orderDetailTable, ``);
                }}>
                دانلود فاکتور
              </Box> */}
            </Box>
            <Collapse in={detailOpen}>
              <Box width="1" ref={orderDetailTable}>
                {Object.entries(invoice)
                  .filter(
                    ([title, value]) =>
                      value &&
                      title &&
                      Boolean(String(title).trim()) &&
                      Boolean(String(value).trim()) &&
                      title !== 'status'
                  )
                  .map(([title, value], i) => (
                    <TableKeyValue key={title} {...{ title, value, i }} />
                  ))}
              </Box>
            </Collapse>
          </Box>
          <Box
            border="1px solid #1C1B201A"
            borderRadius="2px"
            overflow="hidden"
            mb={3}
          >
            <Box px={3} borderBottom="1px solid #1C1B201A">
              {items.items.map((item, i) => (
                <Grid
                  key={item.id}
                  container
                  display="flex"
                  p={3}
                  px={0}
                  minHeight={110}
                  borderTop={i !== 0 ? '1px solid #1C1B201A' : '0'}
                >
                  <Grid width={isMobile ? '102px' : '82px'}>
                    <BaseImg
                      size={{ w: 100, h: 100 }}
                      src={item.image}
                      productPlaceHolder
                      alt="order"
                      q={90}
                    />
                  </Grid>
                  <Grid container flex="1" alignItems="center" pl={3}>
                    <Grid item md={3} xs={12}>
                      <Typography variant="body2" color="#1C1B20">
                        {item.label}
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      md={2}
                      xs={12}
                      sx={{ display: { xs: 'none', md: 'flex' } }}
                      color="#1C1B2066"
                    >
                      <Typography variant="body2">{item.amount} عدد</Typography>
                    </Grid>
                    <Grid
                      item
                      container
                      alignItems="center"
                      md={4}
                      gap={1}
                      xs={12}
                      color="#1C1B2066"
                    >
                      {item.optionValues.find(ov => ov.name === 'رنگ')
                        ?.colorCode && (
                        <Box
                          width="10px"
                          height="10px"
                          borderRadius="50%"
                          bgcolor={
                            item.optionValues.find(ov => ov.name === 'رنگ')
                              .colorCode || 'transparent'
                          }
                          border="0.5px solid gray"
                          display="inline-block"
                        />
                      )}
                      <Typography variant="body2">
                        {item.optionValues.reverse().map((ov, i) => (
                          <Fragment key={ov.name}>
                            {i !== 0 && '، '}
                            {ov.name} {ov.value}
                          </Fragment>
                        ))}
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      container
                      md={3}
                      xs={12}
                      justifyContent="end"
                      alignItems="baseline"
                    >
                      <Typography variant="body1" color="#1C1B20">
                        {currency(item.cost)}
                        &nbsp;
                        <Typography
                          component="span"
                          variant="overline"
                          color="inherit"
                        >
                          تومان
                        </Typography>
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              ))}
            </Box>
            <Box px={3} py={2}>
              {Object.entries(items)
                .filter(
                  ([key, value]) =>
                    (value || value === 0) &&
                    key !== 'items' &&
                    key !== 'productsCount' &&
                    key !== 'cost'
                )
                .map(([title, value], i) => (
                  <CostKeyValue
                    title={title}
                    value={value}
                    key={i}
                    isColorify={
                      title === 'total_discount_cost' ||
                      title === 'loyalty_amount'
                    }
                  />
                ))}
              <Box borderTop="1px solid #1C1B201A" py={1}>
                <CostKeyValue title={'cost'} value={items.cost} />
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </ProfileLayout>
  );
};

const TableKeyValue = ({ title, value, i }) => {
  return (
    <Box
      width="1"
      bgcolor={i % 2 === 0 ? '#1C1B200D' : '#fff'}
      display="flex"
      alignItems="center"
    >
      <Typography
        varainet="body2"
        color="#1C1B2066"
        alignSelf="stretch"
        borderRight="1px solid #1C1B201A"
        width="40%"
        p={3}
      >
        {renameItems[title]}
      </Typography>
      <Typography color="#1C1B20B2" varainet="body2" width="60%" p={3}>
        {title === 'cost' ? currency(value) : value}{' '}
        {title === 'shipping_time_count' && 'روز'} {title === 'cost' && 'تومان'}
      </Typography>
    </Box>
  );
};
const CostKeyValue = ({ title, value, isColorify }) => (
  <Box
    display="flex"
    py={2}
    justifyContent="space-between"
    alignItems="center"
    color={isColorify ? '#37B86D' : '#1C1B20B2'}
  >
    <Typography color="inherit" variant="body1">
      {renameItems[title]} :
    </Typography>
    <Box>
      {currency(value)}{' '}
      <Typography component="span" variant="overline" color="inherit">
        تومان
      </Typography>
    </Box>
  </Box>
);

const ExpireDate = ({ remained, type }) => (
  <Typography
    variant="caption"
    display="flex"
    alignItems="center"
    color={type == 'customer' ? '#FF5875' : '#FFA24C'}
  >
    <HourglassBottomIcon fontSize="small" />
    {`${remained.h ? `${remained.h} ساعت ${remained.m ? `و` : ``} ` : ``}`}
    {`${remained.m ? `${remained.m} دقیقه ` : ``}`}
    {type == 'customer'
      ? 'برای پرداخت و ثبت سفارش مهلت دارید.'
      : 'مانده تا تایید فروشنده.'}
  </Typography>
);

OrderDetail.setPageConfig = {
  private: true
};

export default OrderDetail;
