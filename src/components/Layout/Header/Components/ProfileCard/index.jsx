import {
  Button,
  Divider,
  Grid,
  Menu,
  MenuItem,
  Typography,
  Link as MuiLink
} from '@mui/material';

import {
  useUser,
  isUserLoggedIn,
  useAuth,
  staticLinks
} from '@digify/theme-kit';
import Link from 'next/link';
const ProfileCard = ({ open, handleClose, anchorEl }) => {
  const MENU_ITEMS = [
    {
      id: 1,
      title: 'سفارشات',

      Icon: props => (
        <i
          className=" icon-Shopping-E-Commerce__x2F__Shopping-Bags__x2F__shopping-bag-check_1"
          {...props}
        />
      ),
      link: staticLinks?.orders
    }
    // {
    //   id: 2,
    //   title: 'اعلان‌ها',
    //   Icon: props => <NotifSVG {...props} />,
    //   link: links.notificationsLink
    // }
  ];

  const { data } = useUser();
  const { info } = data;
  const { logout } = useAuth();

  const userLoggedIn = isUserLoggedIn();

  if (!userLoggedIn) return <></>;

  return (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}
      onClick={handleClose}
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
      <Grid container gap={2} mb={'24px'}>
        <Grid
          item
          container
          justifyContent={'center'}
          alignItems={'center'}
          bgcolor={'#1C1B200D'}
          width={64}
          height={64}
          borderRadius={2}
        >
          <i
            className="icon-single-neutral-actions-users-geometric-close-up"
            style={{ color: '#1C1B20B2' }}
          />
        </Grid>
        <Grid
          item
          container
          flexDirection={'column'}
          justifyContent={'space-between'}
          flex={1}
        >
          <Typography variant="body1" maxWidth={180} noWrap>
            {info?.first_name} {info.last_name}
          </Typography>
          <Typography variant="body2" color={'GrayText'}>
            {info?.phone_number?.replace('+98', '0')}
          </Typography>
        </Grid>
      </Grid>
      <Link {...staticLinks.profile} passHref>
        <MuiLink sx={{ textDecoration: 'none' }}>
          <Button variant="text" sx={{ padding: 1 }}>
            مشاهده پروفایل
          </Button>
        </MuiLink>
      </Link>
      <Divider sx={{ color: '#1C1B201A', marginY: '16px' }} />
      {MENU_ITEMS.map(({ id, title, Icon, link }) => (
        <Link key={id} {...link} passHref>
          <MuiLink sx={{ textDecoration: 'none', color: 'inherit' }}>
            <MenuItem sx={{ paddingX: '2px', marginY: 2 }}>
              <Grid
                container
                justifyContent={'center'}
                alignItems={'center'}
                width={36}
                height={36}
                borderRadius={2}
                bgcolor={'#1C1B200D'}
                mr={3}
              >
                <Icon />
              </Grid>
              <Typography variant="body1">{title}</Typography>
            </MenuItem>
          </MuiLink>
        </Link>
      ))}
      <MenuItem
        sx={{ paddingX: '2px', marginY: 2 }}
        onClick={() => logout.handleLogout()}
        disabled={logout?.loading}
      >
        <Grid
          container
          justifyContent={'center'}
          alignItems={'center'}
          width={36}
          height={36}
          borderRadius={2}
          bgcolor={'#1C1B200D'}
          mr={3}
        >
          <i className="icon-Exite" />
        </Grid>
        <Typography variant="body1" color={'GrayText'}>
          خروج از حساب کاربری
        </Typography>
      </MenuItem>
    </Menu>
  );
};

export default ProfileCard;
