import * as React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Filters from './Filters';
import { FiltersDesktopContainer } from './Filter.style';

const FiltersDesktop = ({ filterParams }) => {
  return (
    <FiltersDesktopContainer
      mb={3}
      className="filterDesktop"
      variant="persistent"
      anchor="left"
    >
      <Stack className="filtersTitle">
        <i className="icon-setting-slider" />
        <Typography mx="10px">فیلترها</Typography>
      </Stack>
      {!!filterParams.selectedFilters.length && (
        <Box className="selectedFiltersContainer">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            mb={3}
          >
            <Typography>فیلترهای اعمال شده</Typography>
            <i
              className="icon-Delete"
              onClick={filterParams.handleClearAllFilters}
            />
          </Stack>

          <Stack direction="row" flexWrap={'wrap'}>
            {filterParams.selectedFilters.map(T => (
              <Stack className="selectedFilter" key={T?.name}>
                <Typography color="white.500" mr={3}>
                  {T.name}
                </Typography>
                <i className="icon-remove-add" onClick={T.handleClear} />
              </Stack>
            ))}
          </Stack>
        </Box>
      )}
      <Filters filterParams={filterParams} />
    </FiltersDesktopContainer>
  );
};

export default FiltersDesktop;
