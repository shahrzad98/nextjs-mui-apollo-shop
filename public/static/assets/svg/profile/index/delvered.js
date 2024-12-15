import * as React from 'react';

const DeliveredSVG = props => (
  <svg
    width={64}
    height={64}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <rect width={64} height={64} rx={4} fill="#00D96F" fillOpacity={0.1} />
    <path
      d="M41 47.012c4.413 0 8-3.587 8-8 0-4.414-3.587-8-8-8s-8 3.586-8 8c0 4.413 3.587 8 8 8Z"
      stroke="#00D96F"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m44.574 36.68-3.867 5.16c-.174.226-.44.373-.733.4a.934.934 0 0 1-.774-.294l-2-2M29 41.012h-8c-1.107 0-2-.894-2-2v-14c0-1.107.893-2 2-2h20c1.107 0 2 .893 2 2v2"
      stroke="#00D96F"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m42.36 23.533-3.76-5.64A1.98 1.98 0 0 0 36.947 17H25.08c-.667 0-1.293.333-1.667.893l-3.76 5.64M31 17.012v6"
      stroke="#00D96F"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default DeliveredSVG;
