import * as React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';

import SortMobile from '../sort/SortMobile';
import Filters from './Filters';
import { FilterMobileContainer, StyledDrawer } from './Filter.style';

const FiltersMobile = ({
  filterOpen,
  setFilterOpen,
  filterParams,
  open,
  setOpen
}) => {
  return (
    <FilterMobileContainer
      mb={2}
      width="100%"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Button
        style={{ outline: 0, boxShadow: 'none', padding: 0 }}
        onClick={() => setFilterOpen(true)}
      >
        <Box className="filtersIconMobile">
          <i className="icon-setting-slider" />

          <Typography mx="10px">فیلترها</Typography>
          {filterParams.selectedFilters.length > 0 && (
            <Stack className="numberOfFilters">
              <Typography variant="caption" color="white.100">
                {filterParams.selectedFilters.length}
              </Typography>
            </Stack>
          )}
        </Box>
      </Button>

      {filterOpen && (
        <>
          <StyledDrawer
            anchor="bottom"
            open={filterOpen}
            PaperProps={{ style: { height: '100%' } }}
          >
            <Stack className="filtersTitle">
              <Typography variant="h3" color="black.70">
                فیلترها
              </Typography>
              <i className="icon-remove" onClick={() => setFilterOpen(false)} />
            </Stack>
            <Filters filterParams={filterParams} />
          </StyledDrawer>
        </>
      )}

      <SortMobile filterParams={filterParams} open={open} setOpen={setOpen} />
    </FilterMobileContainer>
  );
};

export default FiltersMobile;
