import { createTheme } from '@mui/material/styles';
import { createBreakpoints } from '@mui/system';

const breakpoints = {
  xs: 0,
  sm: 600,
  md: 1024,
  lg: 1280,
  xl: 1920,
  xxl: 2140
};

const createdBreakpoints = createBreakpoints({ values: breakpoints });
const mobileMediaQuery = createdBreakpoints.down('md');

const createFontSize = (desktopSize, mobileSize) => ({
  fontSize: desktopSize,
  [mobileMediaQuery]: { fontSize: mobileSize }
});

const makeTheme = initData => {
  let theme = createTheme({
    palette: {
      common: {
        black: '#000',
        white: '#fff'
      },
      primary: {
        main: initData?.theme?.primary_color
          ? initData?.theme?.primary_color
          : '#46314E'
      },
      secondary: {
        main: initData?.theme?.second_primary_color
          ? initData?.theme?.second_primary_color
          : '#46314E'
      },
      styleColor: {
        main: initData?.theme?.style_color
      },
      discount: {
        // main: initData?.theme?.discount_color ? initData?.theme?.discount_color : themeData?.customer?.getAppearance?.theme?.discount_color  ? themeData?.customer?.getAppearance?.theme?.discount_color : '#CAA87F',
        main: '#CAA87F'
      },
      warning: {
        main: '#FFA24C'
      },
      error: {
        main: '#FF5875',
        light: '#CF7878'
      },
      offer: {
        main: '#FF4F58'
      },

      info: {
        main: '#2196f3',
        dark: '#2145FF'
      },
      success: {
        main: '#37B86D'
      },
      divider: 'rgba(28, 27, 32, 20%)',
      bodyBackground: initData?.theme?.bodyBackground,
      grey: {
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#eeeeee',
        300: '#e0e0e0',
        400: '#bdbdbd',
        500: '#9e9e9e',
        600: '#757575',
        700: '#616161',
        800: '#424242',
        900: '#212121',
        A100: '#d5d5d5',
        A200: '#aaaaaa',
        A400: '#303030',
        A700: 'rgba(0, 0, 0, 0.87)'
      },
      black: {
        500: 'rgba(28, 27, 32, 100%)',
        100: 'rgba(28, 27, 32, 100%)',
        70: 'rgba(28, 27, 32, 70%)',
        40: 'rgba(28, 27, 32, 40%)',
        20: 'rgba(28, 27, 32, 20%)',
        10: 'rgba(28, 27, 32, 10%)',
        5: 'rgba(28, 27, 32, 5%)'
      },
      white: {
        500: 'rgba(255, 255, 255, 100%)',
        100: 'rgba(255, 255, 255, 100%)',
        70: 'rgba(255, 255, 255, 70%)',
        40: 'rgba(255, 255, 255, 40%)',
        20: 'rgba(255, 255, 255, 20%)',
        10: 'rgba(255, 255, 255, 10%)',
        5: 'rgba(255, 255, 255, 5%)'
      },
      text: {
        primary: 'rgba(0, 0, 0, 0.87)',
        secondary: 'rgba(0, 0, 0, 0.30)',
        disabled: 'rgba(0, 0, 0, 0.38)',
        white: '#fff'
      }
    },
    typography: {
      fontFamily: ['iransans', 'sans-serif'].join(','),
      fontSize: 16,
      htmlFontSize: 16,
      fontWeightRegular: 400,
      fontWeightBold: 700,
      color: '#1C1B20',

      [createdBreakpoints.down('md')]: {
        fontSize: 14,
        htmlFontSize: 14
      },

      h1: {
        ...createFontSize(32, 24),
        fontWeight: 700,
        lineHeight: 1.2,
        color: '#1C1B20'
      },
      h2: {
        ...createFontSize(28, 20),
        fontWeight: 500,
        lineHeight: 1.2,
        color: '#1C1B20'
      },
      h3: {
        ...createFontSize(27, 20),
        fontWeight: 500,
        lineHeight: 1.2,
        color: '#1C1B20'
      },
      h4: {
        ...createFontSize(26, 19),
        fontWeight: 500,
        lineHeight: 1.2,
        color: '#1C1B20'
      },
      h5: {
        ...createFontSize(25, 19),
        fontWeight: 500,
        lineHeight: 1.2,
        color: '#1C1B20'
      },
      h6: {
        ...createFontSize(24, 18),
        fontWeight: 500,
        lineHeight: 1.2,
        color: '#1C1B20'
      },
      subtitle1: {
        ...createFontSize(24, 18),
        fontWeight: 500,
        color: '#1C1B20'
      },
      subtitle2: {
        ...createFontSize(20, 16),
        fontWeight: 500,
        color: '#1C1B20'
      },
      body1: {
        ...createFontSize(18, 16),
        fontWeight: 400,
        lineHeight: 1.8,
        color: '#1C1B20B2'
      },
      body2: {
        ...createFontSize(16, 14),
        fontWeight: 400,
        lineHeight: 1.8,
        color: '#1C1B2066'
      },
      caption: {
        fontSize: 14,
        fontWeight: 400,
        color: '#1C1B2066'
      },
      overline: {
        fontSize: 12,
        fontWeight: 400,
        color: '#1C1B2066'
      },
      button: { ...createFontSize(16, 14), fontWeight: 700 }
    },
    shape: {
      borderRadius: 2
    },
    props: {
      MuiTab: {
        disableRipple: true
      }
    },
    direction: 'rtl',
    spacing: 8,
    zIndex: {
      mobileStepper: 1000,
      appBar: 1100,
      drawer: 1200,
      modal: 1300,
      snackbar: 1400
    },
    breakpoints: {
      keys: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
      values: breakpoints
    }
  });
  theme = createTheme(theme, {
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            direction: 'ltr',
            textAlign: 'left'
          }
        }
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            padding: '0.875rem 2rem',
            '&.Mui-disabled': {
              color: theme.palette.primary.main
            }
          },
          contained: {
            color: '#fff'
          }
        }
      },
      MuiCheckbox: {
        styleOverrides: {
          root: {
            color: theme.palette.primary.main
          }
        }
      },
      MuiAccordion: {
        styleOverrides: {
          root: {
            border: 'none',
            padding: '0.5rem 0',
            boxShadow: 'none',
            borderRadius: 0,
            '&.Mui-expanded': {
              margin: 0
            }
          }
        }
      },
      MuiPagination: {
        styleOverrides: {
          root: {
            color: 'rgba(28, 27, 32, 0.4)',
            '.MuiPaginationItem-root.Mui-selected': {
              background: 'transparent',
              border: '1px solid #000'
            }
          }
        }
      }
    }
  });

  return {
    theme
  };
};

export default makeTheme;
