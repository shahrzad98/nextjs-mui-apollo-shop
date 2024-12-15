import React from 'react';
import { NeshanMap } from '@digify/neshan';
import { getAddressNeshan } from './api';

function SimpleMap({
  latLng = ['35.700240761628834', '51.3374561782251'],
  handerSetDataForm,
  config = {
    key: 'web.vLwZBntMU0p6xDsZ5audA1pOFG8S5oNlM4j1qmAC',
    maptype: 'dreamy-gold',
    poi: true,
    traffic: false,
    center: latLng,
    zoom: 13
  },
  style = {
    width: '100%',
    height: '100%'
  }
}) {
  return (
    <NeshanMap
      style={{ ...style }}
      options={{
        ...config
      }}
      onInit={async (L, myMap) => {
        let marker = L.marker(latLng).addTo(myMap);
        myMap.on('click', async function (e) {
          marker.setLatLng(e.latlng);
          getAddressNeshan(e.latlng.lat, e.latlng.lng).then(res => {
            handerSetDataForm(e, res);

            // setData(prevState => ({
            //   ...prevState,
            //   ...res,
            //   trem: res.formatted_address,
            //   chooseAddress: {
            //     location: {
            //       x: e.latlng.lng,
            //       y: e.latlng.lat
            //     }
            //   }
            // }));
          });
        });
      }}
    />
  );
}

export default SimpleMap;
