// import ChooseProduct from "./choose";
import {
  CardHeader,
  Card,
  Divider,
  Typography,
  CardContent,
  Button,
  Grid,
  Box
} from '@mui/material';
import styled from '@emotion/styled';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import More from './more';
import Reason from './reason';
import ChooseProduct from './choose';

// import { useForm } from 'react-hook-form';
import { useRefundOrder } from '@digify/theme-kit';
import SkeletonChoose from './choose/skeleton';
import { useFieldArray, useForm } from 'react-hook-form';
import { useEffect } from 'react';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';

const StyleCard = styled(Card)`
  .MuiCardContent-root {
    padding-bottom: 0;
    padding: ${props =>
      props.isdesktop ? '26px' : props.step === 2 ? '10px' : '0'};
  }
  .box-content {
    max-height: ${props => (props.isdesktop ? '60vh' : '60vh')};
    overflow: auto;
  }
`;

export default function Refund() {
  const {
    step,
    handleNextStep,
    selectableItems,
    selectedItems,
    reasonItems,
    info,
    loading,
    navigateBack
  } = useRefundOrder();
  const isdesktop = !useIsMobile();

  const {
    handleSubmit,
    control,
    reset,
    setValue,
    getValues,
    formState: { errors }
  } = useForm({
    defaultValues: {
      data: []
    }
  });
  const { fields } = useFieldArray({
    control,
    name: 'data'
  });

  useEffect(() => {
    if (selectedItems.length) {
      reset({
        data: selectedItems
      });
    }
  }, [selectedItems, reset]);

  const onSubmitForm = data => {
    handleNextStep(step === 2 && data.data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitForm)}
      style={{ width: '100%', height: '95vh' }}
    >
      <Grid container height={'100%'}>
        <Grid item xs={12}>
          <StyleCard variant="outlined" {...{ step, isdesktop }}>
            <CardHeader
              sx={{
                cursor: 'pointer'
              }}
              title={
                <Box py={3} display={'flex'} onClick={navigateBack}>
                  <ArrowForwardIosIcon />
                  <Typography variant="h5"> درخواست مرجوعی</Typography>
                </Box>
              }
            />
            <Divider />
            {step === 1 && (
              <>
                <Box p={4} display={'flex'} flexDirection={'column'}>
                  <Typography
                    variant="h5"
                    component={'h1'}
                    fontSize={{ xs: '14px', md: '18px' }}
                  >
                    انتخاب کالاهای مرجوعی
                  </Typography>
                  <Typography
                    component={'h2'}
                    fontSize={{ xs: '14px', md: '16px' }}
                    mt={2}
                    color="text.secondary"
                  >
                    لطفا کالاهای مورد نظر برای درخواست مرجوعی را انتخاب کنید.
                  </Typography>
                </Box>
                <Divider />
              </>
            )}

            <CardContent>
              <Box className="box-content">
                {step === 1 &&
                  (loading ? (
                    <SkeletonChoose />
                  ) : (
                    selectableItems.map((ele, index) => (
                      <ChooseProduct
                        key={index}
                        data={ele}
                        lastElement={selectableItems.length - 1 == index}
                      />
                    ))
                  ))}
                {step === 2 &&
                  fields.map((data, index) => (
                    <Reason
                      key={index}
                      index={index}
                      lastElement={fields.length - 1 === index}
                      {...{
                        data,
                        errors,
                        reasonItems,
                        control,
                        setValue,
                        getValues
                      }}
                    />
                  ))}
                {step === 3 && (
                  <More
                    {...{
                      errors,
                      control,
                      info
                    }}
                  />
                )}
                {/* {step === 4 && <SuccessResponse />} */}
              </Box>
              {isdesktop && (
                <Box
                  textAlign={'right'}
                  mb={{ xs: 0, md: 3 }}
                  mt={{ xs: 2, md: 5 }}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{ width: { xs: '100%', md: '200px' } }}
                  >
                    تایید و ادامه
                  </Button>
                </Box>
              )}
            </CardContent>
          </StyleCard>
        </Grid>

        {!isdesktop && (
          <Grid item xs={12} alignSelf={'flex-end'}>
            <Box textAlign={'right'} mb={{ xs: 0, md: 3 }} mt={{ xs: 2 }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ width: { xs: '100%', md: '200px' } }}
              >
                تایید و ادامه
              </Button>
            </Box>
          </Grid>
        )}
      </Grid>
    </form>
  );
}
