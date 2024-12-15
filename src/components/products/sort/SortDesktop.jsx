import * as React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { SortDesktopWrapper } from '../filter/Filter.style';
import { sortTitleDictionary } from '../../../../constant/category';

const SortDesktop = ({ filterParams }) => {
  const hasDefault = filterParams.ordering.options.find(O => O.isSelected);
  return (
    <SortDesktopWrapper container justifyContent="space-between">
      <Stack direction="row">
        <Box className="openDrawerSort">
          <Box mr={1}>
            <i className="icon-Sort" />
          </Box>
          <Typography>مرتب سازی براساس :</Typography>
        </Box>
        {filterParams.ordering.options?.map((el, index) => {
          return (
            <Box
              onClick={el.handleChange}
              className={`${
                (el.isSelected && 'active') ||
                (!hasDefault && index === 0 && 'active')
              } sortItem`}
              key={el.key}
            >
              <Typography
                variant="body2"
                color={
                  el.isSelected || (!hasDefault && index === 0)
                    ? 'black.70'
                    : 'black.40'
                }
              >
                {sortTitleDictionary[el.value]}
              </Typography>
            </Box>
          );
        })}
      </Stack>
    </SortDesktopWrapper>
  );
};

export default SortDesktop;
