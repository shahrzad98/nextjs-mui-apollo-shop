import React from 'react';
import HeadScript from './HeadScript';

const LogoStructuredData = ({ url, logo }) => {
  const addJsonLd = () => {
    return {
      __html: JSON.stringify({
        '@context': 'https://schema.org/',
        '@type': 'Organization',
        url,
        logo
      })
    };
  };

  return <HeadScript data={addJsonLd()} type="organization" />;
};

export default LogoStructuredData;
