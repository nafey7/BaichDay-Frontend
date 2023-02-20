import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import DisplayCards from './DisplayCards';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

function Product(){
  const [dataprops,setDataprops] = React.useState([{name: "", image: "img.png", bid: [0]}]);
  let navigate = useNavigate();
  React.useEffect(()=> {
        axios.get('https://pacific-sands-58031.herokuapp.com/product/')
        .then(function(res) {
            console.log(res.data.data)
            setDataprops(res.data.data)          
        }, dataprops)
        .catch(function(err) {
            console.log(err);
      })

  },[])
  return(
          <DisplayCards test={dataprops}/>  
  )
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <Box sx={{}}>

    <Box sx={{ bgcolor: 'background.paper',display:"flex"}}>
      <div>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="View Statistics" {...a11yProps(0)} />
          <Tab label="View All Products" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
        <TabPanel value={value} index={0} dir={theme.direction}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <Product/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
        </div>
        <div class="card">
      <button className="btn btn-success btn-lg" >Add to Featured Products</button>
      <button className="btn btn-success mt-3 btn-lg" >Ban Users</button>
      <button className="btn btn-success mt-3 btn-lg" >View Banned Users</button>
    </div>

    </Box>
  </Box>
  );
}
