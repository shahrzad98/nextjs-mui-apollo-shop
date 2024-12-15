import { Grid } from '@mui/material';
import PoweredByDigifyBanner from 'src/components/shared/PoweredByDigifyBanner';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';
import Enamad from './Enamad';
import Information from './Information';
import Links from './Links';
import SocialLinks from './Social';
import FooterTitle from './Title';
import { useStoreInfo } from '@digify/theme-kit';

const Footer = () => {
  const isMobile = useIsMobile();
  const { show_digify_logo } = useStoreInfo();

  return (
    <Grid
      component="footer"
      container
      justifyContent="center"
      id="footer_scroll"
      borderTop="1px solid rgba(28, 27, 32, 0.2)"
      mt={2}
    >
      <Grid container maxWidth={1280} px={2}>
        <FooterTitle />
        <Grid container justifyContent="space-between" spacing={3}>
          <Grid item xs={isMobile ? 12 : 4} mb={4}>
            <Information />
          </Grid>
          <Grid item xs={isMobile ? 12 : 4}>
            <Grid container flexDirection="column" alignItems="center">
              <Enamad />
              <SocialLinks />
            </Grid>
          </Grid>
          {!isMobile && (
            <Grid item xs={4}>
              <Links />
            </Grid>
          )}
        </Grid>
      </Grid>
      {show_digify_logo && <PoweredByDigifyBanner />}
    </Grid>
  );
};

export default Footer;
