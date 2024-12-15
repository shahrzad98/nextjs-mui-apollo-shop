import { Grid, Typography } from '@mui/material';

export default function Reply({ replyData }) {
  if (!replyData) return null;

  return (
    <Grid container display={'flex'} gap={2} mt={3}>
      <Grid width={'52px'}>
        <Typography textAlign={'left'} variant="body1" color="black.40">
          پاسخ فروشنده
        </Typography>
      </Grid>
      <Grid
        width={'996px'}
        style={{ flexWrap: 'nowrap' }}
        p={2}
        ml={'24px'}
        sx={{
          border: `0.5px solid rgba(28, 27, 32, 0.2)`
        }}
      >
        <Typography textAlign={'left'} variant="body1" color="black.40">
          {replyData}
        </Typography>
      </Grid>
    </Grid>
  );
}
