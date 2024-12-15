import { Card, CardContent, Divider } from '@mui/material';
import React from 'react';
import { CustomPicker } from 'react-color';
import {
  EditableInput,
  Hue,
  Saturation
} from 'react-color/lib/components/common';
import tinycolor from 'tinycolor2';

export const MyPicker = ({
  color = { hex: 'ffffff' },
  setColor = () => {},
  onClick
}) => {
  const handleSaturationChange = (hsv, isReturn = false) => {
    const colorTiny = tinycolor(hsv);
    const fullColor = {
      hsv: colorTiny.toHsv(),
      hsl: colorTiny.toHsl(),
      hex: colorTiny.toHex()
    };
    if (isReturn) {
      return fullColor;
    } else {
      setColor(fullColor);
    }
  };

  const fullColorValue = handleSaturationChange(color.hex, true);

  const defultColor = {
    hsl: fullColorValue.hsl,
    hsv: fullColorValue.hsv,
    hex: fullColorValue.hex
  };
  const styles = {
    hue: {
      width: '100%',
      height: 10,
      position: 'relative',
      // marginTop: 10,
      background: 'red',
      marginTop: '20px'
    },
    saturation: {
      width: '100%',
      height: 100,
      position: 'relative'
    },
    input: {
      height: 34,
      border: `none`,
      paddingLeft: 10,
      width: '100%',
      direction: 'ltr',
      textAlign: 'left'
    },
    wrap: {
      width: '100%'
    },
    swatch: {
      width: 54,
      height: 38,
      background: color?.hex || defultColor.hex
    },
    btnColor: {
      width: '45px',
      height: '36px',
      background: '#' + color?.hex || defultColor.hex,
      borderRadius: '10px',
      marginRight: '10px'
    },
    wrapEditableInput: {
      display: 'flex',
      background: '#fff',
      height: '48px',
      alignItems: 'center',
      marginBottom: '10px',
      borderRadius: '10px',
      padding: '10px',
      border: '1px solid #C9C3E0'
    }
  };

  return (
    <Card
      onClick={onClick}
      variant="outlined"
      sx={{
        background: '#F3F3F3',
        border: 'none'
      }}
    >
      <CardContent
        sx={{
          padding: '0'
        }}
      >
        <div style={styles?.wrapEditableInput}>
          <EditableInput
            style={{
              wrap: styles.wrap,
              input: styles.input
            }}
            value={'#' + (color?.hex || defultColor.hex)}
            onChange={e => {
              handleSaturationChange(e);
            }}
          />
          <Divider
            orientation="vertical"
            style={{ height: '80%', margin: 'auto' }}
            flexItem
          />
          <span style={styles?.btnColor}></span>
        </div>
        <div style={styles.saturation}>
          <Saturation
            hsl={color?.hsl || defultColor.hsl}
            hsv={color?.hsv || defultColor.hsv}
            onChange={e => {
              handleSaturationChange(e);
            }}
          />
        </div>
        <div style={styles.hue}>
          <Hue
            hsl={color?.hsl || defultColor.hsl}
            onChange={e => {
              handleSaturationChange(e);
            }}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default CustomPicker(MyPicker);
