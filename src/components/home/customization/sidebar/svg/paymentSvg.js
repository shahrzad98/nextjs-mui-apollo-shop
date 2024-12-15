import React from 'react';

const PaymentSvg = ({ color, ...props }) => (
  <svg
    width="26"
    height="18"
    viewBox="0 0 26 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 16.2C4.99996 16.2 3.39997 17 13.7999 17C16.9998 17 20.1998 16.2 20.9998 13"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1 8.08213H3.53864C3.84797 8.08213 4.13597 7.94349 4.33864 7.70882L8.65858 3.45288L12.7439 4.27423C13.3305 4.39156 13.7145 4.86089 13.4585 5.87421C13.3625 6.27954 13.0212 6.58884 12.6052 6.64217L10.5999 6.93019C10.3546 6.95152 10.1305 7.07946 9.98122 7.27146C9.83189 7.46346 9.7679 7.7088 9.7999 7.95413V10.6848C9.7359 10.9942 9.56524 11.2822 9.33057 11.4848L7.11195 13.2342"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.0007 12.9999H23.4006C24.286 12.9999 25.0006 12.2852 25.0006 11.3999V2.59998C25.0006 1.71466 24.286 1 23.4006 1H11.4008C10.5154 1 9.80078 1.71466 9.80078 2.59998V3.68799"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.5234 4.99976H25.0007"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21.7992 8.19971H20.1992"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default PaymentSvg;
