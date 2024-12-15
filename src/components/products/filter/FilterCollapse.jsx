import * as React from 'react';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import { Box, Checkbox, Stack, Typography } from '@mui/material';
import useIsMobile from '../../shared/Hooks/useIsMobile';

const FilterCollapse = ({ categories, title, category }) => {
  const [open, setOpen] = React.useState(false);
  const isMobile = useIsMobile();
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Stack
        mb={2}
        direction={isMobile ? 'row-reverse' : 'row'}
        justifyContent={isMobile ? 'flex-end' : 'flex-start'}
        alignItems="center"
        onClick={handleClick}
      >
        <Stack className="expand">
          <Typography>{title}</Typography>
        </Stack>

        <Box className="innerCollapse">
          {open ? (
            isMobile ? (
              <i className="icon-Arrow_Top" />
            ) : (
              <ExpandLess className="expandLessIcon" />
            )
          ) : isMobile ? (
            <i className="icon-arrow-right2" />
          ) : (
            <ExpandMore className="expandMoreIcon" />
          )}
        </Box>
      </Stack>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {categories?.map(el => (
            <Stack direction="row" justifyContent="space-between">
              {!!el.categories?.length ? (
                <Stack className="expand">
                  <Typography variant="body2">{el.key}</Typography>
                  <Box>
                    {open ? (
                      <ExpandLess className="nestedExpandIcon" />
                    ) : (
                      <ExpandMore className="nestedExpandIcon" />
                    )}
                  </Box>
                </Stack>
              ) : (
                <Stack
                  mb={2}
                  width="100%"
                  direction="row"
                  justifyContent="space-between"
                >
                  <Typography
                    variant="body2"
                    color={el.isSelected ? 'primary.main' : 'black.70'}
                  >
                    {el.key}
                  </Typography>
                  <Checkbox
                    onChange={el.handleChange}
                    checked={el.isSelected}
                    icon={
                      <img
                        src="/static/assets/svg/products/check.svg"
                        alt="check"
                      />
                    }
                    checkedIcon={
                      <img
                        src="/static/assets/svg/products/checked.svg"
                        alt="checked"
                      />
                    }
                  />
                </Stack>
              )}

              {!!el.categories?.length && (
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {el.categories?.map(e => (
                      <>
                        <Stack direction="row" justifyContent="space-between">
                          <Stack className="expand">
                            <Typography variant="body2">{e.key}</Typography>
                            {!!e.categories?.length && (
                              <Box>
                                {open ? (
                                  <ExpandLess className="nestedExpandIcon" />
                                ) : (
                                  <ExpandMore className="nestedExpandIcon" />
                                )}
                              </Box>
                            )}
                          </Stack>
                        </Stack>
                      </>
                    ))}
                  </List>
                </Collapse>
              )}
            </Stack>
          ))}

          <Stack
            mb={2}
            width="100%"
            direction="row"
            justifyContent="space-between"
          >
            <Typography
              variant="body2"
              color={category.isSelected ? 'primary.main' : 'black.70'}
            >
              همه محصولات دسته
            </Typography>
            <Checkbox
              onChange={category.handleChange}
              checked={category.isSelected}
              icon={
                <img src="/static/assets/svg/products/check.svg" alt="check" />
              }
              checkedIcon={
                <img
                  src="/static/assets/svg/products/checked.svg"
                  alt="checked"
                />
              }
            />
          </Stack>
        </List>
      </Collapse>
    </>
  );
};

export default FilterCollapse;
