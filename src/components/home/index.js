import { Grid } from '@mui/material';
import React from 'react';
import Banner from 'src/components/home/Banner';
import Categories from 'src/components/home/Categories';
import Products from 'src/components/home/products';
import HotOffer from 'src/components/hotOffer';
import Utils from 'src/components/home/utils';
import Footer from 'src/components/home/footer';
import HomeBlogSlider from './blog';
export default function Home() {
  return (
    <Grid container margin={'auto'}>
      <Grid item xs={12}>
        <Banner />
      </Grid>
      <Grid item xs={12}>
        <Categories />
      </Grid>

      <Grid item xs={12}>
        <HotOffer />
      </Grid>
      <Grid item xs={12}>
        <Products />
      </Grid>
      <Grid item xs={12}>
        <HomeBlogSlider />
      </Grid>
      <Grid item xs={12}>
        <Utils />
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
}
