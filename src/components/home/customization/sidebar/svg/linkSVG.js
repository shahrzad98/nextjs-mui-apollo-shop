import * as React from 'react';

const LinkSVG = props => (
  <svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m17 7.538-7.805 8.017a4.707 4.707 0 0 1-6.788 0c-1.876-1.928-1.876-5.045 0-6.973L8.82 2.004a3.148 3.148 0 0 1 3.113-.898 3.24 3.24 0 0 1 2.282 2.344 3.355 3.355 0 0 1-.875 3.197l-6.404 6.586a1.566 1.566 0 0 1-2.239-.022 1.671 1.671 0 0 1-.021-2.3l6.411-6.585"
      stroke="#6D5DA9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default LinkSVG;
