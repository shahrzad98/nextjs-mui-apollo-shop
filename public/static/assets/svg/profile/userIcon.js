import React from 'react';

const userIcon = props => {
  return (
    <svg
      {...props}
      width="28"
      height="32"
      viewBox="0 0 28 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14 15C17.8667 15 21 11.8667 21 8C21 4.13333 17.8667 1 14 1C10.1333 1 7 4.13333 7 8C7 11.8667 10.1333 15 14 15Z"
        stroke="#AFB1B7"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 31C1 23.8267 6.82667 18 14 18C21.1733 18 27 23.8267 27 31"
        stroke="#AFB1B7"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default userIcon;
