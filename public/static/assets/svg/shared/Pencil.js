import * as React from 'react';

const SvgComponent = ({ width = 22, height = 22, ...props }) => (
  <svg
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19.926 2.075c-.613-.613-1.4-.963-2.275-.963s-1.663.35-2.275.963L2.688 14.762 1.113 20.8l6.038-1.575 12.775-12.6c.612-.613.962-1.4.962-2.275s-.35-1.663-.962-2.275ZM15.025 2.512l4.463 4.463M2.688 14.763l4.462 4.462"
      stroke={props.color || '#aaaaac'}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgComponent;
