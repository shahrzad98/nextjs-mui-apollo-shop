import React from 'react';
import { Box, Tooltip, Typography } from '@mui/material';
const Chip = ({ color = null, label, onClick, isSelected, isDesktop }) => {
  if (color) {
    return (
      <>
        <Tooltip title={label} placement="top">
          <Box
            p={2}
            m={2}
            width={32}
            height={32}
            onClick={onClick}
            sx={{
              cursor: 'pointer',
              backgroundColor: color || '#fff',
              border: `1.5px solid ${isSelected ? '#000' : '#ccc'}`,
              borderRadius: '50%'
            }}
          />
        </Tooltip>
      </>
    );
  }
  return (
    <>
      <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        p={2}
        m={2}
        onClick={onClick}
        sx={{
          cursor: 'pointer',
          height: '52px',
          width: '100px',
          backgroundColor: color || '#fff',
          border: `1.5px solid ${isSelected ? '#000' : '#ccc'}`,
          borderRadius: '2px'
        }}
      >
        <Typography
          sx={!isDesktop ? { fontSize: '14px' } : {}}
          fontWeight={'bold'}
        >
          {label}
        </Typography>
      </Box>
    </>
  );
};

export default Chip;
