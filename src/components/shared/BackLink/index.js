import { Grid, Typography, Link as MuiLink } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const BackLink = ({ title = '', link = '/' }) => {
  return (
    <Grid container my={4}>
      <Grid>
        <Link
          passHref
          href={{
            pathname: link
          }}
        >
          <MuiLink
            width="1"
            color="#1C1B20"
            sx={{
              textDecoration: 'none',
              display: 'flex',
              gap: 1,
              alignItems: 'center'
            }}
          >
            <i className="icon-Arrowarrow-right" />
            <Typography variant="subtitle1">{title}</Typography>
          </MuiLink>
        </Link>
      </Grid>
    </Grid>
  );
};

export default BackLink;
