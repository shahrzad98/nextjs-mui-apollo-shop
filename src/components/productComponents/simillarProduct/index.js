import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Divider, Skeleton, Typography } from '@mui/material';
import { useSuggestionProducts } from '@digify/theme-kit';
import Card from './Card';

export default function SimillarProductComponent({ isDesktop, loading }) {
  const { data } = useSuggestionProducts();
  return (
    <>
      {loading ? (
        <Skeleton
          sx={{ marginTop: '24px' }}
          variant="text"
          animation="wave"
          width={200}
        />
      ) : (
        data && (
          <Typography
            textAlign={'left'}
            fontSize={isDesktop ? '24px' : '18px'}
            component={'h4'}
            mb={'16px'}
            variant={'h4'}
          >
            محصولات مشابه
          </Typography>
        )
      )}
      <Divider />
      {data && (
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={12}
          loop={false}
          navigation={true}
          className="simillar-product-swiper "
          style={{ height: '435px', marginTop: '32px' }}
        >
          {data &&
            data?.map((item, index) => (
              <SwiperSlide
                className="left-border"
                style={{
                  borderLeft: '1px solid',
                  borderImage: 'linear-gradient(to top, #fff,#D1D1D2) 1'
                }}
                key={`similar-product-${index}`}
              >
                <Card product={item} isDesktop={isDesktop} loading={loading} />
              </SwiperSlide>
            ))}
        </Swiper>
      )}
    </>
  );
}
