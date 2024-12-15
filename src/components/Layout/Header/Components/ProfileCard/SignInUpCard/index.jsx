import { Button, Grid, Menu, Typography, Link as MuiLink } from '@mui/material';
import Link from 'next/link';

const SignInUpCard = ({ links, open, handleClose, anchorEl }) => {
  return (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      // disableScrollLock={true}
      PaperProps={{
        elevation: 0,
        sx: {
          minWidth: '320px',
          maxWidth: '320px',
          padding: '16px',
          overflow: 'visible',
          border: '1px solid #1C1B2033',
          filter: 'drop-shadow(0px 4px 4px rgba(0,0,0,0.25))',
          mt: 1.5,
          '& path': {
            stroke: '#1C1B2066'
          }
        }
      }}
      transformOrigin={{ horizontal: 'left', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
    >
      <Typography variant="body1" mb={'8px'}>
        کاربر عزیز
      </Typography>
      <Typography variant="body1" mb={'36px'} color={'GrayText'}>
        برای دریافت خدمات بهتر به حساب خود وارد شوید
      </Typography>
      <Grid
        container
        justifyContent={'space-between'}
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={6}>
          <Link {...links?.loginLink} passHref>
            <MuiLink sx={{ textDecoration: 'none' }}>
              <Button
                fullWidth
                variant="contained"
                // LinkComponent={'a'}
                sx={{ paddingY: '15px' }}
              >
                ورود
              </Button>
            </MuiLink>
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Link {...links?.registerLink} passHref>
            <MuiLink sx={{ textDecoration: 'none' }}>
              <Button fullWidth variant="outlined" sx={{ paddingY: '15px' }}>
                ثبت نام
              </Button>
            </MuiLink>
          </Link>
        </Grid>
      </Grid>
    </Menu>
  );
};

export default SignInUpCard;
