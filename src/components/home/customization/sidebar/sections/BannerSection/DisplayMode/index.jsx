import styled from '@emotion/styled';
import Title from 'src/components/shared/CustomizeTitle';
import { Box, Grid } from '@mui/material';
import CustomRadio from 'src/components/shared/CustomRadio';
import { useCustomization } from '@digify/theme-kit';
// import Image from 'next/image';

const DISPLAY_MODES = [
  {
    id: 1,
    title: 'تمام صفحه',
    isFull: true,
    image: '/images/banner-style-full.png'
  },
  {
    id: 2,
    title: 'بخشی از صفحه',
    isFull: false,
    image: '/images/banner-style-not-full.png'
  }
];

const Span = styled('span')`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #51575c;
`;

const DisplayMode = () => {
  const {
    data: { banner }
  } = useCustomization('banner');

  return (
    <>
      <Title title="حالت نمایش" />
      {DISPLAY_MODES.map(({ id, title, isFull, image }) => (
        <Box
          key={id}
          p={'16px'}
          my={'12px'}
          bgcolor={'#F3F3F3'}
          width={'100%'}
          borderRadius={'10px'}
        >
          <Grid container alignItems={'center'}>
            <CustomRadio
              value={isFull}
              checked={isFull === banner?.isFullPage?.value}
              onChange={() => banner?.isFullPage?.handleChangeBoolean()}
            />
            <Span>{title}</Span>
          </Grid>
          <Grid container justifyContent={'center'} alignItems={'center'}>
            <img src={image} alt={title} width={'100%'} height={'160px'} />
          </Grid>
        </Box>
      ))}
    </>
  );
};

export default DisplayMode;
