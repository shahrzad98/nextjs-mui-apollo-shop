import { Checkbox, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

import BaseImg from 'src/components/shared/BaseImg';
import { currency, addUnit } from 'utils/currency';

import React from 'react';
import styled from '@emotion/styled';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';
//
export default function Products({ data }) {
  const { selected, handleSelectItem, product } = data;
  const isDesktop = !useIsMobile();
  const Style = styled(Grid)`
    border-bottom: 1px solid #d6d6d6;
    height: 130px;
    cursor: pointer;
    background: ${false ? 'rgba(28, 27, 32, 0.05) ' : 'rgba(255, 255, 255, 1)'};
    ${false ? 'opacity: 0.3;pointer-events: none;' : ''}
  `;
  return (
    <>
      <Style
        container
        onClick={() => {
          handleSelectItem(product);
        }}
      >
        <Grid item container xs={6}>
          <Grid item xs={7} pl={3} display={'flex'} alignItems="center">
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
            <Box ml={4}>
              <Typography component={'h1'}>{product.label}</Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={5}
            display={'flex'}
            alignItems="center"
            justifyContent={'flex-start'}
          >
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
            {product?.optionValues?.length ? (
              <Box>
                <Typography component={'h1'}>
                  {product.optionValues.map((ele, index) => (
                    <p key={index}>
                      {ele.name}:{ele.value}
                    </p>
                  ))}
                </Typography>
              </Box>
            ) : null}
          </Grid>
        </Grid>
        <Grid item container xs={6} alignSelf="center">
          <Grid item xs={6}>
            {false && (
              <Box
                width={{ xs: '110px', md: '140px' }}
                fontSize={{ xs: '14px', md: '16px' }}
                p={1}
                textAlign="center"
                bgcolor={'rgba(255, 88, 117, 0.12)'}
                sx={{
                  border: '1px solid red',
                  borderRadius: '19px'
                }}
              >
                غیرقابل مرجوعی
              </Box>
            )}
          </Grid>
          <Grid
            item
            container
            xs={6}
            display={'flex'}
            alignItems="center"
            justifyContent={'space-evenly'}
          >
            <Grid item xs={6}>
              <Box>
                <Typography
                  component={'h1'}
                  textAlign="right"
                  fontSize={{ xs: '14px', md: '18px' }}
                >
                  {addUnit(currency(product.primaryCost))}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box textAlign={'right'}>
                <Checkbox checked={selected} />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Style>
    </>
  );
}
