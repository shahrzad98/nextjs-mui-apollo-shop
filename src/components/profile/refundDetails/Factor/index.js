import { Box, styled, Typography, Grid } from '@mui/material';
import React from 'react';
import { addUnit, currency } from 'utils/currency';
import TableFactor from './table';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TableFactorMobile from './table/mobile';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';

const GridStyle = styled(Grid)`
  border: 1px solid rgba(28, 27, 32, 0.1);
  padding: 20px;
  width: 49%;
  justify-content: space-between;
  align-items: center;
`;

export default function Factor() {
  const isDesktop = !useIsMobile();

  return (
    <Grid container width={'90%'} margin="auto">
      <Grid item xs={12} mb={3}>
        <Box py={3} ml={2} display={'flex'} alignItems="center">
          <ArrowForwardIosIcon />
          <Typography variant="h6"> فاکتور مرجوعی</Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box display={'flex'} justifyContent="space-between" width={'100%'}>
          <GridStyle container>
            <Grid item xs={12} md={4}>
              <Typography
                fontSize={{ xs: '14px', md: '16px' }}
                variant="h6"
                color={'text.secondary'}
                textAlign={{ xs: 'center', md: 'left' }}
              >
                کالاهای تایید شده
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography
                fontSize={{ xs: '14px', md: '16px' }}
                textAlign={{ xs: 'center', md: 'right' }}
                mt={{ xs: 2, md: 0 }}
              >
                3عدد
              </Typography>
            </Grid>
          </GridStyle>

          <GridStyle container>
            <Grid item xs={12} md={4}>
              <Typography
                fontSize={{ xs: '14px', md: '16px' }}
                variant="h6"
                color={'text.secondary'}
                textAlign={{ xs: 'center', md: 'left' }}
              >
                جمع قیمت مرجوعی
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography
                fontSize={{ xs: '14px', md: '16px' }}
                textAlign={{ xs: 'center', md: 'right' }}
                mt={{ xs: 2, md: 0 }}
              >
                {addUnit(currency(1000000))}
              </Typography>
            </Grid>
          </GridStyle>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box mt={4}>{isDesktop ? <TableFactor /> : <TableFactorMobile />}</Box>
      </Grid>
    </Grid>
  );
}
