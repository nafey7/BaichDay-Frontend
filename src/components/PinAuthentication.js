import React, { useState } from "react";
import InputVerificationCode from "react-input-verification-code";
import axios from "axios";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";


function PinAuthentication() {
  const [code, setCode] = useState("");
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://pacific-sands-58031.herokuapp.com//user/confirmpin', {
      token: localStorage.getItem('token'),
      pin: code
    }).then(function(res) {
      if (res.data.message === "success") {
        navigate('/login');
      console.log(res.data.data)
      }
      else{
        alert(res.data.message)
      }
  })
  .catch(function(err) {
      console.log(err);
})
  };
  return (
    <div style={{background: 'white', display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <form onSubmit={handleSubmit}>
      <h1>Authentication Code</h1>
      <p style={{fontSize: '15px'}}>Your security is our top priority.<br />Enter the verification code sent to your email</p>
      <br/>
        <InputVerificationCode
          style={{ margin: "0 auto" }}
          length={6}
          onChange={(code) => setCode(code)}
        />
        <br />
        <Button type="submit" variant="contained" sx={{background: 'green'}}>Enter</Button>
      </form>
    </div>
  );
}

export default PinAuthentication;


