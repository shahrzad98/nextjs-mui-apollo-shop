import { Grid, IconButton, SnackbarContent, Stack } from '@mui/material';
import React, { useCallback, useEffect } from 'react';
import CartIcon from 'public/static/assets/svg/Header/Cart';
import Close from 'public/static/assets/svg/shared/Close';
import { staticLinks } from '@digify/theme-kit';
import Link from 'next/link';
import styled from '@emotion/styled';
const Style = styled(Grid)`
  .MuiSnackbarContent-action {
    margin-right: auto;
    margin-left: inherit;
  }
`;
const SnakBarProduct = ({ label, setOpenSnakBar, isDesktop }) => {
  const handleClose = useCallback(
    (_event, reason) => {
      if (reason === 'clickaway') {
        return;
      }

      setOpenSnakBar(false);
    },
    [setOpenSnakBar]
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleClose();
    }, 5000);
    return () => clearTimeout(timeoutId);
  }, [handleClose]);

  const action = (
    <div>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <Close fontSize="small" />
      </IconButton>
    </div>
  );
  const message = (
    <Grid
      style={isDesktop ? { width: '800px' } : { marginBottom: '15px' }}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'space-between'}
    >
      <Grid display={'flex'} alignItems={'center'}>
        <CartIcon color="#FBAD68" />
        {isDesktop ? (
          <span style={{ fontSize: '16px', marginRight: '10px' }}>
            {label}، به سبد خرید شما اضافه شد.
          </span>
        ) : (
          <span style={{ fontSize: '12px', marginLeft: '32px' }}>
            محصول به سبد خرید شما اضافه شد.
          </span>
        )}
      </Grid>
      <Link {...staticLinks.cart}>
        <span
          style={{ color: '#FBAD68', cursor: 'pointer', whiteSpace: 'nowrap' }}
        >
          مشاهده سبدخرید
        </span>
      </Link>
    </Grid>
  );
  return (
    <Style>
      <Stack
        spacing={4}
        sx={
          isDesktop
            ? {
                width: '100%',
                backgroundColor: '#F3F3F3',
                position: 'absolute',
                zIndex: 3,
                marginTop: '-25px'
              }
            : { width: '100%', backgroundColor: '#F3F3F3' }
        }
      >
        <SnackbarContent
          style={{
            backgroundColor: '#F3F3F3',
            color: '#1C1B20',
            direction: 'ltr',
            width: '100%'
          }}
          message={message}
          action={isDesktop ? action : ''}
        />
      </Stack>
    </Style>
  );
};

export default SnakBarProduct;
