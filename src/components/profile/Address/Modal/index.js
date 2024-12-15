import { Autocomplete, Box, Grid, TextField, Typography } from '@mui/material';
import provincesList from 'constant/provinces';
import { Controller } from 'react-hook-form';
import NeshanShowingMap from 'src/components/shared/mapNeshan/showingMap';
import persianJs from 'persianjs';
import React from 'react';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';
const Model_ٍContent = ({
  control,
  errors,
  dataForm,
  setModalStep,
  ...props
}) => {
  const [cities, setCities] = React.useState([]);
  const isDesktop = !useIsMobile();

  return (
    <>
      {/*====================== form ====================== */}

      <Grid container spacing={2} {...props}>
        {isDesktop && (
          <Grid item xs={12} md={12}>
            <Box
              onClick={() => {
                setModalStep('mapForm');
              }}
              sx={{
                my: 2,
                cursor: 'pointer'
              }}
            >
              <Typography
                textAlign={'right'}
                sx={{
                  color: '#FFD2AA'
                }}
              >
                ویرایش موقعیت روی نقشه
              </Typography>
            </Box>
          </Grid>
        )}
        <Grid item xs={12}>
          <Controller
            name="name"
            control={control}
            rules={{
              required: { value: true, message: 'این فیلد الزامی است' }
            }}
            render={({ field }) => (
              <TextField
                {...field}
                error={errors.name}
                helperText={errors?.name?.message || null}
                sx={{ width: '100%' }}
                label="عنوان آدرس"
                variant="outlined"
                name="name"
              />
            )}
          />
        </Grid>
        <Grid item mt={1} xs={6}>
          <Controller
            name="province"
            control={control}
            onChange={([, data]) => data}
            rules={{
              required: { value: true, message: 'این فیلد الزامی است' }
            }}
            render={({ field: { onChange, value } }) => (
              <Autocomplete
                disablePortal
                name="province"
                options={provincesList?.provinces || []}
                sx={{ width: '100%' }}
                getOptionLabel={option => {
                  if (option.name) return option.name;
                  return option;
                }}
                value={value}
                onChange={(e, newValue) => {
                  onChange(newValue?.name || '');
                  if (provincesList?.cities[newValue?.name]?.length) {
                    setCities([...provincesList?.cities[newValue?.name]]);
                  }
                }}
                renderInput={params => (
                  <TextField
                    {...params}
                    error={errors.province}
                    helperText={errors?.province?.message || null}
                    label="استان"
                  />
                )}
              />
            )}
          />
        </Grid>
        <Grid item mt={1} xs={6}>
          <Controller
            name="city"
            control={control}
            rules={{
              required: { value: true, message: 'این فیلد الزامی است' }
            }}
            render={({ field: { onChange, value } }) => (
              <Autocomplete
                disablePortal
                options={cities}
                name="city"
                value={value}
                onChange={(e, newValue) => {
                  onChange(newValue?.name ?? '');
                }}
                getOptionLabel={option => {
                  if (option.name) return option.name;
                  return option;
                }}
                sx={{ width: '100%' }}
                renderInput={params => (
                  <TextField
                    {...params}
                    error={errors.city}
                    helperText={errors?.city?.message || null}
                    label="شهر"
                  />
                )}
              />
            )}
          />
        </Grid>

        <Grid item mt={1} xs={12}>
          <Controller
            name="address"
            control={control}
            rules={{
              required: { value: true, message: 'این فیلد الزامی است' }
            }}
            render={({ field }) => (
              <TextField
                {...field}
                error={errors.address}
                helperText={errors?.address?.message || null}
                sx={{ width: '100%' }}
                label="آدرس"
                name="address"
                variant="outlined"
              />
            )}
          />
        </Grid>
        <Grid item mt={1} xs={6}>
          <Controller
            name="no"
            control={control}
            rules={{
              required: { value: true, message: 'این فیلد الزامی است' },
              pattern: { value: /^[0-9]+$/g, message: 'لطفا عدد وارد کنید' }
            }}
            render={({ field: { onChange: onChangeVa, value } }) => (
              <TextField
                value={value}
                onChange={e => {
                  const enValue =
                    e.target.value?.length > 0
                      ? persianJs(e.target.value).toEnglishNumber().toString()
                      : '';
                  onChangeVa(enValue);
                }}
                error={errors.no}
                helperText={errors?.no?.message || null}
                sx={{ width: '100%' }}
                label="پلاک"
                type="text"
                name="no"
                variant="outlined"
              />
            )}
          />
        </Grid>
        <Grid item mt={1} xs={6}>
          <Controller
            name="unit_number"
            control={control}
            rules={{
              required: { value: true, message: 'این فیلد الزامی است' },
              pattern: { value: /^[0-9]+$/g, message: 'لطفا عدد وارد کنید' }
            }}
            render={({ field: { onChange: onChangeVa, value } }) => (
              <TextField
                value={value}
                onChange={e => {
                  const enValue =
                    e.target.value?.length > 0
                      ? persianJs(e.target.value).toEnglishNumber().toString()
                      : '';
                  onChangeVa(enValue);
                }}
                error={errors.unit_number}
                helperText={errors?.unit_number?.message || null}
                sx={{ width: '100%' }}
                label="واحد"
                name="unit_number"
                variant="outlined"
              />
            )}
          />
        </Grid>
        <Grid item mt={1} xs={12}>
          <Controller
            name="postal_code"
            control={control}
            rules={{
              required: { value: true, message: 'این فیلد الزامی است' },
              pattern: { value: /^[0-9]+$/g, message: 'لطفا عدد وارد کنید' },
              minLength: {
                value: 10,
                message: 'کد پستی باید حداقل 10 رقم باشد'
              },
              maxLength: {
                value: 10,
                message: 'کد پستی باید حداقل 10 رقم باشد'
              }
            }}
            render={({ field: { onChange: onChangeVa, value } }) => (
              <TextField
                value={value}
                sx={{ width: '100%' }}
                onChange={e => {
                  const enValue =
                    e.target.value?.length > 0
                      ? persianJs(e.target.value).toEnglishNumber().toString()
                      : '';
                  onChangeVa(enValue);
                }}
                error={errors.postal_code}
                helperText={errors?.postal_code?.message || null}
                label="کدپستی"
                name="postal_code"
                variant="outlined"
              />
            )}
          />
        </Grid>
      </Grid>

      {/*====================== Map ====================== */}
      <Box
        sx={{
          height: '140px',
          mt: 4
        }}
      >
        <NeshanShowingMap
          styles={{
            zIndex: '0'
          }}
          latLng={[
            dataForm?.latitude || '35.700240761628834',
            dataForm?.longitude || '51.3374561782251'
          ]}
        />
      </Box>
      <Box
        onClick={() => {
          setModalStep('mapForm');
        }}
        sx={{
          mt: 2,
          display: { xs: 'black', lg: 'none' }
        }}
      >
        <Typography color="secondary" variant="body2">
          ویرایش موقعیت روی نقشه
        </Typography>
      </Box>
    </>
  );
};

export default Model_ٍContent;
