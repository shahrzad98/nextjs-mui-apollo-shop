import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, Link as MuiLink } from '@mui/material';
import { getReversedColor } from 'utils/isLight';
import { useCustomization } from '@digify/theme-kit';

const ShowMore = ({
  href = '',
  title = 'نمایش همه',
  hasIcon = true,
  ...props
}) => {
  const {
    data: {
      hotOffer: {
        color: { value }
      }
    }
  } = useCustomization('hotOffer');

  const reversedColor = getReversedColor(value);

  return (
    <Link href={href} passHref>
      <MuiLink sx={{ textDecoration: 'none' }}>
        <Button
          sx={{
            '& path': { stroke: 'none !important' },
            p: 0,
            color: reversedColor
          }}
          endIcon={hasIcon ? <ArrowBackIcon /> : null}
          {...props}
        >
          {title}
        </Button>
      </MuiLink>
    </Link>
  );
};

export default ShowMore;
