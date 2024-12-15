import React from 'react';
import { Box, Grid } from '@mui/material';
import { useAddress } from '@digify/theme-kit';
import NeshanMap from '../../../shared/mapNeshan/showingMap';
import AddressContent from './AddressContent';
import { RootAddress } from './styled';

function AddressCard({ data, Modal_mapContext, setRenderList }) {
  const { handleUpdateAddress, ...allUseAddress } = useAddress();

  return (
    <RootAddress variant="outlined">
      <Grid container px={{ xs: '12px', lg: '24px' }}>
        <Grid item width={'65%'}>
          <AddressContent
            setRenderList={setRenderList}
            handleUpdateAddress={handleUpdateAddress}
            addr={data}
            Modal_mapContext={Modal_mapContext}
            allUseAddress={allUseAddress}
          />
        </Grid>
        <Grid item width={'35%'}>
          <Box
            sx={{
              height: { xs: '190px', lg: '201px' },
              width: { xs: '100%', lg: '304px' }
            }}
          >
            <NeshanMap
              styles={{
                zIndex: '0'
              }}
              latLng={[data?.latitude, data.longitude]}
            />
          </Box>
        </Grid>
      </Grid>
    </RootAddress>
  );
}

export default React.memo(AddressCard);
