import { Grid, Typography } from '@mui/material';
import React from 'react';
import Chip from '../chip';

const Material = ({
  optionValues,
  title,
  handleSelectedVariant,
  handleOptionValueIsSelected
}) => {
  return (
    <>
      <Grid>
        <Grid container display={'flex'}>
          <Typography
            sx={{ direction: 'rtl' }}
            color="black.70"
            textAlign={'left'}
            mb={'8px'}
          >
            {title}:
          </Typography>
          {optionValues.map(item => (
            <>
              {handleOptionValueIsSelected(item?.id) && (
                <p style={{ marginLeft: '16px', marginRight: '16px' }}>
                  {item.value}
                </p>
              )}
            </>
          ))}
        </Grid>
        <Grid display={'flex'}>
          {optionValues.map(item => (
            <Chip
              key={`optionValue-list-${item.id}`}
              label={item?.value}
              onClick={() => handleSelectedVariant(item)}
              isSelected={handleOptionValueIsSelected(item?.id)}
            />
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Material;
