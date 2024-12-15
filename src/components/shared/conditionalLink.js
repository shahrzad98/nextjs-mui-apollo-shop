import { Fragment } from 'react';
import Link from 'next/link';
import { Box, Link as MaterialLink } from '@mui/material';

const ConditionalLink = ({ children, href, condition, ...props }) => {
  return !!condition && href ? (
    <Link href={href.includes('http') ? href : href} passHref>
      <MaterialLink width={'100%'} height={'100%'} {...props}>
        <Box>{children}</Box>
      </MaterialLink>
    </Link>
  ) : (
    <Fragment>{children}</Fragment>
  );
};

export default ConditionalLink;
