import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom'
import { reactLocalStorage } from 'reactjs-localstorage';
import { useNavigate } from "react-router-dom";
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
  function logout() {
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
  function viewprofile() {
    navigate('/CustomerProfile')
  }
  function history() {
    navigate('/History')
  }
  function wallet() {
    navigate('/wallet')
  }
  function chat() {
    navigate('/chatlist')
  }
  let username
  React.useEffect(() => {
    username = reactLocalStorage.get('userID', "", true);
    if (username !== "") {
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
          if (response.data.message === "success") {
            if (response.data.length === 0) {
              alert("Item not Found")
            }
            else {
              console.log(response.data)
              navigate('/product', {
                state: {
                  _id: response.data.data[0]._id,
                  description: response.data.data[0].description,
                  name: response.data.data[0].name,
                  image: response.data.data[0].image,
                  bid: response.data.data[0].bid,
                }
              })
            }
          }
          else {
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
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [anchorEl3, setAnchorEl3] = React.useState(null);

  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClick3 = (event) => {
    setAnchorEl3(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl1(null);
    setAnchorEl2(null);
    setAnchorEl3(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "black" }}>
        <Toolbar>
          <Link to={{ pathname: "/" }} style={{ margin: "0 15px", color: "#a7ac38" }}><Logo style={{ width: "200px", height: "70px" }} className="d-inline-block" /></Link>
          <button className="btn" aria-controls="menu1" aria-haspopup="true" onClick={handleClick1} style={{ fontSize: "150%", marginLeft: "50px", color: "white" }}>Auctions</button>
          <Menu
            id="menu1"
            anchorEl={anchorEl1}
            keepMounted
            open={Boolean(anchorEl1)}
            onClose={handleClose}
          >
            <MenuItem >Current Auctions</MenuItem>
            <MenuItem >Past Auctions</MenuItem>
          </Menu>
          <button className="btn" id="demo-positioned-button2"
            aria-controls="menu2" aria-haspopup="true" onClick={handleClick2}
            style={{ fontSize: "150%", marginLeft: "20px", color: "white" }}>
            Categories
          </button>
          <Menu
            id="menu2"
            anchorEl={anchorEl2}
            keepMounted
            open={Boolean(anchorEl2)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Collectibles</MenuItem>
            <MenuItem onClick={handleClose}>Sporting</MenuItem>
            <MenuItem onClick={handleClose}>Electronics</MenuItem>
            <MenuItem onClick={handleClose}>Fashion</MenuItem>
            <MenuItem onClick={handleClose}>Toy</MenuItem>
            <MenuItem onClick={handleClose}>Music</MenuItem>
            <MenuItem onClick={handleClose}>Cars</MenuItem>
            <MenuItem onClick={handleClose}>Others</MenuItem>
          </Menu>
          <button className="btn btn-success" onClick={() => { navigate("/AddProduct") }} style={{ fontSize: "150%", marginLeft: "20px", borderRadius: "15px" }}>Sell With Us</button>
          <FormControl sx={{ backgroundColor: 'white', marginLeft: "40%", borderRadius: "15px" }} variant="standard">
            <Input
              sx={{
                height: 'auto',
                width: '300px',
                fontSize: '15px',
              }}
              type={'text'}
              id="name"
              disableUnderline="false"
              placeholder="   Search Product"
              style={{ paddingLeft: "10px" }}
              onChange={formik.handleChange}
              endAdornment={
                <IconButton
                  onClick={formik.handleSubmit}
                >
                  <SearchIcon />
                </IconButton>
              }
              label="search"
            />
          </FormControl>
          {Check ? (
            <IconButton
              sx={{
                fontSize: '20px',
              }}
              size="large"
              aria-label="account of current user"
              aria-controls="menu3"
              aria-haspopup="true"
              onClick={handleClick3}
              color="inherit"
            >
              <AccountCircle sx={{ fontSize: "200%" }} />
            </IconButton>
          ) : (
            <button className="btn btn-dark" onClick={() => { navigate("/login") }} style={{ fontSize: "100%", color: "white", borderRadius: "10px", margin: "0 0px 0 20px" }}>Sign In</button>)}
          <Menu
            id="menu3"
            anchorEl={anchorEl3}
            keepMounted
            open={Boolean(anchorEl3)}
            onClose={handleClose}
          >
            <MenuItem onClick={viewprofile}>Profile</MenuItem>
            <MenuItem onClick={wallet}>Wallet</MenuItem>
            <MenuItem>Notifications</MenuItem>
            <MenuItem>Active Bids</MenuItem>
            <MenuItem>Auction Items</MenuItem>
            <MenuItem onClick={history}>Bidding History</MenuItem>
            <MenuItem onClick={chat}>Chat</MenuItem>
            <MenuItem onClick={logout}>Logout</MenuItem>
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