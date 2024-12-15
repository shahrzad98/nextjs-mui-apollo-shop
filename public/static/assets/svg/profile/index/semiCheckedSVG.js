import * as React from 'react';

const SemiCheckedSVG = props => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <rect width={18} height={18} rx={2} fill={props.color} />
    <path stroke="#fff" strokeWidth={2} strokeLinecap="round" d="M5 12h10" />
  </svg>
);

export default SemiCheckedSVG;
