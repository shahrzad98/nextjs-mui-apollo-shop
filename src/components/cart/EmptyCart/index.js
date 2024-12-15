import { Button, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';
import EmptyCartSVG from '../svg/emptyCart';

const EmptyCart = () => {
  const isMobile = useIsMobile();
  return (
    <Stack
      justifyContent={{ xs: 'space-between', md: 'center' }}
      alignItems="center"
      mt={{ xs: '100px', lg: '0' }}
    >
      <Stack>
        <EmptyCartSVG />
        <Typography variant="body1" className="typoText" mt={3}>
          سبد خرید شما خالی است!
        </Typography>
      </Stack>
      <Stack
        sx={
          isMobile && {
            position: 'absolute',
            bottom: '16px'
          }
        }
        width={'100%'}
        alignItems={'center'}
      >
        <Link
          href={'/products/[[...categoryNames]]'}
          as={`/products/${[]}`}
          passHref
        >
          <a style={{ width: '100%', padding: '16px' }}>
            <Button
              sx={{
                width: { xs: '100%', md: '220px' }
              }}
              className="btnProducts"
              color="primary"
              variant="contained"
            >
              بازدید از محصولات
            </Button>
          </a>
        </Link>
      </Stack>
    </Stack>
  );
};

export default EmptyCart;
