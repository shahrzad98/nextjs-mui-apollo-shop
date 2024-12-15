import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
// import { FreeMode, Navigation, Thumbs, Pagination } from 'swiper';
import styled from '@emotion/styled';
import { Grid, Skeleton } from '@mui/material';
import BaseImg from 'src/components/shared/BaseImg';
import SwiperCore, {
  Navigation,
  Thumbs,
  Pagination,
  FreeMode
} from 'swiper/core';

SwiperCore.use([Navigation, Thumbs, Pagination, FreeMode]);

const Style = styled(Grid)`
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 10px;
    background: #fff;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  body {
    background: #000;
    color: #000;
  }

  .swiper {
    width: 100%;
    height: ${props => (props.isDesktop ? '300px' : '400px')};
    margin-left: auto;
    margin-right: auto;
  }

  .swiper-slide {
    background-size: cover;
    background-position: center;
  }

  .mySwiper2 {
    height: ${props => (props.isDesktop ? '80%' : '')};
    width: 100%;
  }

  .mySwiper {
    height: 20%;
    box-sizing: border-box;
    padding: 10px 0;
  }

  .mySwiper .swiper-slide {
    width: 25%;
    height: 100%;
  }

  .mySwiper .swiper-slide-thumb-active {
    border: 1px solid rgba(28, 27, 32, 0.7);
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .swiper-pagination {
    bottom: 0;
  }
  .productImageDefult {
    width: '100%';
    height: '100%';
    object-fit: 'cover';
    display: 'block';
  }
`;

export default function App({ images, isDesktop, loading }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <Style isDesktop={isDesktop}>
      <Grid>
        <Swiper
          style={{
            '--swiper-navigation-color': '#000',
            '--swiper-pagination-color': '#000',
            '--swiper-navigation-size': `${isDesktop ? '30px' : '20px'}`,
            '--swiper-pagination-color': 'primary'
          }}
          spaceBetween={10}
          navigation
          pagination={isDesktop ? false : true}
          thumbs={{ swiper: thumbsSwiper }}
          className="mySwiper2"
        >
          {loading ? (
            <Skeleton
              style={{ marginTop: '-484px' }}
              variant="rectangular"
              height={950}
              animation="wave"
            />
          ) : images.length > 0 ? (
            images.map(item => (
              <SwiperSlide key={item.id}>
                <BaseImg
                  src={
                    images.length > 0
                      ? item.image
                      : '/static/assets/svg/productImage/productImage.svg'
                  }
                  alt={item.id}
                  q={100}
                  size={{ w: 800, h: 800 }}
                  objectFit="cover"
                  productPlaceHolder
                  aspectRatio="1 / 1"
                />
              </SwiperSlide>
            ))
          ) : (
            <img
              alt="productImage"
              src="/static/assets/svg/productImage/productImage.svg"
              style={{ width: '100%' }}
            />
          )}
        </Swiper>
        {isDesktop && (
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode
            watchSlidesProgress
            className="mySwiper"
          >
            {loading
              ? images.map(item => (
                  <SwiperSlide key={item.id} width={'168px'}>
                    <Skeleton
                      variant="rectangular"
                      height={120}
                      animation="wave"
                    />
                  </SwiperSlide>
                ))
              : images.map(item => (
                  <SwiperSlide key={item.id}>
                    <BaseImg
                      src={item.image}
                      alt={item.id}
                      size={{ w: 400, h: 400 }}
                      objectFit="cover"
                      productPlaceHolder
                    />
                  </SwiperSlide>
                ))}
          </Swiper>
        )}
      </Grid>
    </Style>
  );
}
