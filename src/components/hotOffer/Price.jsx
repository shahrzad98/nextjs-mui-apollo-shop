import { Box, Grid, Typography } from '@mui/material';
import { currency } from 'utils/currency';
import { getResponsiveValues } from 'utils/getResponsiveValues';
import { getReversedColor } from 'utils/isLight';

function Price({ discount, online_cost, online_primary_cost, color, count }) {
  const hasDiscount = online_cost < online_primary_cost;

  return (
    <Grid
      item
      container
      justifyContent="flex-end"
      alignItems="center"
      gap={1}
      height={getResponsiveValues([35, 50])}
    >
      {count ? (
        <Grid
          container
          alignItems="center"
          flexWrap="nowrap"
          gap={1}
          justifyContent="flex-end"
        >
          <Box
            pt="5px"
            display="flex"
            flexDirection={'column'}
            alignItems={'flex-end'}
            justifyContent="center"
          >
            <Typography variant="subtitle1" component="p" lineHeight="0.8em">
              {currency(online_cost)}
            </Typography>
            {hasDiscount && (
              <Typography
                variant="caption"
                component={'p'}
                lineHeight="0.8em"
                display="flex"
                alignItems="center"
                whiteSpace="nowrap"
              >
                <Typography
                  component="span"
                  variant="caption"
                  sx={{ textDecoration: 'line-through', fontSize: 'inherit' }}
                >
                  {currency(online_primary_cost)}
                </Typography>
                &nbsp;تومان
              </Typography>
            )}
          </Box>
          <Grid>
            {hasDiscount && (
              <Typography
                component="span"
                variant="subtitle1"
                display="flex"
                justifyContent="center"
                alignItems="center"
                borderRadius={6}
                bgcolor={color}
                sx={{
                  width: getResponsiveValues([44, 61]),
                  height: getResponsiveValues([39, 50])
                }}
                color={getReversedColor(color)}
              >
                {discount}%
              </Typography>
            )}
          </Grid>
        </Grid>
      ) : (
        <Grid container alignItems="center" justifyContent="flex-end">
          <Typography variant="subtitle2" component={'p'} lineHeight="0.9em">
            ناموجود
          </Typography>
        </Grid>
      )}
    </Grid>
  );
}

export default Price;
