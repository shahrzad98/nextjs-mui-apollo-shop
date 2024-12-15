import styled from '@emotion/styled';
import { Button, CircularProgress, Grid } from '@mui/material';
import React from 'react';
import { currency } from 'utils/currency';

const Style = styled(Grid)`
  width: 100vw;
  height: 72px;
  position: fixed;
  height: 72px;
  bottom: 0px;
  right: 0;
  border-top: 0.5px solid rgba(28, 27, 32, 0.2);
  background-color: #fff;
  z-index: 1;
  padding: 12px 16px;
  button {
    height: 100%;
  }
  p {
    font-size: 12px;
    margin: 0;
    text-align: end;
    color: #1c1b2066;
    margin-bottom: 4px;
  }
  h4 {
    font-size: 18px;
    margin: 0;
    text-align: end;
    span {
      font-size: 14px;
    }
  }
`;

const BottomNavCart = ({ step, onClick, loading, totalCost, disabledBtn }) => {
  const renderBtn = step => {
    switch (step) {
      case 1:
        return 'ثبت سفارش';
      case 2:
        return 'تایید آدرس';
      case 3:
        return 'تایید';
      case 4:
        return 'تایید و پرداخت';

      default:
        return;
    }
  };

  return (
    <Style container justifyContent="space-between">
      <Button
        disabled={loading || disabledBtn}
        onClick={onClick}
        variant="contained"
        color="primary"
      >
        {loading ? <CircularProgress /> : renderBtn(step)}
      </Button>
      <Grid>
        <p>جمع کل سفارش</p>
        <h4>
          {currency(totalCost)} <span>تومان</span>
        </h4>
      </Grid>
    </Style>
  );
};

export default BottomNavCart;
