import * as React from 'react';

const AddressCartSVG = props => (
  <svg
    width={64}
    height={64}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <circle
      cx={32}
      cy={32}
      r={31.25}
      fill="#FEFEFE"
      stroke="#171C22"
      strokeWidth={1.5}
    />
    <path
      d="M32 30c2.213 0 4-1.787 4-4s-1.787-4-4-4-4 1.787-4 4 1.787 4 4 4Z"
      stroke="#171C22"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M32 17c4.973 0 9 4.027 9 9 0 4.333-6.84 14.04-8.6 16.453a.475.475 0 0 1-.4.2.512.512 0 0 1-.4-.2C29.853 40.04 23 30.333 23 26c0-4.973 4.027-9 9-9Z"
      stroke="#171C22"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M39.973 39.707C43.613 40.427 46 41.627 46 43c0 2.214-6.267 4-14 4s-14-1.786-14-4c0-1.36 2.373-2.56 6-3.28"
      stroke="#171C22"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default AddressCartSVG;
