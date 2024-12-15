import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Checkbox,
  ClickAwayListener,
  Grid,
  Typography
} from '@mui/material';
import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { AccordionContainer, AccordionSummaryCat } from '../products.style';

const SelectOption = ({
  label,
  options,
  onSubmit,
  isCat,
  isDesktop,
  setFilterOpen,
  updateStates
  // setBoxFilterOpen
}) => {
  const [open, setOpen] = useState(false);

  const handleClickAway = () => {
    if (open) updateStates();
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <AccordionContainer
        isDesktop={isDesktop}
        isCat={isCat}
        open={open && options?.length}
        expanded={open && options?.length}
      >
        <AccordionSummary
          disabled={!options?.length}
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
          {label === 'دسته بندی'
            ? options.map(item => (
                <Accordion key={item.key}>
                  <AccordionSummaryCat aria-controls="cat" id="cat">
                    <Typography
                      sx={
                        item.categories.forEach(i => i?.isSelected) ||
                        item.isSelected
                          ? { color: '#1C1B20', fontWeight: 600 }
                          : { fontWeight: 400 }
                      }
                    >
                      {item.key}
                    </Typography>
                  </AccordionSummaryCat>
                  <AccordionDetails>
                    {item.categories?.map(item2 => (
                      <Grid
                        sx={{ minWidth: 190 }}
                        alignItems="center"
                        onClick={item2.handleChange}
                        className="pointer"
                        justifyContent="space-between"
                        container
                        key={item2.key}
                      >
                        <p
                          style={
                            item2.isSelected
                              ? { color: 'primary', fontWeight: 600 }
                              : {}
                          }
                          className="option"
                        >
                          {item2.key}
                        </p>
                        <Checkbox checked={item2.isSelected} />
                      </Grid>
                    ))}
                    <Grid
                      sx={{ minWidth: 190 }}
                      alignItems="center"
                      onClick={item.handleChange}
                      className="pointer"
                      justifyContent="space-between"
                      container
                      key={item.key}
                    >
                      <Typography
                        sx={
                          item.isSelected
                            ? { color: 'primary', fontWeight: 600 }
                            : {}
                        }
                        className="option"
                      >
                        همه محصولات دسته
                      </Typography>
                      <Checkbox checked={item.isSelected} />
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              ))
            : options.map(e => (
                <Grid
                  sx={{ minWidth: 190 }}
                  alignItems="center"
                  onClick={e.handleChange}
                  className="pointer"
                  justifyContent="space-between"
                  container
                  key={e.key}
                >
                  <p className="option">{e.key}</p>
                  <Checkbox checked={e.isSelected} />
                </Grid>
              ))}

          <Grid container color="primary" className="submitBtn">
            <Button
              onClick={() => {
                setOpen(false);
                onSubmit();
                setFilterOpen(false);
                // setBoxFilterOpen(true);
              }}
              variant="contained"
              fullWidth
              color="primary"
            >
              اعمال فیلتر
            </Button>
          </Grid>
        </AccordionDetails>
      </AccordionContainer>
    </ClickAwayListener>
  );
};

export default SelectOption;
