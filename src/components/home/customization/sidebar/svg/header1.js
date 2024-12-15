import * as React from 'react';

const HeaderSVG = props => (
  <svg
    width={24}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.5 1.596c0-.191.67-.346 1.5-.346h18c.83 0 1.5.155 1.5.346v3.808c0 .191-.67.346-1.5.346H3c-.83 0-1.5-.155-1.5-.346V1.596Z"
      fill={props.color}
    />
    <path
      d="M1.5 2.75c0-.83.67-1.5 1.5-1.5h18c.83 0 1.5.67 1.5 1.5v16.5c0 .83-.67 1.5-1.5 1.5H3c-.83 0-1.5-.67-1.5-1.5V2.75Z"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.5 9.5c0-.41.34-.75.75-.75h4.5c.41 0 .75.34.75.75V14c0 .41-.34.75-.75.75h-4.5c-.41 0-.75-.34-.75-.75V9.5Z"
      fill={props.color}
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.5 17.75h6"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.5 9.5c0-.41.34-.75.75-.75h4.5c.41 0 .75.34.75.75V17c0 .41-.34.75-.75.75h-4.5c-.41 0-.75-.34-.75-.75V9.5Z"
      fill={props.color}
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default HeaderSVG;
