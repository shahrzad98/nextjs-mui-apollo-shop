import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={16}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.759 13.832H4.504a1.063 1.063 0 0 1-1.037-1.037V3.467h9.328v9.328c0 .553-.483 1.037-1.036 1.037ZM6.577 10.722V6.577M9.686 10.722V6.577M1.395 3.467h13.473M9.686 1.395h-3.11c-.552 0-1.036.483-1.036 1.036v1.036h5.182V2.431c0-.622-.483-1.036-1.036-1.036Z"
      stroke="#aaaaac"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SvgComponent
