import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { useRef } from 'react';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';
import { Navigation } from 'swiper';

const VariantCarousel = ({
  variants,
  selectedVariant,
  handleSelectedVariant
}) => {
  const swiperRef = useRef(null);
  const isLessThanFive = variants.length < 5;
  const isMobile = useIsMobile();
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="baseline"
      mb={3}
      className={isLessThanFive ? 'lessThanFive' : ''}
    >
      {!isMobile && (
        <Box
          onClick={() => {
            swiperRef.current?.slidePrev();
          }}
          className="arrow"
        >
          <Image
            width={15}
            height={15}
            src="/static/assets/svg/product/arrowRight.svg"
            alt="arrow"
          />
        </Box>
      )}
      <Swiper
        scrollbar={{ draggable: true }}
        modules={[Navigation]}
        navigation
        slidesPerView={2}
        spaceBetween={14}
        onBeforeInit={swiper => {
          swiperRef.current = swiper;
        }}
      >
        {variants?.map(el => {
          return (
            <SwiperSlide key={el.id} onClick={() => handleSelectedVariant(el)}>
              <Box
                className={`variantSlide ${
                  selectedVariant?.option_values.find(T => T.id === el.id)
                    ? 'activeOption'
                    : ''
                }`}
              >
                <Typography variant="body1">{el.value}</Typography>
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {!isMobile && (
        <Box
          onClick={() => {
            swiperRef.current?.slideNext();
          }}
          className="arrow"
        >
          <Image
            width={15}
            height={15}
            src="/static/assets/svg/product/arrowLeft.svg"
            alt="arrow"
          />
        </Box>
      )}
    </Stack>
  );
};

export default VariantCarousel;
