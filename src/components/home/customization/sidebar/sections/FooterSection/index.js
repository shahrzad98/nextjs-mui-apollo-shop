import styled from '@emotion/styled';
import { Divider, Grid } from '@mui/material';
import React from 'react';
import MenuItems from './MenuItems';
import Socials from './Socials';
const Style = styled(Grid)`
  width: 100%;
  padding: 8px;
`;
const CustomDivider = styled(Divider)`
  width: 100%;
  height: 1px;
  color: #dad6e9;
  margin-top: 16px;
  margin-bottom: 16px;
`;

const FooterSection = () => {
  return (
    <Style container>
      <MenuItems />
      <CustomDivider />
      <Socials />
    </Style>
  );
};

export default FooterSection;
