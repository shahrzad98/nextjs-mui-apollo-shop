import React from 'react';
import { Box } from '@mui/material';
import OrderItem from 'src/components/profile/orders/OrderItem';
import BaseSkeleton from 'src/components/shared/Skeleton';
import EmptyOrder from 'src/components/profile/orders/EmptyOrder';
import InfiniteScroll from 'react-infinite-scroll-component';

const TabPanel = ({ ordersList, activeTab, loading }) => {
  const { handleLoadMore, orders, loading: ordersListLoading } = ordersList;

  return (
    <Box maxHeight="65vh" overflow="auto" id="scrollableList">
      {loading && <BaseSkeleton length={2} />}
      {orders.length > 0 ? (
        <InfiniteScroll
          dataLength={ordersListLoading ? orders.length + 2 : orders.length}
          next={() => handleLoadMore?.()}
          hasMore={!!ordersList?.hasMore}
          scrollableTarget="scrollableList"
        >
          {orders.map(order => (
            <OrderItem key={order.referenceCode} order={order} />
          ))}
        </InfiniteScroll>
      ) : (
        !ordersListLoading && <EmptyOrder name={activeTab} />
      )}
      {ordersListLoading && !loading && <BaseSkeleton length={2} />}
    </Box>
  );
};

export default TabPanel;
