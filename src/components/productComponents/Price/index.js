import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { addUnit, currency } from 'utils/currency';

const Price = ({ cost, primary_cost, profitPercent, stock, isDesktop }) => {
  return (
    <>
      {stock === 0 ? (
        <Typography
          sx={
            isDesktop
              ? { fontSize: '18px', color: 'rgba(28, 27, 32, 0.4)' }
              : { fontSize: '16px' }
          }
          variant={'body1'}
        >
          ناموجود
        </Typography>
      ) : (
        <Grid display={'flex'} alignItems={'center'}>
          <Grid mr={'12px'}>
            {cost === primary_cost ? (
              <>
                <Box display={'flex'}>
                  <Typography
                    textAlign={'right'}
                    component={'h1'}
                    variant={'h4'}
                  >
                    {cost ? addUnit(currency(cost)) : ''}
                  </Typography>
                </Box>
              </>
            ) : (
              <>
                <Typography
                  sx={isDesktop ? { fontSize: '24px' } : { fontSize: '16px' }}
                  textAlign={'right'}
                  variant={'h4'}
                >
                  {cost ? currency(cost) : 'ناموجود'}
                </Typography>
                {primary_cost && (
                  <Typography
                    sx={
                      isDesktop
                        ? {
                            textDecoration: 'line-through',
                            color: 'rgba(28, 27, 32, 0.4)',
                            fontSize: '14px'
                          }
                        : {
                            fontSize: '12px',
                            textDecoration: 'line-through',
                            color: 'rgba(28, 27, 32, 0.4)'
                          }
                    }
                    textAlign={'end'}
                    width={'100%'}
                    variant={'body1'}
                    noWrap
                  >
                    {primary_cost ? addUnit(currency(primary_cost)) : ''}
                  </Typography>
                )}
              </>
            )}
          </Grid>

          {profitPercent && profitPercent > 0 && primary_cost !== cost ? (
            <Box
              width={'59px'}
              height={'54px'}
              borderRadius={'4px'}
              bgcolor={'#1C1B20'}
              display={'flex'}
              alignItems={'center'}
            >
              <Typography
                sx={{ marginLeft: 'auto', marginRight: 'auto' }}
                variant="h4"
                fontSize={isDesktop ? '22px' : '18px'}
                color={'#fff'}
              >
                {Math.round(profitPercent)}٪
              </Typography>
            </Box>
          ) : (
            ''
          )}
        </Grid>
      )}
    </>
  );
};

export default Price;
