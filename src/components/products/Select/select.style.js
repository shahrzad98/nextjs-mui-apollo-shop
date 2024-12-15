import styled from '@emotion/styled';
import { Stack } from '@mui/material';

export const SelectedFiltersContainer = styled(Stack)`
  width: inherit;
  overflow-x: scroll;
  flex-direction: row;

  ::-webkit-scrollbar {
    display: none;
  }

  .removeAll {
    background-color: ${({ theme }) => theme.palette.black[100]};
    color: ${({ theme }) => theme.palette.white[100]};
    border-radius: 4px;
    padding: 8px 12px;
    margin-right: 16px;
    cursor: pointer;
    white-space: nowrap;
  }

  .selectedParam {
    white-space: nowrap;
    display: flex;
    background-color: ${({ theme }) => theme.palette.black[5]};
    padding: 6px 8px;
    cursor: pointer;
    margin-right: 16px;
    border-radius: 4px;

    button {
      padding: 0;
      min-width: 15px;
      margin-right: 6px;
    }
  }
`;
