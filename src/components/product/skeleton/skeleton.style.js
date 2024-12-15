import { Box } from '@mui/material';
import styled from '@emotion/styled';

export const ProductSkeletonContainer = styled(Box)`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 36px 30px;
  height: calc(100% + 140px);

  .MuiSkeleton-root {
    border-radius: 3px;
  }

  .carouselSkeletonContainer {
    width: 100%;
    max-width: 490px;
    height: 100%;
  }

  .variantSkeletonContainer {
    position: relative;
    padding-left: 30px;
    width: 100%;
    max-width: 730px;
    min-height: 620px;
  }

  .addToBasket {
    height: 60px;
    position: absolute;
    bottom: 0;
  }

  .addToBasketMobile {
    background-color: #fff;
    width: 100%;
    position: absolute;
    bottom: 0;
    z-index: 3;
  }
  
  ${props => props.theme.breakpoints.down('sm')} {
    padding: 20px;

    .variantSkeletonContainer {
      padding-left: 0;
    }

    .variantSkeletonContainer {
      max-width: 490px;
    }
  }
}
`;
