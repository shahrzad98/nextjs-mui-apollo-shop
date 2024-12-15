import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Grid, Link } from '@mui/material';
import { useCustomization, useStoreInfo } from '@digify/theme-kit';
import { SOCIAL_MEDIAS } from 'constant/socialMedia';
import { checkSocialLinks } from 'utils/checkSocialLinks';

export default function SocialLinks() {
  const {
    data: { footer }
  } = useCustomization('footer');

  const { social_media: socialLinks } = useStoreInfo();

  const socialList = [
    {
      name: 'instagram',
      icon: <InstagramIcon key={1} />,
      href: checkSocialLinks(SOCIAL_MEDIAS.INSTAGRAM, socialLinks.instagram),
      isShow: footer.instagramIsShow.value
    },
    {
      name: 'telegram',
      icon: <TelegramIcon key={2} />,
      href: checkSocialLinks(SOCIAL_MEDIAS.TELEGRAM, socialLinks.telegram),
      isShow: footer.telegramIsShow.value
    },
    {
      name: 'whatsapp',
      icon: <WhatsAppIcon key={2} />,
      href: checkSocialLinks(SOCIAL_MEDIAS.WHATSAPP, socialLinks.whatsapp),
      isShow: footer.whatsappIsShow.value
    },
    {
      name: 'linkedin',
      icon: <LinkedInIcon key={2} />,
      href: checkSocialLinks(SOCIAL_MEDIAS.LINKEDIN, socialLinks.linkedin),
      isShow: footer.linkedinIsShow.value
    },
    {
      name: 'twitter',
      icon: <TwitterIcon key={2} />,
      href: checkSocialLinks(SOCIAL_MEDIAS.TWITTER, socialLinks.twitter),
      isShow: footer.twitterIsShow.value
    },
    {
      name: 'facebook',
      icon: <FacebookIcon key={2} />,
      href: checkSocialLinks(SOCIAL_MEDIAS.FACEBOOK, socialLinks.facebook),
      isShow: footer.facebookIsShow.value
    }
  ];

  return (
    <Grid
      container
      justifyContent="space-evenly"
      width={{ xs: '80%', lg: '100%' }}
      margin="auto"
      my={4}
    >
      {socialList.map(
        item =>
          item.isShow && (
            <Grid item key={item.name}>
              <Link
                sx={{ color: '#1C1B20B2' }}
                href={item.href}
                rel="noreferrer"
                target="_blank"
              >
                {item.icon}
              </Link>
            </Grid>
          )
      )}
    </Grid>
  );
}
