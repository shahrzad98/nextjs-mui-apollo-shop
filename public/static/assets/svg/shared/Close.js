import * as React from 'react';

const SvgComponent = props => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.525 18.438 18.4 1.563M18.4 18.438 1.525 1.563"
      stroke="#1C1B20"
      strokeOpacity={0.7}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgComponent;
