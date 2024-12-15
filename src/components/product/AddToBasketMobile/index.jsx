import * as React from 'react';
import {
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
  useTheme
} from '@mui/material';
import { MobileBasketContainer } from './addToBasket.style';
import { currency } from '../../../../utils/currency';
import { expireText } from '../../../../utils/expireDate';
import useIsMobile from '../../shared/Hooks/useIsMobile';
import { useRouter } from 'next/router';

const AddToBasketMobile = ({
  handleAddToBasket,
  selectedVariant,
  setOpenBasketAlert,
  openBasketAlert
}) => {
  const router = useRouter();
  const isMobile = useIsMobile();
  const theme = useTheme();
  return (
    <>
      {openBasketAlert && (
        <Stack className="addToBasketFeedMobile">
          <Stack direction="row" alignItems="center">
            <i className="icon-Shopping-E-Commerce__x2F__Shopping-Bags__x2F__shopping-bag-side_1" />
            <Typography variant="body2" ml={1}>
              محصول به سبد خرید شما اضافه شد.
            </Typography>
          </Stack>
          <Typography
            variant="body2"
            className="goToBasket"
            onClick={() => router.push(`/profile/cart`)}
          >
            سبد خرید
          </Typography>
        </Stack>
      )}

      <MobileBasketContainer>
        <Stack
          direction="row"
          className="discountExpire"
          mb={!isMobile && 1}
          justifyContent={
            selectedVariant?.cost_expired_at ? 'space-between' : 'flex-end'
          }
        >
          {selectedVariant?.cost_expired_at && (
            <Stack direction="row" alignItems="center">
              <CircularProgress
                sx={{ color: '#CF7878' }}
                size={20}
                variant="determinate"
                value={60}
              />
              <Typography variant="body2" color="error.light" ml={1}>
                {expireText(
                  selectedVariant?.cost_expired_at,
                  ' تا اتمام تخفیف '
                )}
              </Typography>
            </Stack>
          )}
          {selectedVariant?.orderable_count > 0 &&
            selectedVariant?.orderable_count < 6 && (
              <Typography variant="body2" color="error.light">
                تنها &nbsp;{selectedVariant?.orderable_count}&nbsp; عدد مانده
              </Typography>
            )}
        </Stack>

        <Box className="priceContainer">
          <Button
            disabled={
              !selectedVariant || selectedVariant?.orderable_count === 0
            }
            variant="contained"
            onClick={() => {
              handleAddToBasket(setOpenBasketAlert(true));
              setTimeout(() => setOpenBasketAlert(false), 7000);
            }}
          >
            {/*{updateBasketLoading && (*/}
            {/*  <>*/}
            {/*    &nbsp;&nbsp; <CircularProgress size={16} color="inherit" />*/}
            {/*  </>*/}
            {/*)}*/}
            افزودن به سبد خرید
          </Button>

          {selectedVariant?.orderable_count === 0 ? (
            <Typography variant="body1" alignSelf="center" color="error.main">
              ناموجود
            </Typography>
          ) : (
            <Stack direction="row" justifyContent="flex-start" height="48px">
              <Box mr="12px" alignSelf="center">
                <Stack
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="center"
                >
                  {!!selectedVariant?.cost && (
                    <Typography variant="subtitle2" className="finalPrice">
                      {currency(selectedVariant?.cost)}
                    </Typography>
                  )}
                  {!selectedVariant?.profit_percent && (
                    <Typography
                      variant="overline"
                      color={theme.palette.black[100]}
                      className="noneProfitPrice"
                    >
                      تومان
                    </Typography>
                  )}
                </Stack>

                {!!selectedVariant?.primary_cost &&
                  selectedVariant?.primary_cost !== selectedVariant?.cost && (
                    <Stack direction="row">
                      <Typography
                        className="offPrice"
                        variant="overline"
                        color="text.secondary"
                      >
                        {currency(selectedVariant?.primary_cost)}
                      </Typography>
                      <Typography variant="overline" color="text.secondary">
                        تومان
                      </Typography>
                    </Stack>
                  )}
              </Box>
              {selectedVariant?.primary_cost &&
                !!selectedVariant?.profit_percent && (
                  <Box className="discount">
                    <Typography variant="body1" color="text.white">
                      <p>{Math.ceil(selectedVariant.profit_percent)}&nbsp;%</p>
                    </Typography>
                  </Box>
                )}
            </Stack>
          )}
        </Box>
        {!!selectedVariant?.loyalty_gift && (
          <Stack direction="row" alignItems="center" mt={2}>
            <i className="icon-Loyalty" />
            <Typography
              color={theme.palette.black[70]}
              variant={isMobile ? 'caption' : 'body1'}
              mx={1}
            >
              با خرید این محصول &nbsp;{currency(selectedVariant?.loyalty_gift)}
              &nbsp; تومان اعتبار کسب می کنید.
            </Typography>
          </Stack>
        )}
      </MobileBasketContainer>
    </>
  );
};

export default AddToBasketMobile;
