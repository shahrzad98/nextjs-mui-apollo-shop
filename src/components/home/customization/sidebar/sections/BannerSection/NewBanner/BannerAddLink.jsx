import styled from '@emotion/styled';
import { Grid, TextField } from '@mui/material';
import Title from 'src/components/shared/CustomizeTitle';
import LinkSVG from '../../../svg/linkSVG';

const Description = styled('p')`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #51575c;
`;

const BannerAddLink = ({ link, handleChange }) => {
  return (
    <>
      <Title title="لینک کردن بنر" />
      <Grid container>
        <Description>
          آدرس صفحه ای از سایت خود را که می خواهید به بنر متصل شود وارد کنید.
        </Description>
      </Grid>
      <Grid
        container
        mt={3}
        alignItems="center"
        bgcolor={'#F3F3F3'}
        p={'8px'}
        borderRadius="10px"
      >
        <Grid item xs={10}>
          <TextField
            dir="ltr"
            variant="standard"
            value={link}
            name="link"
            onChange={handleChange}
            fullWidth
            sx={{
              '& input': {
                direction: 'rtl'
              }
            }}
            InputProps={{
              disableUnderline: true,
              style: {
                backgroundColor: '#fff',
                borderRadius: '10px',
                padding: '10px'
              }
            }}
            placeholder="https://domain/..."
            type="url"
          />
        </Grid>
        <Grid item container justifyContent={'center'} xs={2}>
          <LinkSVG />
        </Grid>
      </Grid>
    </>
  );
};

export default BannerAddLink;
