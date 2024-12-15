import { Grid } from '@mui/material';

const Main = ({ children }) => {
  return (
    <Grid
      container
      sx={{
        minHeight: 'calc(100vh - 497px)'
      }}
    >
      {children}
    </Grid>
  );
};

export default Main;
