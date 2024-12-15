import styled from '@emotion/styled';
import { Stack } from '@mui/material';

export const ProductsWrapperContainer = styled(Stack, {
  shouldForwardProp: prop => !['addToBasketShow'].includes(prop)
})(({ theme, addToBasketShow }) => ({
  '.MuiLink-root': {
    textDecoration: 'none'
  },

  '.products': {
    flexDirection: 'row',
    flexWrap: 'wrap',
    overflow: 'hidden'
  },

  '.loadMoreSpinner': {
    flexDirection: 'row',
    justifyContent: 'center',
    height: '100px',
    marginTop: '8px'
  },

  '.cardWrapperWithDrawer': {
    height: addToBasketShow ? '515px' : '470px',
    padding: '0 15px',
    borderRight: ' 1px solid',
    borderImage:
      'linear-gradient( to bottom,rgba(0, 0, 0, 0), #d1d1d2,rgba(0, 0, 0, 0) ) 1 100%',
    borderImageRepeat: 'stretch'
  },

  '.cardWrapper': {
    borderRight: ' 1px solid',
    borderImage:
      'linear-gradient( to bottom,rgba(0, 0, 0, 0), #d1d1d2,rgba(0, 0, 0, 0) ) 1 100%',
    borderImageRepeat: 'stretch'
  },

  '.cardWrapperWithDrawer:nth-of-type(3n)': {
    paddingRight: 0,
    borderRight: 'none'
  },

  [theme.breakpoints.down('lg')]: {
    width: '800px'
  },
  [theme.breakpoints.down('md')]: {
    width: '600px',

    '.cardWrapper , .cardWrapperWithDrawer': {
      width: '215px',
      height: addToBasketShow ? '360px' : '330px'
    },
    '.products': {
      placeContent: 'center',
      overflow: 'hidden'
    }
  },

  [theme.breakpoints.down('sm')]: {
    '.cardWrapper , .cardWrapperWithDrawer': {
      width: '164px',
      padding: '0 8px'
    },
    '.cardWrapper:nth-of-type(odd)': {
      paddingLeft: 0,
      borderLeft: 'none'
    },
    '.cardWrapper:nth-of-type(even)': {
      paddingRight: 0,
      borderRight: 'none'
    }
  }
}));
