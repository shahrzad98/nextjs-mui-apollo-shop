import React from 'react';
import { NeshanMap } from '@digify/neshan';

function NeshanShowingMap({
  latLng = ['35.700240761628834', '51.3374561782251']
}) {
  return (
    <NeshanMap
      style={{ width: '100%', height: '100%', borderRadius: '8px' }}
      options={{
        key: 'web.vLwZBntMU0p6xDsZ5audA1pOFG8S5oNlM4j1qmAC',
        maptype: 'dreamy-gold',
        poi: true,
        traffic: false,
        center: latLng,
        zoom: 14
      }}
    />
  );
}

export default NeshanShowingMap;
