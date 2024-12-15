import { Box, Grid, Typography } from '@mui/material';
import { getReversedColor } from 'utils/isLight';

function DiscountTag({ discountAmount, color }) {
  return (
    <Grid
      position={'absolute'}
      top={1}
      right={[30, 30, 60]}
      bgcolor={color}
      sx={{
        width: '40px',
        height: ['30%', '30%', '54%'],
        clipPath: 'polygon(0% 0%, 100% 0, 100% 100%, 50% 90%, 0 100%)'
      }}
    >
      <Box width={'100%'} height={'100%'} position={'relative'}>
        <Typography
          variant="body2"
          component="span"
          sx={{
            transform: 'rotate(-90deg) translate(50%, 0%)',
            color: getReversedColor(color),
            display: 'flex',
            alignItems: 'center',
            whiteSpace: 'nowrap'
          }}
        >
          <Typography variant="subtitle1" component="span" color="inherit">
            {discountAmount}%
          </Typography>
          &nbsp; تخفیف ویژه
        </Typography>
      </Box>
    </Grid>
  );
}
export default DiscountTag;
