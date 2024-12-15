import { useCustomization, useProducts } from '@digify/theme-kit';
import { Box, Button, Grid, Stack } from '@mui/material';
import SectionTitle from 'src/components/shared/SectionTitle';
import React from 'react';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';
import ProductSkeleton from './skeleton';
import { Style, ProductsWrapperContainer } from './products.style';
import ProductCard from 'src/components/shared/ProductCard';
import Link from 'next/link';

const Products = () => {
  const isMobile = useIsMobile();
  const {
    data: { products }
  } = useCustomization('products');

  const {
    data: {
      productCard: { addToBasketShow }
    }
  } = useCustomization('productCard');

  const { data: productsData, loading } = useProducts(
    products.mode.value === 'sort'
      ? {
          ordering: products?.sortValue.value
        }
      : { product_ids: products.manualProducts.value }
  );
  const { products: showingProducts } = productsData;
  const imageSize = isMobile ? 156 : 282;
  const showProduct = showingProducts?.slice(0, 8);
  const lessthenSix = showingProducts.length <= 6;
  return (
    <Style
      lessthenSix={lessthenSix}
      id="products_list_scroll"
      component={'section'}
    >
      <Stack direction={'row'}>
        {loading ? (
          <ProductSkeleton />
        ) : !showProduct.length ? null : (
          <ProductsWrapperContainer
            lessthenSix={lessthenSix}
            width={!products?.length ? '150%' : 'inherit'}
          >
            <Stack
              className="products"
              justifyContent={isMobile ? 'center' : 'center'}
            >
              {(products.mode.value === 'sort' ||
                (products.mode.value !== 'sort' &&
                  products.manualProducts.value?.length !== 0)) && (
                <>
                  <SectionTitle title={products.title.value} />
                  {showProduct.map((item, index) => (
                    <Box
                      className={
                        isMobile ? 'cardWrapper' : 'cardWrapperWithDrawer'
                      }
                      key={item?.id}
                    >
                      <ProductCard
                        hasDiscount={item.discountPercent > 0}
                        hasBorderBottom={
                          isMobile
                            ? true
                            : index <
                              showProduct?.length -
                                (lessthenSix
                                  ? showProduct.length % 3 || 3
                                  : showProduct.length % 4 || 4)
                        }
                        addToBasketShow={addToBasketShow.value}
                        product={item}
                        renderWidth={imageSize}
                        renderHeight={imageSize}
                        imageWidth={imageSize + 30}
                        imageHeight={imageSize + 30}
                        disabled={item.orderable_count === 0}
                      />
                    </Box>
                  ))}
                </>
              )}
            </Stack>
            <Grid container justifyContent="center" mt={3}>
              <Link href={'/products'} passHref>
                <a>
                  <Button
                    sx={{
                      borderRadius: 30,
                      height: 48,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.5
                    }}
                  >
                    نمایش همه محصولات
                    <i className="icon-arrow-left" />
                  </Button>
                </a>
              </Link>
            </Grid>
          </ProductsWrapperContainer>
        )}
      </Stack>
    </Style>
  );
};

export default Products;
