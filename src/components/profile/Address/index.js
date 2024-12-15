import React, { useState, useEffect } from 'react';
import NoAddress from './EmptyAddress';
import CardAddress from './CardAddress';

import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import ModalFormContent from './Modal';
import { useForm } from 'react-hook-form';
import Modal_mapContext from './Modal/MapContext';
import DrawerModal from 'src/components/shared/DrawerModal';
import { useRouter } from 'next/router';
import LoadingButton from '@mui/lab/LoadingButton';
import { openSnackbar } from 'utils/snackbar';
import { StyledAddressLayout } from './styled';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';
import { useAddress } from '@digify/theme-kit';
import AdrSkeleton from './Skeleton';
export default function AddressLayout({ ...props }) {
  const [dataForm, setDataForm] = useState({
    latitude: '35.700240761628834',
    longitude: '51.3374561782251'
  });
  const [open, setOpen] = useState(false);
  const [modalStep, setModalStep] = useState('mapForm');
  const [renderList, setRenderList] = useState(true);
  const { data, handleCreateAddress, loadings } = useAddress();
  const router = useRouter();
  const isMobile = useIsMobile();

  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: { errors }
  } = useForm({});

  useEffect(() => {
    if (dataForm) {
      reset({
        province: dataForm?.state?.replace('استان', ''),
        city: dataForm.city,
        address: dataForm.trem
      });
    }
  }, [dataForm, reset]);

  /* create render for neshan map that show new postion */
  useEffect(() => {
    const timeout = setTimeout(() => {
      setRenderList(true);
    }, 200);
    return () => clearTimeout(timeout);
  }, [renderList]);

  const submitCreateAddr = dataAddr => {
    if (modalStep === 'mapForm') {
      setModalStep('addrForm');
      return 0;
    }
    handleCreateAddress(
      {
        ...dataAddr,
        no: parseInt(dataAddr.no),
        unit_number: parseInt(dataAddr.unit_number),
        latitude: `${dataForm.latitude}`,
        longitude: `${dataForm.longitude}`
      },
      () => {
        setOpen(false);
        setModalStep('addrForm');
        openSnackbar({
          message: 'ادرس با موفقیت اضافه شد'
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
    <>
      {loadings.fetchLoading ? (
        [...new Array(8)].map((ele, index) => (
          <AdrSkeleton key={index} {...ele} firstEle={index === 0} />
        ))
      ) : (
        <StyledAddressLayout {...props}>
          <Grid container>
            {isMobile ? (
              <Grid item alignItems={'center'}>
                <Button
                  className="back_btn"
                  onClick={() =>
                    router.push({
                      pathname: '/profile'
                    })
                  }
                >
                  <i className="icon-Arrowarrow-right" />
                  <Typography
                    variant="body1"
                    color={'#1C1B20'}
                    fontWeight="500"
                    ml={1}
                  >
                    آدرس ها
                  </Typography>
                </Button>
              </Grid>
            ) : null}
          </Grid>

          {renderList && data?.addresses?.length > 0 ? (
            <>
              {data?.addresses.map((ele, index) => (
                <div
                  key={ele.id}
                  style={{ marginTop: index !== 0 ? '16px' : 0 }}
                >
                  <CardAddress
                    data={ele}
                    Modal_mapContext={Modal_mapContext}
                    {...{
                      setRenderList
                    }}
                  />
                </div>
              ))}
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'flex-end'
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ width: { xs: '100%', md: '387px' }, marginTop: '30px' }}
                  onClick={() => {
                    setOpen(true);
                    setModalStep('mapForm');
                    reset();
                  }}
                >
                  افزودن آدرس جدید
                </Button>
              </div>
            </>
          ) : (
            <NoAddress
              {...{
                reset,
                setOpen,
                setModalStep
              }}
            />
          )}

          {/* *************************** Modal ******************************  */}

          {open && (
            <DrawerModal
              {...{
                setOpen,
                open,
                handleClose
              }}
              body={
                <Box sx={modalStep == 'mapForm' && { height: '100%' }}>
                  {isMobile && (
                    <Button
                      sx={{ padding: '14px 16px' }}
                      onClick={() => handleClose()}
                    >
                      <i className="icon-arrow-right11" />
                      <Typography
                        fontSize={'18px'}
                        color={'#1C1B20'}
                        fontWeight="500"
                        ml={1}
                      >
                        آدرس جدید
                      </Typography>
                    </Button>
                  )}
                  <Box
                    height={'90%'}
                    sx={{
                      ...(modalStep !== 'mapForm' && {
                        padding: '16px'
                      })
                    }}
                  >
                    <form
                      onSubmit={handleSubmit(submitCreateAddr)}
                      style={{
                        height: '100%'
                      }}
                    >
                      <Stack justifyContent={'space-between'} height="100%">
                        <Box
                          height={'100%'}
                          sx={{
                            ...(modalStep === 'mapForm' && {})
                          }}
                        >
                          {modalStep === 'mapForm' ? (
                            <Modal_mapContext
                              {...{ dataForm, handerSetDataForm }}
                            />
                          ) : (
                            <ModalFormContent
                              edit={true}
                              {...{
                                register,
                                control,
                                errors,
                                setModalStep,
                                setOpen,
                                dataForm
                              }}
                            />
                          )}
                        </Box>
                        <Box
                          sx={{
                            mt: 2,
                            ...(modalStep === 'mapForm' && {
                              padding: '0 16px'
                            })
                          }}
                        >
                          <LoadingButton
                            sx={{ width: { xs: '100%', md: '30%' } }}
                            loading={loadings.createLoading}
                            type="submit"
                            variant="contained"
                            color="primary"
                            size="small"
                          >
                            {modalStep === 'mapForm'
                              ? 'ثبت مکان '
                              : ' ثبت آدرس جدید'}
                          </LoadingButton>
                        </Box>
                      </Stack>
                    </form>
                  </Box>
                </Box>
              }
            />
          )}
        </StyledAddressLayout>
      )}
    </>
  );
}
