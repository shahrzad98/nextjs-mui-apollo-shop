import React, { useState } from 'react';
// import CarouselProduct from './productGallery';
import {
  Button,
  Divider,
  Grid,
  IconButton,
  Skeleton,
  Typography
} from '@mui/material';
import BreadcrumbsComponent from './Breadcrumbs';
import Favorite from './favorite';
import Price from './Price';
import RatingComponent from './rating';
import { useSuggestionProducts } from '@digify/theme-kit';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import StarsRoundedIcon from '@mui/icons-material/StarsRounded';
import { useRouter } from 'next/router';
import { addUnit, currency } from 'utils/currency';
import Gallery from './gallery';
import SimillarProductComponent from './simillarProduct';
import SnakBarProduct from './snakbarProduct';
import BasicTabs from './tabs';
import Variants from './variants';

const ProductComponent = ({
  categories,
  handleSelectedVariant,
  handleOptionValueIsSelected,
  selectedOptionValues,
  isDesktop,
  loading,
  handleAddToBasket,
  productData,
  addOrRemoveToFavorites,
  favoriteLoading
}) => {
  const {
    isFavorite,
    features,
    description: desc,
    options,
    images,
    selectedVariant,
    voterNumber,
    averageScore,
    label,
    feedbackCount
  } = productData;
  const router = useRouter();

  const { data } = useSuggestionProducts();

  const [openSnakBar, setOpenSnakBar] = useState(false);
  return (
    <div
      style={
        isDesktop
          ? {
              position: 'relative',
              marginLeft: 64,
              marginRight: 64,
              marginTop: '30px'
            }
          : { position: 'relative' }
      }
    >
      {openSnakBar && isDesktop && (
        <SnakBarProduct
          label={label}
          setOpenSnakBar={setOpenSnakBar}
          isDesktop={isDesktop}
        />
      )}
      <Grid sx={!isDesktop ? {} : { width: '100%', display: 'flex' }}>
        {!isDesktop && (
          <Grid
            height={'72px'}
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <IconButton onClick={() => router.back()}>
              <ArrowForwardIosIcon style={{ color: '#000' }} />
            </IconButton>

            <Favorite
              register={true}
              {...{
                addOrRemoveToFavorites,
                favoriteLoading,
                isDesktop,
                isFavorite
              }}
            />
          </Grid>
        )}

        <Grid item sm={5} xs={12}>
          <Gallery loading={loading} images={images} isDesktop={isDesktop} />
        </Grid>
        <Grid
          xs={isDesktop ? 6 : null}
          style={
            !isDesktop
              ? { paddingLeft: '15px', paddingRight: '15px' }
              : { paddingLeft: '15px', paddingRight: '15px' }
          }
        >
          {loading ? (
            <Skeleton variant="text" animation="wave" width={200} />
          ) : (
            <BreadcrumbsComponent categories={categories} />
          )}
          <Grid
            sx={
              !isDesktop
                ? {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'end'
                  }
                : {}
            }
          >
            {loading ? (
              <Skeleton variant="text" animation="wave" width={200} />
            ) : (
              <Typography
                component={'h4'}
                variant={'h4'}
                textAlign={'start'}
                pt={'12px'}
                sx={isDesktop ? { fontSize: '24px' } : { fontSize: '18px' }}
              >
                {label}
              </Typography>
            )}
            {!isDesktop && (
              <RatingComponent
                feedbackCount={feedbackCount}
                isDesktop={isDesktop}
                voterNumber={voterNumber}
                averageScore={averageScore}
              />
            )}
          </Grid>
          <Grid
            sx={
              isDesktop
                ? { height: '70px', marginTop: '51px' }
                : { marginBottom: '12px' }
            }
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            {isDesktop &&
              (loading ? (
                <>
                  <Skeleton variant="rectangular" width={210} height={50} />
                  <Skeleton variant="rectangular" width={210} height={50} />
                </>
              ) : (
                <>
                  <RatingComponent
                    feedbackCount={feedbackCount}
                    isDesktop={isDesktop}
                    voterNumber={voterNumber}
                    averageScore={averageScore}
                  />
                  <Price
                    isDesktop={isDesktop}
                    stock={selectedVariant?.orderable_count}
                    cost={selectedVariant?.cost}
                    primary_cost={selectedVariant?.primary_cost}
                    profitPercent={selectedVariant?.profit_percent}
                  />
                </>
              ))}
          </Grid>
          {isDesktop && (
            <>
              <Divider sx={{ color: 'rgba(28, 27, 32, 0.2)' }} />
              <Grid
                style={
                  !isDesktop
                    ? { marginTop: '24px', direction: 'rtl' }
                    : { direction: 'rtl', marginTop: '24px' }
                }
                xs
                sx={theme => ({
                  flexDirection: 'column',
                  minHeight: '318px',
                  [theme.breakpoints.down('md')]: { minHeight: 'unset' }
                })}
                display={'flex'}
                justifyContent={'space-between'}
              >
                {loading ? (
                  <>
                    <Grid
                      display={'flex'}
                      justifyContent={'space-between'}
                      width={'100%'}
                      mt={3}
                    >
                      <Skeleton variant="rectangular" width={210} height={50} />
                      <Skeleton variant="rectangular" width={210} height={50} />
                    </Grid>
                  </>
                ) : (
                  <>
                    <Variants
                      {...{
                        isFavorite,
                        favoriteLoading,
                        addOrRemoveToFavorites,
                        isDesktop,
                        handleSelectedVariant,
                        selectedOptionValues,
                        handleOptionValueIsSelected,
                        options
                      }}
                      stock={selectedVariant?.orderable_count}
                    />
                  </>
                )}
              </Grid>
            </>
          )}
          {!isDesktop && (
            <>
              <Divider />
              <Grid
                sx={
                  !isDesktop
                    ? {
                        marginTop: '24px',
                        direction: 'rtl',
                        flexDirection: 'column'
                      }
                    : { direction: 'rtl', flexDirection: 'column' }
                }
                xs
                display={'flex'}
                minHeight={'318px'}
                marginBottom={'20px'}
                justifyContent={'space-between'}
              >
                {loading ? (
                  <>
                    <Grid
                      display={'flex'}
                      justifyContent={'space-between'}
                      width={'100%'}
                      mt={3}
                    >
                      <Skeleton variant="rectangular" width={210} height={50} />
                      <Skeleton variant="rectangular" width={210} height={50} />
                    </Grid>
                  </>
                ) : (
                  <>
                    <Variants
                      {...{
                        isFavorite,
                        favoriteLoading,
                        addOrRemoveToFavorites,
                        isDesktop,
                        handleSelectedVariant,
                        selectedOptionValues,
                        handleOptionValueIsSelected,
                        options
                      }}
                      stock={selectedVariant?.orderable_count}
                    />
                  </>
                )}
              </Grid>
            </>
          )}
          {isDesktop ? (
            <>
              <Grid
                display={'flex'}
                justifyContent={'space-between'}
                mt={'40px'}
              >
                {!selectedVariant?.orderable_count ||
                selectedVariant?.orderable_count === 0 ? (
                  loading ? (
                    <Skeleton
                      variant="rectangular"
                      width={'100%'}
                      height={70}
                    />
                  ) : (
                    <Button
                      sx={{
                        height: '70px',
                        backgroundColor: '#171C2210',
                        marginLeft: '24px',
                        color: '#171C2250',
                        width: '100%'
                      }}
                      variant="text"
                      disabled
                    >
                      افزودن به سبد خرید
                    </Button>
                  )
                ) : loading ? (
                  <Skeleton variant="rectangular" width={'100%'} height={70} />
                ) : (
                  <Grid
                    display={'flex'}
                    flexDirection={'column'}
                    width={'100%'}
                  >
                    {selectedVariant?.orderable_count != -1 &&
                      selectedVariant?.orderable_count <= 5 && (
                        <Typography
                          width={'100%'}
                          display={'flex'}
                          justifyContent={'end'}
                          fontSize={'16px'}
                          color={'#CF7878'}
                        >{`تنها ${selectedVariant?.orderable_count} عدد مانده`}</Typography>
                      )}
                    <Button
                      sx={{
                        height: '70px',
                        width: '100%'
                      }}
                      color="primary"
                      variant="contained"
                      onClick={() => {
                        handleAddToBasket(), setOpenSnakBar(true);
                      }}
                    >
                      افزودن به سبد خرید
                    </Button>
                  </Grid>
                )}
                {/* {options.map(
                  item =>
                    item.name === 'سایز' && (
                      <>
                        <Button
                          style={{
                            width: '200px',
                            height: '70px'
                          }}
                          variant="outlined"
                        >
                          <SquareFootOutlinedIcon />
                          راهنمای سایزبندی
                        </Button>
                      </>
                    )
                )} */}
              </Grid>

              {selectedVariant?.loyaltyGift > 0 ? (
                <Grid container dir="rtl" mt={2} spacing={2} flexWrap="nowrap">
                  <Grid item>
                    <StarsRoundedIcon style={{ color: '#FFDF00' }} />
                    <Typography variant="body1" color="black.70">
                      با خرید این محصول{' '}
                      {addUnit(currency(selectedVariant?.loyaltyGift))} اعتبار
                      کسب میکنید
                    </Typography>
                  </Grid>
                </Grid>
              ) : null}
            </>
          ) : (
            <>
              {/* {options.map(
                item =>
                  item.name === 'سایز' && (
                    <>
                      <Button
                        style={{
                          height: '70px',
                          fontSize: '20px'
                        }}
                        variant="outlined"
                      >
                        <SquareFootOutlinedIcon />
                        راهنمای سایزبندی
                      </Button>
                    </>
                  )
              )} */}
            </>
          )}
        </Grid>
      </Grid>
      {!isDesktop && (
        <Divider style={{ marginLeft: '12px', marginRight: '12px' }} />
      )}
      <Grid
        sx={
          data?.length > 0 && isDesktop
            ? { marginTop: '50px' }
            : { height: '300px', paddingLeft: '12px', paddingRight: '12px' }
        }
      >
        {loading ? (
          <Skeleton variant="rectangular" width={'100%'} height={400} />
        ) : (
          <BasicTabs desc={desc} features={features} isDesktop={isDesktop} />
        )}
      </Grid>
      {data && data.length > 0 && (
        <Grid
          sx={
            isDesktop
              ? {}
              : {
                  marginBottom: '24px',
                  paddingLeft: '12px',
                  paddingRight: '12px'
                }
          }
        >
          <SimillarProductComponent isDesktop={isDesktop} loading={loading} />
        </Grid>
      )}
      {!isDesktop && (
        <Grid position={'fixed'} bottom={'80px'} zIndex={5} width={'100%'}>
          {openSnakBar && (
            <SnakBarProduct
              label={label}
              setOpenSnakBar={setOpenSnakBar}
              isDesktop={isDesktop}
            />
          )}
        </Grid>
      )}

      {!isDesktop && (
        <>
          <Grid
            px={3}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'space-between'}
            sx={{
              position: 'fixed',
              width: '100%',
              bottom: '0',
              height: '96px',
              backgroundColor: '#fff',
              zIndex: 10,
              borderTop: '1px solid rgba(28, 27, 32, 0.2)'
            }}
          >
            <Grid display={'flex'} alignItems={'center'}>
              {selectedVariant?.orderable_count === 0 ? (
                loading ? (
                  <Skeleton variant="rectangular" width={'100%'} height={70} />
                ) : (
                  <Button
                    sx={{
                      height: '48px',
                      backgroundColor: '#171C2210',
                      marginLeft: '24px',
                      color: '#171C2250',
                      width: '100%',
                      fontSize: '13px'
                    }}
                    variant="text"
                    disabled
                  >
                    افزودن به سبد خرید{' '}
                  </Button>
                )
              ) : loading ? (
                <Skeleton variant="rectangular" width={'100%'} height={70} />
              ) : (
                <Grid display={'flex'} flexDirection={'column'} width={'100%'}>
                  {selectedVariant?.orderable_count != -1 &&
                    selectedVariant?.orderable_count <= 5 && (
                      <Typography
                        width={'100%'}
                        display={'flex'}
                        justifyContent={'end'}
                        fontSize={'14px'}
                        color={'#CF7878'}
                      >{`تنها ${selectedVariant?.orderable_count} عدد مانده`}</Typography>
                    )}
                  <Button
                    sx={{
                      height: '48px',
                      width: '100%',
                      fontSize: '10px'
                    }}
                    color="primary"
                    variant="contained"
                    onClick={() => {
                      handleAddToBasket(), setOpenSnakBar(true);
                    }}
                  >
                    افزودن به سبد خرید
                  </Button>
                </Grid>
              )}
            </Grid>
            <Grid>
              {loading ? (
                <Skeleton variant="rectangular" width={210} height={50} />
              ) : (
                <Price
                  isDesktop={isDesktop}
                  stock={selectedVariant?.orderable_count}
                  cost={selectedVariant?.cost}
                  primary_cost={selectedVariant?.primary_cost}
                  profitPercent={selectedVariant?.profit_percent}
                />
              )}
            </Grid>
          </Grid>
        </>
      )}
    </div>
  );
};

export default ProductComponent;
