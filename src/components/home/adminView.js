import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import { customizationParent } from 'utils/vars';
import CustomerView from './customerView';
import SideBar from './customization/sidebar';
import Toolbar from './customization/toolbar';

const Style = styled(Grid)`
  background-color: #f3f3f3;
  padding: 24px;
  padding-bottom: 0;
  height: 100vh;
  overflow: hidden;
  .customer_view {
    position: relative;
    background-color: #fff;
    border: 0.5px solid #c9c3e0;
    border-radius: 14px;
    max-height: calc(100vh - 140px);
    overflow-x: hidden;
    overflow-y: auto;
    padding-bottom: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    scroll-behavior: smooth;
  }
`;

const AdminView = () => {
  const customerViewRef = useRef();

  useEffect(() => {
    if (customerViewRef.current) {
      customizationParent(customerViewRef.current);
    }
  }, [customerViewRef]);

  return (
    <Style container>
      <Toolbar />
      <Grid container item width={'20%'}>
        <SideBar customerViewRef={customerViewRef} />
      </Grid>
      <Grid mt={'24px'} container item width={'80%'} pl={3}>
        <Grid className="customer_view" container ref={customerViewRef}>
          <CustomerView />
        </Grid>
      </Grid>
    </Style>
  );
};

export default AdminView;
