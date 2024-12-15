import * as React from 'react';

const CategorySVG = props => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M.75 14.5c0-.55.45-1 1-1H9.5c.55 0 1 .45 1 1v7.75c0 .55-.45 1-1 1H1.75c-.55 0-1-.45-1-1V14.5ZM.75 1.75c0-.55.45-1 1-1H9.5c.55 0 1 .45 1 1V9.5c0 .55-.45 1-1 1H1.75c-.55 0-1-.45-1-1V1.75ZM13.5 1.75c0-.55.45-1 1-1h7.75c.55 0 1 .45 1 1V9.5c0 .55-.45 1-1 1H14.5c-.55 0-1-.45-1-1V1.75ZM13.5 14.5c0-.55.45-1 1-1h7.75c.55 0 1 .45 1 1v7.75c0 .55-.45 1-1 1H14.5c-.55 0-1-.45-1-1V14.5Z"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CategorySVG;
