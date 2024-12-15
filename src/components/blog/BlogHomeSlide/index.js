import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';
import DOMPurify from 'isomorphic-dompurify';
import Link from 'next/link';

const BlogHomeSlide = ({ blog }) => {
  const isDesktop = !useIsMobile();
  const [blogTextContent, setBlogTextContent] = useState(
    DOMPurify.sanitize(blog.content)
  );

  useEffect(() => {
    const html = document.createElement('div');
    html.innerHTML = DOMPurify.sanitize(blog.content);
    setBlogTextContent(html.textContent);
  }, [blog.content]);

  return (
    <Link href={blog.link.href} passHref>
      <a>
        <Grid width={isDesktop ? 387 : 242} component="article">
          <Grid height={isDesktop ? 274 : 191} overflow="hidden">
            {/* <BaseImg
                        src={blog.image}
                        alt={blog.title}
                        size={{ h: 700, w: 1400 }}
                        q={100}
                        objectFit="cover"
                    /> */}
            <img
              src={blog.image}
              alt={blog.title}
              style={{
                height: '100%',
                width: '100%',
                objectFit: 'cover',
                objectPosition: '50% 40%'
              }}
            />
          </Grid>
          <Typography
            variant="body1"
            component="h1"
            mt={isDesktop ? 2 : 1.5}
            color="#1C1B20"
            sx={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}
          >
            {blog.title}
          </Typography>
          <Typography
            variant="body2"
            color="#1C1B20B2"
            noWrap
            mt={isDesktop ? 2 : 1}
            {...{
              ...(isDesktop && {
                sx: {
                  WebkitLineClamp: '2',
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  whiteSpace: 'normal'
                }
              })
            }}
          >
            {blogTextContent}
          </Typography>
        </Grid>
      </a>
    </Link>
  );
};

export default BlogHomeSlide;
