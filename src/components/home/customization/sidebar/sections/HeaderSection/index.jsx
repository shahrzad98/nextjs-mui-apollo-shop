import styled from '@emotion/styled';
import { Grid } from '@mui/material';
// import DispalyMode from './DisplayMode';
import MenuItems from './MenuItems';

const Root = styled(Grid)`
  width: 100%;
  padding: 8px;
`;

// const CustomDivider = styled(Divider)`
//   width: 100%;
//   height: 1px;
//   color: #dad6e9;
//   margin-top: 16px;
//   margin-bottom: 16px;
// `;

const HeaderSection = () => {
  return (
    <Root container>
      {/* <DispalyMode />
      <CustomDivider /> */}
      <MenuItems />
    </Root>
  );
};

export default HeaderSection;
