import { Box, Skeleton } from '@mui/material';
import React from 'react';

const BaseSkeleton = ({ length = 2 }) => {
  return [...Array(Number(length))].map((_, i) => (
    <Box key={i} mb={3} display="flex" flexDirection="column" gap={3}>
      <Skeleton variant="text" />
      <Skeleton variant="rectangular" width={100} height={100} />
      <Skeleton variant="text" />
    </Box>
  ));
};

export default BaseSkeleton;
