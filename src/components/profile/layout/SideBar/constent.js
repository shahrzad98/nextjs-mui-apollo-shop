import DashboardSVG from 'public/static/assets/svg/profile/sidebar/dashboard';

export const LINKS = [
  {
    link: '/profile',
    title: 'داشبورد',
    icon: (color, bgcolor) => <DashboardSVG color={color} bgcolor={bgcolor} />,
    activeLink: '/profile'
  },
  {
    link: '/profile/orders',
    title: 'سفارشات',
    icon: (color, bgcolor) => (
      <i
        className="icon-shopping-E-commerce-shopping-bags-shopping-bag-check"
        style={{
          color: color,
          background: bgcolor,
          fontSize: '22px',
          padding: '7px',
          borderRadius: '5px'
        }}
      />
    ),
    activeLink: '/profile/orders'
  },
  {
    link: '/profile/addresses',
    title: 'آدرس‌ها',
    icon: (color, bgcolor) => (
      <i
        className="icon-maps-navigation-location-pin"
        style={{
          color: color,
          background: bgcolor,
          fontSize: '22px',
          padding: '7px',
          borderRadius: '5px'
        }}
      />
    ),
    activeLink: '/profile/addresses'
  },
  // {
  //   link: '/profile/notifications',
  //   title: 'اعلان‌ها',
  //   icon: (color, bgcolor) => <NotifSVG color={color} bgcolor={bgcolor} />,
  //   activeLink: '/profile/notifications'
  // },
  {
    link: '/profile/account',
    title: 'اطلاعات حساب',
    icon: (color, bgcolor) => (
      <i
        className="icon-single-neutral-actions-users-geometric-close-up"
        style={{
          color: color,
          background: bgcolor,
          fontSize: '22px',
          padding: '7px',
          borderRadius: '5px'
        }}
      />
    ),
    activeLink: '/profile/account'
  },
  {
    link: '/profile/settings',
    title: 'تنظیمات',
    icon: (color, bgcolor) => (
      <i
        className="icon-setting"
        style={{
          color: color,
          background: bgcolor,
          fontSize: '22px',
          padding: '7px',
          borderRadius: '5px'
        }}
      />
    ),
    activeLink: '/profile/settings'
  }
];
