import styled from '@emotion/styled';
import { Grid } from '@mui/material';

export const VariantContainer = styled(Grid)`
  padding-left: 30px;
  width: 100%;
  max-width: 730px;

  section {
    min-height: 642px;
    height: 100%;
    position: relative;

    .noneProfitPrice {
      position: relative;
      top: 3px;
      margin-left: 4px;
    }
    .hotOffer {
      position: absolute;
      top: 0;
      right: 0;
    }
    .discountExpire {
      position: absolute;
      bottom: 70px;
      display: flex;
      width: 100%;
    }
  }
  .icon-loved {
    color: red;
  }
  .priceContainer {
    height: 57px;
    & p {
      align-self: flex-end;
    }
  }
  .offPrice {
    text-decoration: line-through;
  }

  .actionContainerMobile {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 60px;
    align-items: center;
    font-size: 20px;

    .loading {
      align-self: center;
      width: 20px;
      height: 20px;
    }
  }

  .discount {
    background-color: #1c1b20;
    width: 59px;
    height: 54px;
    font-size: 24px;
    font-weight: 500;
    color: #fff;
    border-radius: 4px;
    text-align: center;

    p {
      margin: 7px auto;
    }
  }

  .shareIcon {
    margin-left: 38px;
  }

  .actionBar {
    float: right;
    i {
      cursor: pointer;
      font-size: 30px;
    }
    .icon-share,
    .icon-shopping-E-commerce-discount-coupons-discount-circle {
      font-size: 30px;
    }
  }

  .colorPallet {
    width: 32px;
    height: 32px;
    border-radius: 100px;
    margin-right: 16px;
    box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
  }

  //variants
  .variantSlide {
    border: 0.5px solid ${({ theme }) => theme.palette.black[20]};
    padding: 6px 12px;
    height: 28px;
    width: max-content;
    cursor: pointer;
    border-radius: 2px;
  }

  .activeOption {
    border: 1.5px solid ${({ theme }) => theme.palette.black[100]};
  }

  .arrow {
    width: 30px;
    cursor: pointer;
  }

  .swiper-button-prev:after,
  .swiper-rtl .swiper-button-next:after {
    display: none;
  }

  .swiper-wrapper {
    width: 90%;
  }

  .lessThanFive {
    .swiper-initialized {
      width: 100%;
    }
  }

  .swiper-slide {
    width: fit-content !important;
  }

  .addToBasket {
    height: 60px;
    width: 100%;
    position: absolute;
    bottom: 0;
  }

  ${props => props.theme.breakpoints.down('lg')} {
    max-width: 550px;

    .addToBasket {
      margin-top: 22px;
    }
  }

  ${props => props.theme.breakpoints.down('md')} {
    padding: 0 16px;

    section {
      min-height: 484px;
    }
    .colorPallet {
      width: 24px;
      height: 24px;
      border-radius: 100px;
      margin-right: 16px;
    }
  }

  ${props => props.theme.breakpoints.down('sm')} {
    padding: 0;

    section {
      min-height: unset;
    }
  }
`;
