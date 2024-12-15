import { CircularProgress, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function SuccessPage() {
  const { asPath, query } = useRouter();
  useEffect(() => {
    (async () => {
      if (query?.success && typeof window !== 'undefined')
        window.location.assign(`${asPath.replace('redirect', 'success')}`);
      else if (query?.failed && typeof window !== 'undefined')
        window.location.assign(`${asPath.replace('redirect', 'failed')}`);
    })();
  }, [asPath, query]);

  return (
    <Grid
      container
      justifyContent={'center'}
      alignItems={'center'}
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: '#fff',
        zIndex: 1000
      }}
    >
      <CircularProgress color="primary" size={'50px'} />
    </Grid>
  );
}
