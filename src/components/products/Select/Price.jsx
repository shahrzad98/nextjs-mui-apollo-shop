import React, { useState } from 'react';
import NumberFormat from 'react-number-format';
import styled from '@emotion/styled';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  ClickAwayListener,
  Grid
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { currency } from 'utils/currency';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Style = styled(Accordion)`
  padding: 0 16px;
  margin-left: 16px;
  z-index: 1;
  width: ${props =>
    props.isDesktop
      ? props.open
        ? '250px'
        : props.isCat
        ? '120px'
        : '90px'
      : '100%'};

  border: ${props =>
    props.isDesktop
      ? props.open
        ? '1px solid rgba(28, 27, 32, 0.4)'
        : '0.5px solid rgba(28, 27, 32, 0.2)'
      : 'none'};
  border-bottom: ${props =>
    props.isDesktop
      ? '0.5px solid rgba(28, 27, 32, 0.2)'
      : '0.5px solid rgba(28, 27, 32, 0.2)'};
  border-radius: ${props => (props.isDesktop ? '4px' : '0px')};
  transition: width 0.2s;
  &::before {
    background-color: transparent;
  }
  .MuiAccordionSummary-content {
    margin: 0;
    color: rgba(28, 27, 32, 0.7);
  }
  .MuiAccordionSummary-expandIconWrapper {
    color: rgba(28, 27, 32, 0.7);
  }
  .MuiAccordionSummary-expandIconWrapper.Mui-expanded {
    transform: ${props =>
      props.isDesktop ? 'rotate(180deg)' : 'rotate(-90deg)'};
  }
  .MuiAccordionSummary-root {
    min-height: 48px;
    padding-right: ${props => (props.isDesktop ? '' : '0px')};
    border-bottom: ${props =>
      props.open
        ? '0.5px solid rgba(28, 27, 32, 0.2)'
        : '0.5px solid rgba(28, 27, 32, 0)'};
  }

  .MuiAccordionDetails-root {
    max-height: 450px;
    min-height: 20px;
    padding: 8px;
    overflow-y: auto;
    overflow-x: hidden;
    padding-bottom: 80px;
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
    margin: 0;
  }
`;

const Price = ({
  label,
  cost,
  onSubmit,
  isDesktop,
  setFilterOpen,
  updateStates
}) => {
  const [open, setOpen] = useState(false);

  const handleClickAway = () => {
    if (open) updateStates();
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Style isDesktop={isDesktop} open={open} expanded={open}>
        <AccordionSummary
          style={!isDesktop ? { fontSize: '18px' } : {}}
          expandIcon={
            isDesktop ? (
              <KeyboardArrowDownIcon />
            ) : (
              <ArrowBackIosNewIcon style={{ fontSize: 14 }} />
            )
          }
          onClick={() => {
            if (open) updateStates();
            setOpen(!open);
          }}
        >
          {label}
        </AccordionSummary>
        <AccordionDetails>
          <Grid
            mt={2}
            alignItems="center"
            container
            sx={
              isDesktop
                ? { minWidth: 230 }
                : { display: 'flex', width: '100%', justifyContent: 'center' }
            }
          >
            <p>از</p>
            <NumberFormat
              style={
                isDesktop
                  ? { direction: 'ltr', width: '160px', margin: '0 10px' }
                  : { direction: 'ltr', width: '70%', margin: '0 10px' }
              }
              thousandSeparator
              className="input_real"
              placeholder={currency(cost.initialValue[0])}
              onValueChange={e => {
                cost.handleChange([e.floatValue, cost.value[1]]);
              }}
            />
            <p>تومان</p>
          </Grid>
          <Grid
            mt={4}
            mb={4}
            alignItems="center"
            container
            sx={
              isDesktop
                ? { width: 230 }
                : { display: 'flex', width: '100%', justifyContent: 'center' }
            }
          >
            <p>تا</p>
            <NumberFormat
              style={
                isDesktop
                  ? { direction: 'ltr', width: '160px', margin: '0 10px' }
                  : { direction: 'ltr', width: '70%', margin: '0 10px' }
              }
              thousandSeparator
              className="input_real"
              placeholder={currency(cost?.initialValue[1])}
              onValueChange={e => {
                cost.handleChange([cost.value[0], e.floatValue]);
              }}
            />
            <p>تومان</p>
          </Grid>

          <Grid container color="primary" className="submitBtn">
            <Button
              onClick={() => {
                setOpen(false);
                setFilterOpen(false);
                onSubmit();
              }}
              variant="contained"
              fullWidth
              color="primary"
            >
              اعمال فیلتر
            </Button>
          </Grid>
        </AccordionDetails>
      </Style>
    </ClickAwayListener>
  );
};

export default Price;
