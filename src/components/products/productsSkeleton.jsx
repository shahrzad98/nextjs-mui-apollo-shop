import * as React from 'react';
import { Box, Grid, Skeleton } from '@mui/material';
import useIsMobile from '../shared/Hooks/useIsMobile';

const ProductsSkeleton = ({ numberOfSkeletons = 12 }) => {
  const isMobile = useIsMobile();
  return (
    <>
      {isMobile ? (
        <Grid container sx={{ placeContent: 'center' }}>
          {[...new Array(numberOfSkeletons)].map((_, i) => (
            <Box key={i}>
              <Box m={1}>
                <Skeleton variant="rectangular" width={156} height={156} />
              </Box>
              <Box m={1}>
                <Skeleton variant="rectangular" width={156} height={10} />
              </Box>
              <Box m={1}>
                <Skeleton variant="rectangular" width={156} height={10} />
              </Box>
            </Box>
          ))}
        </Grid>
      ) : (
        <Box>
          <Grid container>
            {[...new Array(numberOfSkeletons)].map((_, i) => (
              <Box ml={2} key={i}>
                <Box mb={2}>
                  <Skeleton variant="rectangular" width={290} height={280} />
                </Box>
                <Box mb={2}>
                  <Skeleton variant="rectangular" width={290} height={20} />
                </Box>
                <Box mb={2}>
                  <Skeleton variant="rectangular" width={290} height={10} />
                </Box>
              </Box>
            ))}
          </Grid>
        </Box>
      )}
    </>
  );
};

export default ProductsSkeleton;
