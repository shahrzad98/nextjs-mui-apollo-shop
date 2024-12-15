import Head from 'next/head';
import React from 'react';

const HeadScript = ({ data, type }) => {
  if (!data || !type) {
    throw Error('data and type props is required!');
  }
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={data}
        key={`${type}-jsonld`}
      />
    </Head>
  );
};

export default HeadScript;
