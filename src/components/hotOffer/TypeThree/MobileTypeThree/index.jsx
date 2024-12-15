import { Box, Grid } from '@mui/material';
import Title from './Title';
import ProductCard from '../../ProductCard';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';
import ShowMore from 'src/components/hotOffer/ShowMore';

function MobileTypeThree({ title, products }) {
  const isMobile = useIsMobile();
  const makePositions = idx => {
    let positions = [];
    let top = [];
    let right = [];

    if (isMobile) {
      top = idx > 1 ? ['top'] : [];
      right = idx % 2 === 0 ? [] : ['right'];
    } else {
      top = idx > 3 ? ['top'] : [];
      right = idx % 4 === 0 ? [] : ['right'];
    }

    positions = [...top, ...right];
    return positions;
  };

  return (
    <Grid container alignItems="flex-start" flexDirection="center" width="100%">
      <Box
        justifyContent="center"
        position="relative"
        width="1"
        overflow="hidden"
        mb={2}
      >
        <Box position="relative">
          <Title title={title} />
        </Box>
      </Box>
      <Grid item container alignItems="flex-start" width="100%" xs={12}>
        {products.slice(0, 4).map((product, idx) => (
          <Grid key={product.id} item xs={6}>
            <ProductCard
              imagePadding={2}
              imageHeight="300px"
              product={product}
              positions={makePositions(idx)}
            />
          </Grid>
        ))}
      </Grid>
      <Box display="flex" width="1" mt={4} justifyContent="center">
        <ShowMore />
      </Box>
    </Grid>
  );
}

export default MobileTypeThree;
