import * as React from "react"

const NotifSVG = (props) => (
  <svg
    width={36}
    height={36}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={36} height={36} rx={2} fill={props.bgColor} />
    <path
      d="M16.5 25.313c.195.667.81 1.125 1.5 1.125s1.305-.458 1.5-1.125M18 11.25a5.627 5.627 0 0 1 5.625 5.625c0 5.288 1.125 6.188 1.125 6.188h-13.5s1.125-1.44 1.125-6.188A5.622 5.622 0 0 1 18 11.25Z"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default NotifSVG
