import { useState, useRef } from 'react';
import { Box, Grid, IconButton } from '@mui/material';
import ProductCard from '../ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/bundle';
import SideTitle from './SideTitle';
import HotOfferTitleSVG from 'public/static/assets/img/hotOffer/hotOfferTitleSVG';
import ShowMore from '../ShowMore';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import { useCustomization } from '@digify/theme-kit';
import { getReversedColor } from 'utils/isLight';
import { TypeTwoSkeleton } from '../hotOfferSkeleton';

SwiperCore.use([Navigation]);

function TypeTwo({ products, hotOfferLink, loading }) {
  const {
    data: {
      hotOffer: {
        color: { value: color }
      }
    }
  } = useCustomization('hotOffer');

  const reversedColor = getReversedColor(color);

  const isDesktop = !useIsMobile();

  const [displaySideTitle, setDisplaySideTitle] = useState(true);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return loading ? (
    <TypeTwoSkeleton />
  ) : (
    <Box bgcolor={color} minHeight={'380px'} width="1" py={3}>
      <Grid
        container
        display="flex"
        flexDirection="row"
        flexWrap="nowrap"
        justifyContent="space-between"
        width="1"
      >
        <Grid
          sx={{
            transition: '0.3s',
            opacity: displaySideTitle ? 1 : 0,
            width: isDesktop ? '20%' : displaySideTitle ? '102px' : 0,
            position: 'relative',
            minHeight: 300
          }}
        >
          <SideTitle />
          {isDesktop && (
            <Box
              display="flex"
              width="1"
              justifyContent="center"
              gap={4}
              position="absolute"
              left={0}
              bottom="-16px"
            >
              <IconButton
                ref={navigationNextRef}
                sx={{ background: '#FEFEFE33', color: reversedColor }}
              >
                <ArrowForwardIos />
              </IconButton>
              <IconButton
                ref={navigationPrevRef}
                sx={{ background: '#FEFEFE33', color: reversedColor }}
              >
                <ArrowBackIosNew />
              </IconButton>
            </Box>
          )}
        </Grid>
        <Grid
          container
          sx={{
            transition: '0.3s',
            width: isDesktop
              ? '80%'
              : displaySideTitle
              ? 'calc(100% - 102px)'
              : '1'
          }}
        >
          <Swiper
            onSlideChange={swiper => {
              if (!isDesktop) {
                setDisplaySideTitle(swiper.activeIndex == 0);
              } else {
                setDisplaySideTitle(true);
              }
            }}
            dir="rtl"
            spaceBetween={isDesktop ? 30 : 16}
            navigation={
              isDesktop && {
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current
              }
            }
            onBeforeInit={swiper => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            slidesPerView={'auto'}
            className="hot-offer-type2-swiper"
          >
            {products.map(product => (
              <SwiperSlide key={product.id} dir="ltr">
                <Grid
                  item
                  sx={theme => ({
                    width: '156px',
                    [theme.breakpoints.up('md')]: {
                      width: '283px'
                    }
                  })}
                >
                  <ProductCard product={product} />
                </Grid>
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </Grid>
      <Grid
        item
        container
        justifyContent={'space-between'}
        alignItems={'center'}
        pt={4}
        width="1"
        px={4}
      >
        <Box
          sx={theme => ({
            '& path': {
              stroke: reversedColor
            },
            '& svg': {
              [theme.breakpoints.down('md')]: {
                width: '43px',
                height: '43px'
              }
            }
          })}
        >
          {!isDesktop && <HotOfferTitleSVG />}
        </Box>

        <Box>
          <ShowMore href={hotOfferLink} />
        </Box>
      </Grid>
    </Box>
  );
}

export default TypeTwo;
