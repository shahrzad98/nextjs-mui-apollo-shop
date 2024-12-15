import styled from '@emotion/styled';
import { Grid } from '@mui/material';

export const SlideWrapper = styled(Grid)`
  position: relative;
  overflow: hidden;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    object-fit: cover;
  }
  .gradient {
    position: absolute;
    width: 100%;
    height: 102%;
    top: 0;
    left: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 60%, #fff 105%);
    display: flex;
    align-items: flex-end;
    padding: 5% 4%;
    h1 {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;
