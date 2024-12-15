import {
  Box,
  Button,
  ButtonBase,
  CircularProgress,
  Grid,
  Typography,
  useTheme
} from '@mui/material';
import React from 'react';
import ArrowBack from 'public/static/assets/svg/shared/ArrowBack';
import BaseImg from 'src/components/shared/BaseImg';
import CardToCardModal from '../CardToCardModal';
import { openSnackbar } from 'utils/snackbar';
import { addUnit, currency } from 'utils/currency';
import { useRouter } from 'next/router';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';

const OrderItem = ({ order }) => {
  const [openModal, setOpenModal] = React.useState(false);
  const [cardToCardImage, setCardToCardImage] = React.useState(null);
  const { push } = useRouter();
  const isMobile = useIsMobile();
  const {
    palette: { secondary }
  } = useTheme();

  return (
    <Grid
      mb={isMobile ? '16px' : '30px'}
      container
      border="1px solid #1C1B201A"
      borderRadius="2px"
      flexDirection="column"
    >
      {order.handleSubmitCardToCardPayment && (
        <CardToCardModal
          {...{
            order,
            setCardToCardImage,
            setOpenModal,
            openModal,
            cardToCardImage
          }}
        />
      )}
      <Box
        width="1"
        p={isMobile ? '12px' : '24px'}
        display="flex"
        flexDirection="column"
      >
        <Box
          width="1"
          mb={isMobile ? '24px' : '32px'}
          display="flex"
          justifyContent="space-between"
        >
          <Box
            display="flex"
            flexDirection={isMobile ? 'column' : 'row'}
            gap={[2, 2, 2, 4]}
          >
            <OrderDetail title="کد سفارش" value={order.referenceCode} />
            <OrderDetail
              title="مبلغ کل"
              value={addUnit(currency(order.cost))}
            />
            <OrderDetail title="تاریخ ثبت" value={order.createdAt} />
          </Box>
          <ButtonBase
            onClick={() => push(order.link.href)}
            sx={{ height: 'min-content' }}
          >
            <Typography
              variant="body2"
              whiteSpace="nowrap"
              color={secondary.main}
              display="flex"
              alignItems="center"
            >
              مشاهده سفارش&nbsp;
              <ArrowBack color={secondary.main} />
            </Typography>
          </ButtonBase>
        </Box>
        <Box display="flex" gap={isMobile ? '8px' : '24px'} overflow="hidden">
          {order.products.map((p, i) => (
            <Box
              key={i}
              borderRadius="2px"
              height={isMobile ? '46px' : '100px'}
              width={isMobile ? '46px' : '100px'}
              overflow="hidden"
            >
              <BaseImg
                src={p.image}
                productPlaceHolder
                size={{ w: 100, h: 100 }}
                alt="order image"
                objectFit="cover"
              />
            </Box>
          ))}
        </Box>
      </Box>
      <Grid
        p={isMobile ? '12px' : '18px 24px'}
        borderTop="1px solid #1C1B201A"
        container
        sx={{
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { md: 'center' },
          justifyContent: { md: 'space-between' },
          gap: 3
        }}
      >
        <Typography color="#1C1B20B2" variant="body2">
          {order.stepDescription}
        </Typography>
        <Grid display="flex" gap={2} sx={{ flexWrap: ['wrap', 'nowrap'] }}>
          {order?.loading ? (
            <CircularProgress size={25} color="secondary" />
          ) : (
            <>
              {order.handleRemoveOrder && (
                <Box>
                  <Button
                    onClick={() => {
                      order
                        .handleRemoveOrder(order.id)
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
                    sx={{ whiteSpace: 'nowrap' }}
                  >
                    حذف سفارش
                  </Button>
                </Box>
              )}
              {(order.handleRePayOrder ||
                order.handleSubmitCardToCardPayment) && (
                <Box>
                  <Button
                    variant="contained"
                    onClick={() => {
                      order.handleRePayOrder
                        ? order.handleRePayOrder(order.id)
                        : setOpenModal(true);
                    }}
                    sx={{ whiteSpace: 'nowrap' }}
                  >
                    پرداخت
                  </Button>
                </Box>
              )}
              {order?.handleUnrecivedOrder && (
                <Box>
                  <Button
                    onClick={() => {
                      order.handleUnrecivedOrder();
                    }}
                    sx={{ whiteSpace: 'nowrap' }}
                  >
                    سفارش را تحویل نگرفتم
                  </Button>
                </Box>
              )}
              {order?.handleRecivedOrder && (
                <Box>
                  <Button
                    variant="contained"
                    onClick={() => {
                      order.handleRecivedOrder();
                    }}
                    sx={{ whiteSpace: 'nowrap' }}
                  >
                    تحویل گرفتم
                  </Button>
                </Box>
              )}
            </>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

const OrderDetail = ({ title, value }) => {
  return (
    value && (
      <Box display="flex">
        <Typography variant="body2" color="#1C1B2066">
          {title}:&nbsp;
        </Typography>
        <Typography variant="body2" color="#1C1B20B2">
          {value}
        </Typography>
      </Box>
    )
  );
};

export default OrderItem;
