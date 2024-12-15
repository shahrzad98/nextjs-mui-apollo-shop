import { Grid } from '@mui/material';
import React from 'react';
import ProductCard from '../ProductCard';

const Step1 = ({ items }) => {
  return (
    <>
      <Grid
        sx={{
          maxHeight: { md: '70vh' },
          overflowY: 'auto',
          paddingBottom: '8px',
          marginBottom: '25px'
        }}
        container
        alignContent="start"
      >
        {items?.products.map((item, i) => (
          <>
            <ProductCard
              product={item}
              odd={i % 2 == 0}
              lastItem={i + 1 == items?.products.length}
              key={item.id}
            />
          </>
        ))}
      </Grid>
    </>
  );
};

export default Step1;
