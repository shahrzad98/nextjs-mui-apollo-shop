import { Grid, Pagination, Stack, Typography } from '@mui/material';
import DisplayProduct from 'src/components/hotOffer/TypeOne/DesktopTypeOne/DisplayProduct';
import SideTitle from 'src/components/hotOffer/TypeOne/DesktopTypeOne/SideTitle';
import {
  ssrQueries,
  useCustomization,
  useProducts,
  withApollo
} from '@digify/theme-kit';
import React from 'react';
import ProductCard from 'src/components/hotOffer/ProductCard';
import { TypeOneSkeleton } from 'src/components/hotOffer/hotOfferSkeleton';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';
import InfiniteScroll from 'react-infinite-scroll-component';

const makePositions = (idx, desktop) => {
  let positions = [];
  let top = [];
  let right = [];

  if (desktop) {
    top = idx > 3 ? ['top'] : [];
    right = idx % 4 ? ['right'] : [];
  } else {
    top = idx > 1 ? ['top'] : [];
    right = idx % 2 ? ['right'] : [];
  }

  positions = [...top, ...right];
  return positions;
};

const hotOfferQuery = { is_hot_offer: true };

const HotOfferList = ({ products }) => {
  const desktop = !useIsMobile();

  return (
    <Grid container mt={5}>
      {products?.map((product, i) => (
        <Grid
          key={product.id}
          item
          md={3}
          xs={6}
          width={'100%'}
          minHeight={300}
        >
          <ProductCard
            imagePadding={2}
            product={product}
            positions={makePositions(i, desktop)}
          />
        </Grid>
      ))}
    </Grid>
  );
};
const Index = () => {
  const {
    data: productsData,
    loading,
    pagination,
    handleLoadMore,
    hasMore
  } = useProducts(hotOfferQuery);
  const { products } = productsData;
  const {
    data: {
      hotOffer: {
        color: { value: color }
      }
    }
  } = useCustomization('hotOffer');

  const [productBannerIndex, setProductBannerIndex] = React.useState(0);

  const desktop = !useIsMobile();
  const mobile = useIsMobile();

  React.useEffect(() => {
    if (products?.length > 1) {
      const interval = setInterval(() => {
        setProductBannerIndex(prev => {
          if (prev < products.length - 1) {
            return ++prev;
          } else {
            return 0;
          }
        });
      }, 5500);
      return () => {
        clearInterval(interval);
      };
    }
  }, [productBannerIndex, products]);

  const productBanner = React.useMemo(() => {
    return products?.[productBannerIndex];
  }, [productBannerIndex, products]);

  return loading ? (
    <Grid container p={2} maxWidth={'1280px'} m={'auto'}>
      <TypeOneSkeleton isPage />
    </Grid>
  ) : (
    <Grid container maxWidth="1280px" m="auto" pb={8}>
      <Grid container px={mobile && 2} component="section">
        <Grid
          item
          container
          bgcolor={color}
          p={6}
          pl={mobile ? 6 : 0}
          py={mobile ? 5 : 6}
        >
          <SideTitle showAll={false} direction={mobile ? 'row' : 'column'} />
          {!mobile && products.length > 0 && (
            <Grid
              item
              container
              justifyContent={'center'}
              alignItems={'center'}
              xs={9}
            >
              <DisplayProduct product={productBanner} color={color} />
            </Grid>
          )}
        </Grid>
      </Grid>
      {!mobile && (
        <Typography variant="subtitle1" mt={5}>
          همه محصولات پیشنهاد ویژه
        </Typography>
      )}
      <Grid width="1" component="section">
        {desktop ? (
          <HotOfferList products={products} />
        ) : (
          <Grid width="1" id="hot-offer-list" maxHeight="80vh" overflow="auto">
            <InfiniteScroll
              dataLength={products.length}
              next={handleLoadMore}
              hasMore={hasMore}
              scrollableTarget="hot-offer-list"
            >
              <HotOfferList products={products} />
            </InfiniteScroll>
          </Grid>
        )}
      </Grid>

      {desktop && pagination.pageCount > 1 && (
        <Grid container justifyContent="center" mt={5}>
          <Stack spacing={2}>
            <Pagination
              color="standard"
              count={pagination.pageCount}
              shape="rounded"
              page={pagination.page}
              onChange={async (e, newPage) => {
                await pagination.handleChangePage(newPage);
              }}
            />
          </Stack>
        </Grid>
      )}
    </Grid>
  );
};

export default withApollo(Index)([ssrQueries.getProducts(hotOfferQuery)]);
