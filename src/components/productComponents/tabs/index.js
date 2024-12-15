import { useState } from 'react';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProductSpecifications from './ProductSpecifications';
import Comment from './comment';
import Collpase from './collapse';
import { TabContext, TabList, TabPanel } from '@mui/lab';

export default function BasicTabs({ desc, features, isDesktop }) {
  const tabsData = [
    {
      id: '1',
      label: 'توضیحات محصول',
      componenet: <Typography textAlign={'left'}>{desc}</Typography>,
      value: desc
    },
    {
      id: '2',
      label: 'مشخصات محصول',
      componenet: <ProductSpecifications features={features} />,
      value: features
    },
    {
      id: '3',
      label: 'نظرکاربران',
      componenet: <Comment />
    }
  ];

  const newTabsData = tabsData.filter(tab => tab.value != '');
  const getCurrentTab = () => {
    for (const tab of newTabsData) {
      return tab.id;
    }
  };

  const [currentTab, setCurrentTab] = useState(getCurrentTab());

  const handleChange = (_event, newValue) => {
    setCurrentTab(newValue);
  };

  if (!isDesktop) {
    return (
      <>
        <Collpase
          infoProduct={<ProductSpecifications features={features} />}
          descriptionProduct={
            <Typography sx={{ minHeight: '308px' }} textAlign={'left'}>
              {desc}
            </Typography>
          }
          comment={<Comment />}
        />
      </>
    );
  }

  return (
    <Box sx={{ width: '100%', minHeight: '308px' }}>
      <TabContext value={currentTab}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="tabsProduct">
            {/* {desc?.length > 0 && <Tab label="توضیحات محصول" value="1" />}
            {features?.length > 0 && <Tab label="مشخصات محصول" value="2" />}
            <Tab label="نظرکاربران" value="3" /> */}
            {newTabsData.map(tab => (
              <Tab label={tab.label} value={tab.id} key={tab.id} />
            ))}
          </TabList>
        </Box>
        {newTabsData.map(tab => (
          <TabPanel value={tab.id} key={tab.id}>
            {tab.componenet}
          </TabPanel>
        ))}
        {/* <TabPanel value="1">
          <Typography textAlign={'left'}>{desc}</Typography>
        </TabPanel>
        <TabPanel value="2">
          <ProductSpecifications features={features} />
        </TabPanel>
        <TabPanel value="3">
          <Comment />
        </TabPanel> */}
      </TabContext>
    </Box>
  );
}
