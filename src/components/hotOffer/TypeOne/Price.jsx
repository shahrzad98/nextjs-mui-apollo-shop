import { Box, Button, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import { currency } from 'utils/currency';

function Price({ online_cost, online_primary_cost, link }) {
  const hasDiscount = online_cost < online_primary_cost;

  return (
    <Grid item container width={'100%'} wrap="nowrap" alignItems="center">
      <Grid item justifyContent={'center'} alignItems={'center'} xs={6}>
        <Link href={link} passHref>
          <a>
            <Button
              variant="contained"
              sx={{ whiteSpace: 'nowrap', width: '90%' }}
            >
              مشاهده محصول
            </Button>
          </a>
        </Link>
      </Grid>
      <Grid
        item
        container
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        xs={6}
      >
        <Typography variant="h2" component="p">
          {currency(online_cost)}
        </Typography>
        {hasDiscount && (
          <Box color="GrayText" display="flex" alignItems="baseline">
            <Typography
              variant="subtitle1"
              component="span"
              color="#1C1B2066"
              sx={{ textDecoration: 'line-through' }}
            >
              {currency(online_primary_cost)}
            </Typography>
            &nbsp;
            <Typography variant="body2">تومان</Typography>
          </Box>
        )}
      </Grid>
    </Grid>
  );
}

export default Price;
