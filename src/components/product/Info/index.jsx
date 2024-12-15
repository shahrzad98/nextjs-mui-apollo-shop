import * as React from 'react';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Grid, Stack, Tab, Typography } from '@mui/material';
import { InfoContainer } from './info.style';
import Comments from './Comments';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import { useEffect } from 'react';
const ProductInfo = ({ description, features }) => {
  const [value, setValue] = React.useState('1');
  useEffect(
    () => setValue(!!description ? '1' : !!features?.length ? '2' : '3'),
    [description, features]
  );
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <InfoContainer>
      <TabContext value={value}>
        <Box className="tabListContainer">
          <TabList
            indicatorColor="secondary"
            onChange={handleChange}
            aria-label="lab API tabs example"
          >
            {description && <Tab label="توضیحات محصول" value="1" />}
            {!!features?.length && <Tab label="مشخصات محصول" value="2" />}
            <Tab label="نظرات کاربران" value="3" />
          </TabList>
        </Box>
        {description && (
          <TabPanel
            value="1"
            sx={{ whiteSpace: 'pre-wrap', overflowWrap: 'anywhere' }}
          >
            {description}
          </TabPanel>
        )}
        {!!features?.length && (
          <TabPanel value="2">
            {features?.map(item => (
              <Grid
                key={`product-feature-${Math.floor(Math.random() * 10000)}`}
                container
              >
                <Grid item xs={2}>
                  <Stack direction="row" alignItems="center">
                    <Brightness1Icon
                      sx={{ fontSize: '5px', color: 'black.40' }}
                    />
                    <Typography
                      color="text.secondary"
                      ml={1}
                      sx={{ overflowWrap: 'anywhere' }}
                    >
                      {item?.title}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid
                  item
                  xs={4}
                  color="text.primary"
                  sx={{ overflowWrap: 'anywhere' }}
                >
                  {item?.description}
                </Grid>
              </Grid>
            ))}
          </TabPanel>
        )}
        <TabPanel value="3">
          <Comments />
        </TabPanel>
      </TabContext>
    </InfoContainer>
  );
};

export default ProductInfo;
