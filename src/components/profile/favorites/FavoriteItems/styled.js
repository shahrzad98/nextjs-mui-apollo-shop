import styled from '@emotion/styled';
import { Grid } from '@mui/material';

export const RootStyle = styled(Grid)`
  padding: 36px 118px;
  .infinite-scroll-component__outerdiv {
    width: 100%;
  }
  .flexBetween {
    display: flex;
    justify-content: space-between;
  }
  .flexEnd {
    display: flex;
    justify-content: flex-end;
  }

  .removeIcon {
    color: rgba(28, 27, 32, 0.4);
    padding: 0;
    display: flex;
    justify-content: flex-end;
  }
`;

export const Border = styled(Grid)`
  height: 1px;
  background: ${props =>
    props.odd
      ? 'linear-gradient(to left,#D1D1D2 100%, #FFFFFF 100%)'
      : 'linear-gradient(to right,#D1D1D2 100%, #FFFFFF 100%)'};
`;
