import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const SortMobileWrapper = styled(Box)`
  .sortOption {
    padding: 16px 24px;
  }
  .active {
    background-color: #f3f3f3;
  }
  .sortTitle {
    padding: 16px 24px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.5px solid rgba(28, 27, 32, 0.2);
  }
`;
