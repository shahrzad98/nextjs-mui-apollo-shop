import { Grid, Typography, Box } from '@mui/material';
import HotOfferTitleSVG from 'public/static/assets/img/hotOffer/hotOfferTitleSVG';
import ShowMore from 'src/components/hotOffer/ShowMore';
import { useCustomization } from '@digify/theme-kit';
import { getReversedColor } from 'utils/isLight';

function Title({ hotOfferLink }) {
  const {
    data: {
      hotOffer: {
        color: { value: color }
      }
    }
  } = useCustomization('hotOffer');

  const reversedColor = getReversedColor(color);

  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      mt={3}
      mb={4}
      wrap="nowrap"
      color={reversedColor}
      sx={{
        '& path': {
          stroke: reversedColor
        }
      }}
    >
      <Box display="flex" alignItems="center" gap={2}>
        <HotOfferTitleSVG width={'37px'} height={'37px'} />
        <Typography variant="h1">پیشنهاد ویژه</Typography>
      </Box>
      <ShowMore href={hotOfferLink} />
    </Grid>
  );
}

Title.propTypes = {};

export default Title;
