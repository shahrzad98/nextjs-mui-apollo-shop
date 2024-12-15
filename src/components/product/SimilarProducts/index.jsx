import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { SimilarProductsContainer } from './similarProducts.style';
import { Box, Divider, Stack, Typography, useMediaQuery } from '@mui/material';
import { useSuggestionProducts } from '@digify/theme-kit';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';
import ProductCard from '../../shared/ProductCard';

const SimilarProducts = () => {
  const { data: suggestedProducts } = useSuggestionProducts();
  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
  const isMobile = useIsMobile();
  const isLarge = useMediaQuery(theme => theme.breakpoints.down('lg'));

  return (
    <section>
      {!!suggestedProducts?.length && (
        <SimilarProductsContainer>
          <Box>
            <Typography color="text.primary" variant="subtitle1" mb={2}>
              محصولات مشابه
            </Typography>

            <Divider
              sx={{
                marginBottom: isMobile ? '12px' : '32px'
              }}
            />
          </Box>
          <Swiper
            modules={[Navigation]}
            navigation={!isMobile}
            slidesPerView={isSmall ? 1.9 : isMobile ? 3 : isLarge ? 3.6 : 3.9}
          >
            {suggestedProducts?.map((item, index) => (
              <SwiperSlide key={item?.id}>
                <Stack direction="row" position="relative">
                  {suggestedProducts?.length > index + 1 && (
                    <Box
                      className="similarProductDivider"
                      width="1px"
                      height="100px"
                    />
                  )}

                  <ProductCard
                    product={item}
                    renderWidth={isSmall ? 156 : isMobile ? 156 : 283}
                    renderHeight={isSmall ? 156 : isMobile ? 156 : 283}
                    imageWidth={isSmall ? 156 : isMobile ? 156 : 283 + 30}
                    imageHeight={isSmall ? 156 : isMobile ? 156 : 283 + 30}
                    disabled={item.orderable_count === 0}
                  />
                </Stack>
              </SwiperSlide>
            ))}
          </Swiper>
        </SimilarProductsContainer>
      )}
    </section>
  );
};

export default SimilarProducts;
