import { Box, ButtonBase } from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

const ImageUploader = ({
  setImage: setImageProp,
  title = 'تصویر را در این بخش بیندازید'
}) => {
  const imageRef = React.useRef(null);
  const [image, setImage] = React.useState(null);

  const onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      const img = event.target.files[0];
      setImageProp?.(img);
      setImage(URL.createObjectURL(img));
    }
  };

  const removeImage = () => {
    setImageProp?.(null);
    setImage(null);
    imageRef.current.value = null;
  };

  return (
    <Box
      width="1"
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box height="100%" width="1">
        {image ? (
          <Box
            position="relative"
            width="1"
            height="100%"
            display="flex"
            alignItems="center"
            maxHeight="300px"
            overflow="hidden"
          >
            <Box component="img" src={image} width="1" height="auto" />
            <Box
              component={ButtonBase}
              onClick={removeImage}
              position="absolute"
              bottom={0}
              left={0}
              width="1"
              bgcolor="#00000099"
              py={2}
              display="flex"
              alignItems="center"
              justifyContent="center"
              color="#fff"
            >
              <DeleteIcon />
              حذف
            </Box>
          </Box>
        ) : (
          <Box
            component="label"
            className="pointer"
            htmlFor="image"
            display="flex"
            width="1"
            height="100%"
            minHeight="200px"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            position="relative"
            color="#1C1B2066"
          >
            <AddIcon fontSize="large" />
            <Box
              position="absolute"
              width="1"
              bottom={0}
              left={0}
              p={3}
              textAlign={'center'}
            >
              {title}
            </Box>
          </Box>
        )}
        <input
          ref={imageRef}
          id="image"
          type="file"
          hidden
          name="myImage"
          onChange={onImageChange}
        />
      </Box>
    </Box>
  );
};
export default ImageUploader;
