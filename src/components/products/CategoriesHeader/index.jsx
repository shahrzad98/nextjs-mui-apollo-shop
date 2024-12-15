import { Box, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import BreadcrumbsComponent from '../../productComponents/Breadcrumbs';
import { HeaderWrapper } from './CategoriesHeader.style';

const CategoriesHeader = ({ isMobile, category, filterParams }) => {
  const [search, setSearch] = useState(filterParams.search.value ?? '');

  const handleSearch = e => {
    setSearch(e.target.value);
    if (
      // TODO: remove below comment later
      // ev.target.value.length < filterParams.search.value.length ||
      e.target.value.length > 2
    )
      filterParams.search.handleChange(e.target.value);
    else if (e.target.value.length <= 2) filterParams.search.handleChange('');
  };

  return (
    <HeaderWrapper
      container
      mt={isMobile ? '28px' : '53px'}
      mb="20px"
      justifyContent={isMobile ? 'flex-start' : 'space-between'}
    >
      <BreadcrumbsComponent categories={category} isCategory />
      <Grid
        container
        item
        xs={12}
        md={6}
        mb={1}
        justifyContent="flex-end"
        className="searchProduct"
      >
        <TextField
          value={search}
          onChange={handleSearch}
          fullWidth={isMobile}
          InputProps={{
            endAdornment: !isMobile ? <i className="icon-Search" /> : null,
            startAdornment: isMobile ? (
              <Box mx={1}>
                <i className="icon-search" />
              </Box>
            ) : null
          }}
          placeholder="جستجو در این محصولات..."
          variant="standard"
        />
      </Grid>
    </HeaderWrapper>
  );
};

export default CategoriesHeader;
