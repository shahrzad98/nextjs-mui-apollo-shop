import styled from '@emotion/styled';
import { Card } from '@mui/material';

export const StyleRoot = styled(Card)`
  padding: 0 16px;
  height: 306px;
  max-height: 306px;
  border-radius: 2px;
  a {
    text-decoration: none;
  }
  .showAllLink {
    width: 50%;
  }
  .cardContent {
    padding: 22px 8px;
    max-height: 240px;
    overflow-y: auto;
    .infinite-scroll-component__outerdiv {
      width: 100%;
    }
    .item {
      height: 55px;
      display: flex;
      padding: 10px 0;
      border-bottom: 1px solid rgba(28, 27, 32, 0.05);
      justify-content: space-between;
      &:hover {
        background-color: rgba(28, 27, 32, 0.01);
      }
    }
  }
`;
