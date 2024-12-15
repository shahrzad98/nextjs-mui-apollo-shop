import { Grid, Typography } from '@mui/material';
import HotOfferTitleSVG from 'public/static/assets/img/hotOffer/hotOfferTitleSVG';
import ShowMore from 'src/components/hotOffer/ShowMore';
import { useCustomization } from '@digify/theme-kit';
import { getReversedColor } from 'utils/isLight';

function SideTitle({
  title = 'پیشنهاد ویژه',
  showAll = true,
  direction = 'column',
  hotOfferLink
}) {
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
      item
      container
      flexDirection={direction}
      justifyContent={showAll ? 'space-between' : 'center'}
      alignItems={'center'}
      xs={direction == 'row' ? 12 : 3}
      gap={direction == 'row' && 2}
      color={reversedColor}
      sx={{
        '& path': {
          stroke: reversedColor
        }
      }}
    >
      <HotOfferTitleSVG />
      <Typography
        variant="h1"
        color={'inherit'}
        mt={direction == 'row' ? 0 : !showAll && 4}
        textAlign="center"
      >
        {title}
      </Typography>
      {showAll && <ShowMore href={hotOfferLink} />}
    </Grid>
  );
}

export default SideTitle;
