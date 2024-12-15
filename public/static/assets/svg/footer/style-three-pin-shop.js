import * as React from 'react';

const SvgComponent = props => (
  <svg
    width={14}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7 .627a6 6 0 0 1 6 6c0 5.267-4.62 8.22-5.753 8.867a.5.5 0 0 1-.494 0C5.62 14.847 1 11.894 1 6.627a6 6 0 0 1 6-6Z"
      stroke="#1C1B20"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.5 6.627h5v3.5h-5v-3.5ZM4.84 4.127a.502.502 0 0 0-.467.313l-.6 1.5a.507.507 0 0 0 .054.467c.093.14.246.22.413.22h5.52c.167 0 .32-.08.413-.22a.507.507 0 0 0 .054-.467l-.6-1.5a.492.492 0 0 0-.467-.313H4.84ZM7 8.627v1.5"
      stroke="#1C1B20"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgComponent;
