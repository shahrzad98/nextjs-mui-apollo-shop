import styled from '@emotion/styled';
import { Grid } from '@mui/material';

export const StyleRecord = styled(Grid)`
  border: 1px solid rgba(28, 27, 32, 0.1);
  border-radius: 2px;
  padding: 24px;
  min-height: 370px;
  h4 {
    color: #1c1b20b2;
    font-size: 20px;
    font-weight: 400;
    margin: 0;
  }
  .header {
    height: 38px;
    background-color: #f5f6fa;
    border-radius: 2px;
  }
  .content {
    max-height: 240px;
    overflow-y: auto;
    .infinite-scroll-component__outerdiv {
      width: 100%;
    }
  }
`;

export const StyleCard = styled(Grid)`
  height: 60px;
  border-bottom: 1px solid #dedede;
  .increase {
    color: #37b86d;
  }
  .decrease {
    color: #ff5875;
  }
  .caption {
    color: rgba(28, 27, 32, 0.7);
  }
  p {
    font-weight: 400;
    margin: 0;
    span {
      font-size: 12px;
    }
  }
`;
