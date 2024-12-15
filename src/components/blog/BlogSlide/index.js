import { Typography, Link as MuiLink } from '@mui/material';
// import BaseImg from 'components/shared/BaseImg';
import React from 'react';
import Link from 'next/link';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';
import { SlideWrapper } from 'src/components/blog/BlogSlide/style';

const BlogSlide = ({ item }) => {
  const isMobile = useIsMobile();
  return (
    <Link href={item.link.href} passHref>
      <MuiLink sx={{ width: '1', color: 'unset', textDecoration: 'none' }}>
        <SlideWrapper
          component="article"
          container
          sx={{ aspectRatio: isMobile ? '328/212' : '1012/408' }}
        >
          {/* <BaseImg
        src={item.img}
        alt={item.title}
        size={{ h: 1000, w: 2000 }}
        q={100}
        objectFit="cover"
      /> */}
          <img src={item.image} alt={item.title} />
          <div className="gradient">
            <Typography component="h1" variant="subtitle1" color="#1C1B20">
              {item.title}
            </Typography>
          </div>
        </SlideWrapper>
      </MuiLink>
    </Link>
  );
};

export default BlogSlide;
