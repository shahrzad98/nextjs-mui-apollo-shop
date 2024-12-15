import {
  CircularProgress,
  Grid,
  Radio,
  Skeleton,
  Typography
} from '@mui/material';
import React from 'react';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';
import { currency } from 'utils/currency';
import Style from './style';

const Step3 = ({ shippingData }) => {
  const isMobile = useIsMobile();
  return (
    <Style container>
      {shippingData.packing.packs.length > 0 && (
        <Grid className="packing" container>
          <Grid container p={isMobile ? 1 : 1.5}>
            <Grid container className="header" p={isMobile ? 1 : 1.5}>
              <Typography variant="subtitle1">نوع بسته‌بندی</Typography>
            </Grid>
          </Grid>
          {shippingData?.packing.packs.map(e => (
            <Grid
              onClick={e.handleSelectPack}
              className="packingOption"
              p={isMobile ? 2 : 3}
              alignItems="center"
              justifyContent="space-between"
              key={e.id}
              container
            >
              <Grid className="packingName" gap={1}>
                <Radio color="primary" checked={e.selected} sx={{ p: 0 }} />
                <Typography
                  variant="body2"
                  color={e.selected ? '#1C1B20' : '#1C1B20B2'}
                >
                  {e.name}
                </Typography>
              </Grid>
              <Grid
                className="packingName"
                color={e.selected ? '#1C1B20B2' : '#1C1B2066'}
              >
                <Typography variant="body1" color="inherit">
                  {currency(e.cost)}
                </Typography>
                &nbsp;
                <Typography variant="body2" color="inherit">
                  تومان
                </Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
      )}
      <Grid
        mt={shippingData.packing.packs.length == 0 ? 0 : 4}
        className="packing"
        container
      >
        <Grid container p={isMobile ? 1 : 1.5}>
          <Grid container className="header" p={isMobile ? 1 : 1.5}>
            <Typography variant="subtitle1">نوع ارسال</Typography>
          </Grid>
        </Grid>

        {shippingData?.shippingMethod?.loading ? (
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            height={300}
          >
            <CircularProgress />
          </Grid>
        ) : (
          shippingData?.shippingMethod.shippingList.map(e => (
            <Grid
              onClick={e.handleSelectShipping}
              p={isMobile ? 2 : 3}
              pb={isMobile ? 1.5 : 2}
              className="packingOption"
              key={e.id}
              style={{ opacity: e.selected ? 1 : 0.7 }}
              container
            >
              <Grid
                container
                alignItems="center"
                justifyContent="space-between"
              >
                <Grid className="packingName" gap={1}>
                  <Radio color="primary" checked={e.selected} sx={{ p: 0 }} />
                  <Typography
                    variant="body2"
                    color={e.selected ? '#1C1B20' : '#1C1B20B2'}
                  >
                    {e.name}
                  </Typography>
                </Grid>
                <Grid
                  className="packingName"
                  color={e.selected ? '#1C1B20B2' : '#1C1B2066'}
                >
                  {e.loading ? (
                    <Skeleton variant="text" width={'100px'} />
                  ) : (
                    <>
                      <Typography variant="body1" color="inherit">
                        {currency(e.cost)}
                      </Typography>
                      &nbsp;
                      <Typography variant="body2" color="inherit">
                        تومان
                      </Typography>
                    </>
                  )}
                </Grid>
              </Grid>

              <Typography
                mt={1}
                variant="body2"
                color={e.selected ? '#1C1B20B2' : '#1C1B2066'}
              >
                {e.timeSendingDays > 0
                  ? `ارسال بعد از ${e.timeSendingDays} روز کاری`
                  : `ارسال در همان روز`}
              </Typography>
            </Grid>
          ))
        )}
      </Grid>
    </Style>
  );
};

export default Step3;
