import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={23}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.638 19.748H5.756c-.83 0-1.555-.726-1.555-1.555V4.201h13.992v13.992c0 .83-.725 1.555-1.555 1.555ZM8.865 15.084V8.865M13.53 15.084V8.865M1.092 4.201h20.21M13.53 1.092H8.864c-.829 0-1.554.725-1.554 1.554v1.555h7.773V2.646c0-.932-.726-1.554-1.555-1.554Z"
      stroke="#aaaaac"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SvgComponent
