import * as React from 'react';

const LogOutSVG = props => (
  <svg
    width={36}
    height={36}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={36} height={36} rx={2} fill={props.bgcolor} />
    <path
      d="M15.62 18h11.812M24.62 20.813 27.431 18l-2.813-2.813M21.806 21.375v3.375a1.073 1.073 0 0 1-1.02 1.125h-9.202a1.073 1.073 0 0 1-1.02-1.125v-13.5a1.073 1.073 0 0 1 1.02-1.125h9.202c.593.03 1.05.533 1.02 1.125v3.375"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default LogOutSVG;
