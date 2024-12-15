import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material';

const ActionsBtn = styled(Button)(({}) => ({
  background: 'black',
  color: 'white',
  '&:hover': {
    background: 'black'
  }
}));
export default function FormButton({ title, callBack, sxStyle, ...props }) {
  return (
    <ActionsBtn onClick={callBack} sx={{ ...sxStyle }} {...props}>
      {title}
    </ActionsBtn>
  );
}
