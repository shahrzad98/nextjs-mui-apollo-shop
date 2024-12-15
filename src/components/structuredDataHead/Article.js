import React from 'react';
import HeadScript from './HeadScript';

const ArticleStructuredData = ({ title, image, publishDate, author }) => {
  const addJsonLd = () => {
    return {
      __html: JSON.stringify({
        '@context': 'https://schema.org/',
        '@type': 'NewsArticle',
        headline: title,
        image: [image],
        datePublished: publishDate,
        dateModified: publishDate,
        author: [
          {
            '@type': 'Person',
            name: author
          }
        ]
      })
    };
  };

  return <HeadScript data={addJsonLd()} type="article" />;
};

export default ArticleStructuredData;
