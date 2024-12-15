import styled from '@emotion/styled';
import { Grid } from '@mui/material';

export const ImageContainer = styled(Grid)`
  position: relative;
  overflow: hidden;
  aspect-ratio: 328/150;
  img {
    width: 100%;
    object-fit: cover;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
