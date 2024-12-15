import { Checkbox, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

import BaseImg from 'src/components/shared/BaseImg';
import { currency, addUnit } from 'utils/currency';

import React from 'react';
import styled from '@emotion/styled';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';
//

export default function Mobile({ data, lastElement }) {
  const Style = styled(Grid)`
    ${!lastElement && 'border-bottom: 1px solid #d6d6d6'};
    height: 130px;
    cursor: pointer;
    background: ${false ? 'rgba(28, 27, 32, 0.05) ' : 'rgba(255, 255, 255, 1)'};
    ${false ? 'opacity: 0.3;pointer-events: none;' : ''};
    justify-content: space-between;
  `;
  const { selected, handleSelectItem, product } = data;
  const isDesktop = !useIsMobile();

  return (
    <>
      <Style
        container
        onClick={() => {
          handleSelectItem(product);
        }}
      >
        <Grid item xs={4} pl={3} display={'flex'} alignItems="center">
          <Box width={'100px'} height={'100px'}>
            <BaseImg
              className="p-0 img-products-card"
              src={product.image}
              size={{ w: 300, h: 300 }}
              alt={product?.label}
              q={100}
              productPlaceHolder
              objectFit="cover"
            />
          </Box>
        </Grid>
        <Grid item xs={4} display={'flex'} flexDirection="column" mt={2} ml={2}>
          <Box>
            <Typography component={'h1'} fontSize={'14px'}>
              {product.label}
            </Typography>
          </Box>
          <Box display={'flex'} alignItems="center">
            {product.colors.map((ele, index) => (
              <Box
                key={index}
                marginRight={'8px'}
                border={`0.5px solid ${ele.color}`}
                display={'flex'}
                width={isDesktop ? '16px' : '12px'}
                height={isDesktop ? '16px' : '12px'}
                borderRadius={'50%'}
                bgcolor={'blue'}
              ></Box>
            ))}
            <Box>
              <Typography component={'h1'} fontSize={'12px'}>
                {product.optionValues.map((ele, index) => (
                  <p key={index}>
                    {ele.name}:{ele.value}
                  </p>
                ))}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={3}
          display="flex"
          flexDirection={'column'}
          justifyContent={'space-between'}
        >
          <Box textAlign={'right'}>
            {/* <Checkbox /> */}
            <Checkbox checked={selected} />
          </Box>
          <Box sx={{ width: '100%' }}>
            <Typography component={'h1'} textAlign={'right'} fontSize="12px">
              {addUnit(currency(product.primaryCost))}
            </Typography>
          </Box>
        </Grid>
      </Style>
    </>
  );
}
