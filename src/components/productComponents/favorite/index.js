import {
  Box,
  Button,
  Drawer,
  Grid,
  IconButton,
  Modal,
  Typography
} from '@mui/material';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';
import { useProduct, useUser } from '@digify/theme-kit';
import CloseIcon from '@mui/icons-material/Close';
import CircularProgress from '@mui/material/CircularProgress';
import Login from 'src/components/auth/index';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Favorites from 'public/static/assets/svg/Header/Favorites';
import ShareSvg from 'public/static/assets/svg/product/shareicon';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75'
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47'
  }
});

const Favorite = ({
  isDesktop,
  register = false,
  addOrRemoveToFavorites,
  isFavorite,
  favoriteLoading
}) => {
  const [openFavoritesModal, setOpenFavoritesModal] = useState(false);
  const [checkedLogin, setCheckedLogin] = useState(false);
  const { asPath } = useRouter();
  const { isLoggedIn } = useUser();
  const { data } = useProduct();

  const shareData = {
    title: data.label,
    text: data.description,
    url: `${asPath}`
  };
  const share = async () => {
    try {
      await navigator.share(shareData);
    } catch (err) {
      // console.log('Error: ' + err.message);
    }
  };
  return (
    <>
      <Grid
        display={'flex'}
        justifyContent={'space-around'}
        alignItems={'center'}
        sx={isDesktop ? { height: '35px' } : {}}
      >
        <IconButton
          disabled={favoriteLoading}
          size="large"
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginLeft: '16px',
            marginRight: '16px'
          }}
          onClick={() => {
            if (isLoggedIn) {
              addOrRemoveToFavorites();
              return;
            }
            setCheckedLogin(true);
          }}
        >
          <StyledRating
            name="customized-color"
            max={1}
            disabled={favoriteLoading}
            value={isFavorite ? 1 : null}
            icon={
              favoriteLoading ? (
                <CircularProgress style={{ width: '24px', height: '24px' }} />
              ) : (
                <Favorites fill={'#ff0018'} color={'#ff0018'} />
              )
            }
            x
            emptyIcon={
              favoriteLoading ? (
                <CircularProgress style={{ width: '24px', height: '24px' }} />
              ) : (
                <Favorites />
              )
            }
          />
        </IconButton>
        <IconButton
          aria-label="shareData"
          style={{ width: '43px' }}
          onClick={share}
        >
          <ShareSvg />
        </IconButton>
      </Grid>

      {isDesktop
        ? (checkedLogin && (
            <>
              <Modal
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                open={checkedLogin}
                onClose={() => setCheckedLogin(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'}
                  height={'398px'}
                  width={'864px'}
                  padding={'32px'}
                  sx={{ backgroundColor: '#fff' }}
                >
                  <IconButton
                    onClick={() => setCheckedLogin(false)}
                    sx={{ direction: 'rtl', marginRight: 'auto' }}
                  >
                    <CloseIcon />
                  </IconButton>
                  <Typography component={'h4'} variant={'h4'} pb={'52px'}>
                    کاربر عزیز خوش آمدید
                  </Typography>
                  <Typography
                    component={'caption'}
                    variant={'caption'}
                    pb={'52px'}
                  >
                    ﺑﺮای اﻓﺰودن ﻣﺤﺼﻮل ﺑﻪ ﻟﯿﺴﺖ ﻋﻠﺎﻗﻪ ﻣﻨﺪی ﻫﺎ، ﻟﻄﻔﺎ وارد حساب
                    کاربری خود شوید
                  </Typography>
                  <Grid
                    display={'flex'}
                    height={'60px'}
                    width={'50%'}
                    justifyContent={'space-between'}
                  >
                    <Button
                      type="submit"
                      onClick={() => {
                        setCheckedLogin(false), setOpenFavoritesModal(true);
                      }}
                      fullWidth
                      variant="contained"
                      color="primary"
                    >
                      ورود
                    </Button>
                    <Link
                      passHref={true}
                      href={{
                        pathname: `/auth/register`
                      }}
                      style={{ textDecoration: 'none', cursor: 'pointer' }}
                    >
                      <Button
                        type="submit"
                        style={{ marginRight: '32px' }}
                        fullWidth
                        variant="outlined"
                        color="primary"
                      >
                        ساخت حساب کاربری
                      </Button>
                    </Link>
                  </Grid>
                </Box>
              </Modal>
            </>
          )) ||
          (openFavoritesModal && (
            <>
              <Modal
                open={openFavoritesModal}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                onClose={() => setOpenFavoritesModal(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'}
                  width={'864px'}
                  padding={'32px'}
                  sx={{ backgroundColor: '#fff' }}
                >
                  <IconButton
                    onClick={() => setOpenFavoritesModal(false)}
                    sx={{ direction: 'rtl', marginRight: 'auto' }}
                  >
                    <CloseIcon />
                  </IconButton>
                  <Typography component={'h4'} variant={'h4'} pb={'52px'}>
                    ورود به حساب
                  </Typography>
                  <Login
                    onSuccess={() => setOpenFavoritesModal(false)}
                    submitFavorites={() => {
                      addOrRemoveToFavorites();
                    }}
                    autoRedirectOnLogin={false}
                  />
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mt: { xs: 0 }
                    }}
                  >
                    <Typography variant="body1" sx={{ ml: { xs: 0, md: 2 } }}>
                      {register ? 'حساب کاربری دارید؟' : ' حساب کاربری ندارید؟'}
                    </Typography>

                    <Link
                      passHref={true}
                      href={{
                        pathname: register ? `/auth/login` : `/auth/register`
                      }}
                      style={{ textDecoration: 'none', cursor: 'pointer' }}
                    >
                      <a
                        style={{
                          textDecoration: 'none ',
                          ml: { xs: 0, md: 2 },
                          fontSize: '18px',
                          color: '#FFD2AA',
                          cursor: 'pointer'
                        }}
                      >
                        {register ? 'ورود به حساب کاربری' : ' ساخت حساب کاربری'}
                      </a>
                    </Link>
                  </Box>
                </Box>
              </Modal>
            </>
          ))
        : (checkedLogin && (
            <Drawer anchor="bottom" open={checkedLogin}>
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
                sx={{
                  backgroundColor: '#fff',
                  padding: '24px 10px 24px 10px'
                }}
              >
                <IconButton
                  style={{ marginLeft: 'auto' }}
                  onClick={() => setCheckedLogin(false)}
                  sx={{ direction: 'rtl' }}
                >
                  <CloseIcon />
                </IconButton>
                <Typography component={'h4'} variant={'h4'} pb={'52px'}>
                  کاربر عزیز خوش آمدید
                </Typography>
                <Typography
                  component={'p'}
                  variant={'p'}
                  pb={'52px'}
                  textAlign={'center'}
                  width={'291px'}
                >
                  ﺑﺮای اﻓﺰودن ﻣﺤﺼﻮل ﺑﻪ ﻟﯿﺴﺖ ﻋﻠﺎﻗﻪ ﻣﻨﺪی ﻫﺎ، ﻟﻄﻔﺎ وارد حساب کاربری
                  خود شوید
                </Typography>
                <Grid
                  display={'flex'}
                  height={'60px'}
                  justifyContent={'space-between'}
                >
                  <Button
                    type="submit"
                    onClick={() => {
                      setCheckedLogin(false), setOpenFavoritesModal(true);
                    }}
                    fullWidth
                    variant="contained"
                    color="primary"
                  >
                    ورود
                  </Button>
                  <Link
                    passHref={true}
                    href={{
                      pathname: `/auth/register`
                    }}
                    style={{ textDecoration: 'none', cursor: 'pointer' }}
                  >
                    <Button
                      type="submit"
                      fullWidth
                      variant="outlined"
                      color="primary"
                      sx={{ whiteSpace: 'nowrap', marginLeft: '24px' }}
                    >
                      ساخت حساب کاربری
                    </Button>
                  </Link>
                </Grid>
              </Box>
            </Drawer>
          )) ||
          (openFavoritesModal && (
            <Drawer anchor="bottom" open={openFavoritesModal}>
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
                sx={{
                  backgroundColor: '#fff',
                  padding: '24px 10px 24px 10px'
                }}
              >
                <IconButton
                  onClick={() => setOpenFavoritesModal(false)}
                  sx={{ direction: 'rtl', marginRight: 'auto' }}
                >
                  <CloseIcon />
                </IconButton>
                <Typography component={'h4'} variant={'h4'} pb={'52px'}>
                  ورود به حساب
                </Typography>
                <Login
                  onSuccess={() => setOpenFavoritesModal(false)}
                  autoRedirectOnLogin={false}
                />
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mt: { xs: 0 }
                  }}
                >
                  <Typography variant="body1" sx={{ ml: { xs: 0, md: 2 } }}>
                    {register ? 'حساب کاربری دارید؟' : ' حساب کاربری ندارید؟'}
                  </Typography>

                  <Link
                    passHref={true}
                    href={{
                      pathname: register ? `/auth/login` : `/auth/register`
                    }}
                    style={{ textDecoration: 'none', cursor: 'pointer' }}
                  >
                    <a
                      style={{
                        textDecoration: 'none ',
                        ml: { xs: 0, md: 2 },
                        fontSize: '18px',
                        color: '#FFD2AA',
                        cursor: 'pointer'
                      }}
                    >
                      {register ? 'ورود به حساب کاربری' : ' ساخت حساب کاربری'}
                    </a>
                  </Link>
                </Box>
              </Box>
            </Drawer>
          ))}
    </>
  );
};

export default Favorite;
