import * as React from 'react';

const BannerIcon = props => (
  <svg
    width={24}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.75 4.26v-.98c0-.53-.21-1.05-.58-1.43a2.06 2.06 0 0 0-1.42-.6h-14a2.016 2.016 0 0 0-2 2.03v9.46c0 .53.21 1.05.58 1.43.38.38.89.59 1.42.6M11.34 20.76l4.44-6.31a1.501 1.501 0 0 1 2.36-.13l4.94 5.64"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 8.26c0-.55.45-1 1-1h15.25c.55 0 1 .45 1 1v11.5c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1V8.26Z"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default BannerIcon;
