import styled from '@emotion/styled';
import { Box } from '@mui/material';
export const SimilarProductsContainer = styled(Box)`
  position: relative;
  margin-bottom: 48px;

  .MuiLink-root {
    text-decoration: none;
  }
  .swiper-slide {
    img {
      height: 283px;
      width: 283px;
    }
  }

  .similarProductDivider {
    position: absolute;
    top: 0;
    right: -1%;
    height: 100%;
    width: 3px;
    padding: 0 7px;
    border-left: 1px solid;
    border-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0),
        #d1d1d2,
        rgba(0, 0, 0, 0)
      )
      1 100%;
  }
  .swiper-rtl .swiper-button-prev {
    display: none;
  }

  .swiper-rtl .swiper-button-next:after {
    color: #000;
    font-size: 20px;
    position: relative;
    top: -55%;
  }
  .colorPallet {
    width: 16px;
    height: 16px;
    border-radius: 100px;
    margin-right: 8px;
    border: 0.5px solid rgba(28, 27, 32, 0.4);
  }

  ${props => props.theme.breakpoints.down('lg')} {
    .swiper-slide {
      img {
        height: 250px;
        width: 250px;
      }
    }
  }

  ${props => props.theme.breakpoints.down('md')} {
    padding: 0 16px;
    .swiper-slide {
      img {
        height: 156px;
        width: 156px;
      }
    }
    .similarProductDivider {
      right: -4%;
    }
  }
  ${props => props.theme.breakpoints.down('sm')} {
    .swiper-slide {
      width: 177px !important;
    }
  }
`;
