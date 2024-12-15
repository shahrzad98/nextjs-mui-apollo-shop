import { Grid, Typography, Box } from '@mui/material';
import { currency, addUnit } from 'utils/currency';
import React from 'react';
import BaseImg from 'src/components/shared/BaseImg';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';

export default function DestopLayout({ item }) {
  const isDesktop = !useIsMobile();
  return (
    <>
      <Grid container>
        <Grid item container>
          <Grid item xs={3} md={1}>
            <BaseImg
              size={{ w: 83, h: 83 }}
              src={item?.product?.details?.variant?.images[0]?.image}
              productPlaceHolder
              alt="order"
              q={90}
            />
          </Grid>
          <Grid item container xs={8} md={10} alignItems="center" ml={3}>
            <Grid
              item
              xs={12}
              md={3}
              display={'flex'}
              justifyContent={{ xs: 'space-between', md: 'none' }}
            >
              <Box>
                <Typography fontSize={{ xs: '14px', md: '18px' }}>
                  {item?.product?.product_label}
                </Typography>
              </Box>
              {(!isDesktop && item.statusDisplay === 'rejected') ||
                (item.statusDisplay === 'accepted' && (
                  <Box>
                    <HighlightOffIcon style={{ color: '#FF5875' }} />
                  </Box>
                ))}
            </Grid>
            {isDesktop && (
              <Grid item xs={2} color="text.secondary">
                {item.count}عدد
              </Grid>
            )}
            <Grid item xs={12} md={4} display="flex" alignItems="center">
              {/* <Box
                                marginRight={'8px'}
                                border={`0.5px solid red`}
                                display={'flex'}
                                width={isDesktop ? '16px' : '12px'}
                                height={isDesktop ? '16px' : '12px'}
                                borderRadius={'50%'}
                                bgcolor={'red'}
                            ></Box> */}

              {item.product?.details?.variant?.option_values?.length ? (
                <Box display={'flex'}>
                  {item.product?.details?.variant?.option_values?.map(
                    (ele, index) => (
                      <Typography key={index} color="text.secondary">
                        {` ${ele?.option?.name ?? ''} ${ele?.value ?? ''} ,`}
                      </Typography>
                    )
                  )}
                </Box>
              ) : null}
            </Grid>
            {isDesktop && (
              <Grid item xs={3}>
                <Typography
                  component={'h1'}
                  textAlign="right"
                  fontSize={'18px'}
                >
                  {addUnit(currency(item?.product?.single_primary_cost))}
                </Typography>
              </Grid>
            )}
            {isDesktop && (
              <Grid item xs={12} display="flex">
                <Typography color="text.secondary">علت مرجوعی: </Typography>
                <Typography ml={2}>{item?.reason}</Typography>
              </Grid>
            )}
          </Grid>

          {!isDesktop && (
            <Grid
              item
              xs={12}
              mt={3}
              display="flex"
              justifyContent={'space-between'}
            >
              <Box display="flex">
                <Typography fontSize={'14px'}>علت مرجوعی: </Typography>
                <Typography fontSize={'14px'} ml={1}>
                  {item?.reason}
                </Typography>
              </Box>
              <Box>
                <Typography
                  component={'h1'}
                  textAlign="right"
                  fontSize={'14px'}
                >
                  {addUnit(currency(item?.product?.single_primary_cost))}
                </Typography>
              </Box>
            </Grid>
          )}
        </Grid>
      </Grid>
    </>
  );
}
