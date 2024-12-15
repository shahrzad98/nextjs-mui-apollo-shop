import { useRef } from 'react';
import { Box, Grid } from '@mui/material';
import SideTitle from './SideTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import 'swiper/css/bundle';
import Card from './Card';

SwiperCore.use([Grid, Navigation]);

function DesktopTypeThree({ products, hotOfferLink }) {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <Box width="1">
      <Grid container width="1" m={'auto'} dir="rtl">
        <SideTitle
          refs={{ navigationPrevRef, navigationNextRef }}
          hotOfferLink={hotOfferLink}
        />
        <Grid item container xs={9} pl={3} height={'850px'} alignItems="center">
          {products.length > 0 && (
            <Swiper
              dir="rtl"
              slidesPerView={'auto'}
              grid={{
                fill: 'column',
                rows: 2
              }}
              spaceBetween={30}
              slidesOffsetAfter={
                -1 * Math.floor(products.length / 2) * (304 + 30)
              }
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current
              }}
              onBeforeInit={swiper => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
              }}
              className="hot-offer-type3-swiper"
            >
              {products.map(product => (
                <SwiperSlide key={product.id}>
                  <Box width={'304px'}>
                    <Card product={product} />
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}

DesktopTypeThree.propTypes = {};

export default DesktopTypeThree;
