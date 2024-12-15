import * as React from 'react';
import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { useEffect, useRef } from 'react';
import BaseImg from '../../shared/BaseImg';

const SubCarousel = ({ images, activeIndex, setActiveIndex, label }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    swiperRef.current?.slideTo(parseInt(activeIndex));
  }, [activeIndex]);

  const withPreview = !!images?.length
    ? images
    : [
        { id: 1, image: '/static/assets/svg/placeholder/mainProduct.svg' },
        { id: 2, image: '/static/assets/svg/placeholder/mainProduct.svg' },
        { id: 3, image: '/static/assets/svg/placeholder/mainProduct.svg' },
        { id: 4, image: '/static/assets/svg/placeholder/mainProduct.svg' }
      ];

  return (
    <Box className="subCarousel">
      <Swiper
        onSwiper={swiper => (swiperRef.current = swiper)}
        modules={[Navigation]}
        navigation
        slidesPerView={3.3}
        spaceBetween={14}
      >
        {withPreview?.map((item, index) => (
          <SwiperSlide key={item.id} onClick={() => setActiveIndex(index)}>
            <BaseImg
              style={{
                border:
                  index === activeIndex
                    ? ' 1px solid rgba(28, 27, 32, 0.7)'
                    : ''
              }}
              src={item.image}
              size={{ w: 136, h: 136 }}
              alt={label}
              q={100}
              productPlaceHolder
              objectFit="contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default SubCarousel;
