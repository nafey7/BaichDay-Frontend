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
import { FaCoins, FaUsers, FaUserCheck, FaBox } from 'react-icons/fa';
import { Avatar } from '@mui/material';



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
  { title: 'Event 1', color: 'red' },
  { title: 'Event 2', color: 'blue' },
  { title: 'Event 3', color: 'gray' },
  { title: 'Event 4', color: 'red' },
  { title: 'Event 5', color: 'blue' },
  { title: 'Event 6', color: 'gray' },

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
        enabled: false,
        style: {
          fontSize: '10px',
          // colors: ['#000'],
        },
      },
      labels: ['Collectibles', 'Sporting', 'Electronics', 'Fashion', 'Toys','Music','Cars','Other'],
      legend: {
        position: 'bottom',
        offsetY: 0,
        height: 20,
        textWrap: true,
        markers: {
          offsetY: 0,
        },
      },
      responsive: [{
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
            offsetY: 0,
            height: 300,
            markers: {
              offsetY: 0,
            },
          }
        }
      }],
    },
    series: [10, 10, 10, 10,10,10,10,30],
  });
  

  return (
 

    <div className='container'>
        <div>
          <h2 style={{ textAlign: 'left' }}>Control Panel</h2>
        </div>
        
        <Card sx={{ width: '100%', marginTop:"20px" }}>
          <CardHeader sx={{borderBottom: '1px solid rgba(0, 0, 0, 0.12)', lineHeight: '2.5rem', height: '2.5rem', textAlign: 'left', fontSize: '100%', height: '100%' }} title="Performance Analytics"/>
          <CardContent>
            <Box sx={{ display: 'flex', flexDirection: 'row'}}>
              <Box sx={{ flexGrow: 1, width: '25%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h4 style={{marginBottom: '8px'}}>All Users</h4>
                <Box sx={{display: 'flex', flexDirection: 'row-reverse', alignItems: 'center'}}>
                  <span style={{marginLeft: '5px'}}>1000</span>
                  <Avatar sx={{ bgcolor: '#4caf50', width: 40, height: 40 }}>
                    <FaUsers size={24} color="white" />
                  </Avatar>
                </Box>
              </Box>
              <Box sx={{ flexGrow: 1, width: '25%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h4 style={{marginBottom: '8px'}}>Active Users</h4>
                <Box sx={{display: 'flex', flexDirection: 'row-reverse', alignItems: 'center'}}>
                  <span style={{marginLeft: '5px'}}>500</span>
                  <Avatar sx={{ bgcolor: '#4caf50', width: 40, height: 40 }}>
                    <FaUserCheck size={24} color="white" />
                  </Avatar>
                </Box>
              </Box>
              <Box sx={{ flexGrow: 1, width: '25%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h4 style={{marginBottom: '8px'}}>Total Revenue</h4>
                <Box sx={{display: 'flex', flexDirection: 'row-reverse', alignItems: 'center'}}>
                  <span style={{marginLeft: '5px'}}>$10,000</span>
                  <Avatar sx={{ bgcolor: '#4caf50', width: 40, height: 40 }}>
                    <FaCoins size={24} color="white" />
                  </Avatar>
                </Box>
              </Box>
              <Box sx={{ flexGrow: 1, width: '25%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h4 style={{marginBottom: '8px'}}>Total Items Sold</h4>
                <Box sx={{display: 'flex', flexDirection: 'row-reverse', alignItems: 'center'}}>
                  <span style={{marginLeft: '5px'}}>100</span>
                  <Avatar sx={{ bgcolor: '#4caf50', width: 40, height: 40 }}>
                    <FaBox size={24} color="white" />
                  </Avatar>
                </Box>
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
        <Box sx={{display:"flex", gap: 4, marginTop:"1%", marginBottom:"1%"}}>
        <Card sx={{ width: '49%' }}>
        <CardHeader sx={{borderBottom: '1px solid rgba(0, 0, 0, 0.12)', lineHeight: '2.5rem', height: '2.5rem', textAlign: 'left'}} title="Sales by Category"/>
          <CardContent>
          <Box sx={{ flexGrow: 1}}>
                <Chart options={chartData.options} series={chartData.series} type="donut" height="250" />
              </Box>
          
          </CardContent>
        </Card>
        <Card sx={{ width: '49%' }}>
        <CardHeader sx={{borderBottom: '1px solid rgba(0, 0, 0, 0.12)', lineHeight: '2.5rem', height: '2.5rem', textAlign: 'left'}} title="Items Sold"/>
          <CardContent>
              <Box sx={{marginTop:"-20px"}}>
                Item 1
                Item 2
                Item 3
              </Box>
          </CardContent>
        </Card>
        </Box>

        
      </div> 


  );
}
