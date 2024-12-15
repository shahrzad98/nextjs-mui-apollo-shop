import * as React from 'react';

function Cart(props) {
  return (
    <svg width={22} height={24} fill="none" {...props}>
      <path
        d="M8.287 22.316H2.292c-.394 0-.77-.174-1.035-.467a1.373 1.373 0 01-.33-1.082L2.632 7.704c.091-.687.669-1.2 1.365-1.2h1.027c.688 0 1.274.513 1.366 1.2l1.897 14.612zM13.1 6.504h4.977c.688 0 1.274.513 1.366 1.2l1.705 13.063c.055.394-.073.788-.33 1.082a1.405 1.405 0 01-1.036.467H8.287M5.014 6.504h6.022"
        stroke="#1C1B20"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.537 10.63V4.442c0-.98-.522-1.888-1.375-2.383a2.732 2.732 0 00-2.75 0 2.756 2.756 0 00-1.375 2.383v6.188M8.828 2.15A2.756 2.756 0 007.6 4.44v2.063"
        stroke="#1C1B20"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Cart;
