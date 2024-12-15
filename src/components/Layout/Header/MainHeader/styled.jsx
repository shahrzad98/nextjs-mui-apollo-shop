import styled from '@emotion/styled';
import { Typography, Box } from '@mui/material';

export const StyledBox = styled(props => <Box {...props} />)(({ theme }) => ({
  flexGrow: 1,
  width: '100%',
  zIndex: 100,
  top: 0,
  backgroundColor: '#fff',
  boxShadow: theme.breakpoints.up('md')
    ? 'inset 0px -1px 0px #E0E0E0'
    : '0px 2px 6px rgba(0, 0, 0, 0.05)',
  position: 'sticky',
  '& .appBar': {
    color: 'rgba(28, 27, 32, 0.7)'
  },
  '& .toolBarContainer': {
    margin: '0 auto',
    maxWidth: 1280,
    padding: theme.breakpoints.up('md') ? '0 16px' : '0',
    alignItems: 'center',
    height: '100%'
  },
  '& .menuIcon': {
    padding: '0'
  }
}));

export const CustomText = styled(Typography, {
  shouldForwardProp: prop => prop !== 'fontColor'
})(({}) => ({
  position: 'relative',
  color: 'inherit',
  display: 'inline-block',
  fontSize: '14px',
  fontWeight: 600,
  fontColor: 'rgba(17, 10, 44, 0.7)',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: '100%',
    transform: 'scaleX(0)',
    height: '3px',
    bottom: -10,
    left: 0,
    backgroundColor: `rgba(17, 10, 44, 0.7)`,
    transformOrigin: 'bottom right',
    transition: 'transform 0.25s ease-out'
  },
  '&:hover:after': {
    transform: 'scaleX(1)',
    transformOrigin: 'bottom left'
  }
}));
