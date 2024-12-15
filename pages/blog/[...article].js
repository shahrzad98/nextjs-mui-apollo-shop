import React from 'react';
import {
  Box,
  Chip,
  CircularProgress,
  Divider,
  Grid,
  IconButton,
  Typography
} from '@mui/material';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';
import {
  ssrQueries,
  useBlogArticle,
  useStoreInfo,
  withApollo
} from '@digify/theme-kit';
import { useRouter } from 'next/router';
import BlogArticleSkeleton from 'src/components/blog/BlogArticle/skeleton';
import DOMPurify from 'isomorphic-dompurify';
import BlogContent from 'src/components/blog/BlogArticle/BlogContent';
import { openSnackbar } from 'utils/snackbar';
import { ImageContainer } from 'src/components/blog/BlogArticle/ImageContainer';
import ArticleStructuredData from 'src/components/structuredDataHead/Article';
import BreadcrumbStructuredData from 'src/components/structuredDataHead/Breadcrumb';

const Index = () => {
  const { back } = useRouter();
  const { data, like, loading, error } = useBlogArticle();
  const isMobile = useIsMobile();
  const router = useRouter();

  const { title, content, image, is_liked, like_count, published_at, tags } =
    data || {};

  const { manager, domain } = useStoreInfo();

  const share = async () => {
    try {
      await navigator.share({
        title: title,
        text: title,
        url: window?.location?.href
      });
    } catch (err) {}
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window?.location?.href);
    openSnackbar({ message: 'لینک کپی شد.' });
  };

  return (
    <Grid container justifyContent="center" component="section">
      <ArticleStructuredData
        title={title}
        image={image}
        publishDate={published_at?.split(' ')?.[0]?.replace(/\//gi, '-')}
        author={`${manager?.first_name ? `${manager?.first_name} ` : ''}${
          manager?.last_name
        }`}
      />
      <BreadcrumbStructuredData
        list={[
          { name: 'بلاگ ها', url: decodeURI(domain + '/blogs') },
          { name: title, url: decodeURI(domain + router.asPath) }
        ]}
      />
      <Grid
        container
        px={{ xs: 2, md: 0 }}
        maxWidth={804}
        flexDirection="column"
      >
        {isMobile && (
          <Grid
            color="#1C1B20"
            gap={1}
            alignItems="center"
            container
            my={3}
            onClick={back}
          >
            <i className="icon-arrow-right1" />
            <Typography variant="subtitle2">بلاگ</Typography>
          </Grid>
        )}
        {loading ? (
          <BlogArticleSkeleton />
        ) : (
          !Object.keys(error).length && (
            <Grid container mt={isMobile ? 0 : 4.5}>
              <ImageContainer
                container
                sx={{ aspectRatio: '803/382', overflow: 'hidden' }}
                component="article"
              >
                {/* <BaseImg
            src={image}
            alt={title}
            size={{ h: 1000, w: 2000 }}
            q={100}
            objectFit="cover"
        /> */}
                <img src={image} alt={title} />
              </ImageContainer>
              <Grid
                container
                flexDirection="column"
                px={[3, 4]}
                border="1px solid #1C1B201A"
                borderRadius="2px"
              >
                <Grid
                  borderBottom="1px solid #1C1B201A"
                  py={3}
                  container
                  alignItems="center"
                  justifyContent="space-between"
                  color="#1C1B20B2"
                  sx={{
                    i: {
                      fontSize: isMobile ? '1.5rem' : '2rem'
                    }
                  }}
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    gap={isMobile ? 1 : 2}
                  >
                    <Box
                      width="50px"
                      height="45px"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      {like.loading ? (
                        <CircularProgress />
                      ) : (
                        <IconButton
                          sx={{ fontSize: 24, i: { fontSize: 'inherit' } }}
                          onClick={like.handleClick}
                          color={is_liked ? 'error' : 'default'}
                        >
                          <i className="icon-social-medias-rewards-rating-love-it" />
                        </IconButton>
                      )}
                    </Box>
                    <Typography variant="body1">{like_count}</Typography>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    gap={isMobile ? 2 : 3}
                  >
                    <IconButton
                      onClick={share}
                      sx={{ fontSize: 24, i: { fontSize: 'inherit' } }}
                    >
                      <i className="icon-share" />
                    </IconButton>
                    <Divider
                      orientation="vertical"
                      variant="middle"
                      flexItem
                      sx={{ background: '#1C1B201A' }}
                    />
                    <IconButton
                      onClick={copyLink}
                      sx={{ fontSize: 24, i: { fontSize: 'inherit' } }}
                    >
                      <i className="icon-hyperlink" />
                    </IconButton>
                  </Box>
                </Grid>
                <Grid
                  container
                  flexDirection="column"
                  py={4}
                  component="article"
                >
                  <Typography variant="h4" component="h1" color="#1C1B20">
                    {title}
                  </Typography>
                  {published_at && (
                    <Typography variant="body1" color="#1C1B2066" mt={3}>
                      منتشر شده در {String(published_at).split(' ')[0]}
                    </Typography>
                  )}
                  <BlogContent
                    width="1"
                    color="#1C1B20"
                    mt={3}
                    overflow="hidden"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(content)
                    }}
                  />
                  <Grid container mt={5} gap={2}>
                    {tags?.map(tag => (
                      <Chip
                        key={tag.id}
                        label={tag.title}
                        sx={{
                          borderRadius: '2px',
                          bgcolor: 'rgba(28, 27, 32, 0.05)',
                          color: '#1C1B20B2'
                        }}
                      />
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          )
        )}
      </Grid>
    </Grid>
  );
};

export default withApollo(Index)([ssrQueries.getBlogArticle()]);
