import styled from '@emotion/styled';
import { Box, Grid } from '@mui/material';
import Title from 'src/components/shared/CustomizeTitle';
import CustomRadio from 'src/components/shared/CustomRadio';

const CONTENT_ALIGN = [
  {
    id: 1,
    title: 'راست چین',
    value: 'rtl',
    image: '/images/rtl-content-preview.png'
  },
  {
    id: 2,
    title: 'وسط چین',
    value: 'center',
    image: '/images/center-content-preview.png'
  },
  {
    id: 3,
    title: 'چپ چین',
    value: 'ltr',
    image: '/images/ltr-content-preview.png'
  }
];

const Span = styled('span')`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #51575c;
`;

const ContentAlign = ({ align, handleChange }) => {
  return (
    <>
      <Title title="موقعیت نمایش محتوا روی بنر" />
      <Box
        bgcolor={'#F3F3F3'}
        py="16px"
        px="16px"
        borderRadius={'10px'}
        width="100%"
      >
        {CONTENT_ALIGN.map(({ id, title, value, image }) => (
          <Grid
            key={id}
            container
            justifyContent={'space-between'}
            alignItems="center"
            my={'16px'}
          >
            <Box>
              <CustomRadio
                checked={value === align}
                value={value}
                name="align"
                onChange={handleChange}
              />
              <Span>{title}</Span>
            </Box>
            <Box maxWidth={'100px'} width={'calc(100% - 100px)'}>
              <img width={'100%'} src={image} alt={title} />
            </Box>
          </Grid>
        ))}
      </Box>
    </>
  );
};

export default ContentAlign;
