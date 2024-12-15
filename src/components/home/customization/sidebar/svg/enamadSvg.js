import React from 'react';

const EnamadSvg = ({ color, ...props }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.559 7.24283L13.8424 9.94701H16.024C16.2715 9.94701 16.4915 10.0845 16.5832 10.3137C16.6748 10.5429 16.629 10.7995 16.4549 10.9737L14.4474 12.7612L15.5565 15.3095C15.6574 15.5478 15.5932 15.8228 15.4007 15.997C15.2082 16.1712 14.924 16.1987 14.6949 16.0612L12.0182 14.5579L9.34152 16.0612C9.12152 16.1895 8.83736 16.162 8.6357 15.997C8.4432 15.8228 8.37902 15.5478 8.47985 15.3095L9.58904 12.7612L7.59068 10.9737C7.41652 10.7995 7.36153 10.5429 7.46237 10.3137C7.55403 10.0845 7.78319 9.94701 8.02152 9.94701H10.2032L11.4865 7.24283C11.5874 7.04116 11.7982 6.91284 12.0274 6.91284C12.2474 6.91284 12.4582 7.04116 12.559 7.24283Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22.3309 12.0092C22.3309 10.5058 21.3592 9.18583 19.9292 8.72749C20.6167 7.39833 20.3692 5.77582 19.3058 4.71249C18.2425 3.64916 16.62 3.40166 15.2909 4.08916C14.8417 2.65916 13.5125 1.6875 12.0092 1.6875C10.5058 1.6875 9.18586 2.65916 8.72752 4.08916C7.39836 3.40166 5.77585 3.64916 4.71252 4.71249C3.64918 5.77582 3.40169 7.39833 4.08919 8.72749C2.65919 9.17666 1.6875 10.5058 1.6875 12.0092C1.6875 13.5125 2.65919 14.8325 4.08919 15.2909C3.40169 16.62 3.64918 18.2425 4.71252 19.3059C5.77585 20.3692 7.39836 20.6167 8.72752 19.9292C9.17669 21.3592 10.5058 22.3309 12.0092 22.3309C13.5125 22.3309 14.8325 21.3592 15.2909 19.9292C16.62 20.6167 18.2425 20.3692 19.3058 19.3059C20.3692 18.2425 20.6167 16.62 19.9292 15.2909C21.3592 14.8325 22.3309 13.5033 22.3309 12.0092Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default EnamadSvg;
