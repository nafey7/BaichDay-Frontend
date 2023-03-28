import React from 'react';
import './Login.css';
import axios from 'axios';
import {reactLocalStorage} from 'reactjs-localstorage';
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";



function Login() {
  const [Check, setCheck] = React.useState(false);
  const [userType, setType] = React.useState('');
  const [showAlert, setShowAlert] = React.useState(false);
  const [alertMessage, setAlertMessage] = React.useState('');
  let navigate = useNavigate();

  function handleUser(e) {
    setType(e);
  }

  function handleCheck(e) {
    setCheck(e);
    setAlertMessage('');
    setShowAlert(false);
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
      if (userType === 'customer') {
        console.log("Customer Here");
        axios.post('https://pacific-sands-58031.herokuapp.com/user/login', {
          emailAddress: values.email,
          password: values.password
        })
        .then(function (response) {
          if(response.data.message === "success")
          {
            reactLocalStorage.set('userID',response.data.data._id);
            reactLocalStorage.set('token',response.data.token);
            reactLocalStorage.set('wallet', response.data.data.wallet);
            console.log(response.data.data.wallet);
            navigate('/')
          }
          
        })
        .catch(function (error) {
          setAlertMessage('Incorrect Email or Password. Please try again.');
          setShowAlert(true);
        });
      }
      else if (userType === 'admin') {
        console.log("Admin Here");
        axios.post('https://pacific-sands-58031.herokuapp.com/admin/login', {
          emailAddress: values.email,
          password: values.password
        })
        .then(function (response) {
          console.log(response.data);
          if(response.data.message === "success")
          {
            console.log(response.data);
            reactLocalStorage.set('userID',response.data.data._id);
            reactLocalStorage.set('token',response.data.token);
            alert(response.data.message);
            navigate('/Admin')
          }
          
        })
        .catch(function (error) {
          setAlertMessage('Incorrect Email or Password. Please try again.');
          setShowAlert(true);
        });
      }
      else {
        setAlertMessage('Please select between Customer and Admin');
        setShowAlert(true);
      }
    },
  });

  const formikRegister = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
      axios.post('https://pacific-sands-58031.herokuapp.com/user/signup', {
        firstName: values.firstName,
        lastName: values.lastName,
        emailAddress: values.email,
        password: values.password
      })
      .then(function (response) {
        console.log(response.data);
        if (response.data.message === "success") {
        reactLocalStorage.set('token',response.data.token);
        navigate('/pinauthentication');
      }
      })
      .catch(function (error) {
        setAlertMessage(error.response.data.data);
        setShowAlert(true);
      });
    },
  });

  return (
    <div style={{ height: '195%' }}>
      <div className="split left">
        <div className="centered">
          <img style ={{width:"110vh",height:"100vh"}} src='https://www.rcrwireless.com/wp-content/uploads/2021/11/95542665_s.jpg' alt="Avatar woman"/>
        </div>
      </div>

      <div className="split right">
        <div className="centered">
          {Check?(
          <form id = "signup_form" onSubmit={formikRegister.handleSubmit} style={{width: '400px', height: '100%', margin: '20px 0 0 0px', padding: '20px', background: 'white'}} >
            <h2 style={{margin:"0 0 30px 0", textAlign:'left'}}>Sign Up</h2>
            <div className="form-group">
              <input type="text" className="form-control" onChange={formikRegister.handleChange} value={formikRegister.values.firstName} name="firstName" id="firstName" placeholder="First Name" style={{width: '400', height: '40px', paddingLeft: '8px', backgroundColor:""}} required/>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" onChange={formikRegister.handleChange} value={formikRegister.values.lastName} name="lastName" id="lastName" placeholder="Last Name" style={{width: '400', height: '40px', paddingLeft: '8px', backgroundColor:""}} required/>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" onChange={formikRegister.handleChange} value={formikRegister.values.email} name="email" id="email" placeholder="Email" style={{width: '400', height: '40px', paddingLeft: '8px', backgroundColor:""}} required/>
            </div>
            <div className="form-group">
              <input type="password" className="form-control" onChange={formikRegister.handleChange} value={formikRegister.values.password} name="password" id="password" placeholder="Password" style={{width: '400', height: '40px', paddingLeft: '8px', backgroundColor:""}} required/>
            </div>
            {showAlert && (
              <div style={{marginTop:"-10px", marginBottom:"10px"}}>
                <strong style={{ fontSize:"1.2em", fontWeight:"bold", color:"red" }}>{alertMessage}</strong> 
              </div>
            )}

            <button type="submit" id="log" className="btn" style={{color:"white",backgroundColor:"#a7ac38", width:"100px", display: "block", margin: '30px auto', textAlign: 'center'}}>SIGN UP</button>
            <p>Already have an account? <a href="#" onClick={()=>{handleCheck(false)}} style={{color: '#a7ac38'}}>Sign In</a></p>
          </form>
          ):(
          <form id = "login_form" onSubmit={formik.handleSubmit} style={{width: '400px', height: '500px', overflow: 'hidden', margin: '200px 0 0px 0px', padding: '20px', background: 'white'}} >
            <h2 style={{margin:"0 0 30px 0",textAlign:'left'}}>Sign In</h2>
            <div className="form-group">
                <input type="text" className="form-control" name="email" id="email" onChange={formik.handleChange} value={formik.values.email} placeholder="Email" style={{width: '400', height: '40px', paddingLeft: '8px', backgroundColor:""}}/>
            </div>
            <div className="form-group">
                <input type="password" className="form-control" id="password" name="password" onChange={formik.handleChange} value={formik.values.password} placeholder="Password" style={{width: '400', height: '40px', paddingLeft: '8px', backgroundColor:"white"}}/>
            </div>
            {showAlert && (
              <div style={{marginTop:"-10px", marginBottom:"10px"}}>
                <strong style={{ fontSize:"1.2em", fontWeight:"bold", color:"red" }}>{alertMessage}</strong> 
              </div>
            )}
            <div style={{display: "flex", justifyContent:"space-evenly"}}>
              <label style={{ display: 'flex', alignItems: 'center' }}>
                <input type="radio" name="userType" style={{ marginRight: '5px', WebkitAppearance: 'none', height: '16px', width: '16px', borderRadius: '50%', border: '2px solid #ccc' }} onChange={(e) => { handleUser(e.target.value) }} value="customer" /> Customer
              </label>
              <label style={{ display: 'flex', alignItems: 'center' }}>
                <input type="radio" name="userType" style={{ marginRight: '5px', WebkitAppearance: 'none', height: '16px', width: '16px', borderRadius: '50%', border: '2px solid #ccc' }} onChange={(e) => { handleUser(e.target.value) }} value="admin" /> Admin
              </label>
            </div>
            <a href="#" style={{color: '#a7ac38',textAlign:'right'}}><p>Forgot password?</p></a>
            <br></br>
            <button type="submit" id="log" className="btn" style={{width:"100px",display: "block", margin: '0 auto', textAlign: 'center',backgroundColor:"#a7ac38"}}>SIGN IN</button>
            <br></br>
            <p>Don't have an account? <a href="#" style={{color: '#a7ac38'}} onClick={()=>{handleCheck(true)}} >Sign Up</a></p>
          </form>)}    
        </div>
      </div>
    </div>
  )
}

export default Login