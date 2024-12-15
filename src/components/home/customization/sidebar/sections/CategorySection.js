import { useCategories, useCustomization } from '@digify/theme-kit';
import styled from '@emotion/styled';
import {
  Box,
  Drawer,
  Grid,
  IconButton,
  TextField,
  Typography
} from '@mui/material';
import React from 'react';
import Title from 'src/components/shared/CustomizeTitle';
import { BootstrapTooltip } from '..';
import EditCategory from '../../categories/EditCategory';
import GridRadio from '../../categories/GridRadio';
import EmptyCategory from '../svg/emptyCategory';
import CustomSwitch from './BannerSection/CustomSwitch';

const Style = styled(Grid)``;

const CategorySection = () => {
  const {
    data: { category }
  } = useCustomization('category');

  const {
    data: { categories: allCategories }
  } = useCategories();

  const gridCount = React.useMemo(() => category.count.value, [category]);

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [categoryIndex, setCategoryIndex] = React.useState();

  const categoryIDs = React.useMemo(
    () =>
      allCategories.map(item => {
        return item.id;
      }),
    [allCategories]
  );

  const categories = React.useMemo(() => {
    return category.categories.value.map(item => {
      if (categoryIDs.includes(item.categoryId)) {
        const includedCategory = allCategories.find(
          cat => cat.id == item.categoryId
        );
        return {
          ...item,
          categoryId: includedCategory.id,
          title: includedCategory.title
        };
      } else {
        return {
          id: item?.id,
          image: '',
          categoryId: ''
        };
      }
    });
  }, [category.categories.value, categoryIDs, allCategories]);

  const containerRef = React.useRef();

  const selectFourGrids = () => {
    categories.map((cat, i) => {
      if (i >= 4) {
        category.categories.handleDeleteItem(cat.id);
      }
    });
  };

  const handleGridClick = count => {
    category.count.handleChangeNumber(count);
    if (count !== gridCount) {
      selectFourGrids();
      if (count == 6) {
        [...new Array(2)].map(() => {
          category.categories.handleAddNewItem();
        });
      }
    }
  };

  const selectedCategory = React.useMemo(() => {
    return categories.find(cat => cat.id === drawerOpen);
  }, [categories, drawerOpen]);

  return (
    <Style container ref={containerRef}>
      <Drawer
        anchor="bottom"
        open={Boolean(drawerOpen)}
        sx={{
          height: '100%',
          width: '100%',
          position: 'absolute',
          overflow: 'hidden',
          '>.MuiPaper-root': {
            width: '100%',
            height: '100%',
            position: 'static'
          },
          '>.MuiBackdrop-root': {
            display: 'none'
          }
        }}
        onClose={() => {
          setDrawerOpen(false);
        }}
        ModalProps={{
          disablePortal: true
        }}
      >
        {drawerOpen && (
          <Box height="100%" width="1" px={2}>
            <Box
              display="flex"
              width="1"
              alignItems="center"
              height="60px"
              justifyContent="space-between"
            >
              <Grid
                onClick={() => setDrawerOpen(false)}
                gap={1}
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                <i className="icon-Arrowarrow-right" />
                <Typography variant="body1" fontWeight="500">
                  {selectedCategory?.title || `دسته بندی ${categoryIndex} `}
                </Typography>
              </Grid>
              <BootstrapTooltip
                title={
                  <Grid p={2} container>
                    <Grid container>
                      <Typography
                        variant="body2"
                        fontWeight="700"
                        color="#FFFFFF"
                      >
                        تنظیمات دسته بندی
                      </Typography>
                    </Grid>
                    <Grid container>
                      <p className="fs-14 fw-400" style={{ lineHeight: 1.2 }}>
                        می توانید دسته بندی ها را در داشبورد خود تعریف کرده و
                        وضعیت نمایش ان ها را در اینجا مشخص کنید.
                      </p>
                    </Grid>
                  </Grid>
                }
              >
                <Grid color="#101820" display="flex">
                  <i className="icon-setting" />
                </Grid>
              </BootstrapTooltip>
            </Box>
            <Box borderTop="0.5px solid #DAD6E9">
              <EditCategory
                {...{
                  categoryId: selectedCategory?.categoryId,
                  image: selectedCategory?.image,
                  setCustomizedCategories: (key, value) => {
                    category.categories.handleChange(drawerOpen, key, value);
                  }
                }}
              />
            </Box>
          </Box>
        )}
      </Drawer>
      <Title title="حالت نمایش" />
      <Grid container pb={3} borderBottom="0.5px solid #DAD6E9">
        {category.style.options.map(grid => (
          <GridRadio
            key={grid.name}
            grid={grid}
            checked={grid.count == gridCount}
            handleClick={handleGridClick}
          />
        ))}
      </Grid>
      <Title title="دسته بندی ها" />
      <Grid container borderBottom="0.5px solid #DAD6E9">
        {categories.map((grid, i) => (
          <Grid
            key={i}
            container
            bgcolor="#F3F3F3"
            mb={2}
            p={1.5}
            borderRadius="10px"
            alignItems="center"
            justifyContent="space-between"
            flexWrap="nowrap"
          >
            <Box
              display="flex"
              width="calc(100% - 43px)"
              alignItems="center"
              gap={2}
            >
              <Box
                width={40}
                height={40}
                bgcolor="#fff"
                borderRadius="6px"
                display="flex"
                overflow="hidden"
                justifyContent="center"
                alignItems="center"
              >
                {grid?.image && typeof grid.image === 'string' ? (
                  <img
                    alt={grid.title}
                    src={grid.image}
                    style={{ width: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <EmptyCategory />
                )}
              </Box>
              <Typography
                variant="body2"
                whiteSpace="nowrap"
                width="calc(100% - 40px)"
                overflow="hidden"
                textOverflow="ellipsis"
                color="#101820"
              >
                {grid?.title || `دسته بندی ${i + 1}`}
              </Typography>
            </Box>
            <IconButton
              onClick={() => {
                setDrawerOpen(grid.id);
                setCategoryIndex(i + 1);
              }}
              size="small"
            >
              <i className="icon-Edit" />
            </IconButton>
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        mb={1}
        alignItems="center"
        flexWrap="nowrap"
        justifyContent="space-between"
      >
        <Title title="عنوان کلی" />
        <CustomSwitch
          checked={category.isShowName.value}
          onChange={() => {
            category.isShowName.handleChangeBoolean();
          }}
        />
      </Grid>
      <Box bgcolor="#F3F3F3" p={3} borderRadius="10px" width="1">
        <Typography variant="body2" component="label" mb={2}>
          عنوان
        </Typography>
        <TextField
          variant="standard"
          fullWidth
          value={category.name.value}
          onChange={e => category.name.handleChangeString(e.target.value)}
          InputProps={{
            disableUnderline: true,
            style: {
              backgroundColor: '#fff',
              borderRadius: '10px',
              padding: '10px'
            }
          }}
          placeholder="دسته بندی ها"
          type="text"
        />
      </Box>
    </Style>
  );
};

export default CategorySection;
