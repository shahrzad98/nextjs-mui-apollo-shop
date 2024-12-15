import * as React from 'react';

function Profile(props) {
  return (
    <svg width={22} height={22} fill="none" {...props}>
      <path
        d="M10 11.313a4.812 4.812 0 100-9.626 4.812 4.812 0 100 9.626zM1.063 22.313c0-4.932 4.005-8.938 8.937-8.938 4.932 0 8.938 4.006 8.938 8.938"
        stroke="#1C1B20"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Profile;
