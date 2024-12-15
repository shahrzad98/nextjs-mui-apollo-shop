import { Box, Button, Grid } from '@mui/material';
import BaseImg from 'src/components/shared/BaseImg';
import DrawerModal from 'src/components/shared/DrawerModal';
import { useRouter } from 'next/router';
import React, { useMemo } from 'react';
import { useBasket } from '@digify/theme-kit';
import useIsMobile from '../shared/Hooks/useIsMobile';

const OutOfStockModal = ({ variantId, close }) => {
  const isDesktop = !useIsMobile();
  const router = useRouter();

  const { steps } = useBasket();

  const variant = useMemo(() => {
    return steps.items.products.find(item => item.variant.id == variantId);
  }, [steps.items.products, variantId]);

  return (
    <DrawerModal
      heightContent={'auto'}
      body={
        <Grid className="zeroStock" justifyContent="center" container>
          <Grid mt={isDesktop ? 0 : 4} container justifyContent="center">
            {' '}
            <h2
              style={{
                fontSize: isDesktop ? '24px' : '16px',
                fontWeight: 500,
                color: '#1C1B20'
              }}
            >
              موجودی محصول زیر به پایان رسیده. لطفا از سبد خرید حدف نمایید
            </h2>
          </Grid>
          <Grid mt={5} container justifyContent="center">
            <Box width={'300px'} height={'300px'}>
              <BaseImg
                productPlaceHolder
                size={{ h: 300, w: 300 }}
                src={variant?.image}
                alt={variant?.label}
              />
            </Box>
          </Grid>
          <Grid style={{ marginTop: '12px' }} container justifyContent="center">
            <p
              style={{
                margin: 0,
                fontSize: '18px',
                fontWeight: 400,
                color: '#1C1B20B2'
              }}
            >
              {variant?.label}
            </p>
          </Grid>
        </Grid>
      }
      actions={
        <Grid my={4} container justifyContent="center">
          <Grid
            style={{
              width: isDesktop ? '60%' : '100%'
            }}
            container
            justifyContent={'center'}
          >
            <Button
              onClick={() => {
                router.push(`/profile/cart`);
                close();
              }}
              color="primary"
              variant="contained"
            >
              رفتن سبد خرید
            </Button>
          </Grid>
        </Grid>
      }
      setOpen={() => {
        close();
      }}
      open={true}
    />
  );
};

export default OutOfStockModal;
