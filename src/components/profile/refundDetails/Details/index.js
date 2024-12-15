import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography
} from '@mui/material';
import React from 'react';
import CollapsDetails from './collaps';
import ProductList from './productList';
import Status from './status';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { styled } from '@mui/system';
import { useReturnedOrderDetail } from '@digify/theme-kit';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useRouter } from 'next/router';
import ThemeLink from 'src/components/shared/ThemeLink';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';

const GridStyle = styled(Grid)`
  padding: 10px;
  background: ${({ stepDisplay }) =>
    stepDisplay ? 'rgba(255, 88, 117, 0.2)' : 'rgba(55, 184, 109, 0.1)'};
`;

export default function Details() {
  const router = useRouter();
  const isDesktop = !useIsMobile();
  const { data } = useReturnedOrderDetail();
  const {
    status: { stepDescription, step },
    items
  } = data;
  return (
    <>
      {!isDesktop && (
        <Box
          py={3}
          ml={2}
          display={'flex'}
          className="pointer "
          onClick={() => {
            router.back();
          }}
        >
          <ArrowForwardIosIcon />
          <Typography variant="h6"> مرجوعی</Typography>
        </Box>
      )}
      <Card variant="outlined">
        <CardHeader
          style={{
            padding: '16px 0px'
          }}
          title={<Status {...{ step }} />}
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography textAlign={{ xs: 'center', md: 'left' }}>
                وضعیت درخواست مرجوعی
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                color="text.secondary"
                textAlign={{ xs: 'center', md: 'left' }}
              >
                {stepDescription}
              </Typography>
            </Grid>
            <Grid item xs={12} textAlign={{ xs: 'center', md: 'left' }}>
              <ThemeLink href={'/information/contact-us'}>
                <Button variant="outlined">اطلاعات فروشگاه</Button>
              </ThemeLink>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card variant="outlined" style={{ margin: '20px 0' }}>
        <CardContent>
          <CollapsDetails />
        </CardContent>
      </Card>
      <Card variant="outlined" style={{ margin: '20px 0' }}>
        {items.map((ele, index) => (
          <Box key={index}>
            <CardContent>
              <ProductList item={ele} />
            </CardContent>
            {ele?.stepDisplay === 'rejected' ||
              (ele?.stepDisplay === 'accepted' && (
                <GridStyle
                  container
                  alignItems={'center'}
                  stepDisplay={ele?.stepDisplay === 'rejected'}
                >
                  <Grid item xs={12} md={1}>
                    <Typography
                      color={{
                        color:
                          ele?.stepDisplay === 'rejected'
                            ? '#FF5875'
                            : '#37B86D'
                      }}
                    >
                      {ele?.stepDisplay === 'rejected' ? 'رد شده' : 'تایید شده'}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Typography>{stepDescription}</Typography>
                  </Grid>
                  {isDesktop && (
                    <Grid
                      item
                      md={7}
                      display="flex"
                      alignItems={'center'}
                      justifyContent="flex-end"
                    >
                      <HighlightOffIcon
                        style={{
                          color:
                            ele?.stepDisplay === 'rejected'
                              ? '#FF5875'
                              : '#37B86D'
                        }}
                      />
                    </Grid>
                  )}
                </GridStyle>
              ))}
            {items.length - 1 !== index && (
              <Divider
                style={{
                  margin: ' 20px 0'
                }}
              />
            )}
          </Box>
        ))}
      </Card>
    </>
  );
}
