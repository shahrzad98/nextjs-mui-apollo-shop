import styled from '@emotion/styled';
import { Box, Grid, Typography } from '@mui/material';

export const RootContent = styled(Grid, {
  shouldForwardProp: prop => !['contentAlign', 'colorMode'].includes(prop)
})(({ theme, contentAlign, colorMode }) => ({
  padding: theme.spacing(1),
  position: 'absolute',
  top: '0',
  left: '0',
  bottom: '0',
  right: '0',
  backgroundColor: 'transparent',
  color: colorMode === 'dark' ? '#fff' : '#000',
  alignItems:
    contentAlign === 'rtl'
      ? 'flex-start'
      : contentAlign === 'ltr'
      ? 'flex-end'
      : 'center',
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(6),
    rowGap: theme.typography.pxToRem(60)
  },
  '& .btnContent': {
    padding: '4px 18px ',
    [theme.breakpoints.up('md')]: {
      padding: '15px 49px'
    }
  }
}));

export const CustomTextContent = styled(Typography, {
  shouldForwardProp: prop => prop !== 'contentAlign'
})(({ contentAlign }) => ({
  color: 'inherit',
  display: 'inline-block',
  lineHeight: '35px',
  textAlign:
    contentAlign === 'rtl'
      ? 'left'
      : contentAlign === 'ltr'
      ? 'right'
      : 'center'
}));

export const RootMain = styled(Box, {
  shouldForwardProp: prop => !['isFullPage'].includes(prop)
})(({ theme, isFullPage }) => ({
  width: '100%',
  maxWidth: '1280px',
  margin: 'auto',
  '& .swiper-button-prev': {
    padding: '25px',
    transition: 'all 1s ease',
    marginLeft: '10px',
    ':hover': {
      transform: 'scale(1.25)'
    }
  },
  '& .swiper-button-next': {
    padding: '25px',
    transition: 'all 1s ease',
    marginLeft: '10px',
    ':hover': {
      transform: 'scale(1.25)'
    }
  },
  padding: isFullPage ? 0 : '16px',
  marginBottom: '32px',
  [theme.breakpoints.up('md')]: {
    padding: isFullPage ? 0 : '36px 30px',
    marginBottom: '64px'
  }
}));
