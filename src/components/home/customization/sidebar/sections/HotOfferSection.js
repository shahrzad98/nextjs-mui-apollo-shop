import styled from '@emotion/styled';
import { Box, Grid, Typography } from '@mui/material';
import ColorPickerDrawer from 'src/components/shared/ColorPickerCollapse';
import React from 'react';
import StyleRadio from '../../hotOffer/StyleRadio';
import { useCustomization } from '@digify/theme-kit';
import suggestionColors from '../../../../../../constant/suggestionColors';
import Title from 'src/components/shared/CustomizeTitle';

const Style = styled(Grid)``;

const HotOfferSection = () => {
  const {
    data: { hotOffer }
  } = useCustomization('hotOffer');

  return (
    <Style container px={2} flexDirection="column">
      <Title title="حالت نمایش" />
      <Typography variant="body2">استایل موردنظرتان را انتخاب کنید.</Typography>
      <Grid container>
        {hotOffer.style.options.map(
          ({ value, key, additionalData: { image } }) => (
            <StyleRadio
              checked={value === hotOffer.style.value}
              onClick={() => hotOffer.style.handleChangeString(value)}
              key={value}
              name={value}
              faName={key}
              imgSrc={image}
            />
          )
        )}
      </Grid>
      <Title title="ویرایش رنگ" />
      <Box mt={1}>
        <Typography variant="body2" pb={3}>
          می توانید رنگ پیشنهاد ویژه را ویرایش کنید.
        </Typography>
      </Box>
      <ColorPickerDrawer
        SUGGESTION_COLORS={suggestionColors}
        {...{
          color: { hex: hotOffer.color.value.replace(/#/, '') },
          setColor: color => {
            hotOffer.color.handleChangeString(`#${color.hex}`);
          }
        }}
        title="رنگ پیشنهاد ویژه"
      />
    </Style>
  );
};

export default HotOfferSection;
