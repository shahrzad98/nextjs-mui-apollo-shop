import styled from '@emotion/styled';
import { Box, css, Drawer, Grid } from '@mui/material';
import List from '@mui/material/List';

const filterIcon = css`
  display: flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
  height: 36px;
  align-self: center;
`;

export const FiltersDesktopContainer = styled(Box)`
  border: 1px solid rgba(28, 27, 32, 0.2);
  height: fit-content;
  width: 328px;
  flex-shrink: 0;

  .filtersTitle {
    flex-direction: row;
    align-items: center;
    padding: 16px 30px;
    border-bottom: 1px solid ${({ theme }) => theme.palette.black[20]};
  }

  .filterDesktop {
    .MuiDrawer-paper {
      width: 328px;
      transition: none;
      box-sizing: border-box;
    }
  }

  .selectedFiltersContainer {
    padding: 20px 20px 20px 30px;
    border-bottom: 1px solid ${({ theme }) => theme.palette.black[20]};

    .icon-Delete {
      font-size: 22px;
      cursor: pointer;
      color: ${({ theme }) => theme.palette.black[40]};
    }

    .icon-remove-add {
      cursor: pointer;
    }
  }

  .selectedFilter {
    background-color: ${({ theme }) => theme.palette.info.main};
    min-height: 32px;
    height: fit-content;
    border-radius: 4px;
    width: fit-content;
    flex-direction: row;
    align-items: center;
    color: #fff;
    padding: 2px 8px;
    margin: 0 16px 5px 0;
  }
`;

export const SortDesktopWrapper = styled(Grid)`
  margin-bottom: 8px;
  padding: 0 15px;

  max-width: 1280px;
  max-height: 50px;
  z-index: 2;
  display: flex;
  flex-wrap: nowrap;

  .openDrawerSort {
    height: 40px;
    padding-right: 16px;
    display: flex;
    align-items: center;
    border-right: 0.5px solid rgba(28, 27, 32, 0.2);
  }

  .sortItem {
    height: 40px;
    padding: 8px 12px;
    margin: 0 0 0 16px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .active {
    background-color: #f4f4f4;
  }
`;

export const FiltersListWrapper = styled(List)`
  padding: 0;
  .expand {
    flex-direction: row;
    align-items: center;
    cursor: pointer;
  }

  .otherFilterRow {
    flex-direction: row;
    justify-content: space-between;
    padding: 16px;
    border-bottom: 0.5px solid rgba(28, 27, 32, 0.2);
  }
  .icon-arrow-right2,
  .icon-Arrow-Bottom,
  .icon-Arrow_Top {
    font-size: 15px;
    font-weight: 900;
  }

  .innerCollapse {
    width: 22px;
    display: flex;
    align-items: center;
    .icon-Arrow_Top,
    .icon-arrow-right2 {
      font-size: 12px;
      margin-right: 16px;
      font-weight: 900;
    }
  }
  .nestedExpandIcon {
    cursor: pointer;
    top: 5px;
    margin-left: 6px;
    position: relative;
    font-size: 20px;
    color: ${({ theme }) => theme.palette.black[100]};
    font-weight: 100;
  }

  .priceInput {
    height: 35px;
    width: 202px;
    margin: 0 8px;
    border-radius: 2px;
    border: 0.5px solid rgba(28, 27, 32, 0.2);
    color: ${({ theme }) => theme.palette.black[100]};
    direction: rtl;
    padding: 0 6px;
  }

  .MuiCheckbox-root {
    padding: 0;
  }

  .filterItemContainer {
    padding: 16px 16px 16px 30px;
    border-bottom: 1px solid ${({ theme }) => theme.palette.black[20]};
    text-align: center;
    .filterHandle {
      width: 100%;
      max-width: 328px;
      height: 48px;
    }
    :last-child {
      border-bottom: none;
    }
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    .filterItemContainer {
      padding: 16px 20px;
    }
  }
`;

export const FilterMobileContainer = styled(Grid)`
  padding: 0 16px;
  max-width: 1280px;

  .numberOfFilters {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.palette.black[100]};
    width: 20px;
    height: 20px;
    border-radius: 2px;
  }

  .filtersIconMobile {
    ${filterIcon};
    border: 0.5px solid rgba(28, 27, 32, 0.2);
    border-radius: 2px;
    padding: 16px;
    height: 48px;
    width: 102px;

    & p {
      margin: 0 8px;
    }
  }
`;

export const StyledDrawer = styled(Drawer)`
  .MuiPaper-root {
    overflow: scroll;
  }
  .filtersTitle {
    flex-direction: row;
    justify-content: space-between;
    padding: 24px;
    border-bottom: 1px solid ${({ theme }) => theme.palette.black[20]};

    .icon-remove {
      font-size: 20px;
    }
  }
`;
