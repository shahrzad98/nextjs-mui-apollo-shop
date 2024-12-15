import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const MobileBasketContainer = styled(Box)`
  background-color: #fff;
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 3;
  padding: 16px;
  border-top: 0.5px solid rgba(28, 27, 32, 0.2);
  .priceContainer {
    display: flex;
    justify-content: space-between;
  }
  .noneProfitPrice {
    position: relative;
    top: 4px;
    margin-left: 4px;
  }

  .offPrice {
    text-decoration: line-through;
  }
  .discount {
    background-color: #1c1b20;
    width: 59px;
    height: 54px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .finalPrice {
    text-align: right;
    align-self: end;
  }
  button {
    padding: 11px 13px;
  }
  ${({ theme }) => theme.breakpoints.down('md')} {
    .discount {
      width: 48px;
      height: 48px;
    }
    .priceContainer {
      button {
        height: 48px;
      }
    }
  }
`;
