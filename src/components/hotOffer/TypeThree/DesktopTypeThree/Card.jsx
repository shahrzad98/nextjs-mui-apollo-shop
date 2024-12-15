import { Box, Grid, Tooltip, Typography, Link as MuiLink } from '@mui/material';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import { expireText } from 'utils/expireDate';
import Price from '../../Price';
import BaseImg from 'src/components/shared/BaseImg';
import { useCustomization } from '@digify/theme-kit';
import Link from 'next/link';
import styled from '@emotion/styled';

const StyledMuiLink = styled(MuiLink)`
  text-decoration: none;
  color: unset;
  &:hover {
    text-decoration: none;
    color: unset;
  }
`;

function Card({ product }) {
  const {
    data: {
      hotOffer: {
        color: { value: color }
      }
    }
  } = useCustomization('hotOffer');

  return (
    <Link href={product?.link?.href} passHref>
      <StyledMuiLink>
        <Grid container height={'100%'} component="article">
          <Box
            width="1"
            sx={{ aspectRatio: '1/1' }}
            borderRadius={2}
            overflow="hidden"
          >
            <BaseImg
              productPlaceHolder
              size={{ h: 300, w: 300 }}
              src={product.image}
              alt={product.label}
            />
          </Box>
          <Grid container p={2} gap={1}>
            <Grid item xs={12}>
              <Tooltip title={product.label}>
                <Typography
                  variant="body2"
                  color="#1C1B20"
                  component="h2"
                  p={0}
                >
                  {product.label}
                </Typography>
              </Tooltip>
            </Grid>
            <Grid
              item
              container
              justifyContent={'space-between'}
              alignItems={'center'}
              xs={12}
            >
              <Grid item container flexDirection={'column'} gap={1} xs={5}>
                <Grid item container alignItems={'center'} gap={1}>
                  {/* <AccessTimeIcon fontSize="inherit" color="inherit" />
                  <Typography
                    variant="caption"
                    component="p"
                    color={'inherit'}
                    lineHeight="0.9em"
                    align="right"
                  >
                    {expireText(
                      product.hotOfferExpireDate,
                      ' تا اتمام تخفیف ',
                      'منقضی شده'
                    )}
                  </Typography> */}
                </Grid>
                <Grid item>
                  <Typography
                    variant="caption"
                    lineHeight="0.9em"
                    color={color}
                  >
                    {+product.orderable_count <= 5 &&
                      +product.orderable_count > 0 &&
                      `تنها ${product.orderable_count} عدد مانده`}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={7} dir="ltr">
                <Price
                  count={product.orderable_count}
                  discount={product.discountPercent}
                  online_cost={product.cost}
                  online_primary_cost={product.primaryCost}
                  color={color}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </StyledMuiLink>
    </Link>
  );
}

export default Card;
