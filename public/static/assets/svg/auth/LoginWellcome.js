import * as React from 'react';

const SvgComponent = ({ height = 294, ...props }) => (
  <svg
    width={358}
    height={!props.ismobileverysmall ? height : '170px'}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      width={64}
      height={64}
      rx={2}
      transform="scale(-1 1) rotate(22.835 -206.216 -612.803)"
      fill="#171C22"
    />
    <rect
      width={60.493}
      height={60.493}
      rx={2}
      transform="scale(-1 1) rotate(52.916 -281.764 -284.064)"
      fill="#171C22"
    />
    <rect
      width={45.562}
      height={45.562}
      rx={2}
      transform="scale(-1 1) rotate(45 -74.981 -290.275)"
      fill="#171C22"
    />
    <rect
      width={23.92}
      height={23.828}
      rx={2}
      transform="scale(-1 1) rotate(75 -211.773 -127.576)"
      fill="#171C22"
    />
    <rect
      width={19.521}
      height={19.622}
      rx={2}
      transform="scale(-1 1) rotate(75 -277.562 -81.093)"
      fill="#171C22"
    />
    <rect
      width={75.879}
      height={75.879}
      rx={2}
      transform="scale(-1 1) rotate(61.805 -145.554 -279.195)"
      fill="#171C22"
    />
    <rect
      width={30.905}
      height={30.905}
      rx={2}
      transform="scale(-1 1) rotate(67.226 -65.486 -95.252)"
      fill="#171C22"
    />
    <rect
      width={17.384}
      height={17.384}
      rx={2}
      transform="scale(-1 1) rotate(26.915 -80.04 -149.847)"
      fill="#171C22"
    />
    <rect
      width={17.384}
      height={17.384}
      rx={2}
      transform="scale(-1 1) rotate(-29.905 -37.732 107.367)"
      fill="#171C22"
    />
    <rect
      width={17.384}
      height={17.384}
      rx={2}
      transform="scale(-1 1) rotate(-7.402 442.991 1219.94)"
      fill="#171C22"
    />
    <rect
      width={11.464}
      height={11.464}
      rx={2}
      transform="scale(-1 1) rotate(-82.596 2.325 14.996)"
      fill="#171C22"
    />
    <rect
      width={11.464}
      height={11.464}
      rx={2}
      transform="scale(-1 1) rotate(-82.596 -34.126 322.81)"
      fill="#171C22"
    />
    <rect
      width={8.802}
      height={8.802}
      rx={2}
      transform="scale(-1 1) rotate(-48.748 143.501 531.56)"
      fill="#171C22"
    />
    <rect
      width={11.464}
      height={11.464}
      rx={2}
      transform="scale(-1 1) rotate(-39.613 94.377 440.422)"
      fill="#171C22"
    />
  </svg>
);

export default SvgComponent;
