import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation, Lazy, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/bundle';
import 'swiper/css/lazy';
import { useCustomization, useUser } from '@digify/theme-kit';
import { useMemo } from 'react';
import Content from './Content';
import ConditionalLink from 'src/components/shared/conditionalLink';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';
import { RootMain } from './styled';
import BaseImg from 'src/components/shared/BaseImg';
import { Box } from '@mui/material';

SwiperCore.use([Pagination, Navigation, Lazy, Autoplay]);

function Banner() {
  const isDesktop = !useIsMobile();
  const {
    data: { banner }
  } = useCustomization('banner');

  const { data } = useUser();
  const { userRole } = data;
  const delay = useMemo(
    () =>
      banner?.autoPlay?.value ? +banner?.slidesSpeed?.value * 1000 : 3000000,
    [banner]
  );

  const banners = useMemo(() => {
    if (!!banner?.selectedBanner?.value && userRole === 'manager')
      return banner?.banners?.value?.filter(
        item => item.id === banner?.selectedBanner?.value
      );
    else return banner?.banners?.value;
  }, [banner, userRole]);

  return (
    <RootMain
      id="banner_scroll"
      dir="rtl"
      isFullPage={banner?.isFullPage?.value}
    >
      <Swiper
        init={true}
        dir="rtl"
        pagination={true}
        lazy={true}
        navigation={!!isDesktop}
        // autoHeight={true}
        className="banner-swiper"
        autoplay={{
          delay,
          disableOnInteraction: false
        }}
      >
        {banners?.map(item => (
          <SwiperSlide
            key={item.id ? item.id : Math.floor(Math.random() * 10000)}
          >
            <ConditionalLink
              // key={`banner-${Math.random(100) * index}`}
              href={item?.link}
              target="_blank"
              condition={item?.link}
            >
              <Box width="1">
                <BaseImg
                  src={item?.image}
                  size={{ w: 1280, h: 720 }}
                  q={90}
                  aspectRatio="16/9"
                  alt="Hero"
                  objectFit="cover"
                  priority={true}
                />
                <Content data={item} />
              </Box>
            </ConditionalLink>
          </SwiperSlide>
        ))}
      </Swiper>
    </RootMain>
  );
}

export default Banner;
