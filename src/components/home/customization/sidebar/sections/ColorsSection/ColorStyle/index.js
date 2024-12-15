import { Box, Typography } from '@mui/material';
import React from 'react';
import ColorStyleBox from './ColorStyleBox';
import { useCustomization } from '@digify/theme-kit';

export default function ColorStyle() {
  const {
    data: { colors }
  } = useCustomization('colors');
  return (
    <>
      <Box mb={3} mt={'24px'}>
        <Typography sx={{ fontSize: '14px' }} variant="body1" color="#51575C">
          عکس‌های سایت‌تون تم رنگی روشن دارند یا تیره ؟
        </Typography>
      </Box>
      <Box
        sx={{
          mt: 2,
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%'
        }}
      >
        <ColorStyleBox
          handlerChange={colors.style.handleChangeString}
          style={colors.style.value}
          styleColor="dark"
          color="#51575C"
          title="تیره"
        />
        <ColorStyleBox
          handlerChange={colors.style.handleChangeString}
          style={colors.style.value}
          styleColor="light"
          color="#fff"
          title="روشن"
        />
      </Box>
    </>
  );
}
