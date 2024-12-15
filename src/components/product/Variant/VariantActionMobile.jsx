import * as React from 'react';
import { Box, CircularProgress, Stack } from '@mui/material';
import { VariantContainer } from './variant.style';
import { useRouter } from 'next/router';
import { isUserLoggedIn } from '@digify/theme-kit';

const VariantActionMobile = ({
  addOrRemoveToFavorites,
  favoriteLoading,
  isFavorite,
  label
}) => {
  const { back } = useRouter();
  const router = useRouter();

  function toggleFavoriteHandle() {
    isUserLoggedIn() ? addOrRemoveToFavorites() : router.push(`/auth/login`);
  }

  const { asPath } = useRouter();

  const shareData = {
    title: `${label}`,
    text: 'Learn web development on MDN!',
    url: `${asPath}`
  };
  const share = async () => {
    try {
      await navigator.share(shareData);
    } catch (e) {
      return e;
    }
  };

  return (
    <VariantContainer>
      <Stack
        direction="row"
        justifyContent="space-between"
        p={2}
        height={'50px'}
      >
        <i className="icon-arrow-right1" onClick={back} />
        <Box className="actionContainerMobile">
          {isFavorite ? (
            <>
              {favoriteLoading ? (
                <Box alignSelf="center" width="20px">
                  <CircularProgress color="inherit" size={20} />
                </Box>
              ) : (
                <Box alignSelf="center" height="25px">
                  <i
                    onClick={toggleFavoriteHandle}
                    className="icon-Like-Filled"
                  />
                </Box>
              )}
            </>
          ) : (
            <>
              {favoriteLoading ? (
                <Box alignSelf="center" width="20px">
                  <CircularProgress color="inherit" size={20} />
                </Box>
              ) : (
                <Box alignSelf="center" height="25px">
                  <i
                    onClick={toggleFavoriteHandle}
                    className="icon-social-medias-rewards-rating-love-it"
                  />
                </Box>
              )}
            </>
          )}
          {/*<Box alignSelf="center" height="25px">*/}
          {/*  <i className="icon-shopping-E-commerce-discount-coupons-discount-circle" />*/}
          {/*</Box>*/}

          <Box
            variant="contained"
            alignSelf="center"
            height="25px"
            onClick={share}
          >
            <i className="icon-share" />
          </Box>
        </Box>
      </Stack>
    </VariantContainer>
  );
};

export default VariantActionMobile;
