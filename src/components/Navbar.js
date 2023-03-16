import * as React from 'react';
import { styled} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import {Link} from 'react-router-dom'
import {reactLocalStorage} from 'reactjs-localstorage';
import {useNavigate} from "react-router-dom";
import axios from 'axios'
import { useFormik } from 'formik';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ReactComponent as Logo } from './logo.svg';



export default function Navbar() {
  const [Check, setCheck] = React.useState(false);
  let navigate = useNavigate();
  function logout(){
    let userID = reactLocalStorage.get('userID',);
    axios.post('https://pacific-sands-58031.herokuapp.com/user/viewprofile', {
        userID: userID
    })
    .then(function (response) {
        if (response.data.message === 'success') {
          reactLocalStorage.remove('token');
          reactLocalStorage.remove('userID');
          navigate("/")
          window.location.reload(true)
        }
        else {
            alert(response.data.message)
        }
    })
  }
  function viewprofile(){
    navigate('/CustomerProfile')
  }
  function history(){
    navigate('/History')
  }
  function wallet(){
    navigate('/wallet')
  }
  function chat(){
    navigate('/moizchat')
  }
  let username
  React.useEffect(() => {
    username = reactLocalStorage.get('userID', "", true);
    if(username !== ""){
      setCheck(true);
    }

  }, username)
  
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit: values => {
      console.log(values)

      axios.post('https://pacific-sands-58031.herokuapp.com/product/search', {
        name: values.name
      }
      )
      .then(function (response) {
        console.log(response)
        if(response.data.message === "success")
        {
          if(response.data.length===0){
            alert("Item not Found")
          }
          else{
            console.log(response.data)
            navigate('/product',{ state: {
              _id: response.data.data[0]._id,
              name: response.data.data[0].name,
              image: response.data.data[0].image,
              bid: response.data.data[0].bid,
            }})
          }
        }
        else
        {
          alert("Object Not Found");
        }
        
      })
      .catch(function (error) {
        console.log(error);
        alert("Error")
      });
    },
  });
  
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const open1 = Boolean(anchorEl1);
  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl1(null);
  };
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const open2 = Boolean(anchorEl2);
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="fixed" sx={{backgroundColor:"black"}}>
        <Toolbar>
          <Link to={{pathname: "/home"}} style={{margin:"0 15px",color: "#a7ac38"}}><Logo style={{width:"200px", height:"70px"}} className="d-inline-block"/></Link>
          <button className="btn"         id="demo-positioned-button1"
        aria-controls={open1 ? 'demo-positioned-menu1' : undefined}
        aria-haspopup="true"
        aria-expanded={open1 ? 'true' : undefined}
        onClick={handleClick} style={{fontSize:"150%", marginLeft:"50px", color:"white"}}>Auctions</button>
          <Menu
            id="demo-positioned-menu1"
            aria-labelledby="demo-positioned-button1"
            anchorEl={anchorEl1}
            open={open1}
            onClose={handleClose1}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <MenuItem >Current Auctions</MenuItem>
            <MenuItem >Past Auctions</MenuItem>
          </Menu>
          <button className="btn" id="demo-positioned-button2"
        aria-controls={open2 ? 'demo-positioned-menu2' : undefined}
        aria-haspopup="true"
        aria-expanded={open2 ? 'true' : undefined}
        onClick={handleClick} style={{fontSize:"150%", marginLeft:"20px", color:"white"}}>Categories</button>
          <Menu
            id="demo-positioned-menu2"
            aria-labelledby="demo-positioned-button2"
            anchorEl={anchorEl2}
            open={open2}
            onClose={handleClose1}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <MenuItem onClick={handleClose2}>Current Auctions</MenuItem>
            <MenuItem onClick={handleClose2}>Past Auctions</MenuItem>
          </Menu>
          <button className="btn btn-success" onClick={() =>{navigate("/AddProduct")}} style={{fontSize:"150%", marginLeft:"20px", borderRadius:"15px"}}>Sell With Us</button>
          <FormControl sx={{ width: '15%', backgroundColor: 'white', marginLeft:"550px", borderRadius:"15px"}} variant="standard">
          <Input
            type={'text'}
            id="name"
            disableUnderline = "false"
            placeholder="   Search Product"
            style={{paddingLeft: "10px"}}
            onChange={formik.handleChange}
            endAdornment={
                <IconButton
                  onClick={formik.handleSubmit}
                >
                <SearchIcon/>
                </IconButton>
            }
            label="search"
          />
        </FormControl>
        {Check?(
        <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleClick}
            color="inherit"
          >
            <AccountCircle sx={{fontSize: "200%"}} />
          </IconButton>
          ):(
            <button className="btn btn-dark" onClick={() =>{navigate("/")}} style={{fontSize:"100%", color:"white", borderRadius:"10px" ,margin:"0 0px 0 20px"}}>Sign In</button>)}
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleCloseMenu}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={viewprofile}>Profile</MenuItem>
            <MenuItem onClick={wallet}>Wallet</MenuItem>
            <MenuItem>Notifications</MenuItem>
            <MenuItem>Active Bids</MenuItem>
            <MenuItem>Auction Items</MenuItem>
            <MenuItem onClick={history}>Bidding History</MenuItem>
            <MenuItem onClick={logout}>Logout</MenuItem>
            <MenuItem onClick={chat}>Chat</MenuItem>
          </Menu>

        </Toolbar>
      </AppBar>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </Box>
    
  );
}