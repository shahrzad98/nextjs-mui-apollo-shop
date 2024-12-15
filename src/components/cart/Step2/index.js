import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Stack,
  Typography
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import Add from '../../../../public/static/assets/svg/shared/Add';
import LoadingButton from '@mui/lab/LoadingButton';
// or
import { useForm } from 'react-hook-form';
import DrawerModal from 'src/components/shared/DrawerModal';
import ModalFormContent from 'src/components/profile/Address/Modal';
import Modal_mapContext from '../../profile/Address/Modal/MapContext';
import CardAddress from './CardAddress';
import ReceiverData from './ReceiverData';
import { openSnackbar } from 'utils/snackbar';
import { AddressRoot } from './styled';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';
export default function Adress({ address }) {
  const isMobile = useIsMobile();
  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: { errors }
  } = useForm({});
  const [open, setOpen] = useState(false);

  const [modalStep, setModalStep] = useState('mapForm');
  const [dataForm, setDataForm] = useState({
    latitude: '35.700240761628834',
    longitude: '51.3374561782251'
  });
  const [renderList, setRenderList] = useState(true);
  React.useEffect(() => {
    if (modalStep?.trem) {
      reset({
        province: modalStep?.state?.replace('استان', '') ?? modalStep?.province,
        city: modalStep.city,
        address: modalStep.trem
      });
    }
  }, [modalStep, reset]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRenderList(true);
    }, 400);
    return () => clearTimeout(timeout);
  }, [renderList]);

  const submitCreateHandler = dataAddr => {
    if (modalStep == 'mapForm') {
      setModalStep('addrForm');
      return 0;
    }
    address.handleCreateAddress(
      {
        ...dataAddr,
        no: parseInt(dataAddr.no),
        unit_number: parseInt(dataAddr.unit_number),
        latitude: `${dataForm?.latitude ?? '35.699877495170114'}`,
        longitude: `${dataForm?.longitude ?? '51.338051923212646'}`
      },
      () => {
        setOpen(false);
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
    <>
      <AddressRoot variant="outlined">
        <CardHeader
          className="cardHeader"
          title={
            <Typography className="headerTitel" variant="subtitle1">
              انتخاب آدرس
            </Typography>
          }
        />
        <Box
          className="addAddress"
          onClick={() => {
            setModalStep('mapForm');
            setOpen(true);
            reset();
          }}
          sx={{
            padding: '0 16px 16px 16px '
          }}
        >
          <Button
            sx={{ p: ' 2px 10px' }}
            startIcon={<Add stroke="rgba(28, 27, 32, 0.4)" />}
          >
            <Typography color={'rgba(28, 27, 32, 0.4)'}>آدرس جدید</Typography>
          </Button>
        </Box>
        <CardContent className="addrContent">
          {renderList &&
            address?.addresses.length > 0 &&
            address?.addresses.map(ele => {
              return (
                <div key={ele.id}>
                  <CardAddress
                    addr={ele}
                    allAddress={address}
                    {...{
                      setRenderList
                    }}
                  />
                  <Divider className="dividerClass" />
                </div>
              );
            })}
        </CardContent>
      </AddressRoot>
      <Card
        variant="outlined"
        sx={{ width: '95%', margin: { xs: '20px auto', lg: '2 0 ' } }}
      >
        <CardHeader
          title={<div style={{ textAlign: 'center' }}> اطلاعات گیرنده</div>}
          sx={{
            width: '96%',
            margin: '10px auto ',
            background: 'rgba(28, 27, 32, 0.05)'
          }}
        />
        <CardContent>
          <ReceiverData address={address} />
        </CardContent>
      </Card>
      {/* ========================== drawer modal ======================= */}
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
                  onSubmit={handleSubmit(submitCreateHandler)}
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
                        loading={address.loadings.createLoading}
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
    </>
  );
}
/* 
  body={
            <>
              {modalStep == 'mapForm' && (
                <Model_mapContext {...{ handerSetDataForm, dataForm }} />
              )}
              {modalStep == 'addrForm' && (
                <Model_ٍContent
                  {...{
                    control,
                    register,
                    Controller,
                    errors,
                    setModalStep,
                    setDataForm,
                    setOpen,
                    dataForm
                  }}
                  edit={true}
                />
              )}
            </>
          }
          actions={
            <LoadingButton
              fullWidth
              loading={address.createLoading}
              sx={{ mt: 3 }}
              type="submit"
              variant="contained"
              color="primary"
              size="small"
            >
              ثبت ادرس
            </LoadingButton>
          }


*/
