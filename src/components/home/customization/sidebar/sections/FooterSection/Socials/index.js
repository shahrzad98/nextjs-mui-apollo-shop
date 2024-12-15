import React from 'react';
import Items from './Items';
import Title from 'src/components/shared/CustomizeTitle';
import styled from '@emotion/styled';
import { Box, Grid } from '@mui/material';
import { useCustomization } from '@digify/theme-kit';

const Style = styled(Grid)`
  .switch_cont {
    .MuiButtonBase-root {
      height: auto !important;
      min-height: auto !important;
    }
  }
  .text_navbar_input {
    border: none;
    outline: none;
    border-radius: 10px;
    padding: 8px 16px;
    width: 100%;
    position: relative;
    background-color: #fff;
    & input::placeholder {
      font-size: 10px;
      overflow: visible;
    }
    &:focus-within {
      outline: 0.5px solid #6d5da9;
    }
    &:hover {
      outline: 0.5px solid #6d5da9;
    }
    .MuiInput-root {
      height: 100%;
    }
    .MuiButtonBase-root {
      height: auto !important;
      min-height: auto !important;
    }
  }
`;
const Span = styled('span')`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin-top: 12px;
  margin-bottom: 12px;
`;
export default function Socials() {
  const {
    data: { footer }
  } = useCustomization('footer');
  const SocialList = [
    {
      isShow: footer.instagramIsShow.value,
      setShow: footer.instagramIsShow.handleChangeBoolean,
      message: footer.instagramHref.value,
      setMessage: footer.instagramHref.handleChangeString,
      title: 'اینستاگرام',
      defaultUrl: 'http.instagram.com'
    },
    {
      isShow: footer.telegramIsShow.value,
      setShow: footer.telegramIsShow.handleChangeBoolean,
      message: footer.telegramHref.value,
      setMessage: footer.telegramHref.handleChangeString,
      title: 'تلگرام',
      defaultUrl: 'http.telegram.com'
    },
    {
      isShow: footer.whatsappIsShow.value,
      setShow: footer.whatsappIsShow.handleChangeBoolean,
      message: footer.whatsappHref.value,
      setMessage: footer.whatsappHref.handleChangeString,
      title: 'واتساپ',
      defaultUrl: 'http.watsapp.com'
    },
    {
      isShow: footer.linkedinIsShow.value,
      setShow: footer.linkedinIsShow.handleChangeBoolean,
      message: footer.linkedinHref.value,
      setMessage: footer.linkedinHref.handleChangeString,
      title: 'لینکدین',
      defaultUrl: 'http.linkdin.com'
    },
    {
      isShow: footer.twitterIsShow.value,
      setShow: footer.twitterIsShow.handleChangeBoolean,
      message: footer.twitterHref.value,
      setMessage: footer.twitterHref.handleChangeString,
      title: 'توییتر',
      defaultUrl: 'http.twitter.com'
    },
    {
      isShow: footer.facebookIsShow.value,
      setShow: footer.facebookIsShow.handleChangeBoolean,
      message: footer.facebookHref.value,
      setMessage: footer.facebookHref.handleChangeString,
      title: 'فیسبوک',
      defaultUrl: 'http.facebook.com'
    }
  ];

  return (
    <Style container>
      <Box width={'100%'}>
        <Title
          title="
           شبکه های اجتماعی
                "
        />
        <Span>مواردیکه می خواهید در فوتر نمایش داده شود را فعال کنید</Span>
        {SocialList.map((ele, index) => (
          <Items data={ele} key={index} />
        ))}
      </Box>
    </Style>
  );
}
