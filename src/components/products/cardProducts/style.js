import styled from '@emotion/styled';
import { Grid } from '@mui/material';

export const Style = styled(Grid)`
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: center;
  .bottom-border {
    height: 1px;
    background: ${props =>
      props.isDesktop
        ? 'linear-gradient(to left,#D1D1D2 100%, #FFFFFF 100%)'
        : 'linear-gradient(to left,#FFFFFF 100%,#D1D1D2 50%, #FFFFFF 100%)'};
    position: absolute;
    margin: 0;
    bottom: 0;
  }
  .left-border {
    height: 100%;
    width: 1px;
    background: ${props =>
      props.isDesktop
        ? 'linear-gradient(to top,#D1D1D2 100%, #FFFFFF 100%)'
        : 'linear-gradient(to top,#FFFFFF 100%,#D1D1D2 50%, #FFFFFF 100%)'};
    position: absolute;
    margin: 0;
    right: 0;
  }
  .img-products-card {
    object-fit: cover;
  }
`;
