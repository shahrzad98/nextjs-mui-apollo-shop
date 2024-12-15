import { Grid, Typography } from '@mui/material';
import DecreaseLoyaltySVG from 'public/static/assets/svg/profile/index/decreaseLoyaltySVG';
import IncreaseLoyaltySVG from 'public/static/assets/svg/profile/index/increaseLoyalty';
import React from 'react';
import { currency } from 'utils/currency';
import { StyleCard } from './styled';

const FinancialCard = ({ log }) => {
  const renderTitle = amount => {
    if (amount > 0) {
      return (
        <Typography className="increase" fontSize={{ xs: '10px', lg: '14px' }}>
          <IncreaseLoyaltySVG /> افزایش اعتبار
        </Typography>
      );
    }
    if (amount < 0) {
      return (
        <Typography className="decrease" fontSize={{ xs: '10px', lg: '14px' }}>
          <DecreaseLoyaltySVG /> کاهش اعتبار
        </Typography>
      );
    }
  };

  return (
    <StyleCard alignItems="center" container>
      <Grid pl={4} item container xs={2}>
        {renderTitle(log.amount)}
      </Grid>
      <Grid item container xs={2}>
        <Typography className="caption" variant="caption">
          {currency(Math.abs(log.amount))} <span>تومان</span>
        </Typography>
      </Grid>
      <Grid item container xs={2}>
        <Typography className="caption" variant="caption">
          {log.date}
        </Typography>
      </Grid>
      <Grid item container xs={2}>
        <Typography className="caption" variant="caption">
          {log.time}
        </Typography>
      </Grid>
      <Grid item container xs={2}>
        <Typography className="caption" variant="caption">
          {currency(log.account_credit)} <span>تومان</span>
        </Typography>
      </Grid>
      <Grid item container xs={2}>
        <Typography
          className="caption"
          fontSize={{
            xs: '10px',
            lg: '14px'
          }}
        >
          {log.reason}
        </Typography>
      </Grid>
    </StyleCard>
  );
};

export default FinancialCard;
