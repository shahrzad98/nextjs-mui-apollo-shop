import styled from '@emotion/styled';
import { Box, Grid } from '@mui/material';
import React from 'react';

const Span = styled('span')`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
  margin-top: 12px;
  margin-bottom: 12px;
  color: #101820;
  flex: 1;
`;

const Title = ({ title = '' }) => {
  return (
    <Grid container alignItems={'center'}>
      <Box width={4} height={25} bgcolor={'#DAD6E9'} mr={'12px'} />
      <Span>{title}</Span>
    </Grid>
  );
};

export default Title;
