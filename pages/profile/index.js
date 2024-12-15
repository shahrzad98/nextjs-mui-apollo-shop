import { Grid } from '@mui/material';
import FinancialRecord from 'src/components/profile/index/Financial/record';
import { useOrders } from '@digify/theme-kit';
import ProfileFavourites from 'src/components/profile/index/Favourites';
import OrderCard from 'src/components/profile/index/OrderCard';
import ProfileLayout from 'src/components/profile/layout';

const Profile = () => {
  const { data } = useOrders();
  const { statusCount } = data;
  const { statuses } = statusCount;
  return (
    <ProfileLayout>
      <Grid container>
        <Grid pr={4} item md={7}>
          <ProfileFavourites />
        </Grid>
        <Grid item container md={5}>
          <Grid container alignContent="space-between" pr={2} item md={6}>
            <OrderCard
              count={statuses?.waitingForPayment.count}
              icon="waitingForPayment"
            />
            <OrderCard count={statuses?.inProgress.count} icon="proccessing" />
          </Grid>
          <Grid container alignContent="space-between" pl={2} item md={6}>
            <OrderCard count={statuses?.received.count} icon="delivered" />
            <OrderCard count={statuses?.returned.count} icon="refund" />
          </Grid>
        </Grid>
      </Grid>
      <FinancialRecord />
    </ProfileLayout>
  );
};

Profile.setPageConfig = {
  private: true
};

export default Profile;
