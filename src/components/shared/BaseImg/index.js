import styled from '@emotion/styled';
import { Box } from '@mui/material';
import Image from 'next/image';

const ImageContainer = styled(Box, {
  shouldForwardProp: prop => !['aspectRatio'].includes(prop)
})`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;

  & > span {
    height: 100% !important;
    position: unset !important;
  }

  .image {
    width: 100% !important;
    position: relative !important;
    height: auto !important;
    object-fit: cover !important;
    ${props =>
      props?.aspectRatio ? `aspect-ratio: ${props?.aspectRatio};` : ''}
  }
`;

const BaseImg = ({
  src,
  alt = 'image',
  size,
  q = 90,
  objectFit = 'contain',
  productPlaceHolder = false,
  aspectRatio,
  className,
  style,
  ...props
}) => {
  if (isNaN(size?.h) || isNaN(size?.w)) {
    throw new Error('size prop must be instance of {h: number, w: number}');
  }
  return (
    <ImageContainer aspectRatio={aspectRatio} className={className} sx={style}>
      <Image
        className="image"
        src={
          productPlaceHolder && !Boolean(src)
            ? '/static/assets/svg/productImage/productImage.svg'
            : String(src).startsWith('http')
            ? `${src}?x-img=v1/optimize,q_${q}/resize,h_${size.h},w_${size.w},force_true`
            : String(src).startsWith('/')
            ? src
            : `/${src}`
        }
        alt={alt}
        placeholder={'blur'}
        blurDataURL={
          productPlaceHolder && !Boolean(src)
            ? '/static/assets/svg/productImage/productImage.svg'
            : String(src).startsWith('http')
            ? `${src}?x-img=v1/optimize,q_1/resize,h_50,w_50,force_true/blur,sigma_20`
            : String(src).startsWith('/')
            ? src
            : `/${src}`
        }
        quality={q}
        layout="fill"
        objectPosition={'50% 50%'}
        objectFit={objectFit}
        unoptimized={true}
        {...props}
      />
    </ImageContainer>
  );
};

export default BaseImg;
