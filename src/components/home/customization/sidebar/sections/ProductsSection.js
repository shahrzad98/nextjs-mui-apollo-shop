import { useCustomization, useProducts } from '@digify/theme-kit';
import styled from '@emotion/styled';
import {
  Box,
  Checkbox,
  Grid,
  IconButton,
  Radio,
  TextField,
  Typography
} from '@mui/material';
import React, { useState } from 'react';
import CheckedSVG from '../svg/checkedSVG';
import DiscountSVG from '../svg/discount';
import InfiniteScroll from 'react-infinite-scroll-component';

const Style = styled(Grid)`
  .border_right {
    border-left: 4px solid #dad6e9;
    padding-left: 14px;
    h3 {
      font-size: 16px;
      font-weight: 500;
      margin: 0;
    }
  }
  .section_cont {
    height: 64px;
    border-radius: 10px;
    background-color: #f3f3f3;
    padding: 16px;
    cursor: pointer;
    &:hover {
      outline: 1px solid #c9c3e0;
    }
    .MuiButtonBase-root {
      height: 26px !important;
      min-height: auto !important;
      padding: 0;
      width: 26px;
    }
    p {
      margin: 0;
      margin-left: 14px;
      font-weight: 400;
      font-size: 14px;
    }
  }
  .divider {
    height: 1px;
    background-color: #f3f3f3;
    margin: 24px 0 !important;
  }
  .text_navbar_input {
    border: none;
    outline: none;
    border-radius: 10px;
    padding: 8px 16px;
    width: 100%;
    position: relative;
    background-color: #fff;

    &:focus-within {
      outline: 0.5px solid #6d5da9;
    }
    &:hover {
      outline: 0.5px solid #6d5da9;
    }
    .MuiInput-root {
      height: 100%;
    }
    .MuiButtonBase-root {
      height: auto !important;
      min-height: auto !important;
    }
  }
  .text_navbar_cont {
    padding: 12px 16px;
    background-color: #f3f3f3;
    border-radius: 10px;
  }
  .text_navbar_cont_search {
    padding: 12px 16px;
    background-color: #f3f3f3;
    border-radius: 10px;
    .products_cont {
      height: 320px;
      max-height: 320px;
      overflow-y: auto;
      overflow-x: hidden;
    }
  }
  .infinite-scroll-component__outerdiv {
    width: 100%;
  }
  .product_card {
    height: 72px;
    border-radius: 10px;
    background-color: #fff;
    padding-right: 14px;
    width: 100%;
    cursor: pointer;
    .empty_image {
      height: 48px;
      width: 48px;
      background-color: #f3f3f3;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    img {
      height: 48px;
      width: 48px;
      background-color: #f3f3f3;
      border-radius: 10px;
      object-fit: cover;
    }
    p {
      margin: 0;
    }
  }
`;

const SORT_OPTIONS = [
  { title: 'جدیدترین', id: 'NEWEST' },
  { title: 'پرفروش ترین', id: 'MOST_SALE' },
  { title: 'بیشترین تخفیف', id: 'MOST_DISCOUNT' }
];

const ProductCard = ({ title, img, isSelected, handleChange, onClick }) => (
  <Grid
    mb={3}
    container
    justifyContent="space-between"
    alignItems="center"
    onClick={handleChange}
    flexWrap="nowrap"
    className="product_card"
  >
    <Grid
      sx={{ display: 'flex', alignItems: 'center', width: 'calc(100% - 50px)' }}
    >
      <Checkbox
        onClick={onClick}
        style={{ color: '#483493' }}
        checked={isSelected}
      />
      <Typography noWrap>{title}</Typography>
    </Grid>
    {img ? (
      <img alt="product_img" src={img} />
    ) : (
      <div className="empty_image">
        <DiscountSVG color={'#C9C3E0'} />
      </div>
    )}
  </Grid>
);

const ProductsListSection = () => {
  const [searchValue, setSearchValue] = useState('');
  const {
    data: productsData,
    handleLoadMore,
    next
  } = useProducts({
    search: searchValue
  });
  const { products: showingProducts } = productsData;

  const {
    data: { products }
  } = useCustomization('products');

  return (
    <Style container>
      <Grid style={{ margin: '24px 0' }} container className="border_right">
        <h3>حالت نمایش</h3>
      </Grid>
      <Grid
        onClick={() => products.mode.handleChangeString('sort')}
        mb={3}
        className="section_cont"
        container
        alignItems="center"
        flexDirection="row"
        flexWrap="nowrap"
      >
        <Radio
          checked={products.mode.value === 'sort'}
          checkedIcon={<CheckedSVG />}
        />
        <Typography
          noWrap
          sx={{
            color: products.mode.value === 'manual' ? '#000' : '#A3A5A7'
          }}
        >
          ترتیبی قرار گرفتن محصولات
        </Typography>
      </Grid>
      <Grid
        onClick={() => products.mode.handleChangeString('manual')}
        className="section_cont"
        container
        alignItems="center"
        flexDirection="row"
        flexWrap="nowrap"
      >
        <Radio
          checked={products.mode.value === 'manual'}
          checkedIcon={<CheckedSVG />}
        />
        <Typography
          noWrap
          sx={{
            color: products.mode.value === 'manual' ? '#000' : '#A3A5A7'
          }}
        >
          انتخاب دستی محصولات
        </Typography>
      </Grid>
      <Grid container className="divider"></Grid>
      {products.mode.value === 'sort' ? (
        <>
          <Grid mb={3} container className="border_right">
            <h3> ترتیبی قرار گرفتن محصولات</h3>
          </Grid>
          <Grid mb={3} container>
            <p style={{ fontSize: '14px', fontWeight: 400, color: '#51575C' }}>
              ترتیبی که می خواهید محصولات بر اساس آن نمایش داده شوند را مشخص
              کنید.{' '}
            </p>
          </Grid>
          {SORT_OPTIONS.map((f, i) => (
            <Grid
              mb={i === SORT_OPTIONS?.length - 1 ? 0 : 3}
              key={f.id}
              onClick={() => products.sortValue.handleChangeString(f.id)}
              className="section_cont"
              container
              alignItems="center"
            >
              <Radio
                checked={products.sortValue.value === f.id}
                checkedIcon={<CheckedSVG />}
              />
              <p
                style={{
                  color: products.sortValue.value === f.id ? '#000' : '#A3A5A7'
                }}
              >
                {f.title}
              </p>
            </Grid>
          ))}
          <Grid container className="divider"></Grid>
        </>
      ) : (
        <>
          <Grid container>
            <Grid mb={3} container className="border_right">
              <h3>انتخاب دستی محصولات</h3>
            </Grid>{' '}
            <Grid mb={3} container>
              <p
                style={{ fontSize: '14px', fontWeight: 400, color: '#51575C' }}
              >
                محصولات مورد نظر خود را برای نمایش در لیست محصولات انتخاب کنید.{' '}
              </p>
            </Grid>
            <Grid container className="text_navbar_cont_search">
              <Grid mb={3} container>
                <TextField
                  InputProps={{
                    disableUnderline: true,
                    startAdornment: !searchValue && (
                      <Box sx={{ width: '30px', fontSize: '1.2rem' }}>
                        <i className="icon-search" />
                      </Box>
                    ),
                    endAdornment: searchValue && (
                      <IconButton
                        onClick={() => {
                          setSearchValue('');
                        }}
                        sx={{ padding: 0, height: '24px' }}
                      >
                        <i className="icon-remove" />
                      </IconButton>
                    )
                  }}
                  variant="standard"
                  fullWidth
                  value={searchValue}
                  onChange={e => {
                    setSearchValue(e.target.value);
                  }}
                  placeholder="جستجو"
                  className="text_navbar_input"
                />
              </Grid>
              <Grid id="products_cont" container className="products_cont">
                <InfiniteScroll
                  style={{ width: '100%' }}
                  dataLength={showingProducts?.length}
                  hasMore={!!next}
                  scrollableTarget="products_cont"
                  next={() => handleLoadMore()}
                >
                  {showingProducts.map(e => (
                    <ProductCard
                      onClick={() => {
                        products.manualProducts.value?.includes(e.id)
                          ? products.manualProducts.handleRemoveFromArray(e.id)
                          : products.manualProducts.handleAddToArray(e.id);
                      }}
                      title={e.label}
                      isSelected={products.manualProducts.value.includes(e.id)}
                      img={e.image}
                      key={e.id}
                    />
                  ))}
                </InfiniteScroll>
              </Grid>
            </Grid>
            <Grid container className="divider"></Grid>
          </Grid>
        </>
      )}
      <Grid mb={3} container className="border_right">
        <h3> عنوان کلی</h3>
      </Grid>
      <Grid container className="text_navbar_cont">
        <Grid container>
          <p className="fs-14 fw-400" style={{ color: '#51575C' }}>
            عنوان{' '}
          </p>
        </Grid>
        <Grid mt={3} container>
          <TextField
            value={products.title.value}
            onChange={e => products.title.handleChangeString(e.target.value)}
            InputProps={{ disableUnderline: true }}
            variant="standard"
            fullWidth
            placeholder="عنوان کلی را وارد کنید..."
            className="text_navbar_input"
          />
        </Grid>
      </Grid>
    </Style>
  );
};

export default ProductsListSection;
