import {
  initializeApp,
  useCustomization,
  useStoreInfo
} from '@digify/theme-kit';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import CloseStore from 'src/components/closeStore';
import SnackbarProvider from 'src/components/Snackbar';
import Head from 'next/head';
import Router from 'next/router';
import Script from 'next/script';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import React from 'react';
import rtlPlugin from 'stylis-plugin-rtl';
import Layout from 'src/components/Layout';
import 'public/static/main.scss';
import createEmotionCache from 'src/createEmotionCache';
import 'styles/global.css';
import makeTheme from 'styles/makeTheme';
import 'styles/swiper-custom-style.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import apolloConfig from 'utils/themeConfig';
import 'public/static/icons/style.css';
import LogoStructuredData from 'src/components/structuredDataHead/Logo';
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const MyApp = ({ Component, pageProps }) => {
  const { about_us, logo, name, enamad, google_analytics_token, domain } =
    useStoreInfo();

  const {
    data: { colors }
  } = useCustomization('colors');

  const { theme } = makeTheme({
    theme: {
      primary_color: '#' + colors?.primary?.value,
      second_primary_color: '#' + colors?.secondary?.value
    }
  });

  React.useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();
    let timeVari = null;
    Router.events.on('routeChangeStart', handleRouteStart);
    Router.events.on('routeChangeComplete', () => {
      timeVari = setTimeout(() => {
        handleRouteDone();
      }, 300);
    });
    Router.events.on('routeChangeError', handleRouteDone);

    return () => {
      // Make sure to remove the event handler on unmount!
      Router.events.off('routeChangeStart', handleRouteStart);
      Router.events.off('routeChangeComplete', handleRouteDone);
      Router.events.off('routeChangeError', handleRouteDone);
      clearTimeout(timeVari);
    };
  }, []);

  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [rtlPlugin]
  });

  NProgress.configure({
    easing: 'ease',
    speed: 2000,
    showSpinner: false,
    template: `<div class="bar" style="background:${theme.palette.primary.main}" role="bar"></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>`
  });

  return (
    <>
      {google_analytics_token && (
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${google_analytics_token}`}
          strategy="afterInteractive"
        />
      )}
      {google_analytics_token && (
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', ${google_analytics_token});
        `}
        </Script>
      )}
      <Head>
        {logo && (
          <link
            rel="icon"
            href={`${logo}?x-img=v1/resize,w_100/optimize,q_100`}
          />
        )}
        <title>{name}</title>
        <meta name="description" content={about_us} />
        <meta property="og:title" content={name} />
        <meta property="og:site_name" content={name} key="ogsitename" />
        <meta property="og:description" content={about_us} />
        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content="https://fashion.digify.shop" /> */}
        <meta
          property="og:image"
          content={`${logo}?x-img=v1/resize,w_100/optimize,q_100`}
        />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=0"
        />
        <meta name="generator" content="Digify" />
        {enamad?.e_namad_meta_content && (
          <meta name="enamad" content={enamad?.e_namad_meta_content} />
        )}
      </Head>
      <LogoStructuredData url={domain} logo={logo} />
      <CacheProvider value={{ ...clientSideEmotionCache, ...cacheRtl }}>
        <ThemeProvider theme={theme}>
          <SnackbarProvider />
          <Layout>
            <CssBaseline />
            <Component {...pageProps} />
            <CloseStore />
          </Layout>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
};

export default initializeApp(MyApp, apolloConfig);
