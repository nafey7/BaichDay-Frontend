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
import { Nav } from 'react-bootstrap';
import './AdminHome.css';
import {Link} from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home'; 
import { Card, CardGroup } from 'react-bootstrap';
import ReactApexChart from 'react-apexcharts';
import Sidebar from './AdminSidebar';


interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}


// function TabPanel(props: TabPanelProps) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`full-width-tabpanel-${index}`}
//       aria-labelledby={`full-width-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// function a11yProps(index: number) {
//   return {
//     id: `full-width-tab-${index}`,
//     'aria-controls': `full-width-tabpanel-${index}`,
//   };
// }

// function Product(){
//   const [dataprops,setDataprops] = React.useState([{name: "", image: "img.png", bid: [0]}]);
//   let navigate = useNavigate();
//   React.useEffect(()=> {
//         axios.get('https://pacific-sands-58031.herokuapp.com/product/')
//         .then(function(res) {
//             console.log(res.data.data)
//             setDataprops(res.data.data)          
//         }, dataprops)
//         .catch(function(err) {
//             console.log(err);
//       })

//   },[])
//   return(
//           <DisplayCards test={dataprops}/>  
//   )
// }

export default function FullWidthTabs() {

  // class ApexChart extends React.Component {
  //   constructor(props) {
  //     super(props);
  
  //     this.state = {
      
  //       series: [{
  //           name: "Desktops",
  //           data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  //       }],
  //       options: {
  //         chart: {
  //           height: 350,
  //           type: 'line',
  //           zoom: {
  //             enabled: false
  //           }
  //         },
  //         dataLabels: {
  //           enabled: false
  //         },
  //         stroke: {
  //           curve: 'straight'
  //         },
  //         title: {
  //           text: 'Product Trends by Month',
  //           align: 'left'
  //         },
  //         grid: {
  //           row: {
  //             colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
  //             opacity: 0.5
  //           },
  //         },
  //         xaxis: {
  //           categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  //         }
  //       },
      
      
  //     };
  //   }
  // }
  
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
 
      // <div id="chart">
      //   <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
      // </div>
 
  //   <Box sx={{}}>

  //   <Box sx={{ bgcolor: 'background.paper',display:"flex"}}>
  //     <div>
  //     <AppBar position="static">
  //       <Tabs
  //         value={value}
  //         onChange={handleChange}
  //         indicatorColor="secondary"
  //         textColor="inherit"
  //         variant="fullWidth"
  //         aria-label="full width tabs example"
  //       >
  //         <Tab label="View Statistics" {...a11yProps(0)} />
  //         <Tab label="View All Products" {...a11yProps(1)} />
  //         <Tab label="Item Three" {...a11yProps(2)} />
  //       </Tabs>
  //     </AppBar>
  //       <TabPanel value={value} index={0} dir={theme.direction}>
  //         Item One
  //       </TabPanel>
  //       <TabPanel value={value} index={1} dir={theme.direction}>
  //       <Product/>
  //       </TabPanel>
  //       <TabPanel value={value} index={2} dir={theme.direction}>
  //         Item Three
  //       </TabPanel>
  //       </div>
  //       <div className="card">
  //     <button className="btn btn-success btn-lg" >Add to Featured Products</button>
  //     <button className="btn btn-success mt-3 btn-lg" >Ban Users</button>
  //     <button className="btn btn-success mt-3 btn-lg" >View Banned Users</button>
  //   </div>

  //   </Box>
  // </Box>
<div className='container'>
  <CardGroup>
        <Card className='m-4 admincard'>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title className='admincard-heading'>Sales Summary</Card.Title>
            <Card.Text>
              
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card classNmame='m-4 admincard'>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title className='admincard-heading'>Active Users</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card className='m-4 admincard'>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title className='admincard-heading'>Total Auction Items</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This card has even longer content than the
              first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
  </div> 


  );
}
