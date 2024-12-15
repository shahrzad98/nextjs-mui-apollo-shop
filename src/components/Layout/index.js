import Header from './Header';
import Main from './Main';
// import Footer from './Footer';
import { Grid } from '@mui/material';
import { useRouter } from 'next/router';
// import Footer from './Footer';
// import Utils from 'components/home/utils';
// import ServiceBar from 'components/serviceBar';
import { useEffect } from 'react';
import Footer from 'src/components/home/footer';
import { useStoreInfo, useUser } from '@digify/theme-kit';
import { hotjar } from 'react-hotjar';
import useIsMobile from '../shared/Hooks/useIsMobile';
import AddBar from 'src/components/home/topNavbar';

const Layout = ({ children }) => {
  const { route } = useRouter();
  const isDesktop = !useIsMobile();
  const { data } = useUser();
  const { userRole } = data;
  const footerEx = [
    '/',
    '/information',
    '/auth/login',
    '/auth/login/forgot-password',
    '/auth/register'
  ];
  const storeInfo = useStoreInfo();

  useEffect(() => {
    const { hotjar_token, ray_chat } = storeInfo;
    if (process.env.NODE_ENV === 'production' && hotjar_token) {
      hotjar.initialize(hotjar_token, 1);
    }

    if (
      typeof window !== undefined &&
      ray_chat?.ray_chat_token &&
      ray_chat?.ray_chat_enabled
    ) {
      (() => {
        let o = ray_chat?.ray_chat_token;
        function t() {
          let t = document.createElement('script');
          (t.type = 'text/javascript'),
            (t.async = !0),
            localStorage.getItem('rayToken')
              ? (t.src =
                  'https://app.raychat.io/scripts/js/' +
                  o +
                  '?rid=' +
                  localStorage.getItem('rayToken') +
                  '&href=' +
                  window.location.href)
              : (t.src =
                  'https://app.raychat.io/scripts/js/' +
                  o +
                  '?href=' +
                  window.location.href);
          let e = document.getElementsByTagName('script')[0];
          e.parentNode.insertBefore(t, e);
        }

        let e = document,
          a = window;
        'complete' == e.readyState
          ? t()
          : a.attachEvent
          ? a.attachEvent('onload', t)
          : a.addEventListener('load', t, !1);
      })();
    }
  }, [storeInfo]);

  return (
    <Grid justifyContent="center" container>
      {route === '/' && userRole !== 'manager' && <AddBar />}
      {(route === '/' && isDesktop ? userRole !== 'manager' : true) &&
        route !== '/auth/login' &&
        route !== '//redirect' && <Header />}
      <Main>{children}</Main>
      {isDesktop && !footerEx.includes(route) && <Footer />}
    </Grid>
  );
};
export default Layout;
