import { Box, Button, Grid, IconButton, Typography } from '@mui/material';
import React from 'react';
import ImageBase from 'src/components/shared/BaseImg';
import { addUnit, currency } from 'utils/currency';
import InfiniteScroll from 'react-infinite-scroll-component';
import Link from 'next/link';
import { MobileStyle } from './styled';
import { useRouter } from 'next/router';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';
export default function Items(props) {
  const router = useRouter();
  const isDeskop = !useIsMobile();

  return (
    <MobileStyle container>
      <Grid
        item
        xs={12}
        display={'flex'}
        justifyContent={'space-between'}
        sx={{
          padding: '0 16px',
          mb: '16px'
        }}
      >
        {isDeskop ? (
          <Typography variant="h6" component={'h6'}>
            علاقه‌مندی‌های شما
          </Typography>
        ) : (
          <Button
            onClick={() => router.back()}
            variant="raised"
            startIcon={<i className="icon-arrow-right1" />}
            sx={{ padding: '0' }}
          >
            <Typography
              fontSize="18px"
              color="#111"
              fontWeight={'500'}
              component={'h6'}
            >
              علاقه‌مندی‌های شما
            </Typography>
          </Button>
        )}
        <Typography variant="body2">
          {props.favorites.data.length} کالا
        </Typography>
      </Grid>

      <Grid
        container
        id="scrollableDivF"
        className="content"
        style={{
          maxHeight: '90vh',
          overflow: 'auto'
        }}
      >
        <InfiniteScroll
          dataLength={props.favorites.data.length}
          style={{ width: '100% ', display: 'flex' }}
          resolve
          conflicts
        >
          {props.favorites.data.map((item, ele) => {
            return (
              <>
                <Grid item xs={12} md={6}>
                  {ele === 0 ? <div className="top-border" /> : null}
                  <Box display={'flex'} padding={'16px'} width={'100%'}>
                    {/* Image Container */}
                    <Link href={item.link.href}>
                      <a>
                        <Box width={'116px'} height="116px" mr={'12px'}>
                          <ImageBase
                            src={item.image}
                            productPlaceHolder
                            size={{ h: 300, w: 300 }}
                            alt={item.label}
                            aspectRatio="1/1"
                          />
                        </Box>
                      </a>
                    </Link>
                    <Box className="listItem">
                      <div className="flexBetween">
                        <div>
                          <Link href={item.link.href}>
                            <a>
                              <Typography
                                variant="body1"
                                component={'h6'}
                                color="#1C1B20"
                              >
                                {item.label}
                              </Typography>
                            </a>
                          </Link>
                          {item?.orderable_count > 0 &&
                            item?.orderable_count < 5 &&
                            item?.orderable_count !== -1 && (
                              <Typography variant="body2" sx={{ color: 'red' }}>
                                {item.orderable_count} عدد باقی مانده
                              </Typography>
                            )}
                        </div>
                      </div>
                      {/* price section */}
                      <div>
                        <div>
                          {item?.orderable_count > 0 ||
                          item?.orderable_count === -1 ? (
                            <>
                              {item?.primaryCost !== item?.cost && (
                                <Typography
                                  variant="body1"
                                  component={'h6'}
                                  sx={{ textDecoration: 'line-through' }}
                                  color="text.secondary"
                                >
                                  {currency(item?.primaryCost)}
                                </Typography>
                              )}
                              <Typography variant="body1" component={'h6'}>
                                {addUnit(currency(item?.cost))}
                              </Typography>
                            </>
                          ) : (
                            <Typography variant="body1" component={'span'}>
                              ناموجود
                            </Typography>
                          )}
                        </div>
                      </div>
                    </Box>

                    <IconButton
                      onClick={() => item.handleRemoveFavorite()}
                      className="removeIcon"
                    >
                      <i
                        className="icon-remove"
                        style={{ fontSize: '20px', width: '20px' }}
                      />
                    </IconButton>
                  </Box>

                  <div className="top-border"></div>
                </Grid>
              </>
            );
          })}
        </InfiniteScroll>
      </Grid>
    </MobileStyle>
  );
}
