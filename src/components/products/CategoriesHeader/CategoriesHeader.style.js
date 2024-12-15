import styled from '@emotion/styled';
import { Grid } from '@mui/material';

export const HeaderWrapper = styled(Grid)`
  max-width: 1280px;
  padding-left: 30px;
  align-items: center;
  .searchProduct input {
    padding-bottom: 8px;
    ::placeholder {
      font-size: 16px;
    }
  }
  ${({ theme }) => theme.breakpoints.down('md')} {
    padding: 0 16px;
    .searchProduct {
      input::placeholder {
        font-size: 14px;
      }
    }
  }
`;
