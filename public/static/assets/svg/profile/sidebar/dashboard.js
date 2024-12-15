import React from 'react';

const DashboardSVG = props => {
  return (
    <svg
      {...props}
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect width="36" height="36" rx="4" fill={props.bgcolor} />
      <path
        d="M27.334 18.625V13H21.709"
        stroke={props.color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27.334 13L20.7173 19.6166C20.484 19.85 20.1673 19.9832 19.834 19.9832C19.5007 19.9832 19.184 19.85 18.9507 19.6166L16.3423 17.0084C16.109 16.775 15.7923 16.6418 15.459 16.6418C15.1257 16.6418 14.809 16.775 14.5757 17.0084L8.58398 23"
        stroke={props.color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DashboardSVG;
