import styled from '@emotion/styled';
import { Box, Button, Grid, IconButton } from '@mui/material';
import Title from 'src/components/shared/CustomizeTitle';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from 'public/static/assets/svg/shared/Pencil';
// import AddBannerPlaceholderSVG from 'public/static/assets/svg/banner/addBannerPlaceholder';
import { useEffect, useRef, useState } from 'react';
import { useImageUpload } from '@digify/theme-kit';
// import styles from 'styles/upload-progress.module.css';
import CircularPercentProgress from './CircularPercentProgress';
import Close from '@mui/icons-material/Close';
import ImageCropperModal from 'src/components/home/utils/cropper/imageCropperModal';

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

const Subtitle = styled('span')`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
  letter-spacing: -0.011em;
  color: #9185be;
`;

const PLACE_HOLDER = 'images/banner-placeholder.png';

const ImageUpload = ({
  defaultImage,
  image,
  handleChangeImage,
  title = 'بارگذاری عکس',
  disabled = false,
  aspectRatio = 16 / 9
}) => {
  const [error, setError] = useState('');
  const [percent, setPercent] = useState(10);
  const [showCropper, setShowCropper] = useState(false);
  const [lastImage, setLastImage] = useState({});
  const {
    image: uploadedImage,
    loading,
    handleUploadImage,
    reset
  } = useImageUpload();

  const fileInput = useRef();

  const handleUploadCroppedImage = async image => {
    setError('');
    const selectedFile = image.file;

    if (selectedFile?.size > 6000000) {
      setError('حجم عکس انتخابی بیشتر از ۶ مگابایت است.');
    } else {
      const file = new File([selectedFile], selectedFile.name, {
        lastModified: Date.now(),
        type: selectedFile?.type
      });
      await handleUploadImage(file);
    }
  };
  const onDrop = async fileu => {
    const picture = fileu.target.files[0];
    if (picture) {
      const imageFile = picture;
      let file = new File([imageFile], picture?.name, {
        lastModified: Date.now(),
        type: picture.type
      });
      setLastImage({
        file: file,
        url: URL.createObjectURL(file)
      });

      setShowCropper(true);
    }
  };
  useEffect(() => {
    if (!!uploadedImage) handleChangeImage(uploadedImage);
    // if (!uploadedImage) handleChangeImage('');
    // eslint-disable-next-line
  }, [uploadedImage]);

  const handleImage = () => fileInput.current.click();

  useEffect(() => {
    if (loading) {
      const timer = setInterval(() => {
        setPercent(prevPercent => (prevPercent >= 100 ? 0 : prevPercent + 10));
      }, 300);
      return () => {
        clearInterval(timer);
      };
    }
  }, [loading]);

  const handleClear = () => {
    reset();
    if (!!defaultImage) handleChangeImage(defaultImage);
  };

  return (
    <>
      {showCropper && (
        <ImageCropperModal
          close={() => setShowCropper(false)}
          image={lastImage?.url}
          aspect={aspectRatio}
          setImage={handleUploadCroppedImage}
        />
      )}
      <Title title={title} />
      <Grid
        container
        justifyContent={'center'}
        alignItems="center"
        bgcolor={'#F3F3F3'}
        borderRadius="10px"
        p={'16px'}
        mt={'10px'}
      >
        <Grid item xs={12}>
          {!!image || uploadedImage ? (
            <CustomBtn
              disabled={loading || disabled}
              onClick={handleImage}
              startIcon={<EditIcon />}
            >
              تغییر عکس
            </CustomBtn>
          ) : (
            <CustomBtn
              disabled={loading || disabled}
              onClick={handleImage}
              startIcon={<AddIcon />}
            >
              افزودن
            </CustomBtn>
          )}
          {!!error ? (
            <Subtitle color="red">{error}</Subtitle>
          ) : (
            <Subtitle> فرمت عکس JPG یا PNG باشد.</Subtitle>
          )}
          <input
            accept="image/jpg,image/jpeg,image/png,image/webp"
            multiple={false}
            type="file"
            ref={fileInput}
            onChange={onDrop}
            style={{ display: 'none' }}
          />
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            justifyContent={'center'}
            alignItems="center"
            position={'relative'}
            bgcolor={'#FFFFFF'}
            borderRadius="10px"
            width={'100%'}
            sx={{
              aspectRatio: '16/9'
            }}
            mx={'auto'}
            mt={'20px'}
            p={'3px'}
          >
            {loading ? (
              <CircularPercentProgress value={percent} />
            ) : (
              <Box
                sx={{
                  border: '1px solid #fff',
                  borderRadius: '10px',
                  height: '100%'
                }}
              >
                <img
                  src={
                    uploadedImage
                      ? uploadedImage
                      : !!image
                      ? image
                      : defaultImage || PLACE_HOLDER
                  }
                  alt="عکس بنر"
                  width={'100%'}
                  height={'100%'}
                  style={{ objectFit: 'cover', borderRadius: '10px' }}
                />
                <IconButton onClick={handleClear} className="rmBannerImage">
                  <Close />
                </IconButton>
              </Box>
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ImageUpload;
