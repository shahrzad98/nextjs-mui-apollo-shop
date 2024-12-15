import React from 'react';
import SvgComponent from 'public/static/assets/svg/profile/favorites/Noitem';
import { Box, Typography, Button, Stack } from '@mui/material';
import ThemeLink from 'src/components/shared/ThemeLink';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';
export default function NoItems() {
  const isMobile = useIsMobile();

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent={{ xs: 'space-around', md: 'center' }}
      alignItems={'center'}
      height={{ xs: '88vh', md: '70vh' }}
      minHeight={'300px'}
    >
      <Stack justifyContent={'center'} alignItems={'center'}>
        <SvgComponent
          style={
            isMobile
              ? { width: '116', height: '120' }
              : { width: '157px', height: '160px' }
          }
        />
        <Typography
          color="textSecondary"
          variant="h5"
          sx={{ margin: '36px 0' }}
        >
          هیچ کالایی در علاقمندی ها وجود ندارد!
        </Typography>
      </Stack>
      <Box mt={'28px'}>
        <ThemeLink href="/products">
          <Button
            variant="contained"
            type="submit"
            color="primary"
            sx={{ mt: 2, width: { xs: '328px', md: '217px' } }}
          >
            بازدید از محصولات
          </Button>
        </ThemeLink>
      </Box>
    </Box>
  );
}
