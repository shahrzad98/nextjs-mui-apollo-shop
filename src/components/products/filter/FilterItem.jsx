import * as React from 'react';
import { Box, Button, Collapse, Stack, Typography } from '@mui/material';
import { Brightness1 } from '@mui/icons-material';
import useIsMobile from '../../shared/Hooks/useIsMobile';

const FilterItem = ({ title, collapseMenu, submitFilter }) => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const isMobile = useIsMobile();
  return (
    <Box
      className="filterItemContainer"
      sx={{ bgcolor: open && isMobile ? 'black.5' : 'inherit' }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        onClick={handleClick}
      >
        <Stack className="expand">
          {!isMobile && (
            <Box mr={1}>
              <Brightness1 color="primary" sx={{ fontSize: 10 }} />
            </Box>
          )}
          <Typography>{title}</Typography>
        </Stack>
        <Box width="25px">
          {open ? (
            isMobile ? (
              <i className="icon-Arrow_Top" />
            ) : (
              <i className="icon-Arrow-Bottom" />
            )
          ) : isMobile ? (
            <i className="icon-arrow-right2" />
          ) : (
            <i className="icon-Arrow_Top" />
          )}
        </Box>
      </Stack>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Box mb={3}>{collapseMenu}</Box>
        {title !== 'سایر فیلترها' && (
          <Button
            onClick={submitFilter}
            variant="contained"
            className="filterHandle"
          >
            اعمال فیلتر
          </Button>
        )}
      </Collapse>
    </Box>
  );
};

export default FilterItem;
