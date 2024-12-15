import { useCategories } from '@digify/theme-kit';
import { Box, Grid, Radio, TextField, Typography } from '@mui/material';
import CheckedSVG from 'src/components/home/customization/sidebar/svg/checkedSVG';
import React from 'react';
import ImageUpload from '../../sidebar/sections/BannerSection/NewBanner/ImageUpload';
import EmptyCategories from '../../sidebar/svg/emptyCategories';
import EmptyCategory from '../../sidebar/svg/emptyCategory';
import Title from 'src/components/shared/CustomizeTitle';

const EditCategory = ({ setCustomizedCategories, categoryId, image }) => {
  const { data: categoriesData, loading } = useCategories();
  const [search, setSearch] = React.useState('');

  const selectCategory = id => {
    setCustomizedCategories('image', '');
    setCustomizedCategories('categoryId', id);
  };

  const matchedCategories = React.useMemo(() => {
    return categoriesData.categories.filter(category =>
      category.title.includes(search)
    );
  }, [categoriesData.categories, search]);

  return (
    <>
      <Title title="انتخاب دسته بندی" />
      <Grid container bgcolor="#F3F3F3" p={2} borderRadius="10px">
        <TextField
          value={search}
          onChange={e => {
            setSearch(e.target.value);
          }}
          variant="standard"
          fullWidth
          InputProps={{
            disableUnderline: true,
            style: {
              backgroundColor: '#fff',
              borderRadius: '10px',
              padding: '10px'
            }
          }}
          placeholder={'جستجو دسته بندی'}
          type="text"
        />
        <Grid overflow="auto" width="1" height="320px" mt={3}>
          {!loading &&
            (categoriesData.categories.length === 0 ? (
              <Box
                display="flex"
                flexDirection="column"
                height="100%"
                justifyContent="center"
                gap={3}
                alignItems="center"
                color="#C9C3E0"
              >
                <EmptyCategories size={37} color="#C9C3E0" />
                <Typography variant="h6" component="p">
                  هنوز دسته بندی تعریف نکردید!
                </Typography>
              </Box>
            ) : matchedCategories.length > 0 ? (
              matchedCategories.map(category => (
                <Grid
                  key={category.id}
                  onClick={() => selectCategory(category.id)}
                  bgcolor="#FFFFFF"
                  p={2}
                  mb={2}
                  maxHeight="80px"
                  container
                  alignItems="center"
                  justifyContent="space-between"
                  borderRadius="10px"
                  flexWrap="nowrap"
                >
                  <Box
                    display="flex"
                    gap={1}
                    width="calc(100% - 40px)"
                    alignItems="center"
                  >
                    <Radio
                      sx={{ padding: 0 }}
                      checked={categoryId == category.id}
                      name={category.id}
                      checkedIcon={<CheckedSVG />}
                    />
                    <Typography
                      variant="caption"
                      component="label"
                      whiteSpace="nowrap"
                      width="calc(100% - 40px)"
                      overflow="hidden"
                      textOverflow="ellipsis"
                      htmlFor={category.id}
                    >
                      {category.title}
                    </Typography>
                  </Box>
                  <Box
                    width={40}
                    height={40}
                    bgcolor="#F3F3F3"
                    borderRadius="6px"
                    display="flex"
                    justifyContent="center"
                    overflow="hidden"
                    alignItems="center"
                  >
                    {category.image?.image ? (
                      <img
                        alt={category.title}
                        src={category.image?.image}
                        style={{ width: '100%', objectFit: 'cover' }}
                      />
                    ) : (
                      <EmptyCategory />
                    )}
                  </Box>
                </Grid>
              ))
            ) : (
              <Box
                display="flex"
                flexDirection="column"
                height="100%"
                justifyContent="center"
                gap={3}
                alignItems="center"
                color="#C9C3E0"
              >
                <EmptyCategories size={37} color="#C9C3E0" />
                <Typography variant="h6" component="p">
                  دسته بندی پیدا نشد!
                </Typography>
              </Box>
            ))}
        </Grid>
      </Grid>
      <Box my={3} borderTop="0.5px solid #DAD6E9" py={3}>
        <ImageUpload
          aspectRatio={1 / 1}
          title="تصویر دسته بندی"
          disabled={!Boolean(categoryId)}
          defaultImage="/static/assets/svg/productImage/productImage.svg"
          image={image}
          handleChangeImage={img => {
            setCustomizedCategories('image', img);
          }}
        />
      </Box>
    </>
  );
};

export default EditCategory;
