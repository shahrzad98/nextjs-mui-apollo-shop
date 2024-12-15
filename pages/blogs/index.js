import React from 'react';
import {
  Box,
  Grid,
  Input,
  Typography,
  Pagination as MuiPagination
} from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation, Lazy, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/bundle';
import 'swiper/css/lazy';
import BlogSlide from 'src/components/blog/BlogSlide';
import { Search } from '@mui/icons-material';
import BlogItem from 'src/components/blog/BlogItem';
import BlogItemSkeleton from 'src/components/blog/BlogItem/skeleton';
import BlogSlideSkeleton from 'src/components/blog/BlogSlide/skeleton';
import {
  ssrQueries,
  useBlogArticles,
  useBlogHighlights,
  withApollo
} from '@digify/theme-kit';
import InfiniteScroll from 'react-infinite-scroll-component';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';
import EmptyBlog from 'src/components/blog/EmptyBlog';

SwiperCore.use([Pagination, Navigation, Lazy, Autoplay]);

const BlogList = ({ data, loading }) => (
  <>
    {data.map((item, i) => (
      <BlogItem key={item.id} item={item} isLast={data.length === i + 1} />
    ))}
    {loading && <BlogItemSkeleton />}
  </>
);

const Index = () => {
  const isDesktop = !useIsMobile();
  const {
    data: highlightsData,
    error: highlightsError,
    loading: highlightsLoading
  } = useBlogHighlights();

  const { data, error, loading, handleLoadMore, pagination, hasMore, search } =
    useBlogArticles();

  return (
    <Grid container justifyContent="center">
      <Grid
        container
        px={{ xs: 2, lg: 0 }}
        maxWidth={1012}
        flexDirection="column"
      >
        <Grid width="1" component="section">
          {highlightsLoading ? (
            <BlogSlideSkeleton />
          ) : (
            !Object.keys(highlightsError).length && (
              <>
                <Swiper
                  init={true}
                  dir="rtl"
                  pagination={{
                    el: '.swiper-custom-pagination'
                  }}
                  lazy={true}
                  navigation={!!isDesktop}
                  autoHeight={true}
                  className="banner-swiper"
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                  }}
                >
                  {highlightsData?.map(item => (
                    <SwiperSlide key={item.id}>
                      <BlogSlide item={item.article} />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <Grid
                  mt={3}
                  container
                  justifyContent="center"
                  className="swiper-custom-pagination"
                />
              </>
            )
          )}
        </Grid>
        <Typography mt={4} variant="subtitle1" color="#1C1B20">
          پست‌ها
        </Typography>
        <Grid container my={4}>
          <Grid item md={4} sm={5} xs={12}>
            <Input
              fullWidth
              variant="standard"
              placeholder="جستجو در پست‌ها ..."
              value={search.value}
              onChange={e => search.handleChange(e.target.value)}
              startAdornment={
                <Box color="#1C1B2066" px={1}>
                  <Search />
                </Box>
              }
            />
          </Grid>
        </Grid>
        {!Object.keys(error).length && (
          <>
            <Grid width="1" component="section">
              {isDesktop ? (
                <BlogList data={data} loading={loading} />
              ) : (
                <Grid width="1" id="blog-list" maxHeight="70vh" overflow="auto">
                  <InfiniteScroll
                    dataLength={loading ? data.length + 2 : data.length}
                    next={handleLoadMore}
                    hasMore={hasMore}
                    scrollableTarget="blog-list"
                  >
                    <BlogList data={data} loading={loading} />
                  </InfiniteScroll>
                </Grid>
              )}
            </Grid>
            {!loading && data.length === 0 && search.value && (
              <Grid
                container
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                py={12}
                gap={4}
              >
                <EmptyBlog
                  width={isDesktop ? 166 : 100}
                  height={isDesktop ? 166 : 100}
                />
                <Typography variant="subtitle2" color="#1C1B2066">
                  پست موردنظر در بلاگ یافت نشد!
                </Typography>
              </Grid>
            )}
          </>
        )}
        {isDesktop && pagination?.pageCount > 1 && (
          <Grid container justifyContent="center" my={4}>
            <MuiPagination
              count={pagination.pageCount}
              page={pagination.page}
              onChange={(_e, p) => pagination.handleChangePage(p)}
            />
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default withApollo(Index)([
  ssrQueries.getBlogArticles(),
  ssrQueries.getBlogHighlights()
]);
