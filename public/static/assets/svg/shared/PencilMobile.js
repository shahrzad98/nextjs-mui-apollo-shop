import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.95 2.05a2.118 2.118 0 0 0-1.516-.642c-.584 0-1.109.234-1.517.642l-8.458 8.458-1.05 4.025 4.025-1.05 8.516-8.4c.409-.408.642-.933.642-1.516 0-.584-.233-1.109-.642-1.517ZM10.684 2.342l2.975 2.975M2.458 10.508l2.976 2.975"
      stroke="#aaaaac"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SvgComponent
