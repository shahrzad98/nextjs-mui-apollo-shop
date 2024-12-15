import * as React from 'react';

const AddressSVG = props => (
  <svg
    width={36}
    height={36}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <rect width={36} height={36} rx={2} fill={props.bgcolor}/>
    <path
      d="M18 16.875a2.247 2.247 0 0 0 2.25-2.25 2.247 2.247 0 0 0-2.25-2.25 2.247 2.247 0 0 0-2.25 2.25 2.247 2.247 0 0 0 2.25 2.25Z"
      stroke={props.color} 
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 9.563a5.06 5.06 0 0 1 5.063 5.062c0 2.438-3.848 7.898-4.838 9.255a.267.267 0 0 1-.225.113.288.288 0 0 1-.225-.113c-.982-1.357-4.837-6.817-4.837-9.255A5.06 5.06 0 0 1 18 9.562Z"
      stroke={props.color} 
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22.485 22.334c2.047.405 3.39 1.08 3.39 1.853 0 1.245-3.525 2.25-7.875 2.25s-7.875-1.005-7.875-2.25c0-.765 1.335-1.44 3.375-1.845"
      stroke={props.color} 
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default AddressSVG;
