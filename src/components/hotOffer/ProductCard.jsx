import { Grid, Tooltip, Typography, Link as MuiLink } from '@mui/material';
import PropTypes from 'prop-types';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import { expireText } from 'utils/expireDate';
import Price from './Price';
import GradientDivider from 'src/components/shared/GradientDivider';
import { GradientDividerPositions } from 'src/components/shared/GradientDivider';
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

function ProductCard({ product, positions = [], imagePadding = 0 }) {
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
        <Grid
          container
          component="article"
          flexDirection={'column'}
          position={'relative'}
          pb={1}
          borderRadius={2}
          overflow="hidden"
          bgcolor={'common.white'}
        >
          {positions.map((position, idx) => (
            <GradientDivider
              key={idx}
              direction={GradientDividerPositions[position].dir}
              styles={GradientDividerPositions[position].styles}
            />
          ))}
          <Grid
            item
            width={'100%'}
            sx={{ aspectRatio: '1/1' }}
            p={imagePadding}
            pb={1}
            borderRadius={2}
            overflow="hidden"
          >
            <BaseImg
              productPlaceHolder
              size={{ h: 300, w: 300 }}
              src={product.image}
              alt={product.label}
            />
          </Grid>
          <Grid p={2} pt={0} width={'100%'}>
            <Grid item container overflow="hidden">
              <Tooltip title={product.label}>
                <Typography
                  variant="body2"
                  color="#1C1B20"
                  component="h2"
                  noWrap
                >
                  {product.label}
                </Typography>
              </Tooltip>
            </Grid>
            <Grid item minHeight="30px">
              <Typography variant="overline" component="p" color={color}>
                {+product.orderable_count <= 5 &&
                  +product.orderable_count > 0 &&
                  `تنها ${product.orderable_count} عدد مانده`}
              </Typography>
            </Grid>
            <Grid
              item
              container
              alignItems={'center'}
              gap={1}
              color={'GrayText'}
            >
              {/* <AccessTimeIcon fontSize="inherit" color="inherit" />
              <Typography variant="overline" component="p" color={'inherit'}>
                {expireText(
                  product.hotOfferExpireDate,
                  ' تا اتمام تخفیف ',
                  'منقضی شده'
                )}
              </Typography> */}
            </Grid>
            <Price
              count={product.orderable_count}
              discount={product.discountPercent}
              online_cost={product.cost}
              online_primary_cost={product.primaryCost}
              color={color}
            />
          </Grid>
        </Grid>
      </StyledMuiLink>
    </Link>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object,
  imageHeight: PropTypes.string,
  positions: PropTypes.array
};

export default ProductCard;
