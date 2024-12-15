import * as React from 'react';

const SvgComponent = props => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={10} cy={10} r={7.5} stroke="#483493" strokeWidth={5} />
  </svg>
);

export default SvgComponent;
