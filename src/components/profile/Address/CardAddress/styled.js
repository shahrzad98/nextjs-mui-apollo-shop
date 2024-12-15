const { default: styled } = require('@emotion/styled');
const { Card, Box } = require('@mui/material');

export const RootAddress = styled(Card)(() => ({
  display: 'flex',
  height: '249px',
  alignItems: 'center',
  '& .addresContent': {
    display: 'flex',
    flexDirection: 'column',
    direction: 'rtl',
    height: '100%',
    justifyContent: 'space-between'
  },
  '& .CardContent': {
    padding: '0'
  },
  '& .deleteBtn': {
    padding: 0,
    color: 'rgba(28, 27, 32, 0.4)'
  },
  '& .editBtn': {
    padding: 0,
    color: 'rgba(28, 27, 32, 0.4)'
  },
  '& .cardActions': {
    padding: ' 0 ',
    marginTop: '18px'
  }
}));

export const DrawerModalContent = styled(Box)(() => ({
  height: '100%',
  '& .deleteDrawerModal': {
    padding: '0 16px',
    display: 'flex',
    justifyContent: 'space-around',
    mt: 4
  },
  '& .deleteContent': {
    height: '75%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    '& .neshanMap': {
      height: '88px',
      marginTop: '10px',
      marginBottom: 3
    }
  }
}));
