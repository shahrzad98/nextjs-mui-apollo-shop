import { Breadcrumbs, Typography, Link as MuiLink } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';
import getChildrenDepth from 'utils/getChildrenDepth';

const BreadcrumbsComponent = ({ categories, isCategory }) => {
  return (
    <Breadcrumbs
      sx={{
        '& .MuiLink-root': {
          textDecoration: 'none'
        },
        '& .MuiBreadcrumbs-separator': {
          margin: '0 6px'
        },
        '& li': {
          cursor: 'pointer'
        }
      }}
      aria-label="breadcrumb"
      mb={useIsMobile() ? '16px' : '8px'}
    >
      <Link href={`/products`} as={`/products`} passHref>
        <MuiLink>
          <Typography
            variant={isCategory ? 'body1' : 'body2'}
            color="text.secondary"
          >
            همه محصولات
          </Typography>
        </MuiLink>
      </Link>

      {getChildrenDepth(categories)?.map((item, index) => (
        <Link {...item?.link} passHref key={index}>
          <MuiLink>
            <Typography
              fontSize={
                isCategory
                  ? index + 1 === getChildrenDepth(categories)?.length
                    ? '18px'
                    : ''
                  : ''
              }
              fontWeight={
                isCategory
                  ? index + 1 === getChildrenDepth(categories)?.length
                    ? 500
                    : ''
                  : ''
              }
              variant={isCategory ? 'body1' : 'body2'}
              color={
                isCategory
                  ? index + 1 === getChildrenDepth(categories)?.length
                    ? 'black.100'
                    : ''
                  : 'text.secondary'
              }
            >
              {item?.title}
            </Typography>
          </MuiLink>
        </Link>
      ))}
    </Breadcrumbs>
  );
};

export default BreadcrumbsComponent;
