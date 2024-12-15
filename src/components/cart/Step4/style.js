import styled from '@emotion/styled';
import { Grid } from '@mui/material';

const Style = styled(Grid)`
  margin-bottom: 50px;
  .packing {
    border: 1px solid rgba(28, 27, 32, 0.1);
    .header {
      background-color: rgba(28, 27, 32, 0.05);
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .packingOption {
      border-bottom: 1px solid rgba(28, 27, 32, 0.05);
      cursor: pointer;
    }
  }
  .loyaltyEarnCont {
    width: 100%;
    background-color: rgba(28, 27, 32, 0.05);
  }
`;
export default Style;
