import { Grid, Typography, Box } from '@mui/material';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';
import HotOfferTitleSVG from 'public/static/assets/img/hotOffer/hotOfferTitleSVG';
import { getReversedColor } from 'utils/isLight';
import { useCustomization } from '@digify/theme-kit';

function SideTitle({ title = 'پیشنهاد ویژه' }) {
  const isDesktop = !useIsMobile();

  const {
    data: {
      hotOffer: {
        color: { value }
      }
    }
  } = useCustomization('hotOffer');

  const reversedColor = getReversedColor(value);

  return (
    <Grid
      item
      container
      flexDirection="column"
      alignItems="center"
      p={4}
      pt={4}
      color={reversedColor}
      sx={theme => ({
        '& path': {
          stroke: reversedColor
        },
        '& svg': {
          [theme.breakpoints.down('md')]: {
            width: '43px',
            height: '43px'
          }
        }
      })}
    >
      {isDesktop && (
        <Box mb={4}>
          <HotOfferTitleSVG />
        </Box>
      )}

      <Typography
        variant="h1"
        px={isDesktop ? 4 : 0}
        whiteSpace={isDesktop ? 'unset' : 'nowrap'}
        color={reversedColor}
        sx={theme => ({
          textAlign: 'center',
          [theme.breakpoints.down('md')]: {
            transform: 'rotate(-90deg)',
            transformOrigin: '86% 50%'
          }
        })}
      >
        {title}
      </Typography>
    </Grid>
  );
}

export default SideTitle;
