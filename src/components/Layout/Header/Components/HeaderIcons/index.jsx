import {
  Badge,
  Button,
  Grid,
  IconButton,
  styled,
  Link as MuiLink
} from '@mui/material';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import {
  isUserLoggedIn,
  useBasket,
  useUser,
  staticLinks
} from '@digify/theme-kit';
import Basket from 'src/components/basket';
import ProfileCard from '../ProfileCard';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';

const DEFUALT_VALUE = {
  basket: null,
  profile: null
};
/*
  shouldForwardProp: prop => prop !== 'contentAlign'

*/

const StyledGrid = styled(Grid, {
  shouldForwardProp: prop => prop
})(({}) => ({
  '& a': {
    textDecoration: 'none'
  },
  '& .basketButton': {
    marginLeft: '32px'
  },

  '& .registerBtn': {
    borderRadius: '2px',
    color: '#171c22',
    borderColor: 'rgba(23, 28, 34, 1)'
  },
  '& .iconBtn': {
    marginLeft: '24px'
    // padding: 0
  }
}));
function HeaderIcons({ isHome }) {
  const isDesktop = !useIsMobile();
  const { factor } = useBasket();
  const { data } = useUser();
  const { userRole } = data;
  const userLoggedIn = isUserLoggedIn();
  const [invisible, setInvisible] = useState(true);

  const [anchorEl, setAnchorEl] = useState({
    ...DEFUALT_VALUE
  });

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event, name) => {
    setAnchorEl({
      [name]: event.currentTarget
    });
  };
  useEffect(() => {
    if (factor.productsCount == 0) {
      setInvisible(true);
    } else if (factor.productsCount > 0) {
      setInvisible(false);
    }
  }, [factor]);
  const openBasketCard = Boolean(anchorEl?.basket);
  const openProfileCard = Boolean(anchorEl?.profile);
  return (
    <StyledGrid item>
      {
        <>
          {/* Besket */}
          <Link passHref href="/profile/cart/items">
            <MuiLink
              onClick={event =>
                factor.productsCount > 0 ? event.preventDefault() : null
              }
            >
              <IconButton
                size="large"
                className="basketButton"
                onClick={e => handleClick(e, 'basket')}
                // sx={{
                //   '& path': {
                //     stroke:
                //       factor.productsCount > 0
                //         ? theme?.palette?.primary?.main
                //         : ''
                //   }
                // }}
              >
                <Badge
                  invisible={invisible}
                  badgeContent={
                    factor?.productsCount > 0 ? factor.productsCount : ''
                  }
                  color="error"
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                  }}
                >
                  <i
                    style={{ fontSize: '24px', color: 'rgba(28, 27, 32, 1)' }}
                    className="icon-shopping-E-commerce-shopping-bags-shopping-bag-side"
                  />
                </Badge>
              </IconButton>
            </MuiLink>
          </Link>

          {userRole === 'manager' && isHome
            ? null
            : factor.productsCount > 0 && (
                <Basket
                  open={openBasketCard}
                  handleClose={handleClose}
                  links={staticLinks?.cart}
                  anchorEl={anchorEl?.basket}
                />
              )}

          {/* profile and other if screen up sm  */}
          {isDesktop && (
            <>
              {userLoggedIn ? (
                <>
                  <Link {...staticLinks?.favorites} passHref>
                    <a>
                      <IconButton className="iconBtn">
                        <i
                          style={{
                            fontSize: '24px',
                            color: 'rgba(28, 27, 32, 1)'
                          }}
                          className="icon-social-medias-rewards-rating-love-it"
                        />
                      </IconButton>
                    </a>
                  </Link>
                  <IconButton
                    className="iconBtn"
                    onClick={e => handleClick(e, 'profile')}
                  >
                    <i
                      style={{ fontSize: '24px', color: 'rgba(28, 27, 32, 1)' }}
                      className="icon-single-neutral-actions-users-geometric-close-up"
                    />
                  </IconButton>
                </>
              ) : (
                <Link
                  href={{
                    pathname: '/auth/login'
                  }}
                  passHref
                >
                  <a>
                    <Button
                      variant="outlined"
                      onClick={() => {}}
                      startIcon={
                        <i
                          style={{
                            fontSize: '24px',
                            color: 'rgba(28, 27, 32, 1)'
                          }}
                          className="icon-single-neutral-actions-users-geometric-close-up"
                        />
                      }
                      className="registerBtn"
                      sx={{
                        padding: { xs: '8px 20px', lg: '8px 25px' },
                        fontSize: { xs: '14px', lg: '16px' },
                        marginLeft: { xs: '24px', lg: '32px' }
                      }}
                    >
                      ورود یا ثبت نام
                    </Button>
                  </a>
                </Link>
              )}
              <ProfileCard
                open={openProfileCard}
                handleClose={handleClose}
                anchorEl={anchorEl?.profile}
              />
            </>
          )}
        </>
      }
    </StyledGrid>
  );
}

export default HeaderIcons;
