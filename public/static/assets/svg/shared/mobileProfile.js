import * as React from 'react';

function MobileProfile(props) {
  return (
    <svg width={30} height={30} fill="none" {...props}>
      <rect width={30} height={30} rx={15} fill="#1C1B20" fillOpacity={0.05} />
      <g
        opacity={0.4}
        stroke="#1C1B20"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 14.438a3.937 3.937 0 10.001-7.875A3.937 3.937 0 0015 14.438zM7.688 23.438A7.317 7.317 0 0115 16.125a7.317 7.317 0 017.313 7.313" />
      </g>
    </svg>
  );
}

export default MobileProfile;
