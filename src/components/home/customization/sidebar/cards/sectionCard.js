import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import React, { useState } from 'react';

const Style = styled(Grid)`
  height: 72px;
  background-color: #f3f3f3;
  border-radius: 10px;
  padding: 0 16px;
  cursor: pointer;
  p {
    font-size: 16px;
  }
  &:hover {
    background-color: #fff;
    outline: 0.5px solid #c9c3e0;
    p {
      color: #483493;
    }
  }
`;

const SectionCard = ({ icon, title, onClick }) => {
  const [hover, setHover] = useState(false);
  return (
    <Style
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      mb={3}
      container
      alignItems="center"
    >
      {icon(hover ? '#483493' : '#101820')}
      <p style={{ marginRight: '8.5px' }}>{title}</p>
    </Style>
  );
};

export default SectionCard;
