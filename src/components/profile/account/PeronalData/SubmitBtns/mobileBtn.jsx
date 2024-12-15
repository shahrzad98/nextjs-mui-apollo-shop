import { Box, Divider, Button, Grid } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

export default function MobileSubmitBtns({ updateLoading, handleCancel }) {
  return (
    <>
      <Box p={2}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <LoadingButton
              variant={'contained'}
              loading={updateLoading}
              type="submit"
              fullWidth
              sx={{
                color: '#fff',
                padding: '15px 32px',
                fontSize: '14px'
              }}
            >
              ثبت تغییرات
            </LoadingButton>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant={'outlined'}
              fullWidth
              disabled={updateLoading}
              onClick={() => handleCancel()}
              sx={{
                fontSize: '10px'
              }}
            >
              انصراف
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Divider style={{ width: '100%' }} />
    </>
  );
}
