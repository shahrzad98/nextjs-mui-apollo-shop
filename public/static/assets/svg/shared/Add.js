import * as React from 'react';

const SvgComponent = ({ stroke = '#1C1B20', ...props }) => (
  <svg
    width={25}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.95 7.5v9M8.45 12h9M12.95 23.25c6.21 0 11.25-5.04 11.25-11.25S19.16.75 12.95.75 1.7 5.79 1.7 12s5.04 11.25 11.25 11.25Z"
      stroke={stroke}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgComponent;
