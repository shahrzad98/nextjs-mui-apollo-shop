import * as React from 'react';

const SortSvg = props => (
  <svg
    width={16}
    height={13}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M1 1.177h14M1 6.47h10M1 11.765h5"
      stroke="#1C1B20"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </svg>
);

export default SortSvg;
