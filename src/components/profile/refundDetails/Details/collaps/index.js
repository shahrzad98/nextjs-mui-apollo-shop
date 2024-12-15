import React from 'react';
import { Box, Collapse, Typography } from '@mui/material';
import ArrowBack from 'public/static/assets/svg/shared/ArrowBack';
import { useReturnedOrderDetail } from '@digify/theme-kit';
// import ThemeLink from 'components/shared/ThemeLink';

const renameItems = {
  returnedReferenceCode: 'کد مرجوعی',
  returnedCreatedAt: 'تاریخ ثبت مرجوعی',
  orderReferenceCode: 'کد سفارش',
  orderCreatedAt: 'تاریخ ثیت سفارش'
};

export default function CollapsDetails() {
  const [detailOpen, setDetailOpen] = React.useState(false);
  const orderDetailTable = React.useRef();
  const { data } = useReturnedOrderDetail();
  const { invoice } = data;

  return (
    <Box overflow="hidden">
      <Box
        p={3}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box
          component={Typography}
          display="flex"
          alignItems="center"
          className="fs-18 fw-400 pointer"
          color="#1C1B20"
          onClick={() => {
            setDetailOpen(val => !val);
          }}
        >
          جزئیات مرجوعی
          <Box
            width="20px"
            height="20px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            mr={1}
            sx={{
              transition: '.3s',
              transform: `rotate(${detailOpen ? `-90` : `0`}deg)`
            }}
          >
            <ArrowBack color="#1C1B20" />
          </Box>
        </Box>
        {/* {step === 5 && (
          <ThemeLink
            href={`/profile/orders/returned/factor/${router.query.orderId}`}
          >
            <Box
              className="pointer fs-18"
              color="rgba(33, 69, 255, 1)"
              whiteSpace="nowrap"
            >
              دانلود فاکتور
            </Box>
          </ThemeLink>
        )} */}
      </Box>
      <Collapse in={detailOpen}>
        <Box width="1" ref={orderDetailTable}>
          {Object.entries(invoice)
            .filter(
              ([title, value]) =>
                value &&
                title &&
                Boolean(String(title).trim()) &&
                Boolean(String(value).trim())
            )
            .map(([title, value], i) => (
              <TableKeyValue key={title} {...{ title, value, i }} />
            ))}
        </Box>
      </Collapse>
    </Box>
  );
}

const TableKeyValue = ({ title, value, i }) => {
  return renameItems[title] ? (
    <Box
      width="1"
      bgcolor={i % 2 === 0 ? '#1C1B200D' : '#fff'}
      display="flex"
      alignItems="center"
    >
      <Box
        className="fs-16 fw-400"
        color="#1C1B2066"
        alignSelf="stretch"
        width="40%"
        p={3}
        borderLeft="1px solid #1C1B201A"
      >
        {renameItems[title]}
      </Box>
      <Box color="#1C1B20B2" className="fw-500" width="60%" p={3}>
        {value}
      </Box>
    </Box>
  ) : null;
};
