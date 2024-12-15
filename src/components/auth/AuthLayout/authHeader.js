import { useStoreInfo } from '@digify/theme-kit';
import { Box } from '@mui/material';
import React from 'react';
import StoreNameAndLogo from 'src/components/Layout/Header/Components/StoreNameAndLogo';

export default function AuthHeader() {
  const { logo, name } = useStoreInfo();

  return (
    <Box
      sx={{
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        p: { xs: 4, md: 2 },
        background: '#fff',
        zIndex: 11
      }}
    >
      <StoreNameAndLogo
        storeName={name}
        // lastSeen={data?.lastBuy}
        storeLogo={logo}
      />
    </Box>
  );
}
