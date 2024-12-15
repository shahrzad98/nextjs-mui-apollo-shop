import * as React from 'react';

const ColorSettingsSVG = props => (
  <svg
    width={24}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.148 15.629c.3 3.86 6.01 1.2 5.56 2.54-2.52 7.48-12.65 5.68-16.97 1.16-4.17-4.25-4.16-11.05.02-15.29 4.23-4.23 11.39-4.53 15.29-.02 7.64 8.85-4.17 8.17-3.9 11.61Z"
      fill={props.color}
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.31 14.839a1.52 1.52 0 1 0 0-3.039 1.52 1.52 0 0 0 0 3.039ZM11.069 19.669a1.52 1.52 0 1 0 .001-3.039 1.52 1.52 0 0 0-.001 3.039ZM14.707 7.438A1.52 1.52 0 1 0 14.71 4.4a1.52 1.52 0 0 0-.002 3.038ZM8.258 9.049A1.52 1.52 0 1 0 8.26 6.01a1.52 1.52 0 0 0-.002 3.039Z"
      fill="#FFF"
      stroke="#FFF"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ColorSettingsSVG;
