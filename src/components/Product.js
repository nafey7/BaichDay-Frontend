import React from 'react'
import axios from 'axios'
import { reactLocalStorage } from 'reactjs-localstorage'
import { useFormik } from 'formik'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {useNavigate, useLocation} from 'react-router-dom';
import Timer from './Timer'

const style = {
  position: 'absolute',
  align: 'center',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Product() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const [bid, setBid] = React.useState()
  const location = useLocation();
  const [prop, setProp] = React.useState(location.state)
  const [time, setTime] = React.useState(0)
  const [isActive, setActive] = React.useState(false)
  let navigate = useNavigate();

  
  React.useEffect(()=> {

    axios.post('https://pacific-sands-58031.herokuapp.com/product/single/', {productID: prop._id})
    .then(function(res) {
        // console.log(res.data.data)
        setTime(res.data.data)
        setActive(true)    
    }, time)
    .catch(function(err) {
        console.log(err);
    })
  },[])

  const formik = useFormik({
    initialValues: {
      bidCost: prop.bid[prop.bid.length - 1].bidCost,
    },
    onSubmit: values => {
      console.log(values)
      // alert(JSON.stringify(values, null, 2));
      console.log(prop._id)
      console.log(reactLocalStorage.get('userID', "", true))
      axios.post('https://pacific-sands-58031.herokuapp.com/user/bidonproduct', {
        userID: reactLocalStorage.get('userID', "", true),
        productID: prop._id,
        bidCost: values.bidCost
      }
      )
      .then(function (response) {
        console.log(response)
        if(response.data.message === "success")
        {
          console.log(response.data.token);
          alert(response.data.message);
          navigate('/');
        }
        else
        {
          alert("Incorrect Fields");
        }
        
      })
      .catch(function (error) {
        console.log(error);
        alert("Incorrect Amount entered")
      });
    },
  });


  return (
    <div style={{width: 'auto', height: 'auto', display:'flex', maxWidth: '1200px', flexWrap: 'wrap'}}>
       <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form id = "signup_form" onSubmit={formik.handleSubmit} style={{align: 'center'}}>
            <h2 style={{margin:"0 0 30px 0", textAlign:'left'}}>Place Bid</h2>
            <div className="form-group">
              <input type="text" className="form-control" onChange={formik.handleChange} name="bidCost" id="bidCost" placeholder={prop.bid[prop.bid.length - 1].bidCost} style={{width: '100px', height: '40px'}}/>
            </div>

            <button type="submit" id="log" className="btn" style={{color:"white",backgroundColor:"#a7ac38", width:"100px", display: "block", margin: '30px auto', textAlign: 'center'}}>BID</button>
          </form>
          
        </Box>
      </Modal>
      <div className='row'>
        <div className="col-3" style={{textAlign: "center", padding: '2cm', margin:"30px 5cm 0cm 15%"}}>
          <div className="card" style={{width: "400px", outline: "3px ridge grey", height:"400px"}}>
            <img className="card-img-top" src={prop.image[0]} alt="Card" style={{height:"400px", width:"400px"}}/>
          </div>
        </div>
        <div className="col-3" style={{textAlign:"left", padding: '2cm'}}>
          <br/>
          <div style={{width: "100vh"}}>
            <div className="card-body">
              <div className='card-text row'>
                <h1 className='bold' style={{fontSize:"50px", textAlign:"left"}}>{prop.name}</h1>  
                <h3><b>Number of Bids:</b> {prop.bid.length - 1}</h3>
                
                <p className='mt-4 h1'><strong>Description :</strong> <span className='h2'>{prop.description}</span></p>
                <p className='mt-4 h1'><b>Current Bid :</b> <b className='text-danger '>${prop.bid[prop.bid.length-1].bidCost}</b></p>
                <div>
                  {isActive ? (
                    <Timer duration={time}/>
                  ) : (
                    <h5>Timer loading</h5>
                  )}
                </div>
                {/* <Timer duration={Math.floor(Math.random() * 10000)}/> */}
              </div>
            </div>
          </div>
          <button className='mt-5 btn' style={{fontSize:"20px", backgroundColor:"green", color:"white", width:"180px"}}variant="contained" onClick={handleOpen}><b>Bid Now</b></button>
        </div>
      </div>
     
    </div>
  )
}

export default Product