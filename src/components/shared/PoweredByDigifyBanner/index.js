import { Grid, Link, Typography } from '@mui/material';
import Digify from 'public/static/assets/svg/digify';

export default function PoweredByDigifyBanner() {
  return (
    <Grid
      container
      textAlign="center"
      bgcolor="#F4F4F4"
      justifyContent="center"
      alignItems="center"
      gap={2}
      minHeight={92}
    >
      <Link
        sx={{ height: 60 }}
        href="https://digify.shop"
        target="_blank"
        rel="noreferrer"
      >
        <Digify />
      </Link>
      <Typography variant="h6" fontSize={16} color="#49494D">
        Powered By
      </Typography>
    </Grid>
  );
}
