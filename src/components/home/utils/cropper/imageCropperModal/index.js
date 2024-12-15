import React from 'react';
import { Grid } from '@mui/material';
import ImageCropper from '../index';
import { Style } from './style';

const ImageCropperModal = ({ close = () => {}, image, aspect, setImage }) => {
  return (
    <Style onClick={close}>
      <Grid onClick={e => e.stopPropagation()} container className="content">
        <Grid onClick={close} className="header">
          <i className="df-arrow" />
          <h1>برش تصویر محصول</h1>
        </Grid>
        <Grid
          justifyContent="start"
          alignContent="flex-start"
          container
          className="cropperContent"
        >
          <ImageCropper {...{ image, aspect, close, setImage }} />
        </Grid>
      </Grid>
    </Style>
  );
};

export default ImageCropperModal;
