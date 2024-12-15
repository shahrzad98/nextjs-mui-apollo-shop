import * as React from 'react';
import { Box, Skeleton, Stack, useMediaQuery } from '@mui/material';
import { ProductSkeletonContainer } from './skeleton.style';
import useIsMobile from '../../shared/Hooks/useIsMobile';

const ProductSkeleton = () => {
  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
  const isMobile = useIsMobile();

  return (
    <ProductSkeletonContainer>
      <Stack
        alignItems="center"
        direction={isSmall ? 'column' : 'row'}
        container
      >
        <Box
          className="carouselSkeletonContainer"
          alignSelf={!isSmall ? 'baseline' : ''}
        >
          <Skeleton variant="rectangular" width="100%">
            <Box pt="100%" />
          </Skeleton>
          <Stack direction="row" justifyContent="space-between" mt={1.5}>
            <Skeleton variant="rectangular" width="24%">
              <Box pt="100%" />
            </Skeleton>
            <Skeleton variant="rectangular" width="24%">
              <Box pt="100%" />
            </Skeleton>
            <Skeleton variant="rectangular" width="24%">
              <Box pt="100%" />
            </Skeleton>
            <Skeleton variant="rectangular" width="24%">
              <Box pt="100%" />
            </Skeleton>
          </Stack>
        </Box>
        <Box className="variantSkeletonContainer">
          {!isSmall && (
            <>
              <Skeleton width="30%" height={20} />
              <Skeleton width="50%" height={30} />
            </>
          )}
          <Skeleton height={70} />
          <Box mt={1}>
            <Skeleton height={5} />
          </Box>
          <Stack direction="row" justifyContent="space-between" mt={3}>
            <Skeleton width="30%" height={30} />
            <Stack direction="row">
              <Box mr={2}>
                <Skeleton variant="rectangular" width={30} height={30} />
              </Box>
              <Box mr={2}>
                <Skeleton variant="rectangular" width={30} height={30} />
              </Box>
              <Box mr={2}>
                <Skeleton variant="rectangular" width={30} height={30} />
              </Box>
            </Stack>
          </Stack>
          <Box mt={6}>
            <Skeleton width="50%" height={20} />
          </Box>
          <Skeleton width="50%" height={30} />
          <Box mt={5} pt="20px" />
          <Box mt={5}>
            <Skeleton height={30} />
          </Box>
          <Box mt={2}>
            <Skeleton height={30} />
          </Box>
          <Box mt={2}>
            <Skeleton height={30} />
          </Box>
          {isSmall ? (
            <Box className="addToBasketMobile">
              <Skeleton height={80} />
            </Box>
          ) : isMobile ? null : (
            <Skeleton className="addToBasket" variant="rectangular" width="96%">
              <Box pt="100%" />
            </Skeleton>
          )}
        </Box>
      </Stack>
    </ProductSkeletonContainer>
  );
};

export default ProductSkeleton;
