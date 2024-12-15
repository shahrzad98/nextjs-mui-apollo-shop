import styled from '@emotion/styled';
import { Grid } from '@mui/material';

export const Style = styled(Grid)`
  height: 184px;
  position: relative;
  border-right: ${props => (props.isDesktop ? '1px solid #d1d1d2' : 'none')};
  padding: ${props => (props.isDesktop ? '12px ' : '12px 0')};
  padding-left: 0;
  h2 {
    font-size: ${props => (props.isDesktop ? '18px' : '16px')};
    font-weight: 400;
    color: #1c1b20;
  }
  img {
    height: ${props => (props.isDesktop ? '160px' : '116px')};
    width: ${props => (props.isDesktop ? '160px' : '116px')};
    border-radius: 2px;
  }
  .color_circle {
    width: 16px;
    height: 16px;
    border-radius: 100%;
    border: 0.5px solid rgba(28, 27, 32, 0.4);
    margin-right: 8px;
  }
  .option_value {
    font-size: ${props => (props.isDesktop ? '16px' : '14px')};
    font-weight: 400;
    color: #1c1b2066;
    margin: 0;
    margin-right: 5px;
  }
  .more_btn {
    padding-right: 0;
    padding-left: 0;
  }
  .top-border {
    height: 1px;
    background: ${props =>
      props.isDesktop
        ? 'linear-gradient(to left,#D1D1D2 100%, #FFFFFF 100%)'
        : 'linear-gradient(to left,#FFFFFF 100%,#D1D1D2 50%, #FFFFFF 100%)'};
    position: absolute;
    top: 1px;
    right: 0;
  }
  .bottom-border {
    height: 1px;
    background: ${props =>
      props.isDesktop
        ? 'linear-gradient(to left,#D1D1D2 100%, #FFFFFF 100%)'
        : 'linear-gradient(to left,#FFFFFF 100%,#D1D1D2 50%, #FFFFFF 100%)'};
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .cost {
    margin: 0;
    color: #1c1b20;
    span {
      font-size: 14px;
    }
  }
  .primaryCost {
    color: rgba(28, 27, 32, 0.4);
    margin: 0;
    font-size: 16px;
    font-weight: 400;
    position: absolute;
    right: 0;
    top: -20px;
    text-decoration: line-through;
  }
  .counterCont {
    height: 38px;
    border: 1px solid rgba(28, 27, 32, 0.2);
    border-radius: 2px;
    width: 116px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    .loyaltyGift {
      position: absolute;
      right: -95%;
      top: 10%;
      color: #ffdf00;
    }
    button {
      width: 36px;
      height: 100%;
    }
  }
  .counter {
    color: #1c1b2066;
    height: 100%;
    border-left: 1px solid rgba(28, 27, 32, 0.2);
    border-right: 1px solid rgba(28, 27, 32, 0.2);
    width: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .productDrawer {
    position: absolute;
    padding: ${props => (props.isDesktop ? '16px' : '11px')};
    top: 10px;
    right: 25px;
    border: 1px solid rgba(28, 27, 32, 0.1);
    border-radius: 2px;
    background-color: #fff;
    z-index: 1000;
    button {
      font-size: ${props => (props.isDesktop ? '14px' : '11px')};
      padding: 0;
      display: flex;
      width: 100%;
      justify-content: start;
      padding: 5px;
      color: #1c1b2066;
    }
  }
`;
