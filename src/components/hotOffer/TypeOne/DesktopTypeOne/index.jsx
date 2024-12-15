import { Box, Grid } from '@mui/material';
import DisplayProduct from './DisplayProduct';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/bundle';
import Card from '../Card';
import SideTitle from './SideTitle';
import React from 'react';
import { useCustomization } from '@digify/theme-kit';

SwiperCore.use([Navigation]);

function DesktopTypeOne({ products, productBanner, hotOfferLink }) {
  const {
    data: {
      hotOffer: {
        color: { value: color }
      }
    }
  } = useCustomization('hotOffer');

  return (
    <Box width="1">
      <Grid container rowGap={4}>
        <Grid item container bgcolor={color} minHeight={'430px'} p={6} pl={0}>
          <SideTitle hotOfferLink={hotOfferLink} />
          <Grid
            item
            container
            justifyContent={'center'}
            alignItems={'center'}
            xs={9}
          >
            {products?.[0] && (
              <DisplayProduct product={productBanner} color={color} />
            )}
          </Grid>
        </Grid>
        <Grid item xs={12} position="relative">
          <Swiper
            dir="rtl"
            spaceBetween={20}
            navigation={true}
            slidesPerView={'auto'}
            centerInsufficientSlides
            className="hot-offer-type1-swiper"
          >
            {products.map(product => (
              <SwiperSlide key={product.id}>
                <Box width={'100%'} minHeight={300}>
                  <Card product={product} />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default DesktopTypeOne;
