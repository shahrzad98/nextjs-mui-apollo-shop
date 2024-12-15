import { Grid, Typography, Box, IconButton } from '@mui/material';
import HotOfferTitleSVG from 'public/static/assets/img/hotOffer/hotOfferTitleSVG';
import ShowMore from 'src/components/hotOffer/ShowMore';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import { useCustomization } from '@digify/theme-kit';
import { getReversedColor } from 'utils/isLight';

function SideTitle({
  hotOfferLink,
  title = 'پیشنهاد ویژه',
  refs: { navigationPrevRef, navigationNextRef }
}) {
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
      justifyContent={'center'}
      alignItems={'center'}
      xs={3}
      maxWidth={'100%'}
      bgcolor={value}
    >
      <Grid
        mt={5}
        item
        container
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Grid
          item
          sx={() => ({
            '& path': {
              stroke: reversedColor
            }
          })}
        >
          <HotOfferTitleSVG />
        </Grid>
        <Grid item mt={5}>
          <Typography variant="h1" textAlign="center" color={reversedColor}>
            {title}
          </Typography>
        </Grid>
      </Grid>
      <Grid item pb={5}>
        <ShowMore href={hotOfferLink} />
      </Grid>
      <Box display="flex" width="1" justifyContent="center" gap={4}>
        <IconButton
          ref={navigationNextRef}
          sx={{ background: '#FEFEFE33', color: reversedColor }}
        >
          <ArrowForwardIos />
        </IconButton>
        <IconButton
          ref={navigationPrevRef}
          sx={{ background: '#FEFEFE33', color: reversedColor }}
        >
          <ArrowBackIosNew />
        </IconButton>
      </Box>
    </Grid>
  );
}

SideTitle.propTypes = {};

export default SideTitle;
