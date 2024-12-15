import * as React from 'react';
import { FiltersListWrapper } from './Filter.style';
import FilterItem from './FilterItem';
import FilterCollapse from './FilterCollapse';
import { Box, Checkbox, Stack, Typography } from '@mui/material';
import NumberFormat from 'react-number-format';
import { currency } from '../../../../utils/currency';
import { IOSSwitch } from '../products.style';
import { SwitchLabel } from '../../../../constant/category';
import useIsMobile from '../../shared/Hooks/useIsMobile';

function Filters({ filterParams }) {
  const isMobile = useIsMobile();
  return (
    <FiltersListWrapper component="nav" aria-labelledby="nested-list-subheader">
      {!!filterParams.categories.options.length && (
        <FilterItem
          submitFilter={filterParams.categories.handleSubmit}
          title="دسته بندی"
          collapseMenu={
            <Box mt={2}>
              {filterParams.categories.options?.map(el => (
                <FilterCollapse
                  key={el.key}
                  title={el.key}
                  categories={el.categories}
                  category={el}
                />
              ))}
            </Box>
          }
        />
      )}

      <FilterItem
        submitFilter={filterParams.cost.handleSubmit}
        title="قیمت"
        collapseMenu={
          <>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              mt={2}
            >
              <Typography variant="body2" color="black.70">
                از
              </Typography>
              <NumberFormat
                thousandSeparator
                className="priceInput"
                placeholder={currency(filterParams?.cost.initialValue[0])}
                onValueChange={e => {
                  filterParams?.cost.handleChange([
                    e.floatValue,
                    filterParams?.cost.value[1]
                  ]);
                }}
              />
              <Typography variant="body2" color="black.70">
                تومان
              </Typography>
            </Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              mt={3}
            >
              <Typography variant="body2" color="black.70">
                تا
              </Typography>
              <NumberFormat
                thousandSeparator
                className="priceInput"
                placeholder={currency(filterParams?.cost?.initialValue[1])}
                onValueChange={e => {
                  filterParams?.cost.handleChange([
                    filterParams?.cost.value[0],
                    e.floatValue
                  ]);
                }}
              />
              <Typography variant="body2" color="black.70">
                تومان
              </Typography>
            </Stack>
          </>
        }
      />

      {filterParams?.specifications.map(S => (
        <FilterItem
          submitFilter={S.handleSubmit}
          key={S.name}
          title={S.name}
          collapseMenu={
            <Box mt={2}>
              {S?.options?.map(O => {
                return (
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    key={O.value}
                    mb={3}
                  >
                    <Typography variant="body2" color="black.70">
                      {O.key}
                    </Typography>
                    <Checkbox
                      checked={O.isSelected}
                      onChange={O.handleChange}
                    />
                  </Stack>
                );
              })}
            </Box>
          }
        />
      ))}

      {isMobile ? (
        <Box mb={10}>
          {Object.entries(filterParams?.others)?.map(
            ([title, value], index) => (
              <Stack className="otherFilterRow" key={index}>
                <Typography variant="body2" color="black.70">
                  {SwitchLabel?.[title]}
                </Typography>
                <IOSSwitch
                  onChange={() => {
                    value.handleChange();
                  }}
                  checked={value.value}
                />
              </Stack>
            )
          )}
        </Box>
      ) : (
        <FilterItem
          submitFilter={filterParams.categories.handleSubmit}
          title="سایر فیلترها"
          collapseMenu={
            <Box mt={2}>
              {Object.entries(filterParams?.others)?.map(
                ([title, values], index) => (
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    mb={3}
                    key={index}
                  >
                    <Typography variant="body2" color="black.70">
                      {SwitchLabel?.[title]}
                    </Typography>
                    <IOSSwitch
                      onChange={e => {
                        values.handleChange(e.target.value);
                      }}
                      checked={values.value}
                    />
                  </Stack>
                )
              )}
            </Box>
          }
        />
      )}
    </FiltersListWrapper>
  );
}

export default Filters;
