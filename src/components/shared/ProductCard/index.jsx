import * as React from 'react';
import {
  Box,
  Stack,
  Typography,
  Link as MuiLink,
  Grid,
  Button
} from '@mui/material';
import { currency } from '../../../../utils/currency';
import BaseImg from '../BaseImg';
import { CardContainer, DisabledBox } from './ProductCard.style';
import useIsMobile from '../Hooks/useIsMobile';
import Link from 'next/link';
import { useBasket, useProducts } from '@digify/theme-kit';
import { useState } from 'react';

const ProductCard = ({
  product,
  renderWidth,
  renderHeight,
  imageWidth = renderWidth,
  imageHeight = renderHeight,
  hasBorderBottom,
  addToBasketShow,
  disabled
}) => {
  const {
    image,
    images,
    colors,
    label,
    cost,
    discountPercent,
    primaryCost,
    orderable_count,
    id
  } = product;
  const { handleAddToBasket } = useProducts();
  const {
    steps: {
      items: { products }
    }
  } = useBasket();

  const [itemAdded, setItemAdded] = useState(false);
  const [itemRemoved, setItemRemoved] = useState(false);
  const isMobile = useIsMobile();
  const labelWidth = isMobile ? '150px' : '240px';
  const labelLength = isMobile ? 30 : 40;
  return (
    <article>
      <CardContainer
        addToBasketShow={addToBasketShow}
        hasBorderBottom={hasBorderBottom}
        hasSecondImage={images?.length}
      >
        <Link passHref {...product?.link}>
          <MuiLink>
            {disabled && <DisabledBox />}

            <Box className="imagesContainer">
              <Box
                className={`firstImage ${
                  !!image && !images?.length && 'singleImageEffect'
                }`}
                width={renderWidth}
                maxWidth={renderWidth}
                height={renderHeight}
                mb={isMobile ? '12px' : 2}
              >
                <BaseImg
                  className="productBaseImage"
                  src={image}
                  size={{ w: imageWidth, h: imageHeight }}
                  alt={label}
                  q={100}
                  productPlaceHolder
                  objectFit="contain"
                />
              </Box>
              {!!images?.length && (
                <Box
                  className="secondImage"
                  width={renderWidth}
                  maxWidth={renderWidth}
                  height={renderHeight}
                  mb={isMobile ? '12px' : 2}
                >
                  <BaseImg
                    src={images[0]}
                    size={{ w: imageWidth, h: imageHeight }}
                    alt={label}
                    q={100}
                    productPlaceHolder
                    objectFit="contain"
                  />
                </Box>
              )}
            </Box>
            <Typography
              className="productTitle"
              variant="body2"
              component="h2"
              maxWidth={labelWidth}
              minHeight="50px"
              lineHeight={1.5}
            >
              {label.slice(0, labelLength)}{' '}
              {label.length > labelLength && '...'}
            </Typography>

            <Grid container spacing={2} minHeight="85px">
              {/*color*/}
              <Grid item xs={6}>
                <Stack
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="flex-start "
                  height="100%"
                >
                  <Stack className="colorContainer">
                    {colors?.map(C => (
                      <Box
                        key={C.id}
                        className="colorPallet"
                        ml={isMobile ? '6px' : '8px'}
                        sx={{ bgcolor: C.color_code }}
                      />
                    ))}
                  </Stack>
                </Stack>
              </Grid>
              {/*price*/}
              <Grid item xs={6}>
                <Stack
                  height="100%"
                  direction="column"
                  alignItems="flex-end"
                  justifyContent="flex-end"
                  mb={1}
                >
                  {!!cost && orderable_count !== 0 ? (
                    <>
                      <Box>
                        {discountPercent > 0 && (
                          <Stack direction="row" alignItems="center">
                            <Typography
                              mx="6px"
                              color="black.100"
                              fontWeight={500}
                            >
                              {currency(cost)}
                            </Typography>
                            <Box className="discount">
                              <Typography variant="body2" color="text.white">
                                %&#8202;{discountPercent}
                              </Typography>
                            </Box>
                          </Stack>
                        )}
                        <Stack
                          className="price"
                          mb={discountPercent > 0 ? 0 : 2}
                        >
                          <Typography
                            variant={
                              discountPercent > 0 ? 'body2' : 'subtitle2'
                            }
                            color={
                              discountPercent > 0 ? 'black.40' : 'black100'
                            }
                            fontWeight={500}
                          >
                            {discountPercent > 0
                              ? currency(primaryCost)
                              : currency(cost)}
                          </Typography>
                          <Typography
                            variant="caption"
                            color={
                              discountPercent > 0 ? 'black.40' : 'black.100'
                            }
                            fontWeight={500}
                            mx="4px"
                          >
                            تومان
                          </Typography>
                        </Stack>
                      </Box>
                    </>
                  ) : (
                    <Typography variant="body2">ناموجود</Typography>
                  )}
                </Stack>
              </Grid>
            </Grid>
          </MuiLink>
        </Link>
        {addToBasketShow && (
          <>
            {itemAdded && !itemRemoved ? (
              <Box className="addRemoveItem">
                <Box
                  className="increase"
                  onClick={() => {
                    handleAddToBasket(product.id);
                  }}
                  px={5}
                >
                  <i className="icon-add-remove" />
                </Box>
                <Typography variant="body2" color="black.100" fontWeight={500}>
                  {products.find(el => el.product_id === id).amount}
                </Typography>

                {products.find(el => el.product_id === id).amount === 1 ? (
                  <Box
                    px={5}
                    className="remove"
                    onClick={() => {
                      products
                        .find(p => p.product_id === id)
                        .handleDecrementAmount();
                      setItemRemoved(true);
                    }}
                  >
                    <i className="icon-delete" />
                  </Box>
                ) : (
                  <Box px={5} className="decrease">
                    <i
                      className="icon-remove-add-subtract"
                      onClick={() => {
                        products
                          .find(p => p.product_id === id)
                          .handleDecrementAmount();
                      }}
                    />
                  </Box>
                )}
              </Box>
            ) : (
              <Button
                className="addToBasket"
                variant="outlined"
                fullWidth
                color="primary"
                onClick={() => {
                  handleAddToBasket(product.id);
                  setItemAdded(true);
                  setItemRemoved(false);
                }}
              >
                <i className="icon-Shopping-E-Commerce__x2F__Shopping-Bags__x2F__shopping-bag-side_1" />
                {isMobile ? (
                  <Typography variant="caption" color="primary">
                    افزودن به سبد
                  </Typography>
                ) : (
                  <Typography variant="body2" color="primary" fontWeight={500}>
                    افزودن به سبد خرید
                  </Typography>
                )}
              </Button>
            )}
          </>
        )}
      </CardContainer>
    </article>
  );
};

export default ProductCard;
