import React from 'react';
import { Grid, Skeleton, Typography, Link as MuiLink } from '@mui/material';
import { Box } from '@mui/system';
import { addUnit, currency } from 'utils/currency';
import Link from 'next/link';
import BaseImg from 'src/components/shared/BaseImg';
import styled from '@emotion/styled';

const StyledMuiLink = styled(MuiLink)`
  text-decoration: none;
  color: unset;
  &:hover {
    text-decoration: none;
    color: unset;
  }
`;

const Card = ({ product, isDesktop, loading }) => {
  return (
    <>
      <Link {...product?.link} passHref>
        <StyledMuiLink>
          <Grid item>
            <Grid
              container
              flexDirection={'column'}
              alignItems={'center'}
              spacing={2}
            >
              <Grid
                xs
                flexDirection={'row'}
                sx={
                  isDesktop
                    ? { width: 220, height: 220 }
                    : { width: 180, height: 180 }
                }
                item
              >
                {loading ? (
                  <Skeleton variant="rectangular" width={200} height={200} />
                ) : (
                  <Box mr={!isDesktop ? 3 : 0}>
                    <BaseImg
                      src={product?.image}
                      size={{ w: 800, h: 800 }}
                      alt={product?.label}
                      objectFit="cover"
                      q={100}
                      productPlaceHolder
                    />
                  </Box>
                )}
              </Grid>
              <Grid item>
                {loading ? (
                  <Skeleton variant="text" animation="wave" width={200} />
                ) : (
                  <Typography
                    sx={isDesktop ? { fontSize: '18px' } : { fontSize: '16px' }}
                    pt={'11px'}
                    variant="body2"
                  >
                    {product?.label}
                  </Typography>
                )}
              </Grid>
              <Grid item>
                {loading ? (
                  <Skeleton variant="text" animation="wave" width={200} />
                ) : (
                  <Typography
                    variant="body2"
                    fontWeight={'bold'}
                    className="fs-24 "
                    sx={
                      isDesktop
                        ? { fontSize: '24px', direction: 'ltr' }
                        : { fontSize: '18px', direction: 'ltr' }
                    }
                  >
                    {product?.primaryCost === product?.cost
                      ? addUnit(currency(product?.primaryCost))
                      : addUnit(currency(product?.cost))}
                  </Typography>
                )}
              </Grid>
              <Grid item sx={{ minHeight: 30 }}>
                <Grid container spacing={1}>
                  {loading ? (
                    <Skeleton variant="text" animation="wave" width={200} />
                  ) : (
                    !!product?.colors?.length &&
                    product.colors.map(item => (
                      <Grid key={`product-color-${item.id}`} item>
                        <Box
                          width={16}
                          height={16}
                          borderRadius={'50%'}
                          bgcolor={item?.color_code}
                        ></Box>
                      </Grid>
                    ))
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </StyledMuiLink>
      </Link>
    </>
  );
};

export default Card;
