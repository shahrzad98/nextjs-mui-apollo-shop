import React from 'react';
import { Box, Typography, Radio } from '@mui/material';
import CheckedSVG from '../../../svg/checkedSVG';

export default function ColorStyleBox({
  color,
  title,
  style,
  styleColor,
  handlerChange
}) {
  return (
    <Box
      sx={{
        borderRadius: '10px',
        background: '#F3F3F3',
        width: '47%',
        height: '130px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', width: '70%' }}>
        <Radio
          name="radio-buttons"
          onChange={() => {
            handlerChange(styleColor);
          }}
          checkedIcon={<CheckedSVG />}
          checked={style === styleColor}
          inputProps={{ 'aria-label': 'A' }}
          sx={{
            padding: 0,
            mr: 1,
            '& .MuiSvgIcon-root': {
              fontSize: 20
            }
          }}
        />
        <Typography sx={{ fontSize: '14px' }}>{title}</Typography>
      </div>

      <Box
        sx={{
          height: '50%',
          width: '75%',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          background: color
          // mb:2
        }}
      >
        <div
          style={{
            width: '50%',
            margin: '0 auto',
            height: '10px',
            background: color === '#fff' ? '#51575C' : '#fff',
            borderRadius: '10px'
          }}
        ></div>
        <div
          style={{
            width: '30%',
            margin: '0 auto',
            height: '10px',
            background: color === '#fff' ? '#51575C' : '#fff',
            borderRadius: '10px'
          }}
        ></div>
      </Box>
    </Box>
  );
}
