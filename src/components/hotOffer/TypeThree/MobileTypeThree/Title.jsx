import { Grid, Typography } from '@mui/material';
import HotOfferTitleSVG from 'public/static/assets/img/hotOffer/hotOfferTitleSVG';
import { useCustomization } from '@digify/theme-kit';
import { getReversedColor } from 'utils/isLight';

function Title() {
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
      container
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap={3}
      m="auto"
      height="132px"
      wrap="nowrap"
      sx={() => ({
        background: value,
        color: reversedColor,
        '& path': {
          stroke: reversedColor
        }
      })}
    >
      <HotOfferTitleSVG width={'43px'} height={'43px'} />
      <Typography variant="h1" color="inherit">
        پیشنهاد ویژه
      </Typography>
    </Grid>
  );
}

Title.propTypes = {};

export default Title;
