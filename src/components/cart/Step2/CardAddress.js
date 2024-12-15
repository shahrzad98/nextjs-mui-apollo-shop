import {
  Box,
  Button,
  CardContent,
  Checkbox,
  Grid,
  Stack,
  Typography
} from '@mui/material';
import React, { useState } from 'react';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import NeshanShowingMap from 'src/components/shared/mapNeshan/showingMap';
import { useForm } from 'react-hook-form';
import Modal_mapContext from 'src/components/profile/Address/Modal/MapContext';
import DrawerModal from 'src/components/shared/DrawerModal';
import ModelContent from 'src/components/profile/Address/Modal';
import LoadingButton from '@mui/lab/LoadingButton';
import { openSnackbar } from 'utils/snackbar';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';
import { DrawerModalContent } from 'src/components/profile/Address/CardAddress/styled';

const CardAddress = ({ addr, allAddress, setRenderList }) => {
  const isDesktop = !useIsMobile();
  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: addr
  });
  const [open, setOpen] = useState(false);
  const [modalStep, setModalStep] = useState('mapForm');
  const [dataForm, setDataForm] = useState({
    latitude: '35.700240761628834',
    longitude: '51.3374561782251'
  });

  React.useEffect(() => {
    if (dataForm?.trem) {
      reset({
        ...addr,
        province: dataForm?.state?.replace('استان', '') ?? dataForm?.province,
        city: dataForm.city,
        address: dataForm.trem
      });
    }
  }, [dataForm, addr, reset]);

  const submitCreateHandler = dataAddr => {
    if (modalStep == 'mapForm') {
      setModalStep('addrForm');
      return 0;
    }
    allAddress.handleUpdateAddress(
      dataAddr.id,
      {
        address: dataAddr.address,
        city: dataAddr.city,
        latitude: `${dataForm?.latitude}`,
        longitude: `${dataForm?.longitude}`,
        name: dataAddr.name,
        no: parseInt(dataAddr.no),
        postal_code: dataAddr.postal_code,
        unit_number: parseInt(dataAddr.unit_number),
        province: dataAddr.province
      },
      () => {
        setOpen(false);
        setRenderList(false);
        openSnackbar({
          message: 'آدرس با موفقیت اضافه شد'
        });
      }
    );
  };

  const handerSetDataForm = (data, res) => {
    setDataForm(prevState => ({
      ...prevState,
      ...res,
      latitude: data.latlng.lat,
      longitude: data.latlng.lng
    }));
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <CardContent
      sx={{
        padding: { xs: '0 16px', lg: addr.selected ? '0px 24px' : '6px 24px' }
      }}
    >
      <Grid container onClick={() => addr.handleSelectAddress()}>
        <Grid item xs={12} lg={12}>
          <Grid
            container
            sx={{ justifyContent: { xs: '', lg: 'space-between' } }}
            alignItems="center"
          >
            <Grid item xs={8} lg={8}>
              <Box className="checkBox">
                <Checkbox
                  sx={{ padding: '0', background: 'none' }}
                  checked={addr.selected || false}
                  icon={
                    <RadioButtonUncheckedIcon
                      sx={{ color: 'rgba(28, 27, 32, 0.1)' }}
                    />
                  }
                  checkedIcon={<RadioButtonCheckedIcon />}
                />
                <Typography
                  ml={1}
                  color={addr.selected ? 'black' : 'rgba(28, 27, 32, 0.7)'}
                  variant={addr.selected ? 'subtitle1' : 'body1'}
                >
                  {addr?.name || ''}
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={4}
              lg={4}
              flexDirection="row-reverse"
              sx={{ height: '90%', display: 'flex', alignItems: 'center' }}
            >
              <Box
                onClick={() => {
                  setOpen(true);
                  setModalStep('mapForm');
                  setDataForm(prevState => ({
                    ...prevState,
                    ...addr,
                    trem: addr.address,
                    longitude: addr.longitude,
                    latitude: addr.latitude
                  }));
                }}
                sx={{
                  display: {
                    xs: addr.selected ? 'flex' : 'flex',
                    md: 'flex'
                  },
                  alignItems: 'center',
                  cursor: 'pointer'
                }}
              >
                <i
                  className="icon-Edit"
                  style={{ color: 'rgba(28, 27, 32, 0.4)' }}
                />
                <Typography
                  sx={{ ml: 1, display: { xs: 'none', lg: 'inline-block' } }}
                  color="text.secondary"
                  variant="body2"
                >
                  ویرایش
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} lg={12}>
          <Grid
            container
            sx={{ justifyContent: { sx: 'none', lg: 'space-around' } }}
            alignItems="center"
          >
            <Grid item xs={12} lg={8} sx={{ cursor: 'pointer' }}>
              <Box component="div" sx={{ display: 'flex' }}>
                <Typography
                  color="text.secondary"
                  variant="body2"
                  sx={{ mr: { xs: 1, lg: 1 } }}
                >
                  آدرس:
                </Typography>
                <Typography variant="body2" color="rgba(28, 27, 32, 0.7)">
                  {addr?.address || ''}
                </Typography>
              </Box>
              <Box
                component="div"
                sx={{ display: 'flex', mt: { xs: 1, lg: 3 } }}
              >
                <Typography color="text.secondary" variant="body1">
                  کد پستی:
                </Typography>
                <Typography variant="body1">
                  {addr?.postal_code || ''}
                </Typography>
              </Box>
            </Grid>
            {(isDesktop ? true : addr.selected) && (
              <Grid
                item
                xs={12}
                lg={4}
                className="mapBox"
                mt={{ xs: 2, md: 0 }}
              >
                <Box
                  sx={{
                    display: {
                      lg: 'block'
                    },
                    height: { xs: '107px', lg: '107px' },
                    width: { xs: '100% ', lg: '155px' }
                  }}
                >
                  <NeshanShowingMap
                    styles={{
                      zIndex: '0'
                    }}
                    latLng={[
                      addr?.latitude ?? '35.700240761628834',
                      addr.longitude ?? '51.3374561782251'
                    ]}
                  />
                </Box>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
      {/* ************************************** DrawerModal  ***************************************** */}

      {open && (
        <>
          <DrawerModal
            setOpen={setOpen}
            heightContent={'100%'}
            {...{
              setOpen,
              open,
              handleClose
            }}
            body={
              <DrawerModalContent>
                {!isDesktop && (
                  <Button
                    sx={{ padding: '14px 16px' }}
                    onClick={() => handleClose()}
                  >
                    <>
                      <i className="icon-arrow-right11" />
                      <Typography
                        variant="body1"
                        color={'#1C1B20'}
                        fontWeight="500"
                        ml={1}
                      >
                        ویرایش آدرس
                      </Typography>
                    </>
                  </Button>
                )}
                <Box
                  sx={{
                    height: '90%',
                    ...(modalStep !== 'mapForm' && {
                      padding: '16px'
                    })
                  }}
                >
                  <form
                    onSubmit={handleSubmit(submitCreateHandler)}
                    style={{
                      height: '100%'
                    }}
                  >
                    <Stack
                      justifyContent={'space-between'}
                      sx={{
                        minHeight: '100%',
                        ...(modalStep === 'mapForm' && {
                          height: '100%'
                        })
                      }}
                    >
                      <Box
                        sx={{
                          ...(modalStep === 'mapForm' && {
                            height: '100%'
                          })
                        }}
                      >
                        {
                          <>
                            {modalStep === 'mapForm' && (
                              <Modal_mapContext
                                dataForm={dataForm}
                                handerSetDataForm={handerSetDataForm}
                              />
                            )}
                            {modalStep === 'addrForm' && (
                              <ModelContent
                                edit={true}
                                register={register}
                                control={control}
                                errors={errors}
                                dataForm={dataForm}
                                setOpen={setOpen}
                                setModalStep={setModalStep}
                              />
                            )}
                          </>
                        }
                      </Box>
                      <Box
                        sx={{
                          ...(modalStep === 'mapForm' && { padding: '0 16px' })
                        }}
                      >
                        {
                          <LoadingButton
                            fullWidth
                            type="submit"
                            loading={allAddress.loadings.updateLoading}
                            variant="contained"
                            color="primary"
                            sx={{
                              zIndex: 10000,
                              mt: 2,
                              width: { xs: '100%', md: '30%' }
                            }}
                            size="small"
                          >
                            {modalStep === 'mapForm'
                              ? 'ثبت مکان '
                              : 'ویرایش آدرس '}
                          </LoadingButton>
                        }
                      </Box>
                    </Stack>
                  </form>
                </Box>
              </DrawerModalContent>
            }
          />
        </>
      )}
    </CardContent>
  );
};

export default CardAddress;
