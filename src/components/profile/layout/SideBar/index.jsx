import React from 'react';
import { Grid, Tooltip, Typography, useTheme } from '@mui/material';
import { useUser, useAuth } from '@digify/theme-kit';
import ThemeLink from '../../../shared/ThemeLink';
import LogOutSVG from 'public/static/assets/svg/profile/sidebar/logout';
import { currency } from 'utils/currency';
import { useRouter } from 'next/router';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';
import { LINKS } from './constent';

const Sidebar = () => {
  const { data } = useUser();
  const { info } = data;
  const { logout } = useAuth();
  const router = useRouter();
  const theme = useTheme();
  const isDesktop = !useIsMobile();
  return (
    <Grid className="sidebar">
      <Grid container className="header">
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          className="userIcon"
          sx={{
            width: { xs: '64px', md: '45px', lg: '64px' },
            height: { xs: '64px', md: '45px', lg: '64px' },
            borderRadius: { xs: '40px', md: '5px' }
          }}
        >
          <i
            className="icon-single-neutral-actions-users-geometric-close-up"
            style={{ color: '#AFB1B7', fontSize: '22px' }}
          />
        </Grid>
        <Grid ml={{ xs: 3, md: 2, lg: 3 }} className="user_info">
          <Typography fontSize={{ xs: '14px', lg: '18px' }}>
            {info?.first_name} {info.last_name}
          </Typography>
          <Typography fontSize={{ xs: '12px', lg: '16px' }} className="p_name">
            {info?.phone_number?.replace('+98', '0')}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        pr={{ xs: 3, md: 1, lg: 3 }}
        pl={{ xs: 3, md: 1, lg: 3 }}
        alignItems="center"
        justifyContent="space-between"
        container
        className="loyalty"
      >
        <Grid container>
          <Grid xs={7} item sx={{ display: 'flex', alignItems: 'center' }}>
            <i className="icon-Loyalty" />
            <Typography
              ml={1}
              sx={{
                fontSize: { xs: '18px', md: '14px', lg: '18px' }
              }}
            >
              اعتبار موجود
            </Typography>
          </Grid>
          <Grid xs={5} item className="currencyGrid">
            <Tooltip
              title={currency(data?.loyaltyCredit)}
              arrow
              placement="top"
              enterDelay={1000}
              enterNextDelay={1000}
            >
              <Typography
                className="currency"
                sx={{
                  fontSize: { xs: '18px', md: '14px', lg: '18px' }
                }}
              >
                {currency(data?.loyaltyCredit)}
              </Typography>
            </Tooltip>
            <Typography style={{ fontSize: '12px' }}>تومان</Typography>
          </Grid>
        </Grid>
      </Grid>
      {!isDesktop
        ? LINKS?.filter(
            f => router.pathname === '/profile' && f.activeLink !== '/profile'
          )?.map(e => (
            <ThemeLink href={e.link} key={e?.title}>
              {' '}
              <Grid
                pl={{ xs: 3, md: 1, lg: 3 }}
                alignItems="center"
                container
                className="link"
              >
                {e?.icon(
                  router.pathname === e.activeLink ? '#FFF' : '#1C1B2088',
                  router.pathname === e.activeLink
                    ? theme.palette.primary.main
                    : 'rgba(28, 27, 32, 0.05)'
                )}
                <h3
                  style={{
                    color:
                      router.pathname === e.activeLink &&
                      theme.palette.primary.main
                  }}
                >
                  {e.title}
                </h3>
              </Grid>
            </ThemeLink>
          ))
        : LINKS?.map(e => (
            <ThemeLink href={e.link} key={e?.title}>
              {' '}
              <Grid
                pl={{ xs: 3, md: 1, lg: 3 }}
                alignItems="center"
                container
                className="link"
              >
                {e?.icon(
                  router.pathname === e.activeLink ? '#FFF' : '#1C1B2088',
                  router.pathname === e.activeLink
                    ? theme.palette.primary.main
                    : 'rgba(28, 27, 32, 0.05)'
                )}
                <Typography
                  variant="body2"
                  className="caption"
                  ml={1}
                  style={{
                    color:
                      router.pathname === e.activeLink &&
                      theme.palette.primary.main
                  }}
                >
                  {e.title}
                </Typography>
              </Grid>
            </ThemeLink>
          ))}
      <Grid
        pl={{ xs: 3, md: 1, lg: 3 }}
        alignItems="center"
        container
        className="link"
        onClick={() => logout.handleLogout()}
      >
        <LogOutSVG color={'#1C1B2088'} bgcolor={'rgba(28, 27, 32, 0.05)'} />
        <Typography
          variant="body2"
          className="caption"
          ml={1}
          sx={{
            color: 'rgba(28, 27, 32, 0.4)'
          }}
        >
          خروج از حساب کاربری
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Sidebar;
