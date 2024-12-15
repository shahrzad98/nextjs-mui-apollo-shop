import { useCustomization } from '@digify/theme-kit';
import styled from '@emotion/styled';
import { Box, Checkbox, Grid, Typography } from '@mui/material';
import Title from 'src/components/shared/CustomizeTitle';
import React from 'react';
import EnamadSvg from '../svg/enamadSvg';
import FastDeliverySvg from '../svg/fastDeliverySvg';
import OnlineSupportSvg from '../svg/onlineSupportSvg';
import PaymentSvg from '../svg/paymentSvg';
import ProductGuaranteeSvg from '../svg/productGuaranteeSvg';
import QualityGuaranteeSvg from '../svg/qualityGuaranteeSvg';
import SendNationwideSvg from '../svg/sendNationwideSvg';

const Span = styled('span')`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin-top: 12px;
  margin-bottom: 12px;
`;

const svgs = (name, checked) =>
  ({
    sendNationwideSvg: (
      <SendNationwideSvg color={checked ? '#6D5DA9' : '#C9C3E0'} />
    ),
    fastDeliverySvg: (
      <FastDeliverySvg color={checked ? '#6D5DA9' : '#C9C3E0'} />
    ),
    paymentSvg: <PaymentSvg color={checked ? '#6D5DA9' : '#C9C3E0'} />,
    productGuaranteeSvg: (
      <ProductGuaranteeSvg color={checked ? '#6D5DA9' : '#C9C3E0'} />
    ),
    qualityGuaranteeSvg: (
      <QualityGuaranteeSvg color={checked ? '#6D5DA9' : '#C9C3E0'} />
    ),
    onlineSupportSvg: (
      <OnlineSupportSvg color={checked ? '#6D5DA9' : '#C9C3E0'} />
    ),
    enamadSvg: <EnamadSvg color={checked ? '#6D5DA9' : '#C9C3E0'} />
  }[name]);

const UtilsSection = () => {
  const {
    data: { utils }
  } = useCustomization('utils');

  return (
    <Box width="1">
      <Title title="اطلاعات" />
      <Span>
        حداقل سه تا حداکثر پنج مورد از خدماتی که می خواهید در بخش سرویس ها نمایش
        داده شوند را مشخص کنید.
      </Span>
      <Box bgcolor={'#F3F3F3'} borderRadius={'10px'} p={'16px'} mt={'24px'}>
        {utils?.utilsPart?.options.map((item, index) => {
          const logo = item?.logo;
          return (
            <Grid
              key={index}
              container
              justifyContent={'space-between'}
              alignItems={'center'}
              flexWrap="nowrap"
              p={1}
              pr={0}
              bgcolor={'#FFFFFF'}
              borderRadius={'10px'}
              mb={'16px'}
            >
              <Grid
                display="flex"
                alignItems="center"
                gap={1}
                width="calc(100% - 45px)"
              >
                <Box width={30} display="flex">
                  {svgs(logo, utils?.utilsPart?.value.includes(item?.value))}
                </Box>
                <Typography noWrap>{item?.key}</Typography>
              </Grid>
              <Checkbox
                checked={utils?.utilsPart?.value.includes(item?.value)}
                disabled={
                  (utils?.utilsPart?.value.length <= 3 &&
                    utils?.utilsPart?.value.includes(item?.value)) ||
                  (utils?.utilsPart?.value.length === 5 &&
                    !utils?.utilsPart?.value.includes(item?.value)) ||
                  !utils?.isShow?.value
                }
                // disabled={!isShow.value}
                onChange={() => item?.handleChange()}
                sx={{
                  color: '#483493',
                  '&.Mui-checked': {
                    color: '#483493'
                  }
                }}
              />
            </Grid>
          );
        })}
      </Box>
    </Box>
  );
};

export default UtilsSection;
