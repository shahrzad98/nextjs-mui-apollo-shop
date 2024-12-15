import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography, Link as MuiLink } from '@mui/material';
import Link from 'next/link';
import DOMPurify from 'isomorphic-dompurify';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';
import { ImageContainer } from 'src/components/blog/BlogItem/style';
// import BaseImg from 'components/shared/BaseImg';

const BlogItem = ({ item, isLast }) => {
  const isMobile = useIsMobile();
  const [blogTextContent, setBlogTextContent] = useState(
    DOMPurify.sanitize(item.content)
  );

  useEffect(() => {
    const html = document.createElement('div');
    html.innerHTML = DOMPurify.sanitize(item.content);
    setBlogTextContent(html.textContent);
  }, [item.content]);

  return (
    <Grid width="1" mb={3} component="article">
      <Link href={item.link.href} passHref>
        <MuiLink sx={{ width: '1', color: 'unset', textDecoration: 'none' }}>
          {isMobile ? (
            <Grid container flexDirection="column">
              <ImageContainer container>
                {/* <BaseImg
        src={item.image}
        alt={item.title}
        size={{ h: 700, w: 1400 }}
        q={100}
        objectFit="cover"
        /> */}
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover',
                    objectPosition: '50% 40%'
                  }}
                />
              </ImageContainer>
              <Typography
                variant="subtitle2"
                component="h1"
                color="#1C1B20"
                mt={3}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                width="1"
                color="#1C1B20B2"
                noWrap
                mt={1}
              >
                {blogTextContent}
              </Typography>
              <Grid
                container
                flexDirection="row"
                alignItems="center"
                color="#1C1B2066"
                justifyContent="flex-end"
                gap={3}
                fontSize="20px"
                mb={1}
                mt={3}
              >
                <Box display="flex" alignItems="center" gap={1}>
                  <Typography variant="body1" color="inherit">
                    {item.like_count}
                  </Typography>
                  <i
                    className="icon-social-medias-rewards-rating-love-it"
                    style={{ color: item.is_liked ? 'red' : 'inherit' }}
                  />
                </Box>
                {item.published_at && (
                  <Box display="flex" alignItems="center" gap={1}>
                    <Typography variant="body1" color="inherit">
                      {String(item.published_at).split(' ')[0]}
                    </Typography>
                    <i className="icon-date-calender" />
                  </Box>
                )}
              </Grid>
              {!isLast && (
                <Box
                  sx={{
                    mt: 3,
                    background: `linear-gradient(to right ,transparent ,#eeeeee ,#D1D1D2 ,#eeeeee ,transparent)`,
                    height: '1px',
                    width: '100%'
                  }}
                />
              )}
            </Grid>
          ) : (
            <Grid
              container
              flexDirection="row"
              border="1px solid #1C1B201A"
              height="180px"
            >
              <Grid width="23%" height="1">
                {/* <BaseImg
                  src={item.image}
                  alt={item.title}
                  size={{ h: 700, w: 1400 }}
                  q={100}
                  objectFit="cover"
              /> */}
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover',
                    objectPosition: '50% 50%'
                  }}
                />
              </Grid>
              <Grid
                width="77%"
                height="1"
                p={3}
                container
                flexDirection="column"
                flexWrap="nowrap"
                justifyContent="space-between"
              >
                <Typography variant="subtitle2" color="#1C1B20">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="#1C1B20B2" noWrap>
                  {blogTextContent}
                </Typography>
                <Grid
                  container
                  flexDirection="row"
                  alignItems="center"
                  color="#1C1B2066"
                  justifyContent="flex-end"
                  gap={3}
                  fontSize="20px"
                  mb={1}
                >
                  <Box display="flex" alignItems="center" gap={1}>
                    <Typography variant="body1" color="inherit">
                      {item.like_count}
                    </Typography>
                    <i
                      className="icon-social-medias-rewards-rating-love-it"
                      style={{ color: item.is_liked ? 'red' : 'inherit' }}
                    />
                  </Box>
                  {item.published_at && (
                    <Box display="flex" alignItems="center" gap={1}>
                      <Typography variant="body1" color="inherit">
                        {String(item.published_at).split(' ')[0]}
                      </Typography>
                      <i className="icon-date-calender" />
                    </Box>
                  )}
                </Grid>
              </Grid>
            </Grid>
          )}
        </MuiLink>
      </Link>
    </Grid>
  );
};

export default BlogItem;
