import styled from '@emotion/styled';
import { Box, Button, Grid, IconButton } from '@mui/material';
import Title from 'src/components/shared/CustomizeTitle';
import AddIcon from '@mui/icons-material/Add';
import BinSVG from 'public/static/assets/svg/shared/Bin';

const Span = styled('span')`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  color: #101820;
  margin-left: 12px;
  width: 40px;
`;

const ImageBox = styled(Box)`
  background: #ffffff;
  border: 0.5px solid #dad6e9;
  border-radius: 4px;
  padding: 4px;
`;

const CustomBtn = styled(Button)`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  background-color: #ffffff;
  color: #9185be;
  width: 100%;
  padding: 27.5px;
  border: 1px dashed #9185be;
  border-radius: 10px;
`;

const EditBanner = ({ handleSetIsNewBanner, banners, openEditMode }) => {
  return (
    <>
      <Title title="ویرایش بنرها" />
      {banners?.value
        ?.filter(item => item?.id)
        ?.map((item, i) => (
          <Grid
            key={i}
            container
            justifyContent={'space-between'}
            alignItems="center"
            sx={{
              backgroundColor: '#F3F3F3',
              borderRadius: '10px',
              marginY: '8px',
              padding: '12px'
            }}
          >
            <Grid
              item
              container
              alignItems={'center'}
              xs={9}
              sx={{ cursor: 'pointer' }}
              onClick={() => openEditMode(item, banners?.handleChange)}
            >
              <ImageBox
                width={'calc(100% - 80px)'}
                maxWidth={'90px'}
                height={'50px'}
              >
                <img
                  src={item?.image}
                  alt="عکس بنر"
                  width={'100%'}
                  height={'100%'}
                />
              </ImageBox>
              <Span>بنر {i + 1}</Span>
            </Grid>
            <Box width={'40px'}>
              <IconButton onClick={() => banners?.handleDeleteItem(item?.id)}>
                <BinSVG />
              </IconButton>
            </Box>
          </Grid>
        ))}
      <CustomBtn
        onClick={handleSetIsNewBanner}
        startIcon={<AddIcon />}
        sx={{ marginTop: '16px' }}
      >
        افزودن بنر جدید
      </CustomBtn>
    </>
  );
};

export default EditBanner;
