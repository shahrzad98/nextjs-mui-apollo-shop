import * as React from 'react';
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Stack,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { VariantContainer } from './variant.style';
import VariantCarousel from '../VariantCarousel';
import { isUserLoggedIn, useBreadcrumb } from '@digify/theme-kit';
import BreadcrumbsComponent from '../../productComponents/Breadcrumbs';
import { useRouter } from 'next/router';
import { currency } from '../../../../utils/currency';
import { expireText } from '../../../../utils/expireDate';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';

const Variant = ({
  productInfo,
  handleAddToBasket,
  handleSelectedVariant,
  selectedVariant,
  options,
  isFavorite,
  addOrRemoveToFavorites,
  favoriteLoading,
  setOpenBasketAlert
}) => {
  const { asPath } = useRouter();
  const router = useRouter();
  const theme = useTheme();
  const { data: breadcrumbs } = useBreadcrumb();
  const { label, voter_number, average_score, feedback_count } = productInfo;
  const isMobile = useIsMobile();
  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));

  let variantError = [];
  if (selectedVariant)
    for (const item of selectedVariant?.option_values) {
      variantError.push([item?.option?.name, item.value].join(' '));
    }
  function toggleFavoriteHandle() {
    isUserLoggedIn() ? addOrRemoveToFavorites() : router.push(`/auth/login`);
  }

  function onHandleAddToBasket() {
    handleAddToBasket(setOpenBasketAlert(true));
    setTimeout(() => setOpenBasketAlert(false), 7000);
  }
  const shareData = {
    title: `${label}`,
    text: 'Learn web development on MDN!',
    url: `${asPath}`
  };
  const share = async () => {
    try {
      await navigator.share(shareData);
    } catch (e) {
      return e;
    }
  };

  return (
    <VariantContainer>
      <section>
        {/*<Typography*/}

        {/*  variant="subtitle1"*/}
        {/*  color="error.light"*/}
        {/*  className="hotOffer">*/}
        {/*  پیشنهاد ویژه*/}
        {/*</Typography>*/}
        <Box p={isSmall ? '0 16px' : ''}>
          <BreadcrumbsComponent categories={breadcrumbs} />
        </Box>
        {isSmall ? (
          <Stack
            p="0 16px"
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            mb={2}
          >
            <Typography variant="subtitle1" fontWeight="bold" component="h1">
              {label}
            </Typography>
            <Stack
              direction="row"
              mr={1}
              alignItems="center"
              alignSelf="baseline"
            >
              <i className="icon-social-medias-rewards-rating-rating-rating-star" />
              <Typography
                color="text.primary"
                variant="body2"
                ml={1}
                top={2}
                position="relative"
                display="flex"
              >
                {average_score}
              </Typography>
            </Stack>
          </Stack>
        ) : (
          <Typography variant="subtitle1" fontWeight="bold" component="h1">
            {label}
          </Typography>
        )}
        {/*Rate & price*/}
        {!isSmall && (
          <Stack
            direction="row"
            justifyContent="space-between"
            mb={2}
            className="priceContainer"
          >
            <Stack direction="row" alignItems="flex-end">
              <Stack direction="row" mr={1} alignItems="center">
                <i className="icon-social-medias-rewards-rating-rating-rating-star" />
                <Typography
                  color="text.primary"
                  variant="body2"
                  ml={1}
                  top={2}
                  position="relative"
                  display="flex"
                >
                  {average_score}
                </Typography>
              </Stack>
              {!isMobile && (
                <Typography variant="caption">
                  از {voter_number} رای | {feedback_count} نظر
                </Typography>
              )}
            </Stack>
            {selectedVariant?.orderable_count === 0 ? (
              <Typography variant="body1" color="error.main">
                ناموجود
              </Typography>
            ) : (
              <Stack
                direction={
                  selectedVariant?.primary_cost !== selectedVariant?.cost
                    ? 'row'
                    : 'column'
                }
                justifyContent="flex-end"
              >
                <Box mr="12px">
                  <Stack direction="row" justifyContent="flex-end">
                    {!!selectedVariant?.cost && (
                      <Typography variant="h6" textAlign="right">
                        {currency(selectedVariant?.cost)}
                      </Typography>
                    )}
                    {!selectedVariant?.profit_percent && (
                      <Typography
                        variant="caption"
                        color={theme.palette.black[100]}
                        className="noneProfitPrice"
                      >
                        تومان
                      </Typography>
                    )}
                  </Stack>

                  {!!selectedVariant?.primary_cost &&
                    selectedVariant?.primary_cost !== selectedVariant?.cost && (
                      <Stack direction="row" alignItems="center">
                        <Typography
                          className="offPrice"
                          variant="body2"
                          color="text.secondary"
                          mr={1}
                        >
                          {currency(selectedVariant?.primary_cost)}
                        </Typography>
                        {selectedVariant?.primary_cost && (
                          <Typography variant="caption" color="text.secondary">
                            تومان
                          </Typography>
                        )}
                      </Stack>
                    )}
                </Box>
                {!!selectedVariant?.primary_cost &&
                  !!selectedVariant?.profit_percent && (
                    <Box className="discount">
                      <p>{Math.ceil(selectedVariant.profit_percent)}&nbsp;%</p>
                    </Box>
                  )}
              </Stack>
            )}
          </Stack>
        )}
        {!!options?.length && isSmall && (
          <Divider className="divider" sx={{ marginBottom: '16px' }} />
        )}
        {!isSmall && (
          <Divider className="divider" sx={{ marginBottom: '26px' }} />
        )}
        {/*Share and favorite*/}
        {!isSmall && (
          <Stack
            direction="row"
            justifyContent="space-between"
            width="90px"
            className="actionBar"
          >
            {isFavorite ? (
              <>
                {favoriteLoading ? (
                  <Box alignSelf="center" width="30px">
                    <CircularProgress color="inherit" size={20} />
                  </Box>
                ) : (
                  <Box alignSelf="center">
                    <i
                      onClick={toggleFavoriteHandle}
                      className="icon-Like-Filled"
                    />
                  </Box>
                )}
              </>
            ) : (
              <>
                {favoriteLoading ? (
                  <Box alignSelf="center" width="30px">
                    <CircularProgress color="inherit" size={20} />
                  </Box>
                ) : (
                  <Box alignSelf="center">
                    <i
                      onClick={toggleFavoriteHandle}
                      className="icon-social-medias-rewards-rating-love-it"
                    />
                  </Box>
                )}
              </>
            )}
            {/*<Box alignSelf="center">*/}
            {/*  <i className="icon-shopping-E-commerce-discount-coupons-discount-circle" />*/}
            {/*</Box>*/}

            <Box variant="contained" alignSelf="center" onClick={share}>
              <i className="icon-share" />
            </Box>
          </Stack>
        )}
        <Stack direction="row" mb={3}>
          {options?.map(option => {
            return (
              option?.is_color && (
                <Box key={option.id} p={isSmall ? '0 16px' : ''}>
                  <Typography mb={2}> {option?.name} :</Typography>
                  <Stack direction="row">
                    {option?.values?.map(item => (
                      <Tooltip title={item.value} placement="top" key={item.id}>
                        <Box
                          onClick={() => handleSelectedVariant(item)}
                          className={`colorPallet ${
                            selectedVariant?.option_values.find(
                              el => el.id === item.id
                            )
                              ? 'activeOption'
                              : ''
                          }`}
                          sx={{ bgcolor: item.color_code }}
                        />
                      </Tooltip>
                    ))}
                  </Stack>
                </Box>
              )
            );
          })}
        </Stack>

        {options?.map((option, index) => {
          return (
            !option?.is_color && (
              <Box key={option?.id} p={isSmall ? '0 16px' : ''}>
                <Stack direction="row" mb={2} alignItems="center">
                  <Typography>{option?.name}:</Typography> &nbsp;
                  {options?.length === index + 1 &&
                    selectedVariant?.orderable_count === 0 && (
                      <Typography variant="caption" color="error.main">
                        {variantError.join('،برای ')} موجود نمی باشد !
                      </Typography>
                    )}
                </Stack>
                <VariantCarousel
                  variants={option?.values}
                  selectedVariant={selectedVariant}
                  handleSelectedVariant={handleSelectedVariant}
                />
              </Box>
            )
          );
        })}

        {!isSmall && (
          <>
            <Box
              className="discountExpire"
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
                    تنها &nbsp;{selectedVariant?.orderable_count}&nbsp; عدد
                    مانده
                  </Typography>
                )}
            </Box>
            <Button
              disabled={
                !selectedVariant || selectedVariant?.orderable_count === 0
              }
              onClick={onHandleAddToBasket}
              variant="contained"
              className="addToBasket"
            >
              افزودن به سبد خرید
              {/*{updateBasketLoading && (*/}
              {/*  <>*/}
              {/*    &nbsp;&nbsp; <CircularProgress size={16} color="inherit" />*/}
              {/*  </>*/}
              {/*)}*/}
            </Button>
          </>
        )}
      </section>
      {!!selectedVariant?.loyalty_gift && (
        <Stack direction="row" alignItems="center" mt="20px">
          <i className="icon-Loyalty" />
          <Typography mx={2}>
            با خرید این محصول &nbsp;{currency(selectedVariant?.loyalty_gift)}
            &nbsp; تومان اعتبار کسب می کنید.
          </Typography>
        </Stack>
      )}
    </VariantContainer>
  );
};

export default Variant;
