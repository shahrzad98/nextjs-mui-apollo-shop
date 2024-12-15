import { Grid } from '@mui/material';
import React from 'react';
import Favorite from '../favorite';
import ColorPallte from './colorPallte';
import Size from './size';

const Variants = ({
  options,
  handleSelectedVariant,
  handleOptionValueIsSelected,
  isDesktop,
  stock,
  isFavorite,
  favoriteLoading,
  addOrRemoveToFavorites
}) => {
  return (
    <>
      <Grid sx={{ flexDirection: 'column' }} container>
        <Grid display={'flex'} justifyContent={'space-between'}>
          <Grid width={'75%'}>
            {!!options.length &&
              options
                .filter(option => option.is_color)
                ?.map(item => (
                  <ColorPallte
                    key={`option-color-${item.id}`}
                    isDesktop={isDesktop}
                    id={item.id}
                    optionValues={item?.values}
                    title={item?.name}
                    handleSelectedVariant={handleSelectedVariant}
                    handleOptionValueIsSelected={handleOptionValueIsSelected}
                  />
                ))}
          </Grid>
          {isDesktop && (
            <Favorite
              {...{
                isFavorite,
                favoriteLoading,
                addOrRemoveToFavorites,
                isDesktop
              }}
              register={true}
            />
          )}
        </Grid>

        {!!options.length &&
          options
            .filter(option => !option.is_color)
            ?.map(item => (
              <Size
                color={options
                  .filter(option => option.is_color)
                  .map(item => item.values)}
                key={`option-list-${item.id}`}
                isDesktop={isDesktop}
                id={item.id}
                stock={stock}
                optionValues={item?.values}
                title={item?.name}
                handleSelectedVariant={handleSelectedVariant}
                handleOptionValueIsSelected={handleOptionValueIsSelected}
              />
            ))}
      </Grid>
    </>
  );
};

export default Variants;
