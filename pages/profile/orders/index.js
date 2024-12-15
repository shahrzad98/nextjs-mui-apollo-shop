import { Box, ButtonBase, Grid, Typography } from '@mui/material';
import OrderTab, { tabDetail } from 'src/components/profile/orders/Tab';
import { useOrders } from '@digify/theme-kit';
import ProfileLayout from 'src/components/profile/layout';
import TabPanel from 'src/components/profile/orders/TabPanel';
import { ArrowForwardIos } from '@mui/icons-material';
import { useRouter } from 'next/router';
import useIsMobile from 'src/components/shared/Hooks/useIsMobile';

const Orders = () => {
  const { data, loading } = useOrders();
  const {
    statusCount: { statuses, handleChangeTab },
    ordersList
  } = data;

  const { back } = useRouter();

  const isMobile = useIsMobile();

  return (
    <ProfileLayout>
      <Box>
        {isMobile && (
          <Grid pb={4}>
            <ButtonBase onClick={back}>
              <Typography
                variant="subtitle1"
                display="flex"
                gap={1}
                alignItems="center"
              >
                <ArrowForwardIos fontSize="inherit" />
                سفارشات
              </Typography>
            </ButtonBase>
          </Grid>
        )}
        <OrderTab
          tabs={Object.entries(statuses).map(([key, value]) => ({
            key,
            value
          }))}
          handleChangeTab={handleChangeTab}
        />
        <TabPanel
          ordersList={ordersList}
          loading={loading}
          activeTab={
            tabDetail[
              Object.entries(statuses).find(sts => sts[1].selected)?.[0]
            ]?.fa
          }
        />
      </Box>
    </ProfileLayout>
  );
};

Orders.setPageConfig = {
  private: true
};

export default Orders;
