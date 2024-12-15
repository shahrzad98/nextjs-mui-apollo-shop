import { Box, Grid, Tooltip, Typography } from '@mui/material';
import Price from '../Price';
import DiscountTag from '../DiscountTag';
import { expireText } from 'utils/expireDate';
import BaseImg from 'src/components/shared/BaseImg';

function DisplayProduct({ product, color }) {
  const hasDiscount = product.cost < product.primaryCost;

  return (
    <Grid
      container
      component="article"
      flexDirection={'column'}
      position={'relative'}
      overflow="hidden"
      width={'100%'}
      p={'1px'}
      sx={{
        background: theme =>
          `linear-gradient(to right, ${theme.palette.discount.main} 50%, rgba(255, 255, 255, 0) 0%), linear-gradient(${theme.palette.discount.main} 50%, rgba(255, 255, 255, 0) 0%), linear-gradient(to right, ${theme.palette.discount.main} 50%, rgba(255, 255, 255, 0) 0%), linear-gradient(${theme.palette.discount.main} 50%, rgba(255, 255, 255, 0) 0%)`,
        backgroundPosition: 'top, right, bottom, left',
        backgroundRepeat: 'repeat-x, repeat-y',
        backgroundSize: '20px 1px, 1px 20px'
      }}
      bgcolor={'common.white'}
    >
      <Grid item width={'100%'} height={'400px'} overflow="hidden">
        <BaseImg
          productPlaceHolder
          size={{ h: 300, w: 300 }}
          src={product.image}
          alt={product.label}
        />
      </Grid>
      {hasDiscount && (
        <DiscountTag discountAmount={product.discountPercent} color={color} />
      )}
      <Grid
        item
        container
        flexDirection={'column'}
        width={'100%'}
        height={'188px'}
        px={3}
        bgcolor={'common.white'}
      >
        <Grid item>
          <Tooltip title={product.label}>
            <Typography variant="subtitle1" component="h2" mt={3}>
              {product.label}
            </Typography>
          </Tooltip>
        </Grid>
        <Grid
          item
          container
          justifyContent={'flex-start'}
          alignItems={'center'}
          gap={1}
          mt={4}
        >
          <Typography variant="body2" component="p">
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
      <Box
        position={'absolute'}
        bottom={-25}
        left={'50%'}
        width={50}
        height={50}
        borderRadius={'50%'}
        bgcolor={color}
        sx={{
          transform: 'translateX(-25px)',
          border: theme => `2px dashed ${theme.palette.discount.main}`
        }}
      />
    </Grid>
  );
}

export default DisplayProduct;
