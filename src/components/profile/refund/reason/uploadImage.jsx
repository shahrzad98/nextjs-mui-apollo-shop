import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { LoadingButton } from '@mui/lab';

import React, { useEffect, useRef } from 'react';
const CustomBtn = styled(LoadingButton)`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  background-color: #ffffff;
  color: #9185be;
  width: 100%;
  padding: 27.5px;
  border: 1px dashed #9185be;
  border-radius: 10px;
  height: 100%;
`;
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/system';
import BaseImg from 'src/components/shared/BaseImg';
import { useImageUpload } from '@digify/theme-kit';
import { useReactiveVar } from '@apollo/client';
import { setImage } from 'utils/vars';

export default function UploadImage({ index, getValues, setValue }) {
  const imageItem = useReactiveVar(setImage);
  const fileInput = useRef();
  const handleImage = () => fileInput.current.click();
  const {
    image: uploadedImage,
    uuid,
    loading,

    handleUploadImage
  } = useImageUpload();

  const handleFileUplaod = async e => {
    const selectedFile = e.target.files[0];

    const file = new File([selectedFile], selectedFile.name, {
      lastModified: Date.now(),
      type: selectedFile?.type
    });
    await handleUploadImage(file);
  };

  useEffect(() => {
    if (!!uuid) {
      let showData = getValues(`data[${index}].images`);
      setValue(
        `data[${index}].images`,
        showData ? [...showData, uuid] : [uuid]
      );
    }
  }, [uuid]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!!uploadedImage) {
      let imageList = imageItem;
      imageList[index] = imageList[index]
        ? [...imageList[index], uploadedImage]
        : [uploadedImage];
      setImage({ ...imageList });
    }
  }, [uploadedImage]); // eslint-disable-line react-hooks/exhaustive-deps

  const removeImage = (indexImage, indexDate) => {
    let imageList = imageItem;
    imageList[indexDate].splice(indexImage, 1);
    setImage({ ...imageList });
    let UidImageShallowCopy = [...getValues(`data[${indexDate}].images`)];
    UidImageShallowCopy.splice(indexImage, 1);
    setValue(`data[${indexDate}].images`, UidImageShallowCopy);
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={4} md={1}>
          <CustomBtn loading={loading} onClick={handleImage}>
            <AddIcon />
          </CustomBtn>
          <input
            accept="image/jpg,image/jpeg,image/png,image/webp"
            multiple={false}
            type="file"
            ref={fileInput}
            onChange={handleFileUplaod}
            style={{ display: 'none' }}
          />
        </Grid>
        {imageItem?.[index]?.map((ele, indexImage) => (
          <Grid
            key={indexImage}
            item
            xs={4}
            md={2}
            sx={{ position: 'relative' }}
            display="flex"
          >
            <Box width={'100px'} borderRadius={'10px'} overflow={'hidden'}>
              <BaseImg
                className="p-0 img-products-card"
                src={ele}
                size={{ w: 300, h: 300 }}
                alt={'products?.label'}
                q={100}
                productPlaceHolder
                objectFit="cover"
              />
            </Box>
            <Box
              sx={{ cursor: 'pointer' }}
              position={'absolute'}
              bgcolor="rgba(28, 27, 32, 0.2)"
              borderRadius={'0px 2px'}
              top={15}
              width={'30px'}
              height={'30px'}
              onClick={() => removeImage(indexImage, index)}
            >
              <CloseIcon style={{ color: '#fff' }} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
