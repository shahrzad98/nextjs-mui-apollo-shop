import * as React from 'react';

const PaymentStepCart = props => (
  <svg
    width={64}
    height={64}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <circle cx={32} cy={32} r={32} fill="#FEFEFE" />
    <circle
      cx={32}
      cy={32}
      r={31.25}
      stroke={props.borderColor}
      strokeWidth={1.5}
    />
    <path
      d="M45 40.653v2c0 2.214-1.787 4-4 4H21c-2.213 0-4-1.786-4-4v-14c0-2.213 1.787-4 4-4h20c2.213 0 4 1.787 4 4v2M41 24.653l-3.107-6.213c-.24-.48-.653-.84-1.16-1a1.979 1.979 0 0 0-1.533.107l-14.214 7.106"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M45 40.653c1.107 0 2-.893 2-2v-6c0-1.106-.893-2-2-2h-5c-2.76 0-5 2.24-5 5s2.24 5 5 5h5Z"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M40 35.147a.506.506 0 1 1 .001 1.012.506.506 0 0 1 0-1.012Z"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default PaymentStepCart;
