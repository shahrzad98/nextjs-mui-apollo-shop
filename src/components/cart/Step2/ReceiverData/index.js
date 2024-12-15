import { Grid, TextField } from '@mui/material';

const ReceiverData = ({ address }) => {
  return (
    <Grid container>
      <Grid item xs={6} md={6}>
        <TextField
          value={address?.receiverInfo?.firstName}
          onChange={e =>
            address?.handleChangeReceiverInfo({ firstName: e.target.value })
          }
          name="firstName"
          placeholder="نام گیرنده را وارد کنید"
          sx={{ mt: 4, width: { xs: '100%', md: '95%' } }}
          variant="outlined"
          label={'نام'}
        />
      </Grid>
      <Grid item xs={6} md={6}>
        <TextField
          onChange={e =>
            address?.handleChangeReceiverInfo({ lastName: e.target.value })
          }
          value={address?.receiverInfo?.lastName}
          name="lastName"
          placeholder="نام خانوادگی گیرنده را وارد کنید"
          sx={{ mt: 4, width: { xs: '100%', md: '95%' } }}
          variant="outlined"
          label={'نام خانوادگی'}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          onChange={e =>
            address?.handleChangeReceiverInfo({ phoneNumber: e.target.value })
          }
          value={address?.receiverInfo?.phoneNumber?.replace('+98', '0')}
          name="phoneNumber"
          placeholder="شماره تلفن گیرنده را وارد کنید"
          sx={{ mt: 4, width: { xs: '100%', md: '95%' } }}
          variant="outlined"
          label={'شماره تلفن'}
        />
      </Grid>
    </Grid>
  );
};

export default ReceiverData;
