import styled from '@emotion/styled';
import { Grid, Typography } from '@mui/material';
import React from 'react';
import Chip from '../chip';
const Style = styled(Grid)`
  .color_active {
    border: 1px solid #838383;
  }
`;
const ColorPallte = ({
  optionValues,
  title,
  handleSelectedVariant,
  handleOptionValueIsSelected,
  id,
  isDesktop
}) => {
  return (
    <Style style={{ flexDirection: 'row', width: '75%', minHeight: '150px' }}>
      <Grid key={id}>
        <Grid container display={'flex'}>
          <Typography
            sx={
              isDesktop
                ? { direction: 'ltr', fontWeight: 400 }
                : { fontSize: '16px', fontWeight: 400 }
            }
            color="black.70"
            textAlign={'left'}
            mb={'8px'}
          >
            {title}:
          </Typography>

          {optionValues.map(
            (item, index) =>
              handleOptionValueIsSelected(item?.id) && (
                <p
                  style={{ marginLeft: '8px', marginRight: '8px', margin: 0 }}
                  key={index}
                >
                  {item.value}
                </p>
              )
          )}
        </Grid>
        <Grid display={'flex'}>
          {optionValues.map(item => (
            <Chip
              key={`optionValue-${item.id}`}
              color={item?.color_code}
              label={item?.value}
              onClick={() => handleSelectedVariant(item)}
              isSelected={handleOptionValueIsSelected(item?.id)}
            />
          ))}
        </Grid>
      </Grid>
    </Style>
  );
};

export default ColorPallte;
