import { useReturnedOrderDetail } from '@digify/theme-kit';
import { Box, styled, Typography } from '@mui/material';
import React from 'react';
import { addUnit, currency } from 'utils/currency';
const StyledBox = styled(Box)`
  border: 1px solid rgba(28, 27, 32, 0.1);
  border-radius: 2px;
`;
const StyledItem = styled(Box)`
  border-bottom: ${({ border }) =>
    !border ? ' 1px solid rgba(28, 27, 32, 0.1) ' : ''};
  padding: 15px;
`;
export default function TableFactorMobile() {
  const { data } = useReturnedOrderDetail();
  const { items } = data;
  const title = {
    returnedCost: 'قیمت اولیه',
    returnedCost3: 'تخفیف',
    returnedCost1: 'مقدار کد تخفیف',
    returnedCost2: 'مالیات'
  };

  return (
    <>
      {items.map((ele, index) => (
        <StyledBox mb={4} key={index}>
          <Box px={2}>
            <StyledItem py={2}>
              <Typography textAlign={'center'}>
                {' '}
                {ele.product.product_label}{' '}
              </Typography>
            </StyledItem>
            {Object.entries(title).map(([key, value], index) => (
              <StyledItem
                key={index}
                display={'flex'}
                justifyContent={'space-between'}
              >
                <Typography fontSize={'14px'} color="rgba(28, 27, 32, 0.4)">
                  {value}
                </Typography>
                <Typography fontSize={'14px'} color="rgba(28, 27, 32, 0.7)">
                  {addUnit(currency(ele[key] ?? 0))}
                </Typography>
              </StyledItem>
            ))}
          </Box>
          <Box
            display={'flex'}
            py={2}
            px={3}
            justifyContent={'space-between'}
            bgcolor={'rgba(28, 27, 32, 0.05)'}
          >
            <Typography fontSize={'14px'} color="rgba(28, 27, 32, 0.7)">
              {' '}
              قیمت مرجوعی
            </Typography>
            <Typography fontSize={'14px'} color="rgba(28, 27, 32, 0.7)">
              {addUnit(currency(ele.returnedCost))}
            </Typography>
          </Box>
        </StyledBox>
      ))}
    </>
  );
}
