import { Add, Close, Remove } from '@mui/icons-material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
  Button,
  ClickAwayListener,
  Grid,
  IconButton,
  Link as MuiLink,
  Typography
} from '@mui/material';
import React, { useState } from 'react';
import { currency } from 'utils/currency';
import LoaltySVG from 'public/static/assets/svg/profile/loyalty';
import DrawerModal from 'src/components/shared/DrawerModal';
import BaseImg from 'src/components/shared/BaseImg';
import { Box } from '@mui/system';
import Link from 'next/link';
import { openSnackbar } from 'utils/snackbar';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';
import { Style } from './styled';

const ProductCard = ({ product, odd, lastItem }) => {
  const isDesktop = !useIsMobile();
  const [zeroModalOpen, setZeroModalOpen] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  return (
    <Style isDesktop={isDesktop} alignContent="space-between" container>
      {odd && <Grid className="top-border" container></Grid>}
      {(lastItem || odd) && <Grid className="bottom-border" container></Grid>}
      <Grid item>
        {' '}
        <Link {...product.link} key={product.id} passHref>
          <MuiLink>
            <Box
              height={{ xs: '116px', md: '160px' }}
              width={{ xs: '116px', md: '160px' }}
            >
              <BaseImg
                src={product?.image}
                size={{
                  h: 300,
                  w: 300
                }}
                productPlaceHolder
              />
            </Box>
          </MuiLink>
        </Link>
      </Grid>
      <Grid
        alignItems="space-between"
        alignContent={'space-between'}
        pl={{ xs: '12px', md: 2 }}
        pt={0}
        flex={1}
        item
        container
      >
        <Grid alignContent="start" container>
          <Grid
            position="relative"
            alignItems="flex-start"
            justifyContent="space-between"
            container
          >
            <Typography>{product?.product_label}</Typography>
            <IconButton
              onClick={() => {
                setShowDrawer(true);
              }}
              className="more_btn"
            >
              <MoreVertIcon />
            </IconButton>
            {showDrawer && (
              <ClickAwayListener onClickAway={() => setShowDrawer(false)}>
                <div className="productDrawer">
                  <Link {...product.link} key={product.id} passHref>
                    <MuiLink sx={{ textDecoration: 'none' }}>
                      <Button
                        fullWidth
                        variant="text"
                        startIcon={<i className="icon-view" />}
                      >
                        مشاهده محصول
                      </Button>
                    </MuiLink>
                  </Link>
                  <Button
                    fullWidth
                    variant="text"
                    onClick={() => setZeroModalOpen(true)}
                    startIcon={<i className="icon-delete" />}
                  >
                    حدف از سبد خرید
                  </Button>
                  <Button
                    fullWidth
                    variant="text"
                    onClick={() => {
                      product?.handleAddToFavorites(() => {
                        setShowDrawer(false);
                        openSnackbar({
                          message:
                            'محصول مورد نظر با موفقیت به علاقه مندی ها اضافه شد'
                        });
                      });
                    }}
                    startIcon={
                      <i className="icon-social-medias-rewards-rating-love-it" />
                    }
                  >
                    انتقال به علاقه مندی‌ها
                  </Button>
                </div>
              </ClickAwayListener>
            )}
          </Grid>
          <Grid container mt={1}>
            {product?.optionValue
              ?.filter(f => f?.colorCode?.length > 0)
              .map((e, i) => (
                <Grid
                  item
                  style={{ display: 'flex', alignItems: 'center' }}
                  key={e.name}
                >
                  <div
                    className="color_circle"
                    style={{
                      backgroundColor: e.colorCode
                    }}
                  ></div>
                  <p className="option_value">
                    {e.name} {e.value}
                    {i + 1 !== product?.optionValue?.length && '،'}
                  </p>
                </Grid>
              ))}
            {product?.optionValue
              ?.filter(f => !f?.colorCode)
              .map((e, i) => (
                <Grid
                  item
                  style={{ display: 'flex', alignItems: 'center' }}
                  key={e.name}
                >
                  <p className="option_value">
                    {e.name} {e.value}
                    {i + 1 !==
                      product?.optionValue?.filter(f => !f?.colorCode).length &&
                      '،'}
                  </p>
                </Grid>
              ))}
          </Grid>
        </Grid>
        {isDesktop && (
          <Grid
            position="relative"
            container
            justifyContent="space-between"
            alignItems="center"
          >
            <div className="counterCont">
              {product?.hasLoyaltyGift && (
                <p className="loyaltyGift">
                  <LoaltySVG /> دارای اعتبار
                </p>
              )}
              <IconButton onClick={() => product?.handleIncrementAmount()}>
                <i
                  className="icon-add"
                  style={{ fontSize: '14px', fontWeight: '700' }}
                />
              </IconButton>
              <div className="counter">{product?.amount}</div>
              <IconButton
                onClick={() => {
                  if (product?.amount === 1 && isDesktop) {
                    setZeroModalOpen(true);
                  } else {
                    product?.handleDecrementAmount();
                  }
                }}
              >
                <i
                  className="icon-subtract"
                  style={{ fontSize: '14px', fontWeight: '700' }}
                />
              </IconButton>
            </div>
            <Typography variant="body1" className="cost">
              {currency(product?.online_cost)} <span>تومان</span>
            </Typography>
            {product?.online_primary_cost !== product?.online_cost ? (
              <p className="primaryCost">
                {currency(product?.online_primary_cost)}
              </p>
            ) : (
              ''
            )}
          </Grid>
        )}
      </Grid>
      {!isDesktop && (
        <Grid
          position="relative"
          container
          justifyContent="space-between"
          alignItems="center"
        >
          <div className="counterCont">
            {product?.hasLoyaltyGift && (
              <p className="loyaltyGift">
                <LoaltySVG /> دارای اعتبار
              </p>
            )}
            <IconButton onClick={() => product?.handleIncrementAmount()}>
              <Add />
            </IconButton>
            <div className="counter">{product?.amount}</div>
            <IconButton
              onClick={() => {
                if (product?.amount === 1) {
                  setZeroModalOpen(true);
                } else {
                  product?.handleDecrementAmount();
                }
              }}
            >
              <Remove />
            </IconButton>
          </div>
          <p className="cost">
            {currency(product?.online_cost)} <span>تومان</span>
          </p>
          {product?.online_primary_cost !== product?.online_cost ? (
            <p className="primaryCost">
              {currency(product?.online_primary_cost)}
            </p>
          ) : (
            ''
          )}
        </Grid>
      )}
      <DrawerModal
        heightContent={'auto'}
        body={
          <Grid
            className="zeroStock "
            display={'flex'}
            justifyContent="center"
            container
          >
            <Grid mt={isDesktop ? 0 : 3} container justifyContent="center">
              {' '}
              <h2
                style={{
                  fontSize: isDesktop ? '24px' : '16px',
                  fontWeight: 500,
                  color: '#1C1B20'
                }}
              >
                از حذف این کالا از سبد خرید اطمینان دارید؟
              </h2>
            </Grid>
            <Grid mt={2} container justifyContent="center">
              <img
                style={{ width: '64px', height: '64px' }}
                src={product?.image}
                alt={product?.name}
              />
            </Grid>
            <Grid
              style={{ marginTop: '12px' }}
              container
              justifyContent="center"
            >
              <p
                style={{
                  margin: 0,
                  fontSize: '18px',
                  fontWeight: 400,
                  color: '#1C1B20B2'
                }}
              >
                {product?.product_label}
              </p>
            </Grid>
          </Grid>
        }
        header={
          !isDesktop && (
            <Grid mt={3} container justifyContent="flex-end">
              <IconButton onClick={() => setZeroModalOpen(false)}>
                <Close />
              </IconButton>
            </Grid>
          )
        }
        actions={
          <Grid mt={3} justifyContent="center" display={'flex'} px={4}>
            <Grid
              display={'flex'}
              mb={isDesktop || isDesktop ? 0 : '24px'}
              justifyContent={
                isDesktop || isDesktop ? 'center' : 'space-between'
              }
            >
              <Button
                style={{
                  padding: isDesktop ? '16px 26px' : '11px 16px',
                  marginLeft: '16px'
                }}
                onClick={() => {
                  product?.handleRemove();
                  setZeroModalOpen(false);
                }}
                color="primary"
                variant="contained"
              >
                حذف از سبد خرید
              </Button>
              <Button
                color="primary"
                variant="outlined"
                style={{ padding: isDesktop ? '16px 26px' : '11px 16px' }}
                onClick={() => {
                  product?.handleAddToFavorites();
                  setZeroModalOpen(false);
                }}
                // style={isDesktop ? {} : { fontSize: 12 }}
              >
                انتقال به علاقه مندی
              </Button>
            </Grid>
          </Grid>
        }
        setOpen={setZeroModalOpen}
        open={zeroModalOpen}
      />
    </Style>
  );
};

export default ProductCard;
