import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={22}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19.492 2.509a3.004 3.004 0 0 0-2.159-.884 3.037 3.037 0 0 0-2.15.917L3.1 14.625l-1.475 5.759 5.75-1.476L19.458 6.825a3.071 3.071 0 0 0 .917-2.15 3.043 3.043 0 0 0-.883-2.166ZM14.834 2.884l4.274 4.275M3.1 14.617l4.283 4.275"
      stroke="#FFD2AA"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SvgComponent
