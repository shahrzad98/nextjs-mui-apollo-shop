import { Box, Button, Skeleton, Typography } from '@mui/material';
import React from 'react';
import { SelectedFiltersContainer } from './select.style';

const SelectedFilter = ({ handleClearAll, selectedFilters, loading }) => {
  return (
    <>
      {loading ? (
        <Skeleton variant="rectangular" width="100%" height={40} />
      ) : (
        <SelectedFiltersContainer>
          {selectedFilters.length > 0 && (
            <Box
              className="removeAll"
              onClick={() => {
                handleClearAll();
              }}
            >
              <Typography variant="body2" color="white.100">
                حذف همه
              </Typography>
            </Box>
          )}
          {selectedFilters.map((e, index) => (
            <Box className="selectedParam" key={index}>
              <Button
                size="small"
                onClick={() => {
                  e.handleClear();
                }}
              >
                <i className="icon-remove-add" />
              </Button>
              <Typography variant="body2" component="caption" color="black.70">
                {e.name}
              </Typography>
            </Box>
          ))}
        </SelectedFiltersContainer>
      )}
    </>
  );
};

export default SelectedFilter;
