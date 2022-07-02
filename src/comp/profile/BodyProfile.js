import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export function BodyProfile() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" style={{margin:'30px 15% 0px 15%'}}>
          <Tab label="Ý tưởng" {...a11yProps(0)} />
          <Tab label="Người theo dõi" {...a11yProps(1)} />
          <Tab label="Đang theo dõi" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}  style={{margin:'0px 15%'}}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}  style={{margin:'0px 15%'}}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}  style={{margin:'0px 15%'}}>
        Item Three
      </TabPanel>
    </Box>
  );
}