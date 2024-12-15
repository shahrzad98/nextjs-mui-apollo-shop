import {
  isUserLoggedIn,
  useCategories,
  staticLinks,
  useStoreInfo,
  useUser
} from '@digify/theme-kit';
import {
  Box,
  Button,
  Divider,
  Grid,
  Typography,
  Link as MuiLink,
  Stack
} from '@mui/material';
import BlogSvg from 'public/static/assets/svg/Header/Blog';
import MobileProfile from 'public/static/assets/svg/shared/mobileProfile';
import React, { useMemo } from 'react';

import Link from 'next/link';
import StoreNameAndLogo from '../StoreNameAndLogo';
import MobileMenu from './menu/MobileMenu';
import { StyledBox, LinkBox } from './styled';
import { WhatsApp, Telegram, Close, Instagram } from '@mui/icons-material';
import AboutUsIcon from 'public/static/assets/svg/Header/AboutUsIcon';
import ContactUsIcon from 'public/static/assets/svg/Header/ContectUsIcon';
import RefundIcon from 'public/static/assets/svg/Header/RefundIcon';
// import BeSeller from 'public/static/assets/svg/Header/BeSeller';
import FavoritesIcon from 'public/static/assets/svg/Header/Favorites';
import { checkSocialLinks } from 'utils/checkSocialLinks';
import { SOCIAL_MEDIAS } from 'constant/socialMedia';

export default function BurgerMenu(props) {
  const { openMenu, setOpenMenu } = props;
  const userLoggedIn = isUserLoggedIn();
  const { data: userData } = useUser();
  const { info } = userData;
  const { social_media, name, logo } = useStoreInfo();
  const { data: categoriesData } = useCategories();

  const items = useMemo(() => {
    return [
      {
        title: ' علاقمندی ها',
        link: staticLinks?.favorites,
        icon: <FavoritesIcon color={'rgba(28, 27, 32, 0.7)'} />
      },
      {
        title: ' بلاگ',
        link: { href: { pathname: '/blogs' } },
        icon: <BlogSvg />
      },
      {
        title: 'درباره ما',
        link: staticLinks?.aboutUs,
        icon: <AboutUsIcon />
      },
      {
        title: 'تماس با ما',
        link: staticLinks?.contactUs,
        icon: <ContactUsIcon />
      },
      {
        title: 'شرایط بازگشت کالا',
        link: staticLinks?.returnConditions,
        icon: <RefundIcon />
      }
      // {
      //   title: 'فروشنده شوید',
      //   link: links?.joinDigifyLink,
      //   icon: <BeSeller />
      // }
    ];
  }, []);
  const itemsSocial = useMemo(() => {
    return [
      {
        icon: <Instagram style={{ color: 'rgba(28, 27, 32, 0.7)' }} />,
        href: checkSocialLinks(SOCIAL_MEDIAS.INSTAGRAM, social_media.instagram)
      },
      {
        icon: <Telegram style={{ color: 'rgba(28, 27, 32, 0.7)' }} />,
        href: checkSocialLinks(SOCIAL_MEDIAS.TELEGRAM, social_media.telegram)
      },
      {
        icon: <WhatsApp style={{ color: 'rgba(28, 27, 32, 0.7)' }} />,
        href: checkSocialLinks(SOCIAL_MEDIAS.WHATSAPP, social_media.whatsapp)
      }
    ];
  }, [social_media]);
  return (
    <>
      {openMenu && (
        <Box
          onClick={() => {
            setOpenMenu(false);
          }}
          sx={{
            background: '#0c0c0c',
            opacity: '0.5',
            width: '100%',
            position: 'fixed',
            zIndex: 100000,
            top: 0,
            left: 0,
            height: '100%'
          }}
        ></Box>
      )}
      <StyledBox
        className="overlay"
        sx={{
          transform: {
            xs: openMenu ? 'translateX(0)' : 'translateX(-400px)',
            md: 'translateX(-400px)'
          },
          ...(openMenu && { borderRight: '1px solid #E0E0E0' })
        }}
      >
        <Grid container>
          <Box className="closebtn" onClick={() => setOpenMenu(false)}>
            <Close />
          </Box>
          <Grid item xs={12} mt={'20px'}>
            <StoreNameAndLogo
              storeName={name}
              // lastSeen={data?.lastBuy}
              storeLogo={logo}
              openMenu
            />
          </Grid>
          <Grid item xs={12} mt={'20px'}>
            <Link
              href={{
                pathname: userLoggedIn ? '/profile' : '/auth/login'
              }}
              passHref
            >
              <MuiLink className="menuRegisterBtn">
                <Button
                  className="profileBtn"
                  fullWidth
                  onClick={() => {
                    setOpenMenu(false);
                  }}
                  variant="text"
                  startIcon={<MobileProfile />}
                >
                  {userLoggedIn ? (
                    <Stack>
                      <Typography color={'#1C1B20'} fontSize="14px">
                        {info.first_name} عزیز خوش آمدید.
                      </Typography>
                      <Typography color={'#2145FF'} fontSize="12px">
                        نمایش پروفایل
                      </Typography>
                    </Stack>
                  ) : (
                    <Typography color={'#1C1B20'} fontSize="16px">
                      ورود یا ثبت‌نام
                    </Typography>
                  )}
                </Button>
              </MuiLink>
            </Link>
          </Grid>

          <Grid item xs={12}>
            <Divider />
          </Grid>
        </Grid>
        <Box className="overlayContent">
          {/* categories */}
          <Box>
            <Typography component={'h1'} variant="h6" p={'16px'}>
              محصولات
            </Typography>
            <>
              {categoriesData.categories.map((ele, _ind) => (
                <MobileMenu setOpenMenu={setOpenMenu} key={_ind} item={ele} />
              ))}
            </>
          </Box>
          {/* links */}
          <LinkBox>
            {items.map((ele, index) => (
              <Link href={ele?.link?.href ?? ele?.link} passHref key={index}>
                <MuiLink>
                  <Stack
                    onClick={() => {
                      setOpenMenu(false);
                    }}
                    direction={'row'}
                    alignItems="center"
                    className="linkItem"
                  >
                    {ele.icon}
                    <Typography component={'h1'}>{ele.title}</Typography>
                  </Stack>
                </MuiLink>
              </Link>
            ))}
          </LinkBox>
          {/* social */}
          <Box className={'social'}>
            {itemsSocial.map((ele, index) => (
              <a
                href={ele.href}
                rel="noreferrer"
                target="_blank"
                key={index}
                onClick={() => {
                  setOpenMenu(false);
                }}
              >
                {ele.icon}
              </a>
            ))}
          </Box>
        </Box>
      </StyledBox>
    </>
  );
}
