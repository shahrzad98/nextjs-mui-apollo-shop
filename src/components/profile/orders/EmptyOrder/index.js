import { Box, Typography } from '@mui/material';
import React from 'react';
import { NoOrder } from 'public/static/assets/svg/profile/orders';

const EmptyOrder = ({ name = 'در این قسمت' }) => {
  const [render, setRender] = React.useState(name);

  React.useEffect(() => {
    const renederTimeout = setTimeout(() => {
      setRender(name);
    }, 500);
    return () => {
      clearTimeout(renederTimeout);
      setRender(false);
    };
  }, [name]);

  return (
    render &&
    name == render && (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="300px"
        height="50vh"
      >
        <NoOrder />
        <Typography mt={4} variant="subtitle1" color="#1C1B2066">
          هیچ سفارشی {name} نیست!
        </Typography>
      </Box>
    )
  );
};

export default EmptyOrder;
