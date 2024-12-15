import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
const ProductSpecifications = ({ features }) => {
  return (
    <>
      <Grid
        sx={{ minHeight: 'fit-content', direction: 'rtl' }}
        display={'flex'}
        justifyContent={'end'}
      >
        <Grid sx={4} ml={'70px'}>
          {features?.map((item, index) => (
            <Box
              mb={'16px'}
              key={index}
              display={'flex'}
              justifyContent={'start'}
              alignItems={'end'}
            >
              <Typography
                pl={'8px'}
                fontSize={'15px'}
                color={'rgba(28, 27, 32, 0.7)'}
              >
                {item?.description}
              </Typography>
            </Box>
          ))}
        </Grid>
        <Grid sx={2}>
          {features?.map((item, index) => (
            <Box
              mb={'16px'}
              key={index}
              display={'flex'}
              justifyContent={'start'}
              alignItems={'end'}
            >
              <FiberManualRecordIcon
                sx={{ width: 4, color: 'rgba(28, 27, 32, 0.4)' }}
              />
              <Typography
                pl={'8px'}
                fontSize={'15px'}
                color={'rgba(28, 27, 32, 0.4)'}
                textAlign={'left'}
              >
                {item?.title}
              </Typography>
            </Box>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default ProductSpecifications;
