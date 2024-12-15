import MobileTypeThree from './MobileTypeThree';
import DesktopTypeThree from './DesktopTypeThree';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';
import { Box } from '@mui/material';
import { TypeThreeSkeleton } from '../hotOfferSkeleton';

function TypeThree({ products, hotOfferLink, loading }) {
  const isDesktop = !useIsMobile();

  return loading ? (
    <TypeThreeSkeleton />
  ) : (
    <Box width="1">
      {isDesktop ? (
        <DesktopTypeThree products={products} hotOfferLink={hotOfferLink} />
      ) : (
        <MobileTypeThree products={products} />
      )}
    </Box>
  );
}

export default TypeThree;
