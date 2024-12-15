import { Typography, Grid, Link as MuiLink } from '@mui/material';
import Link from 'next/link';
import { animated, useSpring } from 'react-spring';

export default function CategoryHoverTitle({
  titleColor,
  bgColor,
  title,
  hover,
  link
}) {
  const styles = useSpring({
    opacity: hover ? 1 : 0,
    transform: 'translateY(0)'
  });
  const restStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: bgColor,
    top: 0,
    left: 0,
    color: titleColor,
    transition: '0.3s ease-out'
  };

  return (
    <animated.div
      style={{
        ...restStyles,
        ...styles
      }}
    >
      <Grid
        container
        gap={4}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="subtitle2"
          component="h2"
          color="inherit"
          textAlign="center"
        >
          {title}
        </Typography>
        <Link href={link} passHref>
          <MuiLink
            sx={{ color: 'inherit', textDecoration: 'underline' }}
            variant="body2"
            fontWeight={500}
          >
            نمایش محصولات دسته
          </MuiLink>
        </Link>
      </Grid>
    </animated.div>
  );
}
