import Avatar from '@mui/material/Avatar';
import React from 'react'
import {useNavigate} from "react-router-dom";
import {reactLocalStorage} from 'reactjs-localstorage';
import axios from 'axios';

function CustomerProfile() {
    let userID = reactLocalStorage.get('userID', "", true);
    axios.post('https://pacific-sands-58031.herokuapp.com/user/viewprofile', {
        userID: userID
    })
    .then(function (response){
        console.log(response)
    })

    return (
        <div className="container" style={{ margin: "50px 150px", height:"50%", backgroundColor:"white", position:"relative", width:"100%"}}>
        <div className="row">
            <h1 style={{color: '#a7ac38', }}>My Profile</h1>
        </div>
        <div className="row" style ={{ margin: "20px"}}>
            <Avatar
                alt="Remy Sharp"
                sx={{ width: 128, height: 128 }}>H</Avatar>

            
        </div>
        
        <div className="row">
            <div className="col">
            
            <label for="addressInput" className="form-label">House Address</label>
            <input className="form-control" type="text" id = "addressInput" name= "addressInput" /*onChange={(e)=>{changeaddress(e.target.value)}}*/  placeholder="House#, City"/>
            <br></br>
            <label for="contactInput" className="form-label">Contact</label>
            <input className="form-control" id = "contactInput" name="contactInput" /*onChange={(e)=>{changecontact(e.target.value)}}*/  type="text" placeholder="+92 300 *******" />
            <br></br>

            <br></br>
            </div>
            <div className="col" style ={{ margin: "0 50px"}}>
            <label for="nameInput" className="form-label">Name</label>
            <input className="form-control" type="text" id = "nameInput" name= "nameInput" /*onChange={(e)=>{changename(e.target.value)}}*/ placeholder="firstname lastname"/>
            <br></br>
            <label for="passwordInput" className="form-label">Password</label>
            <input className="form-control" type="password" id = "passwordInput" name= "passwordInput" /*onChange={(e)=>{changepassword(e.target.value)}}*/ placeholder="********"/>
            <br></br>
            <button type="button" /*onClick={done}*/ className="btn btn-success">Apply</button>
            <br></br>
            </div>
            <div className="col-4">
            <button style = {{margin: '24px 0px 0px 0px'}}type="button" className="btn btn-danger" /*onClick={()=>{deleteaccount()}}*/>Delete My Account</button>
            </div>
        </div>
        </div>   
    )
}

export default CustomerProfile