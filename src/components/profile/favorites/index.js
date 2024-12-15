import React from 'react';
import { useFavorites } from '@digify/theme-kit';
import { Box } from '@mui/material';
import Items from './FavoriteItems';
import Noitem from './EmptyFavorite';
import MobileItems from './MobileFavorites';
import SkeletonFavorites from './Skeleton';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';
export default function Favorites() {
  const favorites = useFavorites();

  const isDesktop = !useIsMobile();

  return (
    <Box
      sx={{
        width: {
          xs: '100%',
          lg: '1280px'
        }
      }}
      margin="0 auto"
    >
      {favorites.loadings.fetchLoading ? (
        <>
          <SkeletonFavorites />
        </>
      ) : (
        <>
          {favorites?.data?.length ? (
            isDesktop ? (
              <Items favorites={favorites} />
            ) : (
              <MobileItems favorites={favorites} />
            )
          ) : (
            <Noitem />
          )}
        </>
      )}
    </Box>
  );
}
