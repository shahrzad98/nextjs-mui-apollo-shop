import styled from '@emotion/styled';
import { Card, Grid, TextField } from '@mui/material';

export const StyleCard = styled(Card)`
  .MuiCardHeader-root {
    padding: 0;
  }
  .MuiCardContent-root {
    padding: 0px;
    padding-bottom: 0 !important;
  }
`;
export const RedditTextField = styled(props => (
  <TextField
    InputProps={{
      disableUnderline: true,
      style: {
        background: '#fff'
      }
    }}
    {...props}
    sx={{ background: '#fff' }}
  />
))(({ theme, ...props }) => ({
  backgroundColor: '#ffffff',
  '& .MuiInputLabel-root': {
    fontSize: '18px',
    color: '#00000061'
  },

  '& .MuiFilledInput-root': {
    backgroundColor: '#fff',
    overflow: 'hidden',
    borderRadius: 0,
    padding: '15px',
    transition: theme.transitions.create(['border-color', 'background-color']),

    '& .Mui-disabled': {
      backgroundColor: '#ffffff'
    },
    '&.Mui-focused': {
      backgroundColor: '#fff',
      borderColor: 'none'
    },
    border: '1px solid #e2e2e1',
    borderRight: 'none',
    borderTop: 'none',
    ...(props.oddEv && { borderLeft: 'none' })
  }
}));
export const DateField = styled(props => (
  <Grid
    {...props}
    sx={{
      border: '1px solid #e2e2e1 ',
      borderRight: 'none',
      borderTop: 'none',
      ...(props.odd && { borderLeft: 'none' })
    }}
  />
))(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '&:hover': {
      '& .MuiOutlinedInput-notchedOutline': {
        backgroundColor: 'transparent',
        borderColor: '#e2e2e1'
      }
    }
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
    overflow: 'hidden',
    borderRadius: 0,
    padding: '15px',
    transition: theme.transitions.create(['border-color', 'background-color']),
    '&:hover': {
      backgroundColor: 'transparent',
      border: 'none'
    },
    '&.Mui-focused': {
      backgroundColor: 'transparent',
      borderColor: 'none'
    }
  }
}));
