import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const CardContainer = styled(Box, {
  shouldForwardProp: prop =>
    !['hasBorderBottom', 'hasSecondImage', 'addToBasketShow'].includes(prop)
})(({ theme, hasBorderBottom, hasSecondImage, addToBasketShow }) => ({
  textAlignLast: 'left',
  height: addToBasketShow ? ' 520px' : '470px',
  paddingTop: ' 16px',
  position: ' relative',
  borderBottom: hasBorderBottom ? '1px solid' : '',
  borderImage: `linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    #d1d1d2,
    rgba(0, 0, 0, 0)
)
1 2 100%`,
  margin: '0 auto',

  '.productBaseImage': {
    borderRadius: '6px'
  },
  '.discount': {
    height: '23px',
    backgroundColor: theme.palette.offer.main,
    borderRadius: '16px',
    padding: '0 6px',
    '& p': {
      position: 'relative',
      top: '-1px'
    }
  },

  '.icon-shopping-E-commerce-discount-coupons-discount-circle': {
    color: '#fff',
    fontSize: ' 20px'
  },

  '.singleImageEffect': {
    '& img:hover': {
      transform: 'scale3d(1.25, 1.25, 1)',
      transition: 'transform 500ms easeInOut'
    }
  },

  img: {
    borderRadius: '6px',
    transition: ' opacity 300ms ease-in-out'
  },

  '.imagesContainer': {
    position: 'relative',

    img: {
      transition: hasSecondImage
        ? 'opacity 300ms ease-in-out'
        : 'transform  300ms ease-in-out'
    }
  },

  '.secondImage': {
    position: 'absolute',
    top: 0,

    img: {
      opacity: 0
    }
  },

  ':hover': {
    ' .secondImage img': {
      opacity: 1
    },

    '.firstImage img ': {
      opacity: hasSecondImage ? 0 : 'unset'
    }
  },
  '.colorContainer': {
    flexDirection: 'row',
    height: 'fit-content',
    justifyContent: 'flex-end'
  },
  '.colorPallet': {
    width: '16px',
    height: '16px',
    borderRadius: '100px',
    border: '0.5px solid rgba(28, 27, 32, 0.4)'
  },
  '.productTitle': {
    color: theme.palette.black[100],
    marginBottom: '18px',
    fontWeight: 500,
    overflowWrap: 'break-word'
  },
  '.price': {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    position: 'relative',
    top: '-4px'
  },
  '.colors': {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%'
  },
  '.icon-Shopping-E-Commerce__x2F__Shopping-Bags__x2F__shopping-bag-side_1': {
    fontSize: '25px',
    marginRight: '6px'
  },

  '.addRemoveItem': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '2px',
    border: `1px solid ${theme.palette.primary.main}`,
    height: '48px'
  },
  ' .addToBasket': {
    height: '48px'
  },
  '.icon-add-remove & .icon-remove-add-subtract': {
    cursor: 'pointer'
  },
  '.increase , .decrease': {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    ':hover': {
      backgroundColor: 'rgba(28, 27, 32, 0.05)'
    }
  },
  '.remove': {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: '#FF5875',
    ':hover': {
      backgroundColor: '#FFEEF1'
    }
  },
  '.decrease :hover': {
    backgroundColor: 'rgba(28, 27, 32, 0.05)'
  },
  [theme.breakpoints.down('md')]: {
    width: '156px',
    height: addToBasketShow ? '370px' : '330px',
    '.icon-Shopping-E-Commerce__x2F__Shopping-Bags__x2F__shopping-bag-side_1': {
      fontSize: '16px'
    },
    ' .addToBasket': {
      padding: '8px '
    },
    '.colorPallet': {
      width: '12px',
      height: '12px'
    }
  }
}));

export const DisabledBox = styled(Box)`
  position: absolute;
  top: 0;
  background-color: rgba(255, 255, 255, 0.6);
  width: 100%;
  height: 100%;
  z-index: 1;
`;
