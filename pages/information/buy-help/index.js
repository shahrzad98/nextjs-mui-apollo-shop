import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { useStoreInfo } from '@digify/theme-kit';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';
import BackLink from 'src/components/shared/BackLink';

const BuyHelp = () => {
  const { shipping_guide } = useStoreInfo();
  const isDesktop = !useIsMobile();

  return (
    <>
      <Grid container flexDirection="column" alignItems="center" px={2}>
        {!isDesktop ? (
          <BackLink title="راهنمای خرید" />
        ) : (
          <Typography mt={8} textAlign={'center'} variant="subtitle1" mb={4.5}>
            راهنمای خرید
          </Typography>
        )}
        <Box
          maxWidth={804}
          width="1"
          minHeight={300}
          padding={2}
          border={'1px solid rgba(28, 27, 32, 0.1)'}
        >
          <Typography textAlign={'center'} sx={{ direction: 'rtl' }}>
            {shipping_guide}
          </Typography>
        </Box>
      </Grid>
    </>
  );
};

export default BuyHelp;
