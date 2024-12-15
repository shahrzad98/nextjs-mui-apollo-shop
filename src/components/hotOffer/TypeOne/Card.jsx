import { Box, Grid, Typography, Link as MuiLink } from '@mui/material';
import { currency } from 'utils/currency';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import { expireText } from 'utils/expireDate';
import BaseImg from 'src/components/shared/BaseImg';
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
  const hasDiscount = product.cost < product.primaryCost;

  return (
    <Link {...product.link} passHref>
      <StyledMuiLink>
        <Grid
          component="article"
          item
          container
          sx={theme => ({
            flexShrink: 0,
            width: '180px',
            // height: '250px',
            [theme.breakpoints.up('md')]: {
              width: '232px'
              // height: '305px'
            }
          })}
        >
          <Box
            sx={{
              width: '100%',
              aspectRatio: '1/1',
              borderRadius: 2,
              overflow: 'hidden'
            }}
          >
            <BaseImg
              productPlaceHolder
              size={{ h: 300, w: 300 }}
              src={product.image}
              alt={product.label}
            />
          </Box>
          <Grid
            container
            justifyContent={'space-between'}
            sx={theme => ({
              [theme.breakpoints.down('md')]: {
                fontSize: '0.875rem'
              }
            })}
          >
            {product.orderable_count === 0 ? (
              <Grid
                container
                alignItems="center"
                justifyContent="flex-end"
                gap={1}
              >
                <Typography
                  variant="subtitle1"
                  component={'p'}
                  display={'inline-block'}
                >
                  ناموجود
                </Typography>
              </Grid>
            ) : (
              <>
                <Grid
                  item
                  container
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Grid
                    display="flex"
                    alignItems="center"
                    gap={1}
                    color={'GrayText'}
                  >
                    {/* <AccessTimeIcon fontSize="inherit" color="inherit" />
                <Typography
                  variant="caption"
                  component="p"
                  color={'inherit'}
                  fontSize="inherit"
                >
                  {expireText(
                    product.hotOfferExpireDate,
                    ' تا اتمام تخفیف ',
                    'منقضی شده'
                  )}
                </Typography> */}
                  </Grid>
                  <Typography
                    variant="subtitle1"
                    component={'p'}
                    display={'inline-block'}
                  >
                    {currency(product.cost)}
                  </Typography>
                </Grid>
                <Grid
                  item
                  container
                  flexDirection={'column'}
                  alignItems={'flex-end'}
                >
                  {hasDiscount && (
                    <Typography
                      variant="caption"
                      component="p"
                      display="flex"
                      alignItems="center"
                      color={'GrayText'}
                    >
                      <Typography
                        component="span"
                        sx={{
                          textDecoration: 'line-through',
                          fontSize: 'inherit'
                        }}
                      >
                        {currency(product.primaryCost)}
                      </Typography>
                      &nbsp; تومان
                    </Typography>
                  )}
                </Grid>
              </>
            )}
          </Grid>
        </Grid>
      </StyledMuiLink>
    </Link>
  );
}

export default Card;
