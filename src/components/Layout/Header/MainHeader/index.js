import StoreNameAndLogo from '../Components/StoreNameAndLogo';
import { IconButton, Link as MaterialLink, Grid, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MegaMenu from '../Components/MegaMenu';
import HeaderIcons from '../Components/HeaderIcons';
import SearchInput from '../Components/SearchInput';
import Link from 'next/link';
import { StyledBox, CustomText } from './styled';
import { useCategories, useStoreInfo } from '@digify/theme-kit';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';
import { useRouter } from 'next/router';
import { useRef, useState, useEffect } from 'react';

function HeaderDesktop(props) {
  const { isHome, titles, setOpenMenu } = props;
  const { logo, name } = useStoreInfo();
  const { data: categoriesData } = useCategories();
  const { categories } = categoriesData;
  const [clientHeight, setclientHeight] = useState(0);
  const ref = useRef();
  const isDesktop = !useIsMobile();
  const { route } = useRouter();
  useEffect(() => {
    setclientHeight(ref?.current?.clientHeight);
  }, [ref?.current?.clientHeight]);
  return (
    <StyledBox
      component="header"
      sx={{
        marginBottom: {
          xs: '0',
          md: `${clientHeight}px`
        },
        boxShadow: {
          md: 'inset 0px -1px 0px #E0E0E0',
          xs: '0px 2px 6px rgba(0, 0, 0, 0.05)'
        }
      }}
    >
      <Box position={'relative'} component={'nav'}>
        <Box className="appBar" sx={{ height: { xs: '118px', md: '80px' } }}>
          {/* BergurMenu  icon */}
          <Grid container className="toolBarContainer">
            <Grid item display={{ xs: 'flex', md: 'none' }} xs={2}>
              <IconButton
                className="menuIcon"
                onClick={() => setOpenMenu(true)}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item xs={8} md={2}>
              <StoreNameAndLogo
                storeName={name}
                // lastSeen={data?.lastBuy}
                storeLogo={logo}
              />
            </Grid>
            {/* search box when desktop size */}

            <Grid item display={{ xs: 'none', md: 'flex' }} xs={4} lg={5}>
              <SearchInput />
            </Grid>
            {/* nav Links */}
            <Grid
              item
              container
              xs={2}
              md={6}
              lg={5}
              sx={{
                justifyContent: 'flex-end',
                alignItems: 'center'
              }}
            >
              {isDesktop && (
                <Grid item ml={'32px'}>
                  {titles?.map((item, _ind) => (
                    <Link
                      key={_ind}
                      href={
                        item?.additionalData?.link
                          ? item?.additionalData?.link.includes('http')
                            ? item?.additionalData?.link
                            : `${item?.additionalData?.link}`
                          : `/`
                      }
                      passHref
                    >
                      <MaterialLink color="inherit">
                        <CustomText
                          variant="body1"
                          fontSize={{ xs: '12px', md: '14px' }}
                          ml={{ xs: '16px', md: '16px' }}
                          component="p"
                        >
                          {item.key}
                        </CustomText>
                      </MaterialLink>
                    </Link>
                  ))}
                </Grid>
              )}
              <HeaderIcons color={'rgba(38, 38, 38, 1)'} isHome={isHome} />
            </Grid>
            {/* search box when mobile size */}

            <Grid
              item
              sx={{
                display: { xs: 'flex', md: 'none' }
              }}
              xs={12}
            >
              <SearchInput />
            </Grid>
          </Grid>
        </Box>
        {route != '/auth/login' && (
          <MegaMenu categories={categories.slice(0, 24)} ref={ref} />
        )}
      </Box>
    </StyledBox>
  );
}

export default HeaderDesktop;
