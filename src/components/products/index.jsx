import { Grid, Pagination, Stack, Typography } from '@mui/material';
import NotFound from 'public/static/assets/svg/categories/notFound';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import CardProducts from './cardProducts';
import { StyledContainer } from './products.style';
import Card from '../shared/ProductCard';

const ProductsComponent = ({
  products,
  pagination,
  isDesktop,
  hasMore,
  handleLoadMore
}) => {
  return (
    <StyledContainer>
      <Grid container>
        {isDesktop ? (
          <>
            <Grid
              item
              style={{ marginTop: '32px' }}
              container
              display={'flex'}
              columns={{ xs: 12, sm: 9, md: 12 }}
            >
              {products.length > 0 ? (
                products.map(item => (
                  // <CardProducts
                  //   products={item}
                  //   loading={loading}
                  //   key={`products-card-${index}`}
                  //   index={index}
                  // />

                  <Card product={item} />
                ))
              ) : (
                <>
                  <Grid
                    width={'100%'}
                    height={'100vh'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    flexDirection={'column'}
                  >
                    <NotFound />
                    <Typography
                      variant="h4"
                      mt={'32px'}
                      sx={{
                        fontSize: '18px',
                        color: ' rgba(28, 27, 32, 0.4)'
                      }}
                    >
                      محصولی با این مشخصات پیدا نشد!
                    </Typography>
                  </Grid>
                </>
              )}
            </Grid>

            {pagination.pageCount > 0 && (
              <Grid
                item
                container
                justifyContent={'center'}
                alignItems={'center'}
                mt={4}
              >
                <Grid item>
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
              </Grid>
            )}
          </>
        ) : (
          <Grid
            item
            style={{ marginTop: '16px', width: '100%' }}
            container
            display={'flex'}
            columns={{ xs: 12, sm: 9, md: 12 }}
          >
            <InfiniteScroll
              dataLength={products.length}
              style={{ flexWrap: 'wrap', display: 'flex' }}
              next={() => handleLoadMore()}
              hasMore={hasMore}
            >
              {products.map((item, index) => (
                <CardProducts
                  products={item}
                  key={`products-card-${index}`}
                  index={index}
                />
              ))}
            </InfiniteScroll>
          </Grid>
        )}
      </Grid>
    </StyledContainer>
  );
};

export default ProductsComponent;
