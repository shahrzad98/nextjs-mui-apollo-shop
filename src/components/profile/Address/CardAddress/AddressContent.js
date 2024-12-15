import React, { useEffect } from 'react';

import {
  Box,
  Button,
  CardActions,
  CardContent,
  Grid,
  Stack,
  Typography
} from '@mui/material';
import { useForm } from 'react-hook-form';
import DrawerModal from 'src/components/shared/DrawerModal';
import DeleteContent from './DeleteContent';
import ModelContent from '../Modal';
import LoadingButton from '@mui/lab/LoadingButton';
import { openSnackbar } from 'utils/snackbar';
import { useState } from 'react';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';
import { DrawerModalContent } from './styled';
// import useIsMobile from 'src/components/shared/Hooks/useIsMobile';

const AddressContent = ({
  handleUpdateAddress,
  Modal_mapContext,
  addr,
  setRenderList,
  allUseAddress
}) => {
  const isMobile = useIsMobile();

  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      ...addr,
      province: addr?.province.replace('استان', '')
    }
  });
  const [open, setOpen] = useState(false);
  const [modalType, setModalType] = useState({ type: '' });
  const [dataForm, setDataForm] = useState();
  const [modalStep, setModalStep] = useState('mapForm');
  useEffect(() => {
    if (dataForm?.trem) {
      reset({
        ...addr,
        province: dataForm?.state?.replace('استان', '') ?? dataForm?.province,
        city: dataForm.city,
        address: dataForm.trem
      });
    }
  }, [dataForm, addr, reset]);

  const handlerEdit = () => {
    setModalType({ type: 'edit' });
    setOpen(true);
    setModalStep('mapForm');
    setDataForm(prevState => ({
      ...prevState,
      ...addr,
      trem: addr.address,
      longitude: addr.longitude,
      latitude: addr.latitude
    }));
  };

  const submitHandler = dataAddr => {
    handleUpdateAddress(
      addr.id,
      {
        address: dataAddr.address,
        city: dataAddr.city,
        latitude: `${dataForm.latitude}`,
        longitude: `${dataForm.longitude}`,
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
          message: 'ادرس با موفقیت ویرایش شد'
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
  const submitEdit = dataAddr => {
    if (modalStep === 'mapForm') {
      setModalStep('addrForm');
      return 0;
    }
    submitHandler(dataAddr);
  };
  return (
    <div className="addresContent">
      <CardContent className="CardContent">
        <Box>
          <Typography color="text.secondary" variant="h5">
            {addr?.name || ''}
          </Typography>
        </Box>
        <Box display={'flex'} mt={{ xs: 1, md: 2 }}>
          <Typography> آدرس :{addr?.address || ''}</Typography>
        </Box>
        <Box mt={{ xs: 1, md: 2 }} display="flex">
          <Typography color="text.secondary" sx={{ mr: 1 }}>
            کد پستی :
          </Typography>
          <Typography>{addr?.postal_code || ''}</Typography>
        </Box>
      </CardContent>
      <CardActions className="cardActions">
        <Grid container>
          <Grid item xs={6} md={3}>
            <Button
              className="deleteBtn"
              onClick={() => {
                setOpen(true);
                setModalType({ type: 'delete' });
              }}
              startIcon={<i className="icon-delete" />}
              size="small"
            >
              حذف
            </Button>
          </Grid>
          <Grid item xs={3} md={3}>
            <Button
              className="editBtn"
              onClick={handlerEdit}
              startIcon={<i className="icon-Edit" />}
              size="small"
            >
              ویرایش
            </Button>
          </Grid>
        </Grid>
      </CardActions>
      {/* *************** modal ***************   */}

      {open && (
        <>
          <DrawerModal
            setOpen={setOpen}
            heightContent={modalType.type === 'delete' ? '60%' : '100%'}
            {...{
              setOpen,
              open,
              handleClose
            }}
            body={
              <DrawerModalContent>
                {isMobile && modalType.type === 'edit' && (
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
                    onSubmit={handleSubmit(submitEdit)}
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
                      {isMobile && modalType.type === 'delete' && (
                        <Box display={'flex'} justifyContent="flex-end">
                          <Button
                            sx={{ padding: '14px 16px' }}
                            onClick={() => handleClose()}
                          >
                            <i
                              style={{ fontSize: '20px' }}
                              className="icon-remove-add"
                            />
                          </Button>
                        </Box>
                      )}
                      <Box
                        sx={{
                          ...(modalStep === 'mapForm' && {
                            height: '100%'
                          })
                        }}
                      >
                        {modalType.type === 'delete' ? (
                          <>
                            <DeleteContent addr={addr} />
                          </>
                        ) : (
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
                        )}
                      </Box>
                      <Box
                        sx={{
                          ...(modalStep === 'mapForm' && { padding: '0 16px' })
                        }}
                      >
                        {modalType.type === 'delete' ? (
                          <Box
                            className="deleteDrawerModal"
                            mt={{ xs: 0, md: 2 }}
                          >
                            <LoadingButton
                              variant="contained"
                              type="submit"
                              loading={allUseAddress.loadings.removeLoading}
                              color="primary"
                              fullWidth
                              sx={{ mr: 1 }}
                              onClick={() => {
                                addr.handleRemoveAddress(() => {
                                  openSnackbar({
                                    message: 'ادرس با موفقیت حذف شد'
                                  });
                                });
                              }}
                              size="small"
                            >
                              حذف آدرس
                            </LoadingButton>
                            <Button
                              fullWidth
                              variant="outlined"
                              color="primary"
                              onClick={() => setOpen(false)}
                              size="small"
                            >
                              انصراف
                            </Button>
                          </Box>
                        ) : (
                          <>
                            <LoadingButton
                              loading={allUseAddress.loadings.updateLoading}
                              fullWidth
                              sx={{
                                zIndex: 10000,
                                mt: 2,
                                width: { xs: '100%', md: '30%' }
                              }}
                              type="submit"
                              variant="contained"
                              color="primary"
                              size="small"
                            >
                              {modalStep === 'mapForm'
                                ? 'ثبت مکان '
                                : 'ویرایش آدرس '}
                            </LoadingButton>
                          </>
                        )}
                      </Box>
                    </Stack>
                  </form>
                </Box>
              </DrawerModalContent>
            }
          />
        </>
      )}
    </div>
  );
};

export default AddressContent;
