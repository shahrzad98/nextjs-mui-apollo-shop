import React, { Fragment, useMemo } from 'react';
import { useStoreInfo } from '@digify/theme-kit';
import { Box, Grid, Typography, Link as MuiLink, Divider } from '@mui/material';
import { SOCIAL_MEDIAS } from 'constant/socialMedia';
import { checkSocialLinks } from 'utils/checkSocialLinks';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';
import BackLink from 'src/components/shared/BackLink';

const ContactUs = () => {
  const isDesktop = !useIsMobile();
  const { telephone_number, name, store_address, social_media } =
    useStoreInfo();

  const socialMediaVar = useMemo(
    () => [
      {
        name: 'اینستاگرام',
        link: checkSocialLinks(SOCIAL_MEDIAS.INSTAGRAM, social_media.instagram),
        icon: 'icon-Instagram',
        socialMediaData: social_media.instagram
      },
      {
        name: 'تلگرام',
        link: checkSocialLinks(SOCIAL_MEDIAS.TELEGRAM, social_media.telegram),
        icon: 'icon-Telegram',
        socialMediaData: social_media.telegram
      },
      {
        name: 'واتس آپ',
        link: checkSocialLinks(SOCIAL_MEDIAS.WHATSAPP, social_media.whatsapp),
        icon: 'icon-WhatsApp',
        socialMediaData: social_media.whatsapp
      },
      {
        name: 'لینکدین',
        link: checkSocialLinks(SOCIAL_MEDIAS.LINKEDIN, social_media.linkedin),
        icon: 'icon-LinkedIn',
        socialMediaData: social_media.linkedin
      },
      {
        name: 'توییتر',
        link: checkSocialLinks(SOCIAL_MEDIAS.TWITTER, social_media.twitter),
        icon: 'icon-Twitter',
        socialMediaData: social_media.twitter
      },
      {
        name: 'فیسبوک',
        link: checkSocialLinks(SOCIAL_MEDIAS.FACEBOOK, social_media.facebook),
        icon: 'icon-Facebook',
        socialMediaData: social_media.facebook
      }
    ],
    [social_media]
  );

  const newSocialMedia = useMemo(
    () => socialMediaVar.filter(social => social.socialMediaData != ''),
    [socialMediaVar]
  );

  const telephoneNumberFormatted = useMemo(
    () =>
      telephone_number &&
      telephone_number
        .replace('+98', '0')
        .substring(0, 3)
        .concat('-')
        .concat(telephone_number?.replace('+98', '0').substring(3)),
    [telephone_number]
  );

  return (
    <Grid container flexDirection="column" alignItems="center" px={2}>
      {!isDesktop && <BackLink title="تماس با ما" />}
      <Grid
        container
        flexDirection={'column'}
        flexWrap="nowrap"
        alignItems={'center'}
        mt={isDesktop ? 8 : 4}
      >
        <Typography
          textAlign={'center'}
          variant="subtitle1"
          mb={isDesktop ? 4 : 3}
        >
          ارتباط با {name}
        </Typography>
        <Box
          display={'flex'}
          maxWidth={804}
          width={'1'}
          flexDirection={isDesktop ? 'row' : 'column'}
          border={'1px solid rgba(28, 27, 32, 0.1)'}
          minHeight={84}
        >
          <Grid
            display={'flex'}
            alignItems={'center'}
            p={1.5}
            gap={2}
            color="#1C1B20"
            fontSize="1.6rem"
          >
            <i className="icon-phone-mobile-device" />
            <Typography noWrap variant="body1" color="inherit">
              {telephoneNumberFormatted}
            </Typography>
          </Grid>
          <Grid sx={{ [isDesktop ? 'py' : 'px']: 1.5 }}>
            <Divider
              orientation={isDesktop ? 'vertical' : 'horizontal'}
              sx={{ borderColor: '#1C1B201A' }}
            />
          </Grid>
          <Grid
            display={'flex'}
            alignItems={'center'}
            p={1.5}
            gap={2}
            color="#1C1B20"
            fontSize="1.6rem"
          >
            <i className="icon-maps-navigation-location-pin" />
            <Typography variant="body1" color="inherit">
              {store_address.address}
            </Typography>
          </Grid>
        </Box>
        {!!newSocialMedia?.length && (
          <>
            <Typography
              textAlign={'center'}
              variant="subtitle1"
              mb={isDesktop ? 4 : 3}
              mt={12}
            >
              شبکه های اجتماعی {name}
            </Typography>
            <Box
              maxWidth={804}
              width={'1'}
              border={'1px solid rgba(28, 27, 32, 0.1)'}
              display={'flex'}
              flexWrap="wrap"
              alignItems={'center'}
              justifyContent="space-evenly"
              minHeight={50}
              p={1.5}
            >
              {newSocialMedia.map((social, index) => (
                <Fragment key={social.name}>
                  <MuiLink
                    key={index}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 2,
                      alignItems: 'center',
                      textDecoration: 'none',
                      justifyContent: 'center',
                      minHeight: 92,
                      mb: !isDesktop && newSocialMedia.length > 3 ? 5 : 0,
                      width: isDesktop ? 'auto' : '33%'
                    }}
                    target={'_blank'}
                    href={`${social.link}`}
                    rel="noreferrer"
                  >
                    <Grid
                      display={'flex'}
                      justifyContent={'center'}
                      color="#1C1B20"
                      fontSize="1.7rem"
                    >
                      <i className={`${social.icon}`} />
                    </Grid>
                    <Typography
                      textAlign={'center'}
                      color="#1C1B20"
                      variant="body1"
                    >
                      {social.name}
                    </Typography>
                  </MuiLink>
                  {isDesktop && index + 1 < newSocialMedia?.length && (
                    <Divider orientation="vertical" flexItem />
                  )}
                </Fragment>
              ))}
            </Box>
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default ContactUs;
