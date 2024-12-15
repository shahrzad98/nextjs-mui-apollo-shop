import * as React from 'react';
import ProductCard from '../../shared/ProductCard';
import { Box, Stack, useMediaQuery } from '@mui/material';
import { ProductsWrapperContainer } from './productWrapper.style';
import SortDesktop from '../sort/SortDesktop';
import useIsMobile from '../../shared/Hooks/useIsMobile';
import EmptyCategory from '../EmptyCategory';
import ProductsSkeleton from '../productsSkeleton';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useCustomization } from '@digify/theme-kit';

const ProductsWrapper = ({
  products,
  loading,
  filterParams,
  handleLoadMore,
  hasMore
}) => {
  const isMobile = useIsMobile();
  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
  const {
    data: {
      productCard: { addToBasketShow }
    }
  } = useCustomization('productCard');
  return (
    <>
      <ProductsWrapperContainer
        addToBasketShow={addToBasketShow.value}
        width={!products?.length ? '150%' : 'inherit'}
      >
        {!isMobile && <SortDesktop filterParams={filterParams} />}

        {loading ? (
          <ProductsSkeleton />
        ) : (
          <InfiniteScroll
            loader={<ProductsSkeleton numberOfSkeletons={isMobile ? 2 : 3} />}
            dataLength={products.length}
            next={handleLoadMore}
            hasMore={hasMore}
          >
            <Stack className="products">
              {!!products?.length ? (
                products.map((item, index) => (
                  <Box
                    className={
                      isSmall ? 'cardWrapper' : 'cardWrapperWithDrawer'
                    }
                    key={item.id}
                  >
                    <ProductCard
                      hasBorderBottom={
                        index < products?.length - (products.length % 3 || 3)
                      }
                      addToBasketShow={addToBasketShow.value}
                      product={item}
                      renderWidth={isSmall ? 155 : isMobile ? 160 : 282}
                      renderHeight={isSmall ? 155 : isMobile ? 160 : 282}
                      imageWidth={isSmall ? 155 : isMobile ? 220 : 282 + 30}
                      imageHeight={isSmall ? 155 : isMobile ? 160 : 282 + 30}
                      disabled={item.orderable_count === 0}
                    />
                  </Box>
                ))
              ) : (
                <EmptyCategory />
              )}
            </Stack>
          </InfiniteScroll>
        )}
      </ProductsWrapperContainer>
    </>
  );
};

export default ProductsWrapper;
