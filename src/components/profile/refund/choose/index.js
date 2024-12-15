import React from 'react';
import Mobile from './prodcuts/mobile';
import Products from './prodcuts';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';

export default function ChooseProdcut(props) {
  const isDesktop = !useIsMobile();

  return (
    <>
      <>{isDesktop ? <Products {...props} /> : <Mobile {...props} />}</>
    </>
  );
}
