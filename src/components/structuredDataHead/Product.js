import React from 'react';
import HeadScript from './HeadScript';

const ProductStructuredData = ({
  id,
  name,
  description,
  imageURLs,
  price,
  averageScore,
  voterNumber,
  comments
}) => {
  const addJsonLd = () => {
    return {
      __html: JSON.stringify({
        '@context': 'https://schema.org/',
        '@type': 'Product',
        name: name,
        alternateName: name,
        image: imageURLs,
        description: description,
        sku: id,
        mpn: id,
        ...(comments.length > 0 && {
          review: comments.map(comment => ({
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: comment.first_name || comment.last_name || 'کاربر فروشگاه'
            },
            reviewBody: comment.description,
            reviewRating: {
              '@type': 'Rating',
              ratingValue: comment.score,
              bestRating: '5',
              worstRating: '1'
            }
          }))
        }),
        ...(voterNumber &&
          averageScore && {
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: averageScore,
              reviewCount: voterNumber
            }
          }),
        offers: {
          '@type': 'Offer',
          priceCurrency: 'IRR',
          price: price,
          itemCondition: 'https://schema.org/NewCondition',
          availability: 'https://schema.org/InStock'
        }
      })
    };
  };

  return <HeadScript data={addJsonLd()} type="product" />;
};

export default ProductStructuredData;
