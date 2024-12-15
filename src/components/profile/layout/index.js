import { Container, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';
import Sidebar from './SideBar';
import { StyleLayout } from './styled';

const ProfileLayout = ({ children }) => {
  const isDesktop = !useIsMobile();
  const router = useRouter();

  return (
    <Container
      maxWidth="lg"
      style={{ padding: isDesktop ? '30px' : '15px 24px' }}
    >
      <StyleLayout isdesktop={isDesktop} container>
        <Grid
          sx={{
            display: {
              xs: router.pathname === '/profile' ? 'block' : 'none',
              md: 'block'
            }
          }}
          pr={isDesktop && 4}
          item
          xs={12}
          md={3}
        >
          <Sidebar />
        </Grid>
        <Grid
          sx={{
            display: {
              xs: router.pathname === '/profile' ? 'none' : 'block',
              md: 'block'
            }
          }}
          item
          xs={12}
          md={9}
        >
          {children}
        </Grid>
      </StyleLayout>
    </Container>
  );
};

export default ProfileLayout;
