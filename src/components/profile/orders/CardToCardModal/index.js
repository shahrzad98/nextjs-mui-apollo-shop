import {
  Box,
  Button,
  CircularProgress,
  Grid,
  IconButton,
  Typography
} from '@mui/material';
import CopyButton from 'src/components/shared/CopyButton';
import DrawerModal from 'src/components/shared/DrawerModal';
import ImageUploader from 'src/components/shared/ImageUploader';
import React from 'react';
import { openSnackbar } from 'utils/snackbar';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';
import { currency } from 'utils/currency';

const CardToCardModal = ({
  order,
  setCardToCardImage,
  setOpenModal,
  openModal,
  cardToCardImage
}) => {
  const isMobile = useIsMobile();
  return (
    <DrawerModal
      heightContent={'80%'}
      body={
        <Box display="flex" flexDirection="column" alignItems="center" px={2}>
          {isMobile && (
            <Box
              width={'100%'}
              display="flex"
              justifyContent={'flex-end'}
              onClick={() => setOpenModal(false)}
            >
              <IconButton>
                <i className="icon-remove" style={{ fontSize: '20px' }} />
              </IconButton>
            </Box>
          )}
          <Typography variant="subtitle2" color="#1C1B20" mb={4}>
            پرداخت کارت به کارت
          </Typography>
          <Typography
            variant="body2"
            color="#1C1B20B2"
            textAlign="center"
            mb={3}
          >
            لطفا مبلغ سفارش را با اطلاعات زیر به حساب فروشگاه واریز کنید و تصوير
            رسید آن را بارگذاری نمایید.
          </Typography>
          <Grid container spacing={3} mb={4}>
            <Grid item md={7} xs={12}>
              <Box width="1" border="1px solid #1C1B201A" p={2}>
                <Typography
                  color="#1C1B20"
                  textAlign={isMobile ? 'center' : 'left'}
                  variant="body2"
                >
                  اطلاعات حساب فروشگاه
                </Typography>
                <Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    my={3}
                  >
                    <Typography variant="body2">شماره کارت</Typography>
                    <Typography
                      variant="body1"
                      color="#171C22"
                      display="flex"
                      alignItems="center"
                    >
                      <CopyButton text={order.paymentInformation.cardNumber} />
                      {order.paymentInformation.cardNumber}
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    my={3}
                  >
                    <Typography variant="body2">نام و نام خانوادگی</Typography>
                    <Typography variant="body2" color="#605F63">
                      {order.paymentInformation.cardOwnerName}
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    my={3}
                  >
                    <Typography variant="body2">مبلغ قابل پرداخت</Typography>
                    <Typography variant="body2" color="#605F63">
                      {currency(order.paymentInformation.cost)}
                      <Typography variant="overline" color="inherit">
                        {' '}
                        تومان
                      </Typography>
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item container justifyContent="center" md={5} xs={12}>
              <Box
                width={isMobile ? '232px' : '1'}
                height="100%"
                border="1px dashed #1C1B201A"
              >
                <ImageUploader
                  setImage={setCardToCardImage}
                  title="رسید را در این بخش بیندازید"
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      }
      actions={
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={4}
          px={'16px'}
        >
          {order.loading ? (
            <CircularProgress />
          ) : (
            <>
              <Grid item md={4} xs={6}>
                <Button
                  variant="contained"
                  fullWidth
                  disabled={!cardToCardImage}
                  onClick={() =>
                    order
                      .handleSubmitCardToCardPayment?.(
                        order.id,
                        cardToCardImage
                      )
                      .then(() => {
                        setOpenModal(false);
                        openSnackbar({
                          message: 'سفارش با موفقیت پرداخت شد.'
                        });
                      })
                      .catch(err => {
                        openSnackbar({
                          message: err.message,
                          severity: 'error'
                        });
                      })
                  }
                >
                  ارسال
                </Button>
              </Grid>
              <Grid item md={4} xs={6}>
                <Button
                  fullWidth
                  sx={{ border: '1px solid #171C22' }}
                  onClick={() => setOpenModal(false)}
                >
                  انصراف
                </Button>
              </Grid>
            </>
          )}
        </Grid>
      }
      open={openModal}
      setOpen={setOpenModal}
    />
  );
};

export default CardToCardModal;
