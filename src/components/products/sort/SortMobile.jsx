import * as React from 'react';
import { Box, Drawer, Stack, Typography } from '@mui/material';
import { sortTitleDictionary } from '../../../../constant/category';
import SortSvg from '../../../../public/static/assets/svg/products/sortSvg';
import { SortMobileWrapper } from './sort.style';

const SortMobile = ({ setOpen, open, filterParams }) => {
  const hasDefault = filterParams.ordering.options.find(O => O.isSelected);
  const toggleDrawer = event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setOpen(!open);
  };

  return (
    <Stack justifyContent="flex-end">
      <Stack
        className="sortButton"
        direction="row"
        onClick={() => setOpen(true)}
      >
        <Typography mr={1}>
          {filterParams?.ordering?.options?.filter(e => e.isSelected === true)
            ?.length > 0
            ? sortTitleDictionary[
                filterParams?.ordering?.options?.filter(
                  e => e.isSelected === true
                )[0].value
              ]
            : 'پرفروش ترین'}
        </Typography>
        <SortSvg />
      </Stack>
      {open && (
        <div>
          <Drawer anchor="bottom" open={open} onClose={toggleDrawer}>
            <SortMobileWrapper>
              <Stack className="sortTitle">
                <Typography variant="subtitle1" fontWeight="bold">
                  مرتب سازی
                </Typography>
                <SortSvg />
              </Stack>
              {filterParams?.ordering?.options?.map((el, index) => (
                <Box
                  className={`${
                    (el.isSelected && 'active') ||
                    (!hasDefault && index === 0 && 'active')
                  } sortOption`}
                  onClick={() => {
                    el.handleChange();
                    setOpen(false);
                  }}
                  container
                  key={el.key}
                >
                  <Typography
                    fontWeight={
                      el.isSelected || (!hasDefault && index === 0)
                        ? 'bold'
                        : 'inherit'
                    }
                  >
                    {sortTitleDictionary[el.value]}
                  </Typography>
                </Box>
              ))}
            </SortMobileWrapper>
          </Drawer>
        </div>
      )}
    </Stack>
  );
};

export default SortMobile;
