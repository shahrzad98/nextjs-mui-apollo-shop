import {
  MenuItem,
  Typography,
  Link as MuiLink,
  Card,
  Tooltip
} from '@mui/material';
import { Box, Stack } from '@mui/material';
import BaseImg from 'src/components/shared/BaseImg';
import Link from 'next/link';
import React from 'react';
import { StyledMegaMenu, StyledMuiLink } from './styled';
import { useState } from 'react';
import DefaultImg from 'public/static/assets/img/megaMenu/defaultImage';
function Megamenu({ ele }) {
  /*  must render just 20 item */
  const slice20Item = ele?.children.slice(0, 20);
  /* display or not with css hove but this state just for non show when click on every subCategory */
  const [show, setShow] = useState(false);
  const positionRef = React.useRef({
    x: 0,
    y: 0
  });
  const popperRef = React.useRef(null);
  const areaRef = React.useRef(null);

  const handleMouseMove = event => {
    positionRef.current = { x: event.clientX, y: event.clientY };

    if (popperRef.current != null) {
      popperRef.current.update();
    }
  };

  return (
    <StyledMegaMenu
      childrenLength={ele.children.length}
      onMouseEnter={() => {
        setShow(false);
      }}
    >
      <Link {...ele.link} passHref>
        <StyledMuiLink className="linkItem">
          <Tooltip
            title={ele.title}
            arrow
            placement="top"
            enterDelay={1000}
            enterNextDelay={1000}
            PopperProps={{
              popperRef,
              anchorEl: {
                getBoundingClientRect: () => {
                  return new DOMRect(
                    positionRef.current.x,
                    areaRef.current.getBoundingClientRect().y,
                    0,
                    0
                  );
                }
              }
            }}
          >
            <Typography
              ref={areaRef}
              onMouseMove={handleMouseMove}
              className="labelTypo"
            >
              {ele.title}
            </Typography>
          </Tooltip>
        </StyledMuiLink>
      </Link>

      {ele.children.length > 0 && (
        <Card
          className={`dropDownMenuConent`}
          sx={show ? { height: '0  !important', padding: '0 !important' } : {}}
        >
          <Stack direction={'row'} height="100%">
            <Stack
              direction={'column'}
              width={ele.children.length <= 4 ? '100%' : '75%'}
            >
              <Box
                className="subCategoryContainer"
                sx={{ height: ele.children.length <= 4 ? '100%' : '75%' }}
              >
                {slice20Item.map((subCategory, _ind) => {
                  return (
                    <Link
                      {...subCategory.link}
                      passHref
                      key={_ind}
                      className="menuItem"
                    >
                      <MuiLink
                        onClick={() => {
                          setShow(true);
                        }}
                        className="menuItemLink"
                      >
                        <MenuItem>
                          <Typography
                            variant="caption"
                            color="rgba(28, 27, 32, 0.7)"
                          >
                            {subCategory.title}
                          </Typography>
                        </MenuItem>
                      </MuiLink>
                    </Link>
                  );
                })}

                <Link {...ele.link} passHref>
                  <MuiLink>
                    <Stack
                      direction={'row'}
                      onClick={() => {
                        setShow(true);
                      }}
                      alignItems={'center'}
                      className="showLabel"
                    >
                      <Typography>نمایش همه محصولات</Typography>
                      <i className="icon-Arrows-Darrow-button" />
                    </Stack>
                  </MuiLink>
                </Link>
              </Box>
            </Stack>
            {/* image when show that children between 0 and 20 lengh */}
            {!ele?.image?.image ? (
              ele.children.length > 4 && (
                <Box className="imageClass">
                  <DefaultImg />
                </Box>
              )
            ) : ele.children.length <= 20 && ele.children.length > 4 ? (
              <Box className="imageClass">
                <BaseImg
                  objectFit=""
                  src={ele?.image?.image}
                  size={{ h: 300, w: 300 }}
                  alt={'s'}
                  q={90}
                />
              </Box>
            ) : null}
          </Stack>
        </Card>
      )}
    </StyledMegaMenu>
  );
}

export default Megamenu;
