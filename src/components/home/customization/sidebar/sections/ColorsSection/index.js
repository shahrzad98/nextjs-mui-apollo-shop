import styled from '@emotion/styled';
import { Box, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import ColorPalette from './ColorPalette';
import ColorStyle from './ColorStyle';

const Style = styled(Grid)``;
const HeaderContent = ({ title }) => {
  return (
    <Box mb={3} display={'flex'} mt={'24px'} alignItems={'center'}>
      <Divider
        orientation="vertical"
        style={{
          height: '24px',
          width: '4px',
          background: '#DAD6E9',
          border: 'none',
          borderRadius: ' 14px 14px 0px 0px',
          opacity: '1'
        }}
        flexItem
      />
      <Typography sx={{ ml: 3 }} variant="h6">
        {title}
      </Typography>
    </Box>
  );
};

const ColorsSection = () => {
  return (
    <Style container>
      <Box width={'100%'} display={'flex'} flexDirection="column">
        <HeaderContent title="پالت رنگی" />
        <Typography
          variant="body1"
          style={{ marginBottom: '5px' }}
          fontSize={'14px'}
          color="#51575C"
        >
          از اینجا پالت رنگی سایت را ویرایش کنید
        </Typography>
        <ColorPalette />
      </Box>
      <Divider
        sx={{
          width: '90%',
          margin: 'auto',
          mt: 4,
          mb: 3,
          background: '#DAD6E9'
        }}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%'
        }}
      >
        <HeaderContent title="استایل رنگی" />
        <ColorStyle />
      </Box>
    </Style>
  );
};

export default ColorsSection;
