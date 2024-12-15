import { useCustomization } from '@digify/theme-kit';
import { Grid, Typography } from '@mui/material';
import React from 'react';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';
import EnamadSvg from '../customization/sidebar/svg/enamadSvg';
import FastDeliverySvg from '../customization/sidebar/svg/fastDeliverySvg';
import OnlineSupportSvg from '../customization/sidebar/svg/onlineSupportSvg';
import PaymentSvg from '../customization/sidebar/svg/paymentSvg';
import ProductGuaranteeSvg from '../customization/sidebar/svg/productGuaranteeSvg';
import QualityGuaranteeSvg from '../customization/sidebar/svg/qualityGuaranteeSvg';
import SendNationwideSvg from '../customization/sidebar/svg/sendNationwideSvg';

const SVGS = {
  sendNationwideSvg: SendNationwideSvg,
  fastDeliverySvg: FastDeliverySvg,
  paymentSvg: PaymentSvg,
  productGuaranteeSvg: ProductGuaranteeSvg,
  qualityGuaranteeSvg: QualityGuaranteeSvg,
  onlineSupportSvg: OnlineSupportSvg,
  enamadSvg: EnamadSvg
};

const Utils = () => {
  const {
    data: { colors }
  } = useCustomization('colors');
  const {
    data: { utils }
  } = useCustomization('utils');
  const isDesktop = !useIsMobile();

  return (
    utils?.isShow?.value &&
    isDesktop && (
      <Grid
        component="section"
        mt={10}
        id="utils_scroll"
        container
        bgcolor={colors?.style.value === 'light' ? '#F4F4F4' : '#1C1B20'}
      >
        <Grid
          container
          py={4}
          px={2}
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          maxWidth={'1024px'}
          m={'auto'}
        >
          {utils?.utilsPart?.options.map((item, index) => {
            const Logo = SVGS[item?.logo];
            return (
              utils?.utilsPart?.value.includes(item?.value) && (
                <Grid
                  key={index}
                  component="article"
                  display={'flex'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  flexDirection={'column'}
                  gap={4}
                >
                  <Logo
                    width="36"
                    height="36"
                    color={
                      colors?.style.value === 'light' ? '#171C22' : '#FEFEFE'
                    }
                  />
                  <Typography
                    variant="body1"
                    textAlign="center"
                    color={
                      colors?.style.value === 'light' ? '#171C22' : '#FEFEFE'
                    }
                  >
                    {item?.key}
                  </Typography>
                </Grid>
              )
            );
          })}
        </Grid>
      </Grid>
    )
  );
};

export default Utils;
