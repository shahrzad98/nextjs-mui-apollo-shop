import * as React from 'react';
import { Stack, Typography, useMediaQuery } from '@mui/material';
import ProductContainer, { StyledSection } from './product.style';
import Variant from 'src/components/product/Variant';
import ProductInfo from 'src/components/product/Info';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';

import ProductInfoMobile from 'src/components/product/Info/InfoMobile';
import SimilarProducts from 'src/components/product/SimilarProducts';
import AddToBasketMobile from 'src/components/product/AddToBasketMobile';
import {
  ssrQueries,
  useProduct,
  withApollo,
  useStoreInfo,
  useBreadcrumb,
  useProductFeedback
} from '@digify/theme-kit';
import VariantActionMobile from 'src/components/product/Variant/VariantActionMobile';
import ProductSkeleton from 'src/components/product/skeleton/ProductSkeleton';
import Carousel from 'src/components/product/Carousel';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import ProductStructuredData from 'src/components/structuredDataHead/Product';
import BreadcrumbStructuredData from 'src/components/structuredDataHead/Breadcrumb';
import getChildrenDepth from 'utils/getChildrenDepth';

const productFeedbackInit = { limit: 1, offset: 0 };

const Product = () => {
  const {
    data: productData,
    handleSelectedVariant,
    loading,
    addOrRemoveToFavorites,
    favoriteLoading,
    handleAddToBasket,
    updateBasketLoading
  } = useProduct();
  const { data: breadcrumbs } = useBreadcrumb();
  const {
    data: { results: feedbackResults }
  } = useProductFeedback(productFeedbackInit);

  const router = useRouter();
  const isMobile = useIsMobile();
  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
  const { domain, name: storeName } = useStoreInfo();

  const {
    images,
    selectedVariant,
    options,
    is_favorite,
    label,
    description,
    average_score,
    feedback_count,
    category
  } = productData;
  const [openBasketAlert, setOpenBasketAlert] = useState(false);

  return (
    <>
      <Head>
        <title>{label}</title>
        <meta name="description" content={description} />
        <meta name="type" content="product" />
        <meta property="og:type" content="product" />
        <meta property="og:title" content={label} />
        <meta property="og:price" content={selectedVariant?.cost} />
        <meta
          property="og:url"
          content={decodeURI(`${domain + router.asPath}`)}
        />
        <meta
          property="og:availability"
          content={
            parseInt(selectedVariant?.orderable_count) === 0
              ? 'out of stock'
              : 'in stock'
          }
        />
        <meta
          property="og:image"
          content={
            images?.length
              ? `${images[0]?.image}?x-img=v1/optimize,q_80/resize,h_300,w_300`
              : ''
          }
        />
      </Head>
      <ProductStructuredData
        id={router.query.product.join('-')}
        name={label}
        description={`خرید اینترنتی ${label} و قیمت انواع محصولات ${category?.title} از فروشگاه آنلاین ${storeName}. جدیدترین محصولات ${category?.title} با بهترین قیمت در ${storeName}`}
        price={(selectedVariant?.cost || 0) * 10}
        averageScore={average_score}
        voterNumber={feedback_count}
        imageURLs={images.map(img => img.image)}
        comments={feedbackResults}
      />
      <BreadcrumbStructuredData
        list={[
          { name: 'همه محصولات', url: decodeURI(domain + '/products') },
          ...getChildrenDepth(breadcrumbs).map(bc => ({
            name: bc.title,
            url: decodeURI(
              domain +
                '/products/' +
                bc.link?.href.query.categoryNames.join('/')
            )
          })),
          { name: label, url: decodeURI(domain + router.asPath) }
        ]}
      />
      <StyledSection>
        {loading ? (
          <ProductSkeleton />
        ) : (
          <ProductContainer>
            {openBasketAlert && !isMobile && (
              <Stack className="addToBasketFeed">
                <Stack
                  mx={3}
                  alignItems="center"
                  onClick={() => {
                    setOpenBasketAlert(false);
                  }}
                >
                  <i className="icon-remove" />
                </Stack>
                <Stack direction="row" alignItems="center">
                  <i className="icon-Shopping-E-Commerce__x2F__Shopping-Bags__x2F__shopping-bag-side_1" />
                  <Typography ml={1}>
                    {label}، به سبد خرید شما اضافه شد.
                  </Typography>
                </Stack>
                <Typography
                  className="goToBasket"
                  onClick={() => router.push(`/profile/cart`)}
                >
                  مشاهده سبد خرید
                </Typography>
              </Stack>
            )}
            <Stack
              direction={isSmall ? 'column' : 'row'}
              mb={
                isMobile
                  ? 1
                  : selectedVariant?.loyalty_gift > 0
                  ? '112px'
                  : '66px'
              }
              className="productInfoWrapper"
            >
              {isSmall && (
                <VariantActionMobile
                  isFavorite={is_favorite}
                  addOrRemoveToFavorites={addOrRemoveToFavorites}
                  favoriteLoading={favoriteLoading}
                  label={productData?.label}
                />
              )}
              <Carousel images={images} label={label} />
              <Variant
                options={options}
                selectedVariant={selectedVariant}
                productInfo={productData}
                handleSelectedVariant={handleSelectedVariant}
                handleAddToBasket={handleAddToBasket}
                updateBasketLoading={updateBasketLoading}
                isFavorite={is_favorite}
                addOrRemoveToFavorites={addOrRemoveToFavorites}
                favoriteLoading={favoriteLoading}
                setOpenBasketAlert={setOpenBasketAlert}
              />
            </Stack>

            {isSmall ? (
              <ProductInfoMobile
                description={productData?.description}
                features={productData?.features}
              />
            ) : (
              <ProductInfo
                description={productData?.description}
                features={productData?.features}
              />
            )}
            <SimilarProducts />
            {isSmall && (
              <AddToBasketMobile
                selectedVariant={selectedVariant}
                handleAddToBasket={handleAddToBasket}
                updateBasketLoading={updateBasketLoading}
                openBasketAlert={openBasketAlert}
                setOpenBasketAlert={setOpenBasketAlert}
              />
            )}
          </ProductContainer>
        )}
      </StyledSection>
    </>
  );
};

export default withApollo(Product)([
  ssrQueries.getProduct(),
  ssrQueries.getBreadcrumb(),
  ssrQueries.getSuggestionProducts(),
  ssrQueries.getProductFeedback(productFeedbackInit)
]);
