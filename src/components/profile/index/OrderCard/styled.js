import styled from '@emotion/styled';
import { Grid } from '@mui/material';

export const Style = styled(Grid)`
  height: calc(150px - 16px);
  border: 1px solid rgba(28, 27, 32, 0.1);
  border-radius: 2px;
  &:hover {
    background-color: rgba(28, 27, 32, 0.01);
  }
  a {
    width: 100%;
    text-decoration: none;
  }

  .icons {
    padding: 16px;
    border-radius: 4px;
    font-size: 30px;
  }
  .waitingForPayment {
    background: rgba(132, 50, 240, 0.1);
    color: rgba(132, 50, 240, 1);
  }
  .delivered {
    background: rgba(0, 217, 111, 0.1);
    color: rgba(0, 217, 111, 1);
  }

  .proccessing {
    background: rgba(255, 223, 0, 0.1);
    color: rgba(255, 223, 0, 1);
  }
  .refund {
    background: rgba(0, 217, 111, 0.1);
    color: rgba(0, 217, 111, 1);
  }
`;
