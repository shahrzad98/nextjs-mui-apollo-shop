import { Box, Grid, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';
import ImageBase from 'src/components/shared/BaseImg';
import { addUnit, currency } from 'utils/currency';
import InfiniteScroll from 'react-infinite-scroll-component';
import Link from 'next/link';
import { RootStyle, Border } from './styled';

export default function Items(props) {
  return (
    <RootStyle container>
      <Grid item xs={12} display={'flex'} justifyContent={'space-between'}>
        <Typography
          variant="subtitle1"
          component={'h6'}
          pl="16px"
          sx={{ mb: '37px' }}
        >
          علاقه مندی های شما
        </Typography>
        <Typography> {props.favorites.data.length} کالا</Typography>
      </Grid>
      <InfiniteScroll
        dataLength={props.favorites.data.length}
        style={{ width: '100% ', display: 'flex' }}
        next={() => props.favorites.handleLoadMore()}
        hasMore={props.favorites.hasMore}
      >
        <Grid
          className="container"
          container
          style={{
            maxHeight: '70vh'
          }}
        >
          {props.favorites.data.map((item, ele) => {
            return (
              <Grid item xs={12} md={6} key={item.id}>
                {ele === 0 || ele === 1 ? (
                  <Border
                    className="top-border"
                    odd={ele === 1 ? false : true}
                  />
                ) : null}
                <Box
                  display={'flex'}
                  p={'12px 16px'}
                  width={'100%'}
                  sx={{
                    ...(ele % 2 === 0 && { borderRight: '1px solid #e0e0e0' })
                  }}
                >
                  {/* Image Container */}
                  <Link href={item.link.href}>
                    <a>
                      <Box width={'160px'} height={'160px'} mr={2}>
                        <ImageBase
                          src={item.image}
                          productPlaceHolder
                          size={{ h: 160, w: 160 }}
                          alt={item.label}
                        />
                      </Box>
                    </a>
                  </Link>
                  {/* Data Container */}
                  <Box
                    sx={{
                      width: 'calc(100% - 160px)'
                    }}
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'space-between'}
                  >
                    {/* Up */}
                    <div className="flexBetween">
                      <div>
                        <Link href={item.link.href}>
                          <a>
                            <Typography
                              variant="body1"
                              component="h1"
                              color="#1C1B20"
                            >
                              {item.label}
                            </Typography>
                          </a>
                        </Link>
                        {item?.orderable_count > 0 &&
                          item?.orderable_count < 5 &&
                          item?.orderable_count !== -1 && (
                            <Typography
                              variant="caption"
                              sx={{ color: 'red', mt: 2 }}
                            >
                              {item.orderable_count} عدد باقی مانده
                            </Typography>
                          )}
                      </div>
                      <Stack justifyContent={'center'}>
                        <IconButton
                          className="removeIcon"
                          onClick={() => item.handleRemoveFavorite()}
                        >
                          <i
                            className="icon-remove"
                            style={{ fontSize: '20px' }}
                          />
                        </IconButton>
                      </Stack>
                    </div>
                    {/* Down */}
                    <div className="flexEnd">
                      <div>
                        {item?.orderable_count > 0 ||
                        item?.orderable_count === -1 ? (
                          <>
                            {item?.primaryCost !== item?.cost && (
                              <Typography
                                variant="body1"
                                sx={{ textDecoration: 'line-through' }}
                                color="text.secondary"
                                textAlign={'right'}
                              >
                                {currency(item?.primaryCost)}
                              </Typography>
                            )}
                            <Typography variant="body1">
                              {addUnit(currency(item?.cost))}
                            </Typography>
                          </>
                        ) : (
                          <Typography variant="body1" component="span">
                            ناموجود
                          </Typography>
                        )}
                      </div>
                    </div>
                  </Box>
                </Box>
                <Border
                  className="top-border"
                  width={'100%'}
                  odd={ele % 2 === 0}
                />
              </Grid>
            );
          })}
        </Grid>
      </InfiniteScroll>
    </RootStyle>
  );
}
