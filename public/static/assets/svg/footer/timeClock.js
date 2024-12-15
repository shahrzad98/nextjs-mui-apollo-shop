import * as React from 'react';

const SvgComponent = props => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 15.127a7 7 0 0 0 7-7 7 7 0 0 0-7-7 7 7 0 0 0-7 7 7 7 0 0 0 7 7ZM8 8.127v-2.5M8 8.127l3.127 3.127"
      stroke="#1C1B20"
      strokeOpacity={0.7}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgComponent;
