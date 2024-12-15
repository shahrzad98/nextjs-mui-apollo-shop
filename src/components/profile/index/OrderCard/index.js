import { Grid, Typography } from '@mui/material';
import React from 'react';
import RefundSVG from 'public/static/assets/svg/profile/index/refund';
import ThemeLink from 'src/components/shared/ThemeLink';
import { Style } from './styled';

const OrderCard = ({ icon, count }) => {
  const renderIcon = icon => {
    switch (icon) {
      case 'waitingForPayment':
        return (
          <i className="icon-shipment-clock-shipment-delivey-shipment-management icons waitingForPayment " />
        );
      case 'delivered':
        return (
          <i className="icon-shipment-delivery-shipment-check-shipment-management icons delivered" />
        );

      case 'proccessing':
        return (
          <i className="icon-shipping-delivery-shipment-in-transit icons proccessing" />
        );

      case 'refund':
        return <RefundSVG />;

      default:
        return;
    }
  };

  const renderTitle = status => {
    switch (status) {
      case 'waitingForPayment':
        return 'در انتظار پرداخت';

      case 'delivered':
        return 'تحویل شده';

      case 'proccessing':
        return 'در حال پردازش';

      case 'refund':
        return 'مرجوعی';

      default:
        return;
    }
  };

  const renderLink = icon => {
    switch (icon) {
      case 'waitingForPayment':
        return;

      case 'delivered':
        return {
          status: 'received'
        };

      case 'proccessing':
        return {
          status: 'inProgress'
        };

      case 'refund':
        return {
          status: 'returned'
        };
      default:
        return;
    }
  };

  return (
    <Style p={2} container>
      <ThemeLink query={renderLink(icon)} href="/profile/orders">
        <Grid container justifyContent="space-between" alignItems="start">
          {renderIcon(icon)}
          <Typography variant="subtitle1" color="GrayText">
            {count}
          </Typography>
        </Grid>
        <Grid container mt={'12px'}>
          <Typography color={'GrayText'} fontSize={{ xs: '14px', lg: '16px' }}>
            {renderTitle(icon)}
          </Typography>
        </Grid>
      </ThemeLink>
    </Style>
  );
};

export default OrderCard;
