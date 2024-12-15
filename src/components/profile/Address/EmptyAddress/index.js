import { Button } from '@mui/material';
import React from 'react';
import SvgComponent from 'public/static/assets/svg/profile/Address/NoAddress';
export default function NoAddress({ setOpen, reset, setModalStep }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto'
      }}
    >
      <SvgComponent
        style={{
          marginBottom: '20px'
        }}
      />
      <p>هیچ ادرسی برای نمایش وجود ندارد.</p>

      <Button
        fullWidth
        onClick={() => {
          setOpen(true);
          reset();
          setModalStep('mapForm');
        }}
        variant="contained"
        color="primary"
        sx={{ marginBottom: '20px' }}
        size="small"
      >
        افزودن ادرس جدید
      </Button>
    </div>
  );
}
