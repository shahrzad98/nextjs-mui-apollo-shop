import { Grid } from '@mui/material';
import React from 'react';
import Account from 'src/components/profile/account';
import ProfileLayout from 'src/components/profile/layout';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';

const AccountPage = () => {
  const isDesktop = !useIsMobile();

  if (!isDesktop) {
    return (
      <>
        <Grid width={'100%'} mx={'16px'}>
          <Account />
        </Grid>
      </>
    );
  } else
    return (
      <>
        <ProfileLayout>
          <Grid>
            <Account />
          </Grid>
        </ProfileLayout>
      </>
    );
};

export default AccountPage;
