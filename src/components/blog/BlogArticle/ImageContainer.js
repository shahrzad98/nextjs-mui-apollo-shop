import styled from '@emotion/styled';
import { Grid } from '@mui/material';

export const ImageContainer = styled(Grid)`
  aspect-ratio: 803/382;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
    object-fit: cover;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
