import { Box, Typography, Button, Divider } from '@mui/material';
import EditAccountSvg from 'public/static/assets/svg/profile/account/editAccount';

export default function HeaderOfPersonlData({ setDrawer, granted }) {
  return (
    <>
      <Box
        p={{
          xs: 2,
          md: 4
        }}
        onClick={() => setDrawer(true)}
        display="flex"
        alignItems={'center'}
        justifyContent="space-between"
      >
        <Typography
          fontSize={{
            xs: '14px',
            md: '24px'
          }}
          variant="h4"
        >
          اطلاعات امنیتی
        </Typography>

        <Button
          startIcon={<EditAccountSvg />}
          sx={{
            padding: {
              xs: '14px '
            },
            fontSize: { xs: '14px', md: '18px' }
          }}
        >
          {granted ? 'تغییر' : 'ثبت'} رمز عبور
        </Button>
      </Box>
      <Divider style={{ width: '100%' }} />
    </>
  );
}
