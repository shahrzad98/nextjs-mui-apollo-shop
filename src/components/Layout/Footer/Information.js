import { useCustomization, useStoreInfo } from '@digify/theme-kit';
// import Star from 'public/static/assets/svg/footer/star';
import Phone from 'public/static/assets/svg/footer/shape';
import AddressAvg from 'public/static/assets/svg/footer/style-three-pin-shop';
import { Box, Grid, Typography } from '@mui/material';

const Information = () => {
  const {
    data: {
      footer: { information }
    }
  } = useCustomization('footer');

  const { store_address, telephone_number } = useStoreInfo();

  const items = [
    // {
    //   title: 'امتیاز',
    //   value: rating_score ? `${rating_score} از 5` : undefined,
    //   isShow: true,
    //   icon: <Star />
    // },
    {
      title: 'شماره تماس',
      value: telephone_number?.replace(/[\+]98/, '0'),
      isShow: information.value.includes('PHONE'),
      icon: <Phone />
    },
    {
      title: 'آدرس',
      value: store_address.address,
      isShow: information.value.includes('ADDRESS'),
      icon: <AddressAvg />
    }
  ];

  return (
    <Grid container>
      {items.map(
        ({ title, value, isShow, icon }) =>
          isShow &&
          !!value && (
            <Grid
              key={title}
              container
              alignItems="baseline"
              justifyContent="space-between"
              mb={3}
            >
              <Box display="flex" alignItems="center" gap={2}>
                {icon}
                <Typography color="rgba(28, 27, 32, 0.7)" variant="caption">
                  {title}
                </Typography>
              </Box>
              <Grid width="60%">
                <Typography
                  color="rgba(28, 27, 32, 0.7)"
                  variant="caption"
                  component="p"
                  textAlign="end"
                >
                  {value}
                </Typography>
              </Grid>
            </Grid>
          )
      )}
    </Grid>
  );
};

export default Information;
