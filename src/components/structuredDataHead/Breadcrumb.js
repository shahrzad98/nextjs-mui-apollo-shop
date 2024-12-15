import React from 'react';
import HeadScript from './HeadScript';

const BreadcrumbStructuredData = ({ list }) => {
  const addJsonLd = () => {
    return {
      __html: JSON.stringify({
        '@context': 'https://schema.org/',
        '@type': 'BreadcrumbList',
        itemListElement: list.map((listItem, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: listItem.name,
          item: listItem.url
        }))
      })
    };
  };

  return <HeadScript data={addJsonLd()} type="breadcrumb" />;
};

export default BreadcrumbStructuredData;
