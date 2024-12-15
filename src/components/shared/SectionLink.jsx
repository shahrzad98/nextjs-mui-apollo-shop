import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { Grid, Typography } from '@mui/material';
import Link from 'next/link';
import PropTypes from 'prop-types';

export default function SectionLink({ title, link, ...props }) {
  return (
    <Grid container justifyContent={'center'} spacing={1} my={2} {...props}>
      <Grid item>
        <Link {...link}>
          <a>
            <Typography variant="subtitle2" color={'primary'}>
              {title}
            </Typography>
          </a>
        </Link>
      </Grid>
      <Grid item>
        <ArrowBackRoundedIcon color={'primary'} fontSize="small" />
      </Grid>
    </Grid>
  );
}

SectionLink.propTypes = {
  link: PropTypes.object,
  title: PropTypes.string
};
