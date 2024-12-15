import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { Box, useMediaQuery } from '@mui/material';
import { useEffect, useRef } from 'react';
import BaseImg from '../../shared/BaseImg';

const MainCarousel = ({ images, setActiveIndex, activeIndex, label }) => {
  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
  const swiperRef = useRef(null);

  useEffect(() => {
    swiperRef.current?.slideTo(parseInt(activeIndex));
  }, [activeIndex]);

  const withPreview = !!images?.length
    ? images
    : [{ id: 1, image: '/static/assets/svg/placeholder/mainProduct.svg' }];

  return (
    <Box className="mainCarousel">
      <Swiper
        onSwiper={swiper => (swiperRef.current = swiper)}
        onSlideChange={S => setActiveIndex(S.activeIndex)}
        modules={[Navigation, Pagination]}
        navigation
        pagination={{
          enabled: isSmall,
          clickable: true
        }}
        fadeEffect={{ crossFade: true }}
        slidesPerView={1}
      >
        {withPreview?.map(item => (
          <SwiperSlide className="slideWrapper" key={item.id}>
            <BaseImg
              src={item.image}
              size={{ w: 490, h: 490 }}
              alt={label}
              q={100}
              objectFit="contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default MainCarousel;
