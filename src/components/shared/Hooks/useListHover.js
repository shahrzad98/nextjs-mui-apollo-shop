import { useState } from 'react';

export default function useListHover({ count }) {
  const [hovers, setHovers] = useState([...new Array(count)].fill(false));

  const handleMouseEnter = idx => () => {
    let clone = [...new Array(6)].fill(false);
    clone[idx] = true;
    setHovers(clone);
  };

  const handleMouseLeave = () => () => {
    setHovers([...new Array(6)].fill(false));
  };

  return {
    hovers,
    handleMouseEnter,
    handleMouseLeave
  };
}
