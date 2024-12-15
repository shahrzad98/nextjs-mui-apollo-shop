import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 23.25c6.21 0 11.25-5.04 11.25-11.25S18.21.75 12 .75.75 5.79.75 12 5.79 23.25 12 23.25ZM7.5 16.5l9-9M16.5 16.5l-9-9"
      stroke="#FF5875"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SvgComponent
