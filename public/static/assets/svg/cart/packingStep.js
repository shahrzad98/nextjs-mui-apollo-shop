import * as React from 'react';

const PackingCartStep = props => (
  <svg
    width={64}
    height={64}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <circle cx={32} cy={32} r={32} fill="#FEFEFE" />
    <circle
      cx={32}
      cy={32}
      r={31.25}
      stroke={props.borderColor}
      strokeWidth={1.5}
    />
    <path
      d="m15.125 33.777 4.41 2.235M15.26 27.793l4.216 2.265M17.044 22.813l2.535 1.56M30.26 21.673l12.375 6.315M35.074 19.212l-9.285 4.74a3.179 3.179 0 0 0-1.71 2.835v10.32c0 1.185.66 2.28 1.71 2.82l9.285 4.74c.87.45 1.905.45 2.775 0l9.285-4.74a3.173 3.173 0 0 0 1.71-2.82v-10.32c0-1.184-.66-2.28-1.71-2.834l-9.285-4.74a3.02 3.02 0 0 0-2.775 0Z"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m48.336 25.078-11.88 6.075-11.88-6.075M36.454 31.153v13.86M42.635 27.988v4.365"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default PackingCartStep;
