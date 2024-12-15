import React, { forwardRef } from 'react';
import { Grid, useScrollTrigger } from '@mui/material';
import Megamenu from './Megamenu';
import { MegaMenuNav } from './styled';
import { Box } from '@mui/system';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';
import { useUser } from '@digify/theme-kit';
import { useRouter } from 'next/router';
import { customizationParent } from 'utils/vars';

const MegaMenu = forwardRef(({ categories }, ref) => {
  const isDesktop = !useIsMobile();
  const { route } = useRouter();

  const parentDepth = customizationParent();

  const {
    data: { userRole }
  } = useUser();

  const trigger = useScrollTrigger({
    threshold: 0,
    ...(parentDepth &&
      userRole == 'manager' &&
      route == '/' && { target: parentDepth })
  });

  return (
    <>
      {isDesktop && (
        <MegaMenuNav
          ref={ref}
          sx={{
            height: 'auto',
            transform: trigger ? 'scaleY(0)' : 'scaleY(1)',
            overflow: trigger ? 'hidden' : 'inherit'
          }}
        >
          <Box maxWidth={'1280px'} margin={'auto'} className="megaContainer">
            <Grid container justifyContent={'center'}>
              {categories.map((ele, _ind) => (
                <Grid
                  item
                  key={_ind}
                  width={categories.length > 9 ? `${1280 / 12}px` : `auto`}
                  className="gridItem"
                  p={'11px 7px'}
                >
                  <Megamenu {...{ ele }} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </MegaMenuNav>
      )}
    </>
  );
});

MegaMenu.displayName = 'MegaMenu';

export default MegaMenu;
