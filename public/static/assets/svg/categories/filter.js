import * as React from 'react';

const FilterSVG = ({ color = '#1C1B20', isDesktop }) => (
  <svg
    width={24}
    height={24}
    fill="none"
    opacity={isDesktop ? 0.4 : 0.7}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M.75 2.25c0-.8.7-1.5 1.5-1.5h19.5c.8 0 1.5.7 1.5 1.5v19.5c0 .8-.7 1.5-1.5 1.5H2.25c-.8 0-1.5-.7-1.5-1.5V2.25v0ZM12.75 15.749h6M5.248 15.749h3"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.752 15.752c0 1.2-1 2.2-2.2 2.3-1.2.1-2.3-1-2.3-2.2 0-1.2 1-2.3 2.2-2.3.6 0 1.2.2 1.6.7.4.3.7.9.7 1.5ZM14.248 8.251h-9M18.748 8.249c0-1.2-1-2.2-2.2-2.3-1.2-.1-2.3 1-2.3 2.2 0 1.2 1 2.3 2.2 2.3 1.2 0 2.2-1 2.3-2.2Z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default FilterSVG;
