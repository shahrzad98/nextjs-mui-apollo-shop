import { Autocomplete, Box, Grid, TextField, Typography } from '@mui/material';

import BaseImg from 'src/components/shared/BaseImg';
import { currency, addUnit } from 'utils/currency';
import React from 'react';
import UploadImage from './uploadImage';
import { Controller } from 'react-hook-form';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';

function Reason({
  reasonItems,
  errors,
  index,
  data,
  control,
  setValue,
  getValues,
  lastElement
}) {
  const isDesktop = !useIsMobile();

  return (
    <>
      <Grid
        key={data.id}
        container
        spacing={{ xs: 2, md: 4 }}
        sx={{
          padding: { xs: '10px 0', md: '20px' }
        }}
        borderBottom={`${!lastElement && '1px solid #d6d6d6'}`}
      >
        <Grid item xs={8} md={8} display={'flex'}>
          <Box width={'100px'} overflow="hidden" borderRadius={'5px'}>
            <BaseImg
              className="p-0 img-products-card"
              src={data.image}
              size={{ w: '300', h: 300 }}
              alt={data?.label}
              q={100}
              productPlaceHolder
              objectFit="cover"
            />
          </Box>
          <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'space-evenly'}
            ml={{ xs: 1, md: 3 }}
          >
            <Box>
              <Typography
                component={'h1'}
                ml={2}
                fontSize={{ xs: '14px', md: '16px' }}
              >
                {data?.label}
              </Typography>
            </Box>
            <Box display={'flex'} alignItems="center" sx={{ opacity: 0.5 }}>
              {data.colors.map(ele => (
                <Box
                  key={ele}
                  marginRight={'8px'}
                  border={`0.5px solid ${ele.color}`}
                  display={'flex'}
                  width={isDesktop ? '16px' : '12px'}
                  height={isDesktop ? '16px' : '12px'}
                  borderRadius={'50%'}
                  bgcolor={'blue'}
                ></Box>
              ))}
              <Box>
                <Typography
                  fontSize={{ xs: '12px', md: '16px' }}
                  component={'h1'}
                >
                  {data.optionValues.map(ele => (
                    <>
                      {ele.name}:{ele.value}
                    </>
                  ))}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={4}
          md={4}
          px={{ xs: 0, md: 4 }}
          display="flex"
          alignItems={{ xs: 'flex-end', md: 'flex-start' }}
          justifyContent={{ xs: 'flex-end', md: '' }}
        >
          <Box>
            <Typography
              fontSize={{ xs: '14px', md: '16px' }}
              textAlign={'right'}
              component={'h1'}
            >
              {addUnit(currency(data.primaryCost))}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} my={{ xs: 2, md: 0 }}>
          <Typography fontSize={{ xs: '14px', md: '16px' }}>
            علت مرجوعی کالا را مشخص کنید
          </Typography>
        </Grid>
        <Grid item xs={12} md={7} my={{ xs: 2, md: 0 }}>
          <Controller
            name={`data[${index}].reason`}
            control={control}
            rules={{
              required: { value: true, message: 'این فیلد الزامی است' }
            }}
            render={({ field }) => (
              <Autocomplete
                options={reasonItems || ''}
                {...field}
                onChange={(e, newValue) => {
                  field.onChange(newValue);
                }}
                getOptionLabel={option => {
                  return option;
                }}
                sx={{ width: '100%' }}
                renderInput={params => (
                  <TextField
                    {...params}
                    error={errors?.data?.[index]?.reason}
                    helperText={errors?.data?.[index]?.reason?.message || null}
                    label="علت مرجوعی"
                  />
                )}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={7} my={{ xs: 2, md: 0 }}>
          <Controller
            name={`data[${index}].description`}
            control={control}
            rules={{
              required: { value: true, message: 'این فیلد الزامی است' }
            }}
            render={({ field }) => {
              return (
                <TextField
                  name={`data[${index}].description`}
                  variant="outlined"
                  // {...field}
                  value={field.value}
                  onChange={field.onChange}
                  fullWidth
                  multiline
                  rows={4}
                  error={errors?.data?.[index]?.description}
                  helperText={errors?.data?.[index]?.description?.message}
                  label={'توضیحات'}
                />
              );
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography fontSize={'16px'}>عکس محصول را وارد کنید</Typography>
        </Grid>
        <Grid item xs={12} my={3}>
          <UploadImage
            {...{
              setValue,
              data,
              getValues,
              index
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default Reason;
