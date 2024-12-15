import * as React from 'react';

const UtilsSVG = props => (
  <svg
    width={18}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9 17.25c4.56 0 8.25-3.69 8.25-8.25C17.25 4.44 13.56.75 9 .75 4.44.75.75 4.44.75 9c0 4.56 3.69 8.25 8.25 8.25Z"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m12.75 16.35 1.5 6.9-5.25-3-5.25 3 1.5-6.9M9.53 4.29l1.25 2.46h2.13c.24-.01.46.14.55.36.09.22.04.48-.13.64l-1.95 1.92 1.08 2.48a.586.586 0 0 1-.83.74l-2.62-1.47-2.61 1.47c-.22.13-.49.1-.68-.07a.586.586 0 0 1-.15-.67l1.08-2.48L4.7 7.75a.587.587 0 0 1-.13-.64.59.59 0 0 1 .55-.36h2.13L8.5 4.3c.1-.2.31-.32.53-.32.19-.01.4.11.5.31Z"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default UtilsSVG;
