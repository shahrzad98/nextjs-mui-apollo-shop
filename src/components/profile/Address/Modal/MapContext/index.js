import React, { useState } from 'react';
import { TextField, Grid, CircularProgress, Autocomplete } from '@mui/material';
import ShowAddress from 'src/components/shared/mapNeshan/showAddress';
import { searchAddressNeshan } from 'src/components/shared/mapNeshan/api';

const Model_mapContext = ({ dataForm, handerSetDataForm }) => {
  const [open, setOpen] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [loading, setloading] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const [searchText, setSearchText] = useState('');

  React.useEffect(() => {
    let timeOut = null;
    let active = true;
    if (searchText) {
      setloading(true);
      setOpen(true);
      timeOut = setTimeout(() => {
        searchAddressNeshan(
          '35.700240761628834',
          '51.3374561782251',
          searchText
        ).then(res => {
          if (active) {
            setOptions(res?.items ? [...res?.items] : []);
            setloading(false);
          }
        });
      }, 300);
    }
    return () => {
      clearTimeout(timeOut);
      active = false;
    };
  }, [searchText]);

  React.useEffect(() => {
    let timeOut = null;
    if (!show) {
      timeOut = setTimeout(() => {
        setShow(true);
      }, 100);
    }
    return () => clearTimeout(timeOut);
  }, [show]);

  const chooseItem = value => {
    handerSetDataForm(
      {
        ...value,
        latlng: {
          lat: value?.location?.y,
          lng: value?.location?.x
        }
      },
      null
    );
    setShow(false);
  };

  return (
    <Grid container height={'95%'}>
      <Grid item width={'100%'} padding="16px" pt={0}>
        <Autocomplete
          id="asynchronous-demo"
          sx={{
            border: 'none',
            '&.MuiAutocomplete-root': {
              borderColor: 'red',
              boxShadow: 'red'
            },
            '& .MuiInputBase-root::after': {
              borderBottom: '1px solid rgba(28, 27, 32, 0.4)'
            },
            '& .MuiInput-root:before': {
              borderBottom: '1px solid rgba(28, 27, 32, 0.05)'
            },
            '& .MuiInput-root': {
              padding: '4px 0px 7px 4px'
            }
          }}
          open={open}
          onOpen={() => {
            setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
          }}
          isOptionEqualToValue={(option, value) => option.title === value.title}
          getOptionLabel={option => {
            return option.title;
          }}
          options={options}
          loading={loading}
          noOptionsText="موردی یافت نشد"
          onChange={({}, value) => {
            chooseItem(value);
          }}
          loadingText={'درحال جستجو ..'}
          renderInput={params => (
            <TextField
              {...params}
              variant="standard"
              placeholder="جستجو موقعیت"
              onChange={e => {
                setSearchText(e.target.value);
              }}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {loading ? (
                      <CircularProgress color="inherit" size={20} />
                    ) : null}
                  </>
                ),
                startAdornment: (
                  <i
                    className=" icon-search"
                    style={{ color: 'gray', marginLeft: '8px' }}
                  />
                )
              }}
            />
          )}
        />
      </Grid>
      <Grid
        item
        width={'100%'}
        sx={{
          height: {
            md: '300px',
            xs: '95%'
          }
        }}
      >
        {show && (
          <ShowAddress
            styles={{
              zIndex: '0'
            }}
            handerSetDataForm={handerSetDataForm}
            latLng={[
              dataForm?.latitude || '35.700240761628834',
              dataForm?.longitude || '51.3374561782251'
            ]}
          />
        )}
      </Grid>
    </Grid>
  );
};
export default Model_mapContext;
