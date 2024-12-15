import * as React from 'react';

const DiscountSVG = props => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.5 1h6.88c.4 0 .78.16 1.06.44L22.5 11.5M9.13 4H3c-.83 0-1.5.67-1.5 1.5v6.13c0 .4.16.78.44 1.06l9.75 9.75a1.499 1.499 0 0 0 2.12 0l6.13-6.13c.59-.58.59-1.54 0-2.12l-9.75-9.75C9.91 4.15 9.53 4 9.13 4Z"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 8.12a.38.38 0 1 0 0 .76.38.38 0 0 0 0-.76Z"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default DiscountSVG;
