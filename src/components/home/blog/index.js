import React from 'react';
import { Button, Grid } from '@mui/material';
import SectionTitle from 'src/components/shared/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/bundle';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';
import BlogHomeSlide from 'src/components/blog/BlogHomeSlide';
import BlogHomeSlideSkeleton from 'src/components/blog/BlogHomeSlide/skeleton';
import Link from 'next/link';
import { useBlogArticles } from '@digify/theme-kit';

SwiperCore.use([Navigation]);

const HomeBlogSlider = () => {
  const isDesktop = !useIsMobile();
  const { data, loading } = useBlogArticles();

  return (
    <Grid
      id="blog_scroll"
      container
      px={2}
      margin={'auto'}
      maxWidth={1280}
      component="section"
    >
      {loading ? (
        <BlogHomeSlideSkeleton />
      ) : (
        data.length > 0 && (
          <>
            <SectionTitle title="بلاگ" />
            <Grid container>
              <Swiper
                dir="rtl"
                spaceBetween={isDesktop ? 20 : 10}
                centerInsufficientSlides
                slidesPerView={'auto'}
                className="home-blog-swiper"
              >
                {data.map(blog => (
                  <SwiperSlide key={blog.id} dir="ltr">
                    <BlogHomeSlide blog={blog} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Grid>
            <Grid container justifyContent="center" my={4}>
              <Link href="/blogs" passHref>
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
                    نمایش همه بلاگ‌ها
                    <i className="icon-arrow-left" />
                  </Button>
                </a>
              </Link>
            </Grid>
          </>
        )
      )}
    </Grid>
  );
};

export default HomeBlogSlider;
