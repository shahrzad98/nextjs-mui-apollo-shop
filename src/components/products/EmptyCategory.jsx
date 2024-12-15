import * as React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import useIsMobile from '../shared/Hooks/useIsMobile';

const EmptyCategory = () => {
  const isMobile = useIsMobile();
  return (
    <Box
      margin="100px auto"
      textAlign="center
   "
    >
      <Image
        src="/static/assets/svg/products/noProduct.svg"
        width={isMobile ? 120 : 150}
        height={isMobile ? 120 : 190}
        alt="لیست خالی"
      />
      <Typography variant="subtitle1" color="black.40" mt={isMobile ? 3 : 4}>
        محصولی با این مشخصات پیدا نشد!
      </Typography>
    </Box>
  );
};

export default EmptyCategory;
