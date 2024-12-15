import * as React from 'react';

function Favorites(props) {
  return (
    <svg width={24} height={20} fill="none" {...props}>
      <path
        d="M12.004 18.876l-8.79-9.167a5.187 5.187 0 01-.973-6.004 5.206 5.206 0 018.332-1.347l1.44 1.438 1.44-1.439a5.206 5.206 0 018.332 1.348c.999 1.998.605 4.418-.972 6.004l-8.81 9.167z"
        stroke={props.color ?? '#1C1B20'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoFavorites = React.memo(Favorites);
export default MemoFavorites;
