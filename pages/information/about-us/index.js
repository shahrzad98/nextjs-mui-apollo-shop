import { Box, Grid, Typography } from '@mui/material';
import { useStoreInfo } from '@digify/theme-kit';
import React from 'react';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';
import BackLink from 'src/components/shared/BackLink';

const AboutUs = () => {
  const { about_us, logo, name } = useStoreInfo();
  const isDesktop = !useIsMobile();

  return (
    <Grid container flexDirection="column" alignItems="center" px={2}>
      {!isDesktop ? (
        <BackLink title="درباره ما" />
      ) : (
        <Typography mt={8} textAlign={'center'} variant="subtitle1" mb={4.5}>
          درباره ما
        </Typography>
      )}
      <Box
        maxWidth={804}
        width="1"
        minHeight={300}
        padding={2}
        border={'1px solid rgba(28, 27, 32, 0.1)'}
      >
        <Typography textAlign={'center'} variant="body1">
          {about_us}
        </Typography>
        <Grid
          container
          flexDirection="column"
          alignItems="center"
          gap={2}
          mt={isDesktop ? 6 : 4.5}
        >
          <img
            style={{
              margin: 'auto'
            }}
            width={isDesktop ? 46 : 38}
            src={logo}
            alt="logo"
          />
          <Typography textAlign="center" variant="subtitle1">
            {name}
          </Typography>
        </Grid>
      </Box>
    </Grid>
  );
};

export default AboutUs;
