import { Box, Grid, Typography } from '@mui/material';
import Price from '../Price';
import DiscountTag from '../DiscountTag';
import { expireText } from 'utils/expireDate';
import BaseImg from 'src/components/shared/BaseImg';

function DisplayProduct({ product, color }) {
  const hasDiscount = product.cost < product.primaryCost;

  return (
    <Box
      component="article"
      sx={{
        background: theme =>
          `linear-gradient(to right, ${theme.palette.discount.main} 50%, rgba(255, 255, 255, 0) 0%), linear-gradient(${theme.palette.discount.main} 50%, rgba(255, 255, 255, 0) 0%), linear-gradient(to right, ${theme.palette.discount.main} 50%, rgba(255, 255, 255, 0) 0%), linear-gradient(${theme.palette.discount.main} 50%, rgba(255, 255, 255, 0) 0%)`,
        backgroundPosition: 'top, right, bottom, left',
        backgroundRepeat: 'repeat-x, repeat-y',
        backgroundSize: '20px 1px, 1px 20px',
        padding: '1px',
        overflow: 'hidden',
        position: 'relative',
        width: '100%',
        maxWidth: '990px',
        height: '100%'
      }}
    >
      {hasDiscount && (
        <DiscountTag discountAmount={product.discountPercent} color={color} />
      )}
      <Grid container height={'100%'}>
        <Grid item width="37%">
          <BaseImg
            productPlaceHolder
            size={{ h: 313, w: 313 }}
            alt={product.label}
            q={100}
            objectFit="cover"
            src={product.image}
          />
        </Grid>
        <Grid
          item
          container
          flexDirection={'column'}
          justifyContent={'space-between'}
          width="63%"
          bgcolor={'common.white'}
          p={4}
        >
          <Grid item>
            <Typography variant="subtitle2" component="h2" textAlign="left">
              {product.label}
            </Typography>
          </Grid>
          <Grid
            item
            container
            justifyContent={'flex-start'}
            alignItems={'center'}
            gap={1}
            mt={4}
          >
            <Typography variant="body2" component="p" color={'discount.main'}>
              {expireText(product.hotOfferExpireDate, ' تا اتمام تخفیف ')}
            </Typography>
            <Price
              count={product.orderable_count}
              online_cost={product.cost}
              online_primary_cost={product.primaryCost}
              link={product.link.href}
            />
          </Grid>
        </Grid>
      </Grid>
      <Box
        sx={{
          border: theme => `2px dashed ${theme.palette.discount.main}`,
          position: 'absolute',
          top: '50%',
          right: 0,
          width: 64,
          transform: 'translate(50%, -50%)',
          height: 64,
          borderRadius: '50%',
          bgcolor: color
        }}
      />
    </Box>
  );
}

export default DisplayProduct;
