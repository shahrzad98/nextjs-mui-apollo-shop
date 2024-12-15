import * as React from 'react';

function ArrowLeftIcon({ stroke = '#1C1B20', ...props }) {
  return (
    <svg width={32} height={32} fill="none" {...props}>
      <path
        d="M19.19 22.563l-6.252-6.254a.437.437 0 010-.618l6.253-6.254"
        stroke={stroke}
        strokeOpacity={0.7}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ArrowLeftIcon;
