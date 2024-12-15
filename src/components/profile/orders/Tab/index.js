import { Tab, Box, Typography } from '@mui/material';
import {
  CanceledIcon,
  InprogressIcon,
  WaitingIcon,
  ReturnedIcon,
  ReceivedIcon
} from 'public/static/assets/svg/profile/orders';
import {
  CustomTabs,
  SeletableTab
} from 'src/components/profile/orders/Tab/style';

export const tabDetail = {
  canceled: { fa: 'لغو شده', icon: <CanceledIcon /> },
  returned: { fa: 'مرجوعی', icon: <ReturnedIcon /> },
  received: { fa: 'تحویل شده', icon: <ReceivedIcon /> },
  inProgress: { fa: 'در حال پردازش', icon: <InprogressIcon /> },
  waitingForPayment: { fa: 'در انتظار پرداخت', icon: <WaitingIcon /> }
};

const a11yProps = index => {
  return {
    id: `order-${index}`,
    'aria-controls': `orderpanel-${index}`
  };
};

const OrderTab = ({ tabs, handleChangeTab }) => {
  return (
    <Box mb={4} borderRadius="2px">
      <CustomTabs
        value={tabs.find(tab => tab.value.selected).key}
        onChange={(_, i) => {
          handleChangeTab(i);
        }}
      >
        {tabs.map((tab, i) => (
          <Tab
            key={tab.key}
            sx={{
              flex: {
                xs: tab.value.selected ? 4 : 1,
                sm: tab.value.selected ? 1.5 : 1,
                lg: 1
              },
              minWidth: 'unset'
            }}
            label={<TabLabel tab={tab} />}
            value={tab.key}
            {...a11yProps(i)}
          />
        ))}
      </CustomTabs>
    </Box>
  );
};

export default OrderTab;

const TabLabel = ({ tab }) => {
  return (
    <SeletableTab selected={tab.value.selected}>
      <Box className="icon-wrapper">{tabDetail[tab.key].icon}</Box>
      <Typography variant="overline" className="name-wrapper">
        <Typography
          variant="overline"
          color="inherit"
          sx={{
            display: {
              xs: tab.value.selected ? 'flex' : 'none',
              lg: 'flex'
            }
          }}
        >
          {tabDetail[tab.key]?.fa}
        </Typography>
        {tab.value.count}
      </Typography>
    </SeletableTab>
  );
};
