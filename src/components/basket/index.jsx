/* eslint-disable jsx-a11y/alt-text */
import { useBasket } from '@digify/theme-kit';
import { Add, Remove } from '@mui/icons-material';
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Menu,
  Typography
} from '@mui/material';
import React from 'react';
import Close from 'public/static/assets/svg/shared/Close';
import { addUnit, currency } from 'utils/currency';
import BaseImg from 'src/components/shared/BaseImg';
import Link from 'next/link';

const Basket = ({ links, open, handleClose, anchorEl }) => {
  const { steps, factor } = useBasket();

  const incrementAmount = item => {
    return (
      <Grid
        mt={1}
        alignItems={'center'}
        display={'flex'}
        height={'40px'}
        style={{
          border: '1px solid rgba(28, 27, 32, 0.2)',
          borderRadius: '2px'
        }}
      >
        <IconButton
          size="small"
          style={{ width: '28px' }}
          onClick={() => {
            item.handleIncrementAmount();
          }}
        >
          <Add
            style={{
              fontSize: '20px',
              color: 'rgba(28, 27, 32, 0.2)'
            }}
          />
        </IconButton>
        <span
          style={{
            textAlign: 'center',
            width: '28px',
            height: '100%',
            color: 'rgba(28, 27, 32, 0.4)',
            borderLeft: '1px solid rgba(28, 27, 32, 0.2)',
            borderRight: '1px solid rgba(28, 27, 32, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {item.amount}
        </span>

        <IconButton
          size="small"
          onClick={() => item.handleDecrementAmount()}
          style={{ width: '28px', display: 'flex' }}
        >
          <Remove
            style={{
              fontSize: '20px',
              color: 'hsla(252, 8.47457627118644%, 11.568627450980392%, 0.2)'
            }}
          />
        </IconButton>
      </Grid>
    );
  };

  const priceBasket = item => {
    const hasDiscount = item.online_cost < item.online_primary_cost;

    return (
      <Grid display={'flex'} flexDirection={'column'}>
        {hasDiscount && (
          <Typography
            variant="body1"
            style={{
              textDecoration: 'line-through',
              color: 'rgba(28, 27, 32, 0.4)',
              textAlign: 'end'
            }}
          >
            {currency(item.online_primary_cost)}
          </Typography>
        )}
        <Typography style={{ fontSize: '18px' }}>
          {addUnit(currency(item.online_cost))}
        </Typography>
      </Grid>
    );
  };

  return (
    <>
      <Menu
        id="basketMenu"
        keepMounted
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            maxWidth: '320px',
            overflow: 'visible',
            border: '1px solid #1C1B2033',
            filter: 'drop-shadow(0px 4px 4px rgba(0,0,0,0.25))',
            mt: 1.5,
            '& path': {
              stroke: '#1C1B2066'
            }
          }
        }}
        transformOrigin={{ horizontal: 'left', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      >
        <Grid container>
          <Grid
            item
            container
            display={'flex'}
            alignItems={'center'}
            sx={{ borderBottom: '1px solid rgba(28, 27, 32, 0.1)' }}
            justifyContent={'space-between'}
            padding={'8px 16px 8px 16px'}
          >
            <Typography variant="body1" style={{ margin: 0, fontSize: '18px' }}>
              سبدخرید
            </Typography>
            <span style={{ color: 'rgba(28, 27, 32, 0.4)' }}>
              {steps.items.products.length} کالا
            </span>
          </Grid>

          <Grid sx={{ maxHeight: 400, overflowY: 'scroll', width: '100%' }}>
            {steps.items?.products.map((item, index) => (
              <Grid key={index} sx={{ width: '100%' }}>
                <Grid
                  display={'flex'}
                  justifyContent={'space-between'}
                  alignItems={'start'}
                  padding={'0px 16px 0px 16px'}
                  mt={'12px'}
                >
                  <Grid display={'flex'}>
                    <Grid display={'flex'} width={'84px'} height={'84px'}>
                      <Box width={'100%'}>
                        <BaseImg
                          src={item?.image}
                          size={{ w: 800, h: 800 }}
                          objectFit="cover"
                          q={100}
                          productPlaceHolder
                          style={{
                            objectFit: 'cover',
                            width: 'inherit',
                            borderRadius: '2px'
                          }}
                        />
                      </Box>
                    </Grid>
                    <Grid
                      display={'flex'}
                      ml={'8px'}
                      mr={'8px'}
                      flexDirection={'column'}
                    >
                      <Typography
                        variant="body1"
                        style={{ margin: 0, fontSize: '16px' }}
                      >
                        {item.product_label}
                      </Typography>
                      <Grid display={'flex'} alignItems={'center'}>
                        {item.optionValue
                          ?.filter(item2 => item2.colorCode?.length > 0)
                          .map((e, i) => (
                            <Grid
                              item
                              style={{
                                display: 'flex',
                                alignItems: 'center'
                              }}
                              key={e.name}
                            >
                              <Box
                                width={12}
                                height={12}
                                borderRadius={'50%'}
                                border={'0.5px solid rgba(28, 27, 32, 0.4)'}
                                bgcolor={`${e.colorCode}`}
                                ml={'6px'}
                              ></Box>

                              <Typography
                                variant="body1"
                                color={'rgba(28, 27, 32, 0.4)'}
                                sx={{ fontSize: '14px' }}
                              >
                                {e.name} {e.value}
                                {i + 1 !== item?.optionValue?.length &&
                                  '،'}{' '}
                              </Typography>
                            </Grid>
                          ))}
                        {item?.optionValue
                          ?.filter(f => !f?.colorCode)
                          .map((e, i) => (
                            <Grid
                              item
                              style={{
                                display: 'flex',
                                alignItems: 'center'
                              }}
                              key={e.name}
                            >
                              <Typography
                                variant="body1"
                                color={'rgba(28, 27, 32, 0.4)'}
                                sx={{ fontSize: '14px' }}
                              >
                                {e.name} {e.value}
                                {i + 1 !==
                                  item?.optionValue?.filter(f => !f?.colorCode)
                                    .length && '،'}
                              </Typography>
                            </Grid>
                          ))}
                      </Grid>
                    </Grid>
                  </Grid>
                  <IconButton
                    style={{ padding: 2 }}
                    size="large"
                    onClick={() => item.handleRemove()}
                  >
                    <Close />
                  </IconButton>
                </Grid>
                <Grid
                  padding={'0px 16px 12px 16px'}
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={'space-between'}
                >
                  {incrementAmount(item)}
                  {priceBasket(item)}
                </Grid>
                <Divider sx={{ color: 'rgba(28, 27, 32, 0.1)' }} />
              </Grid>
            ))}
          </Grid>
          <Grid
            display={'flex'}
            sx={{ width: '100%' }}
            alignItems={'center'}
            justifyContent={'space-between'}
            padding={'8px 16px 8px 16px'}
          >
            <Link {...links} passHref>
              <a>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleClose}
                  sx={{
                    borderRadius: '2px',
                    height: '60px',
                    color: '#fff',
                    fontSize: '14px'
                  }}
                >
                  نمایش سبدخرید
                </Button>
              </a>
            </Link>
            <Grid display={'flex'} flexDirection={'column'}>
              <Typography
                variant="body1"
                style={{
                  color: 'rgba(28, 27, 32, 0.4)',
                  fontSize: '14px',
                  textAlign: 'center'
                }}
              >
                جمع کل سفارش
              </Typography>
              <Typography variant="body1" noWrap sx={{ fontSize: '18px' }}>
                {addUnit(currency(factor.totalCost))}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Menu>
    </>
  );
};

export default Basket;
