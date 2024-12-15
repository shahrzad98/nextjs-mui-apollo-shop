import * as React from 'react';

const HotOfferIcon = props => (
  <svg
    width={25}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 8.32V3.75c0-1.66 1.34-3 3-3s3 1.34 3 3v4.57M18.2 11.32a.495.495 0 0 1 .63.7c-.78 1.29-.53 2.95.59 3.96.42-.42.73-.93.91-1.5a.487.487 0 0 1 .73-.26 5.11 5.11 0 0 1 2.2 4.21 4.89 4.89 0 0 1-9.78 0 7.907 7.907 0 0 1 4.72-7.11Z"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m16.5 8.21-.14-1.9c-.06-.58-.56-1.02-1.15-1H2.91c-.59-.02-1.09.42-1.15 1l-1 13.95-.01 1.11c.04 1.11.97 1.98 2.09 1.94h8.41M.81 19.57h8.93"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default HotOfferIcon;
