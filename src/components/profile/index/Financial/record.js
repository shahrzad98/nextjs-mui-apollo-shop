import { Grid, Typography } from '@mui/material';
import { useLoyaltyLogs } from '@digify/theme-kit';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import FinancialCard from './card';
import { StyleRecord } from './styled';

const FinancialRecord = () => {
  const { data, handleLoadMore, hasMore } = useLoyaltyLogs();

  return (
    <StyleRecord alignContent="start" mt={'24px'} container>
      <Grid container>
        <h4>تاریخچه اعتبارها</h4>
      </Grid>
      <Grid alignItems="center" container className="header" mt={'24px'}>
        <Grid pl={4} item xs={2}>
          <Typography variant="body2">عنوان</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="body2">مبلغ</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="body2">تاریخ</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="body2">زمان</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="body2">مانده اعتبار</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="body2">شرح</Typography>
        </Grid>
      </Grid>
      <Grid id="scrollableDiv" container className="content">
        <InfiniteScroll
          dataLength={data.logs.length}
          next={() => handleLoadMore()}
          hasMore={hasMore}
          scrollableTarget="scrollableDiv"
        >
          {data.logs.map(e => (
            <FinancialCard key={e.id} log={e} />
          ))}
        </InfiniteScroll>
      </Grid>
    </StyleRecord>
  );
};

export default FinancialRecord;
