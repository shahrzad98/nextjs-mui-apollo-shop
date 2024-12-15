import {
  AccordionDetails,
  AccordionSummary,
  Button,
  ClickAwayListener,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography
} from '@mui/material';
import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { IOSSwitch, SwitchContainer } from '../products.style';
import { SwitchLabel } from '../../../../constant/category';

const SwitchFilter = ({ label, others, isDesktop, isCat, updateStates }) => {
  const [open, setOpen] = useState(false);

  const handleClickAway = () => {
    if (open) updateStates();
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <SwitchContainer
        isDesktop={isDesktop}
        isCat={isCat}
        open={open}
        expanded={open}
      >
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
          <Typography className="label">{label}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {Object.entries(others)?.map(([title, value], index) => (
            <Grid
              alignItems="center"
              className="pointer"
              justifyContent="space-between"
              container
              key={index}
            >
              <FormGroup>
                <FormControlLabel
                  sx={{ minWidth: 230 }}
                  control={
                    <IOSSwitch
                      onChange={() => {
                        value.handleChange();
                      }}
                      checked={value.value}
                    />
                  }
                  name={SwitchLabel?.[title]}
                  label={SwitchLabel?.[title]}
                />
              </FormGroup>
            </Grid>
          ))}

          <Grid container color="primary" className="submitBtn">
            <Button
              onClick={() => {
                // eslint-disable-next-line no-unused-vars
                Object.entries(others).map(([item, value], _index) =>
                  value.handleSubmit()
                );
                setOpen(false);
              }}
              variant="contained"
              fullWidth
              color="primary"
            >
              اعمال فیلتر
            </Button>
          </Grid>
        </AccordionDetails>
      </SwitchContainer>
    </ClickAwayListener>
  );
};

export default SwitchFilter;
