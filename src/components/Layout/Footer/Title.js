import {
  Box,
  Button,
  ButtonBase,
  Drawer,
  Grid,
  Typography
} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';
import { useState } from 'react';
import { useStoreInfo } from '@digify/theme-kit';
import Links from './Links';
import { StoreLogo } from './StoreLogo';

export default function FooterTitle() {
  const { logo, name } = useStoreInfo();

  const [drawer, setDrawer] = useState(false);

  const isMobile = useIsMobile();

  const toggleDrawer = () => {
    setDrawer(prev => !prev);
  };

  return (
    <Grid container alignItems="center" justifyContent="space-between" py={4}>
      {isMobile && (
        <Drawer
          anchor="bottom"
          open={drawer}
          onClose={toggleDrawer}
          sx={{ flexDirection: 'row' }}
          PaperProps={{ sx: { height: '100%', padding: '20px' } }}
        >
          <Grid
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <ButtonBase onClick={toggleDrawer}>
              <ChevronRightIcon />
              <Typography variant="h4" fontSize="18px">
                {name}
              </Typography>
            </ButtonBase>
            <Grid item width={32} height={32}>
              {logo && <StoreLogo src={logo} />}
            </Grid>
          </Grid>

          {/* <Grid
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            pt="39px">
            <Typography>امتیاز فروشگاه</Typography>

            <Rating
              sx={{ fontSize: '18px' }}
              icon={
                <StarBorderIcon
                  style={{ color: '#1C1B20', fontSize: '18px' }}
                />
              }
              name="read-only"
              value={storeRate ? storeRate : 3}
              readOnly
            />
          </Grid> */}
          <Links />
        </Drawer>
      )}
      <Box display="flex" alignItems="center" gap={1}>
        <Grid item width={32} height={32}>
          {logo && <StoreLogo src={logo} />}
        </Grid>
        <Typography variant="subtitle1" color="#1C1B20">
          {name}
        </Typography>
      </Box>
      {isMobile && (
        <Button onClick={toggleDrawer} sx={{ p: 0 }} color="secondary">
          اطلاعات فروشگاه
        </Button>
      )}
    </Grid>
  );
}
