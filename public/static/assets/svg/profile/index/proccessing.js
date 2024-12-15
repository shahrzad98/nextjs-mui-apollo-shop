import * as React from "react"

const ProccessingSVG = (props) => (
    <svg
    width={64}
    height={64}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={64} height={64} rx={4} fill="#FFDF00" fillOpacity={0.1} />
    <path
      d="m14.124 31.779 4.41 2.235M14.26 25.794l4.215 2.264M16.045 20.813l2.535 1.56M29.259 19.673l12.375 6.315M34.074 17.213l-9.285 4.74a3.179 3.179 0 0 0-1.71 2.835v10.32c0 1.185.66 2.28 1.71 2.82l9.285 4.74c.87.45 1.905.45 2.775 0l9.285-4.74a3.173 3.173 0 0 0 1.71-2.82v-10.32c0-1.185-.66-2.28-1.71-2.835l-9.285-4.74a3.02 3.02 0 0 0-2.775 0Z"
      stroke="#FFDF00"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m47.334 23.079-11.88 6.075-11.88-6.075M35.454 29.154v13.86M41.635 25.989v4.365"
      stroke="#FFDF00"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default ProccessingSVG
