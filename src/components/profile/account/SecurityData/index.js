import { Box, Card, CardContent, CardHeader, Typography } from '@mui/material';
import HeaderOfSecurity from './header';
import { styled } from '@mui/material/styles';
import DarwerForSecurity from '../Drawer';
import DarwerForSecurityNotGranted from '../Drawer/newPassDrawer';
import { useState } from 'react';

const StyleCard = styled(Card)`
  .MuiCardHeader-root {
    padding: 0;
  }
  .MuiCardContent-root {
    padding: 0px;
    padding-bottom: 0;
  }
`;
export default function SecurityData({ granted, fetchUserInfo }) {
  const [drawer, setDrawer] = useState(false);
  const toggleDrawer = event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setDrawer(!drawer);
  };
  return (
    <>
      <StyleCard
        variant="outlined"
        style={{
          marginTop: '20px',
          marginBottom: '100px'
        }}
      >
        <CardHeader
          title={
            <HeaderOfSecurity
              granted={granted}
              {...{
                setDrawer
              }}
            />
          }
        />
        {granted && (
          <CardContent>
            <Box
              display={'flex'}
              flexDirection={'column'}
              m={0}
              item
              p={'16px'}
            >
              <Typography variant="caption">رمز عبور</Typography>
              <Typography
                variant="caption"
                fontSize={'14px'}
                textAlign={'left'}
                pt={1}
                color={'rgba(28, 27, 32, 0.7)'}
              >
                ******
              </Typography>
            </Box>
          </CardContent>
        )}
      </StyleCard>
      {drawer && granted && (
        <DarwerForSecurity
          granted={granted}
          {...{
            drawer,
            toggleDrawer
          }}
        />
      )}
      {drawer && !granted && (
        <DarwerForSecurityNotGranted
          fetchUserInfo={fetchUserInfo}
          {...{
            drawer,
            toggleDrawer
          }}
        />
      )}
    </>
  );
}
