import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Esofa from './Indicators/Esofa';
import Sofa from './Indicators/Sofa';
import Apacheii from './Indicators/Apacheii';

const tabPanelStyle = {
  // padding: '16px',
};

const tabStyles = {
  'Item One': {
    backgroundColor: '42424a',
    color: 'white', // 텍스트 색상을 흰색(white)으로 지정
  },
  'Item Two': {
    backgroundColor: '42424a',
    color: 'white', // 텍스트 색상을 흰색(white)으로 지정
  },
  'Item Three': {
    backgroundColor: '42424a',
    color: 'white', // 텍스트 색상을 흰색(white)으로 지정
  },
};

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={tabPanelStyle}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function IndicatorScore() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab
            label={(
                <span>
                    eSOFA <span style={{ color: 'red' }}>2</span>
                </span>
            )}
            {...a11yProps(0)}
            sx={tabStyles['Item One']}
          />
          <Tab
            label={(
                <span>
                    SOFA <span style={{ color: 'red' }}>5</span>
                </span>
            )}
            {...a11yProps(1)}
            sx={tabStyles['Item Two']}
          />
          <Tab
            label={(
                <span>
                    APACHE II <span style={{ color: 'red' }}>22</span>
                </span>
            )}
            {...a11yProps(2)}
            sx={tabStyles['Item Three']}
          />
        </Tabs>
      </Box>
      <Box>
        <CustomTabPanel value={value} index={0}>
          <Esofa />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Sofa />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Apacheii />
        </CustomTabPanel>
      </Box>
    </Box>
  );
}
