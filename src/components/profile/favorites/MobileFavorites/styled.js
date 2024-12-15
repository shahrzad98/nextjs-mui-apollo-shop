import styled from '@emotion/styled';
import { Grid } from '@mui/material';

export const MobileStyle = styled(Grid)`
  padding: 19px 0;
  .infinite-scroll-component__outerdiv {
    width: 100%;
  }
  .infinite-scroll-component {
    flex-direction: column;
  }
  .listItem {
    width: calc(100% - 160px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .flexBetween {
    display: flex;
    justify-content: space-between;
  }

  .removeIcon {
    height: 20px;
    width: 20px;
    color: rgba(28, 27, 32, 0.4);
    padding: 0;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
  }

  .top-border {
    height: 1px;
    background: ${props =>
      props.isDesktop
        ? 'linear-gradient(to left,#D1D1D2 100%, #FFFFFF 100%)'
        : 'linear-gradient(to left,#FFFFFF 100%,#D1D1D2 50%, #FFFFFF 100%)'};
  }
`;
