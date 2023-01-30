import Avatar from '@mui/material/Avatar';
import React from 'react'
import {useNavigate} from "react-router-dom";
import {reactLocalStorage} from 'reactjs-localstorage';
import { useFormik } from 'formik';
import axios from 'axios';

function CustomerProfile() {
    let userID = reactLocalStorage.get('userID', "", true);
    const [cust, setCust] = React.useState({
        firstName: '',
        lastName: '',
        emailAddress: '',
        password: 'password',
        phoneNumber: '',
        address: '',
        city: '',
        country: ''
    })
    axios.post('https://pacific-sands-58031.herokuapp.com/user/viewprofile', {
        userID: userID
    })
    .then(function (response){
        if(response.data.message === 'success'){
            let d = response.data.data
            let x = cust;
            x.firstName = d.firstName
            x.lastName = d.lastName
            x.emailAddress = d.emailAddress
            x.phoneNumber = d.phoneNumber
            x.address = d.address
            x.city = d.city
            x.country = d.country
            setCust(x)
        }
        else{
            alert(response.data.message)
        }
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
            <label for="nameInput" className="form-label">First Name</label>
            <input className="form-control" type="text" id = "nameInput" name= "nameInput" /*onChange={(e)=>{changename(e.target.value)}}*/ placeholder="firstname lastname"/>
            <br></br>
            <label for="nameInput" className="form-label">Last Name</label>
            <input className="form-control" type="text" id = "nameInput" name= "nameInput" /*onChange={(e)=>{changename(e.target.value)}}*/ placeholder="firstname lastname"/>
            <br></br>
            <label for="passwordInput" className="form-label">Password</label>
            <input className="form-control" type="password" id = "passwordInput" name= "passwordInput" /*onChange={(e)=>{changepassword(e.target.value)}}*/ placeholder="********"/>
            <br></br>
            
            <label for="contactInput" className="form-label">Contact</label>
            <input className="form-control" id = "contactInput" name="contactInput" /*onChange={(e)=>{changecontact(e.target.value)}}*/  type="text" placeholder="+92 300 *******" />
            <br></br>
            
            <label for="addressInput" className="form-label">House Address</label>
            <input className="form-control" type="text" id = "addressInput" name= "addressInput" /*onChange={(e)=>{changeaddress(e.target.value)}}*/  placeholder="House#, City"/>
            <br></br>
            
            <br></br>
            
            <label for="addressInput" className="form-label">City</label>
            <input className="form-control" type="text" id = "addressInput" name= "addressInput" /*onChange={(e)=>{changeaddress(e.target.value)}}*/  placeholder="House#, City"/>
            <br></br>
            <label for="contactInput" className="form-label">State</label>
            <input className="form-control" id = "contactInput" name="contactInput" /*onChange={(e)=>{changecontact(e.target.value)}}*/  type="text" placeholder="+92 300 *******" />
            <br></br>

            <br></br>
            
            <label for="addressInput" className="form-label">Country</label>
            <input className="form-control" type="text" id = "addressInput" name= "addressInput" /*onChange={(e)=>{changeaddress(e.target.value)}}*/  placeholder="House#, City"/>
            <br></br>

            <button type="button" /*onClick={done}*/ className="btn btn-success">Apply</button>
            <br></br>
            
            <br></br>
            <button style = {{margin: '24px 0px 0px 0px'}}type="button" className="btn btn-danger" /*onClick={()=>{deleteaccount()}}*/>Delete My Account</button>
        </div>
        </div>   
    )
}

export default CustomerProfile