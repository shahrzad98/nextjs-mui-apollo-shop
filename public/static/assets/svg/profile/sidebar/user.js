import * as React from "react"

const UserSVG = (props) => (
  <svg
    width={36}
    height={36}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={36} height={36} rx={2} fill={props.bgcolor} />
    <path
      d="M18 17.438a3.937 3.937 0 1 0 .001-7.875A3.937 3.937 0 0 0 18 17.437ZM10.688 26.438A7.317 7.317 0 0 1 18 19.125a7.317 7.317 0 0 1 7.313 7.313"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default UserSVG
