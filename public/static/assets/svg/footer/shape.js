import * as React from 'react';

const SvgComponent = props => (
  <svg
    width={16}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m10.028 15.034.006.006a3.69 3.69 0 0 0 4.587-.5l.513-.513c.48-.48.48-1.26 0-1.74l-2.173-2.173c-.48-.48-1.26-.48-1.74 0-.233.233-.54.36-.867.36-.326 0-.64-.127-.866-.36l-3.48-3.48c-.48-.48-.48-1.26 0-1.74.233-.234.36-.54.36-.867 0-.327-.127-.64-.36-.867L3.834.987c-.48-.48-1.26-.48-1.74 0l-.513.513a3.692 3.692 0 0 0-.507 4.587l.007.007a33.376 33.376 0 0 0 8.947 8.94Z"
      stroke="#1C1B20"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgComponent;
