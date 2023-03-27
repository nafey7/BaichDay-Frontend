import React, { useState } from "react";
import InputVerificationCode from "react-input-verification-code";
import axios from "axios";
import Button from '@mui/material/Button';


function Test() {
  const [code, setCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/verify-code", { code })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
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

export default Test;


