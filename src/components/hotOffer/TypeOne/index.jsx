import MobileTypeOne from './MobileTypeOne';
import DesktopTypeOne from './DesktopTypeOne';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';
import { Box } from '@mui/material';
import React from 'react';
import { TypeOneSkeleton } from '../hotOfferSkeleton';

function TypeOne({ products, hotOfferLink, loading }) {
  const isDesktop = !useIsMobile();

  const [productBannerIndex, setProductBannerIndex] = React.useState(0);

  React.useEffect(() => {
    if (products?.length > 1) {
      const interval = setInterval(() => {
        setProductBannerIndex(prev => {
          if (prev < products.length - 1) {
            return ++prev;
          } else {
            return 0;
          }
        });
      }, 5500);
      return () => {
        clearInterval(interval);
      };
    }
  }, [productBannerIndex, products]);

  const productBanner = React.useMemo(() => {
    return products?.[productBannerIndex];
  }, [productBannerIndex, products]);

  return loading ? (
    <TypeOneSkeleton />
  ) : isDesktop ? (
    <Box width="1">
      <DesktopTypeOne
        products={products}
        hotOfferLink={hotOfferLink}
        productBanner={productBanner}
      />
    </Box>
  ) : (
    <MobileTypeOne
      products={products}
      hotOfferLink={hotOfferLink}
      productBanner={productBanner}
    />
  );
}

export default TypeOne;
