import { useEffect, useRef } from 'react';

const useDidUpdateEffect = (effect, deps = []) => {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (didMountRef.current) return effect();
    else didMountRef.current = true;
  }, deps);
};

export default useDidUpdateEffect;
