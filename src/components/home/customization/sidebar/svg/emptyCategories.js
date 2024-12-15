import React from 'react';

const EmptyCategories = ({ size, color = '#000' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 37 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 3.33335C1 2.04223 2.04223 1 3.33335 1H12.6667C13.9579 1 15.0001 2.04223 15.0001 3.33335V12.6667C15.0001 13.9579 13.9579 15.0001 12.6667 15.0001H3.33335C2.04223 15.0001 1 13.9579 1 12.6667V3.33335Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 24.3331C1 23.042 2.04223 21.9998 3.33335 21.9998H12.6667C13.9579 21.9998 15.0001 23.042 15.0001 24.3331V33.6665C15.0001 34.9576 13.9579 35.9999 12.6667 35.9999H3.33335C2.04223 35.9999 1 34.9576 1 33.6665V24.3331Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 3.33335C22 2.04223 23.0422 1 24.3333 1H33.6667C34.9579 1 36.0001 2.04223 36.0001 3.33335V12.6667C36.0001 13.9579 34.9579 15.0001 33.6667 15.0001H24.3333C23.0422 15.0001 22 13.9579 22 12.6667V3.33335Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 24.3331C22 23.042 23.0422 21.9998 24.3333 21.9998H33.6667C34.9579 21.9998 36.0001 23.042 36.0001 24.3331V33.6665C36.0001 34.9576 34.9579 35.9999 33.6667 35.9999H24.3333C23.0422 35.9999 22 34.9576 22 33.6665V24.3331Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default EmptyCategories;
