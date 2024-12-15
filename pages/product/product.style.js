import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { styled as MuiStyled } from '@mui/system';

export const StyledSection = MuiStyled('section')`
  margin: 0 auto;
  width: 100%;
`;

const ProductContainer = styled(Box)`
  position: relative;
  background-color: #fff;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 36px 30px;

  .addToBasketFeedMobile {
    background-color: #fff;
    z-index: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    border-top: 0.5px solid rgba(28, 27, 32, 0.2);
    position: fixed;
    width: 100%;
    height: 48px;
    bottom: 80px;

    .goToBasket {
      color: ${({ theme }) => theme.palette.info.dark};
      cursor: pointer;
    }

    .icon-Shopping-E-Commerce__x2F__Shopping-Bags__x2F__shopping-bag-side_1 {
      color: ${({ theme }) => theme.palette.info.dark};
    }
  }
  .addToBasketFeed {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    height: 60px;
    width: 100%;
    margin: 0 auto;
    z-index: 2;
    background-color: #f3f3f3;

    .goToBasket {
      color: ${({ theme }) => theme.palette.info.dark};
      cursor: pointer;
      margin: 0 24px;
    }
    .icon-remove {
      font-size: 25px;
    }
    .icon-Shopping-E-Commerce__x2F__Shopping-Bags__x2F__shopping-bag-side_1 {
      color: ${({ theme }) => theme.palette.info.dark};
    }
  }

  ${props => props.theme.breakpoints.down('sm')} {
    height: calc(100% + 100px);

    .productInfoWrapper {
      align-items: center;
    }
    padding: 0;
  }
`;

export default ProductContainer;
