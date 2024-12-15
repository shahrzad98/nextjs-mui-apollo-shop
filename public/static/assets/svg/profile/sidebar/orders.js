import React from "react"

const OrdersSVG = (props) => (
  <svg
    width={36}
    height={36}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={36} height={36} rx={2} fill={props.bgcolor} />
    <path
      d="M23.289 14.07H12.706a1.06 1.06 0 0 0-1.08.87l-1.5 10.432a1.016 1.016 0 0 0 1.08 1.072H24.79c.292.015.57-.09.78-.292.202-.203.315-.488.3-.78l-1.5-10.433a1.053 1.053 0 0 0-1.08-.87ZM20.746 11.857a2.828 2.828 0 0 0-2.767-2.294 2.832 2.832 0 0 0-2.76 2.28"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default OrdersSVG
