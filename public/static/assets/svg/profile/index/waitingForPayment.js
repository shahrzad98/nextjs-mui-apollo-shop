import * as React from 'react';

const WaitingForPaymentSVG = props => (
  <svg
    width={64}
    height={64}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <rect width={64} height={64} rx={4} fill="#8432F0" fillOpacity={0.1} />
    <path
      d="M40 47.016c4.413 0 8-3.587 8-8 0-4.414-3.587-8-8-8s-8 3.586-8 8c0 4.413 3.587 8 8 8Z"
      stroke="#8432F0"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M43.546 39.014h-3.533V35.48M28 41.016h-8c-1.107 0-2-.894-2-2v-14c0-1.107.893-2 2-2h20c1.107 0 2 .893 2 2v2"
      stroke="#8432F0"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m41.361 23.533-3.76-5.64A1.98 1.98 0 0 0 35.948 17H24.08c-.667 0-1.293.333-1.667.893l-3.76 5.64M30 17.016v6"
      stroke="#8432F0"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default WaitingForPaymentSVG;
