import { Grid, Typography, Link as MuiLink } from '@mui/material';
import { useCustomization, staticLinks } from '@digify/theme-kit';
import Link from 'next/link';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';

function LinkColumn({ name, items }) {
  const isMobile = useIsMobile();

  return (
    <Grid container flexDirection="column" height="auto">
      {items?.some(item => item?.isShow) && (
        <Grid item>
          <Typography
            p={isMobile ? '64px 0px  24px' : 'none'}
            textAlign={isMobile ? 'center' : 'unset'}
            variant="body1"
            color="#1C1B20"
            mb={isMobile ? 0 : '10px'}
            component="h4"
          >
            {name}
          </Typography>
        </Grid>
      )}
      {items.map(({ title, link, isShow }, i) => {
        return (
          isShow && (
            <Grid key={title} item>
              <Link href={link?.href || link} passHref>
                <MuiLink
                  sx={{
                    textDecoration: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    ...(isMobile && {
                      borderBottom: '1px solid rgba(28, 27, 32, 0.1)',
                      borderTop: !i ? '1px solid rgba(28, 27, 32, 0.1)' : 'none'
                    })
                  }}
                >
                  <Typography
                    py={isMobile ? '16px' : '5px'}
                    textAlign="left"
                    color="#1C1B20B2"
                    variant="body2"
                  >
                    {title}
                  </Typography>
                  {isMobile && <ArrowBackIosNewIcon fontSize="inherit" />}
                </MuiLink>
              </Link>
            </Grid>
          )
        );
      })}
    </Grid>
  );
}

export default function Links() {
  const isMobile = useIsMobile();

  const {
    data: {
      footer: { information }
    }
  } = useCustomization('footer');

  const items = {
    'اطلاعات فروشگاه': [
      {
        title: 'درباره ما',
        link: staticLinks?.aboutUs,
        isShow: true
      },
      {
        title: 'تماس با ما',
        link: staticLinks?.contactUs,
        isShow: information.value.includes('CALL_WE')
      }
      // {
      //   title: 'به دیجیفای بپیوندید',
      //   link: links?.digifyLink,
      //   isShow: true
      // }
    ],
    'خدمات مشتریان': [
      {
        title: 'شرایط بازگشت کالا',
        link: staticLinks?.returnConditions,
        isShow: information.value.includes('RETURN_CONDITIONS')
      }
    ]
  };

  return (
    <Grid
      container
      flexDirection={isMobile ? 'column' : 'row'}
      justifyContent="space-between"
    >
      {Object.entries(items).map(([title, value]) => (
        <Grid key={title}>
          <LinkColumn name={title} items={value} />
        </Grid>
      ))}
    </Grid>
  );
}
