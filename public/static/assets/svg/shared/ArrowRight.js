import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={12}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m1.875 1.563 8.04 8.04a.562.562 0 0 1 0 .795l-8.04 8.04"
      stroke="#1C1B20"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SvgComponent
