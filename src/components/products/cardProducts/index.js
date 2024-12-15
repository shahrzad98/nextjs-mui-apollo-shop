import { Box, Grid, Typography, Link as MuiLink } from '@mui/material';
import BaseImg from 'src/components/shared/BaseImg';
import React from 'react';
import { currency } from 'utils/currency';
import Link from 'next/link';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';
import { Style } from './style';

const CardProducts = ({ products, index, isHome, isMobile }) => {
  const isDesktop = !useIsMobile();
  return (
    <>
      <Grid
        display={'flex'}
        flexDirection={'column'}
        item
        mb={isDesktop ? 2 : 1}
        xs={6}
        md={4}
      >
        <Style>
          {!isHome ||
          (isHome && !isMobile && index < 3) ||
          (isHome && isMobile && index < 6) ? (
            <Grid className="bottom-border" container></Grid>
          ) : null}
          {(((index + 1) % 3 !== 0 && !isHome) ||
            (isHome && !isMobile && (index + 1) % 3 !== 0) ||
            (isHome && isMobile && (index + 1) % 2 !== 0)) && (
            <Grid className="left-border" container></Grid>
          )}
          <Link passHref {...products?.link}>
            <MuiLink
              sx={{
                boxShadow: 'none',
                outline: 0,
                width: '100%',
                padding: 0,
                px: isDesktop ? 2 : 1,
                paddingBottom: isDesktop ? 4 : 3,
                textDecoration: 'none'
              }}
            >
              <Grid
                item
                container
                width={'100%'}
                flexDirection={'column'}
                alignItems={'center'}
              >
                <Grid item width={'100%'} flexDirection={'row'}>
                  <Box>
                    <BaseImg
                      className="img-products-card"
                      src={products?.image}
                      size={{ w: 300, h: 300 }}
                      alt={products?.label}
                      q={100}
                      productPlaceHolder
                      objectFit="cover"
                    />
                  </Box>
                </Grid>

                <Grid width="1">
                  <Typography
                    sx={{
                      width: '1',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',
                      textAlign: isDesktop ? 'center' : 'left'
                    }}
                    mt={1.5}
                    variant="body1"
                    color={'#1C1B20'}
                  >
                    {products?.label}
                  </Typography>
                </Grid>
                <Grid width="1">
                  <Typography
                    variant="subtitle1"
                    color={'#1C1B20'}
                    textAlign={isDesktop ? 'center' : 'left'}
                  >
                    {products.orderable_count !== 0 ? (
                      <>
                        {currency(products?.cost)}{' '}
                        <Typography
                          variant="body2"
                          color="inherit"
                          component="span"
                        >
                          تومان
                        </Typography>
                      </>
                    ) : (
                      'ناموجود'
                    )}
                  </Typography>
                </Grid>
                <Grid
                  display={'flex'}
                  width={'1'}
                  justifyContent={isDesktop ? 'center' : 'left'}
                  gap={1}
                  marginTop={1.5}
                  height={isDesktop ? '16px' : '12px'}
                >
                  {products.colors.map(item => (
                    <Box
                      border={'1px solid rgba(28, 27, 32, 0.4)'}
                      key={item.id}
                      display={'flex'}
                      width={isDesktop ? '16px' : '12px'}
                      height={isDesktop ? '16px' : '12px'}
                      borderRadius={'50%'}
                      bgcolor={item.color_code}
                    />
                  ))}
                </Grid>
              </Grid>
            </MuiLink>
          </Link>
        </Style>
      </Grid>
    </>
  );
};

export default CardProducts;
