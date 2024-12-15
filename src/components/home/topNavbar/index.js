import { useCustomization } from '@digify/theme-kit';
import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { isLight } from 'utils/isLight';

const Style = styled(Grid)`
  height: 46px;
  width: 100%;

  p {
    margin: 0;
    text-align: center;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

function validURL(str) {
  let pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i'
  ); // fragment locator
  return !!pattern.test(str);
}

const TopNavBar = () => {
  const {
    data: { adBar }
  } = useCustomization('adBar');
  const [defaultImg, setDefaultImg] = useState(false);

  useEffect(() => {
    if (adBar.content.value && adBar.mode.value === 'image') {
      setDefaultImg(false);
    }
  }, [adBar.content.value, adBar.mode.value]);

  if (adBar.isShow.value) {
    return (
      <a
        id="top_navbar_scroll"
        target="_blank"
        onClick={e => {
          if (!validURL(adBar.href.value)) {
            e.preventDefault();
          }
        }}
        rel="noreferrer"
        style={{
          color: 'inherit',
          textDecoration: 'none',
          width: '100%',
          background: adBar.color.value
        }}
        href={validURL(adBar.href.value) ? `https://${adBar.href.value}` : '#'}
      >
        <Style
          justifyContent="center"
          alignItems="center"
          container
          margin={'0 auto'}
        >
          {adBar.mode.value === 'text' ? (
            <p style={{ color: isLight(adBar.color.value) ? '#000' : '#FFF' }}>
              {adBar.content.value}
            </p>
          ) : adBar.mode.value === 'image' && defaultImg ? (
            <p style={{ color: isLight(adBar.color.value) ? '#000' : '#FFF' }}>
              محل تصویر شما
            </p>
          ) : adBar.mode.value === 'image' && !defaultImg ? (
            <img
              onError={() => setDefaultImg(true)}
              alt="navbar_img"
              src={adBar.content.value}
            />
          ) : null}
        </Style>
      </a>
    );
  } else return <></>;
};

export default TopNavBar;
