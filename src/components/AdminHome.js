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
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
// import { Card, CardGroup } from 'react-bootstrap';
import ReactApexChart from 'react-apexcharts';
import Sidebar from './AdminSidebar';
import Chart from 'react-apexcharts';
import CardHeader from '@mui/material/CardHeader';
import {List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import { FiberManualRecord } from '@material-ui/icons';
import { FaCoins } from 'react-icons/fa';


// const chartData = {
//   series: [
//     { name: 'Series A', data: [30, 40, 35, 50, 49, 60, 70, 91, 125] },
//     { name: 'Series B', data: [23, 12, 54, 61, 32, 56, 81, 19, 56] },
//     { name: 'Series C', data: [40, 45, 50, 58, 63, 61, 52, 48, 55] },
//   ],
//   options: {
//     chart: {
//       type: 'bar',
//       height: 10,
//       width:20,
//       stacked: true,
//     },
//     plotOptions: {
//       bar: {
//         horizontal: false,
//       },
//     },
//     xaxis: {
//       categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
//     },
//     legend: {
//       position: 'bottom',
//     },
//   },
// };

const events = [
  { title: 'Event 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', color: 'red' },
  { title: 'Event 2', description: 'Consectetur adipiscing elit', color: 'blue' },
  { title: 'Event 3', description: 'Sed do eiusmod tempor incididunt', color: 'green' },
  // Add more events as needed
];


export default function AdminHome() {

  function renderBulletIcon(color) {
    const styles = { color };
    return <FiberManualRecord style={styles} />;
  }
  const [chartData, setChartData] = React.useState({
    options: {
      chart: {
        background: 'transparent',
        foreColor: '#333',
        type: 'donut',
      },
      dataLabels: {
        enabled: true,
        style: {
          fontSize: '10px',
          // colors: ['#000'],
        },
      },
      labels: ['Series A', 'Series B', 'Series C', 'Series D'],
      legend: {
        position: 'right',
        offsetY: 0,
        height: 230,
      },
      responsive: [{
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
            offsetY: 0,
            height: 300,
          }
        }
      }],
    },
    series: [44, 55, 13, 33],
  });

  return (
 

    <div className='container'>
        <div>
          <h2 style={{ textAlign: 'left' }}>Control Panel</h2>
        </div>
        
        <Card sx={{ width: '100%', marginTop:"20px" }}>
          <CardHeader sx={{borderBottom: '1px solid rgba(0, 0, 0, 0.12)', lineHeight: '2.5rem', height: '2.5rem', textAlign: 'left', fontSize: '100%', height: '100%' }} title="Performance Analytics"/>
          <CardContent>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
              <Box sx={{ flexGrow: 1, width: '20%'}}>
                All Users
                {/* <Chart options={chartData.options} series={chartData.series[0].data} type="bar" /> */}
              </Box>
              <Box sx={{ flexGrow: 1, width: '20%' }}>
                Active Users
                {/* <Chart options={chartData.options} series={chartData.series[1].data} type="bar" /> */}
              </Box>
              <Box sx={{ flexGrow: 1, width: '20%' }}>
                <FaCoins size={24} color="#6d4c41" />
                {/* <Chart options={chartData.options} series={chartData.series[2].data} type="bar" /> */}
              </Box>
              <Box sx={{ flexGrow: 1, width: '20%' }}>
                Totals Items Sold
                {/* <Chart options={chartData.options} series={chartData.series[2].data} type="bar" /> */}
              </Box>
            </Box>
          </CardContent>
        </Card>
        <Box sx={{display:"flex", gap: 4, marginTop:"1%"}}>
        <Card sx={{ width: '49%' }}>
        <CardHeader sx={{borderBottom: '1px solid rgba(0, 0, 0, 0.12)', lineHeight: '2.5rem', height: '2.5rem', textAlign: 'left'}} title="Sales by Category"/>
          <CardContent>
          <Box sx={{ flexGrow: 1}}>
                <Chart options={chartData.options} series={chartData.series} type="donut" height="250" />
              </Box>
          
          </CardContent>
        </Card>
        <Card sx={{ width: '49%' }}>
        <CardHeader sx={{borderBottom: '1px solid rgba(0, 0, 0, 0.12)', lineHeight: '2.5rem', height: '2.5rem', textAlign: 'left'}} title="Timeline"/>
          <CardContent>
              <Box sx={{marginTop:"-20px"}}>
                <List >
                  {events.map((event) => (
                    <div>
                    <ListItem key={event.title} >
                      <ListItemIcon>{renderBulletIcon(event.color)}</ListItemIcon>
                      <ListItemText primary={event.title} secondary={event.description} />
                    </ListItem>
                    <Divider variant="middle" style={{ backgroundColor: 'black', height: '1px' }}/>
                    </div>
                    
                  ))}
                </List>
              </Box>
          </CardContent>
        </Card>
        </Box>

        {/* <Box sx={{ display: 'flex', flexDirection: 'row', gap: 4, marginTop:"1%"}}>
          <Card sx={{width: '49%', minHeight:"30%"}}>
            <CardContent>
              dssdsf
              fdgdfgd
            </CardContent>
          </Card>

          <Card sx={{width: '49%'}}>
            <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to cook
              together with your guests. Add 1 cup of frozen peas along with the mussels,
              if you like.
            </Typography>
            </CardContent>
          </Card>
        </Box> */}

{/* <Box sx={{ display: 'flex', flexDirection: 'row', gap: 4, marginTop:"1%"}}>
    <Card sx={{width: 'calc(50% - 2px)', minHeight:"30%"}}>
      <CardContent>
        Card 1
      </CardContent>
    </Card>

    <Card sx={{width: 'calc(50% - 2px)'}}>
      <CardContent>
        Card 2
      </CardContent>
    </Card>
  </Box> */}
      
      
      {/* <CardGroup>
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
          </CardGroup> */}
      </div> 


  );
}
