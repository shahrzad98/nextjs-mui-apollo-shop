import React, { useState } from 'react';
import styled from '@emotion/styled';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  ClickAwayListener,
  Grid
} from '@mui/material';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SortIcon from '@mui/icons-material/Sort';
const Style = styled(Accordion)`
  z-index: 1;
  width: max-content;
  border: ${props =>
    props.open
      ? '1px solid rgba(28, 27, 32, 0.4)'
      : '0.5px solid rgba(28, 27, 32, 0.2)'};
  border-radius: 4px;
  padding: 0;
  transition: width 0.2s;
  &::before {
    background-color: transparent;
  }
  .MuiAccordionSummary-content {
    margin: 0;
    color: rgba(28, 27, 32, 0.7);
  }
  .MuiAccordionSummary-root {
    height: 44px;
    width: inherit;
    border-bottom: ${props =>
      props.open
        ? '0.5px solid rgba(28, 27, 32, 0.2)'
        : '0.5px solid rgba(28, 27, 32, 0)'};
  }
  .MuiAccordionSummary-expandIconWrapper.Mui-expanded {
    transform: ${props =>
      props.isDesktop ? 'rotate(180deg)' : 'rotate(0deg)'};
  }
  .MuiAccordionDetails-root {
    max-height: 450px;
    padding: 8px;
    overflow-y: auto;
    overflow-x: hidden;
    p {
      margin: 0;
      font-size: 16px;
      color: #1c1b20b2;
    }
  }
  .MuiAccordion-region {
    position: relative;
  }
  .submitBtn {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 75px;
    border-top: 0.5px solid rgba(28, 27, 32, 0.2);
    background-color: #fff;
    padding: 12px;
  }
  .option {
    padding: 0 0 24px;
    &:last-child {
      padding-bottom: 0;
    }
    p {
      margin: 0;
    }
  }
`;

const SortDrawer = ({ label, options, renderName }) => {
  const [open, setOpen] = useState(false);

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <Style open={open} expanded={open}>
        <AccordionSummary
          expandIcon={<SortIcon style={{ color: '#1C1B2070' }} />}
          onClick={() => setOpen(!open)}
        >
          {open ? 'مرتب سازی' : label}
        </AccordionSummary>
        <AccordionDetails>
          {options?.map(e => (
            <Grid
              // sx={{ width: 150 }}
              onClick={() => {
                e.handleChange();
                setOpen(false);
              }}
              container
              key={e.key}
            >
              <p style={{ fontWeight: e.isSelected ? '700' : '400' }}>
                {renderName[e.value]}
              </p>
            </Grid>
          ))}
        </AccordionDetails>
      </Style>
    </ClickAwayListener>
  );
};

export default SortDrawer;
