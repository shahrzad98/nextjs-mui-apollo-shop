import { Box, Grid } from '@mui/material';
import Title from './Title';
import DisplayProduct from './DisplayProduct';
import Card from '../Card';
import { useCustomization } from '@digify/theme-kit';

function MobileTypeOne({ products, productBanner, hotOfferLink }) {
  const {
    data: {
      hotOffer: {
        color: { value: color }
      }
    }
  } = useCustomization('hotOffer');

  return (
    <Box width={'100%'} dir="rtl">
      <Grid
        item
        container
        alignItems="flex-start"
        justifyContent={'center'}
        width={'100%'}
        p={'2rem 1rem'}
        m={0}
        bgcolor={color}
        spacing={3}
      >
        <Title hotOfferLink={hotOfferLink} />
        {products?.[0] && (
          <DisplayProduct product={productBanner} color={color} />
        )}
      </Grid>
      <br />
      <Grid
        container
        justifyContent={'flex-start'}
        wrap="nowrap"
        width={'100%'}
        minHeight={300}
        gap={3}
        px={2}
        sx={{
          overflowX: 'scroll'
        }}
      >
        {products.map(product => (
          <Card key={product.id} product={product} />
        ))}
      </Grid>
    </Box>
  );
}

export default MobileTypeOne;
