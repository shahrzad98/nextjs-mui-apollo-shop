import styled from '@emotion/styled';
import { Grid } from '@mui/material';

export const Style = styled(Grid)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99999;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    width: 500px;
    height: auto;
    background-color: #f5f6fa;
    padding: 24px 16px;
  }

  .df-arrow {
    color: #101820;
    font-size: 20px;
    font-weight: 700;
  }
  h1 {
    margin: 0;
    color: #101820;
    font-size: 20px;
    font-weight: 500;
    margin-left: 15px;
  }
  .header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .cropperContent {
    margin: auto;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(72, 52, 147, 0.08);
    padding: 16px;
    background-color: #fff;
    margin-top: 18px;
    height: 100%;
    position: relative;
  }
`;
