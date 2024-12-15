import { Grid, Typography } from '@mui/material';
import React from 'react';
import Chip from '../chip';

const Size = ({
  optionValues,
  title,
  handleSelectedVariant,
  handleOptionValueIsSelected,
  id,
  isDesktop,
  stock,
  color
}) => {
  return (
    <Grid key={id} mt={'24px'}>
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
        {stock === 0 && (
          <>
            {color.map(
              (item, index) =>
                handleOptionValueIsSelected(item?.id) && (
                  <p
                    style={{ marginLeft: '8px', marginRight: '8px' }}
                    key={index}
                  >
                    {item.value}
                  </p>
                )
            )}
            {optionValues.map(
              (item, index) =>
                handleOptionValueIsSelected(item?.id) &&
                color.map(item2 =>
                  item2.map(
                    item3 =>
                      handleOptionValueIsSelected(item3?.id) && (
                        <p
                          style={{
                            color: '#ff0018',
                            marginLeft: '16px',
                            marginRight: '16px',
                            margin: 0
                          }}
                          key={index}
                        >
                          {title} {item.value} برای {item3.value} موجود نمی
                          باشد!
                        </p>
                      )
                  )
                )
            )}
          </>
        )}
      </Grid>

      <Grid display={'flex'}>
        {optionValues.map(item => (
          <Chip
            isDesktop={isDesktop}
            key={`optionValue-list-${item.id}`}
            label={item?.value}
            onClick={() => handleSelectedVariant(item)}
            isSelected={handleOptionValueIsSelected(item?.id)}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default Size;
