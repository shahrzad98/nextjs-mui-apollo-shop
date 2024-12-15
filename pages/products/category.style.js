import { Box } from '@mui/material';
import { styled as MuiStyled } from '@mui/system';
import styled from '@emotion/styled';

export const StyledSection = MuiStyled('section')`
  margin: 0 auto;

`;

const CategoryContainer = styled(Box)`
  width: 100%;
  max-width: 1280px;
  margin: auto;

  .boldOne {
    color: #1c1b20;
    margin: 0;
  }

  .breadcrumb {
    color: rgba(28, 27, 32, 0.4);
    margin: 0;
  }

  .overflowContainer {
    overflow-y: auto;
  }

  .icon-setting-slider {
    font-size: 20px;
  }

  .icon-search {
    font-size: 20px;

    :before {
      color: #d0c6c6;
    }
  }

  .sortButton {
    width: 128px;
    justify-content: center;
    align-items: center;
    border: 0.5px solid rgba(28, 27, 32, 0.2);
    border-radius: 2px;
    padding: 8px;
    height: 48px;
  }

  .paginationContainer {
    display: flex;
    justify-content: center;
    margin: 24px auto 72px;

    & nav {
      width: fit-content;
    }
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    max-width: 360px;
  }
`;

export default CategoryContainer;
