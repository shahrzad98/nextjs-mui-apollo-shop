import { useCustomization } from '@digify/theme-kit';
import { Button, Grid, Typography } from '@mui/material';
import { CustomTextContent, RootContent } from './styled';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';

function Content({ data }) {
  const isDesktop = !useIsMobile();
  const {
    data: { colors }
  } = useCustomization('colors');

  if (!data) return null;

  return (
    <RootContent
      container
      // spacing={isDesktop ? 6 : 4}
      direction="column"
      justifyContent="center"
      colorMode={colors?.style?.value}
      contentAlign={data?.align}
    >
      <Grid item>
        {!!data?.isShowHeading && (
          <CustomTextContent
            variant={isDesktop ? 'h1' : 'h4'}
            component="h2"
            contentAlign={data?.align}
          >
            {data?.headingText}
          </CustomTextContent>
        )}
      </Grid>
      <Grid
        item
        container
        justifyContent={
          data?.align === 'rtl'
            ? 'flex-start'
            : data?.align === 'ltr'
            ? 'flex-end'
            : 'center'
        }
      >
        {!!data?.isShowDescription && (
          <CustomTextContent
            variant={isDesktop ? 'h5' : 'caption'}
            fontWeight={isDesktop ? 'bold' : 500}
            component="h4"
            contentAlign={data?.align}
            maxWidth={'70%'}
          >
            {data?.descriptionText}
          </CustomTextContent>
        )}
      </Grid>
      <Grid item>
        {!!data?.isShowButton && (
          <Button className="btnContent" variant="contained">
            <Typography
              color={colors?.style?.value === 'dark' ? '#fff' : '#000'}
            >
              {data?.buttonText}
            </Typography>
          </Button>
        )}
      </Grid>
    </RootContent>
  );
}

export default Content;
