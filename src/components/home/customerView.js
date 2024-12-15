import React from 'react';

import {
  DynamicComponentsContainer,
  useCustomization
} from '@digify/theme-kit';
import { Grid } from '@mui/material';

const CustomerView = () => {
  const {
    data: { home }
  } = useCustomization('home');

  return (
    <Grid container margin={'auto'}>
      <DynamicComponentsContainer schema={home.sections} />
    </Grid>
  );
};

export default CustomerView;
