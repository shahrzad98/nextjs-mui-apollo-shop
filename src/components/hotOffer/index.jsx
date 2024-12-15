import TypeThree from './TypeThree';
import TypeOne from 'src/components/hotOffer/TypeOne';
import TypeTwo from './TypeTwo';
import { useCustomization, useProducts } from '@digify/theme-kit';
import { Box, Grid } from '@mui/material';

const hotOfferQuery = { is_hot_offer: true };

function HotOffer() {
  const { data, loading } = useProducts(hotOfferQuery);
  const { products, hotOfferLink } = data;
  const {
    data: {
      hotOffer: {
        style: { value: type }
      }
    }
  } = useCustomization('hotOffer');

  const props = { products, hotOfferLink, loading: loading };

  return (
    <Grid container justifyContent="center">
      {Array.isArray(products) && products.length > 0 && (
        <Grid container margin={'auto'} maxWidth={1280} my={4}>
          <Box width="1" id="hot_offer_scroll" component="section">
            {
              {
                'style-1': <TypeOne {...props} />,
                'style-2': <TypeTwo {...props} />,
                'style-3': <TypeThree {...props} />
              }[type]
            }
          </Box>
        </Grid>
      )}
    </Grid>
  );
}

export default HotOffer;
