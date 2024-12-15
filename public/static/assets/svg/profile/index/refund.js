import * as React from 'react';

const RefundSVG = props => (
  <svg
    width={64}
    height={64}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <rect width={64} height={64} rx={4} fill="#FE744C" fillOpacity={0.1} />
    <path
      d="M29.001 41.012h-8c-1.107 0-2-.894-2-2v-14c0-1.107.893-2 2-2h20c1.107 0 2 .893 2 2v2"
      stroke="#FE744C"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m42.36 23.533-3.76-5.64A1.98 1.98 0 0 0 36.947 17H25.08c-.667 0-1.293.333-1.667.893l-3.76 5.64M31.001 17.012v6M38.001 41.012h-5v5"
      stroke="#FE744C"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M48.227 41.985a7.427 7.427 0 0 1-14.32-.973M44.001 37.012h5v-5"
      stroke="#FE744C"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M33.787 36.026a7.427 7.427 0 0 1 14.32.973"
      stroke="#FE744C"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default RefundSVG;
