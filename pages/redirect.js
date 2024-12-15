import styled from '@emotion/styled';
import { CircularProgress, Grid } from '@mui/material';
import React from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { setNextCookie, handleRefreshToken } from '@digify/theme-kit';

const Style = styled(Grid)`
  width: 100vw;
  height: 100vh;
`;

const Redirect = () => {
  const router = useRouter();
  useEffect(() => {
    (async () => {
      if (router.query.t) {
        const access = await handleRefreshToken(router.query.t);
        if (access) {
          await setNextCookie(access);
          await router.replace('redirect', null, {
            shallow: true
          });
          window.location.reload();
        } else router.replace('/');
      } else {
        router.replace(`/`);
      }
    })();
  });
  return (
    <Style container justifyContent={'center'} alignItems="center">
      <CircularProgress style={{ width: '100px', height: '100px' }} />
    </Style>
  );
};

export default Redirect;
