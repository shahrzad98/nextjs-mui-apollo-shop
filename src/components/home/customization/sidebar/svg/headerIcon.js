import * as React from 'react';

const HeaderIcon = props => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.5 3c0-.83.67-1.5 1.5-1.5h18c.83 0 1.5.67 1.5 1.5v18c0 .83-.67 1.5-1.5 1.5H3c-.83 0-1.5-.67-1.5-1.5V3ZM1.5 7.5h21"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default HeaderIcon;
