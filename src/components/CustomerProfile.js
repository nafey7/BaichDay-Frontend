import Avatar from '@mui/material/Avatar';
import React from 'react'
import {useNavigate} from "react-router-dom";
import {reactLocalStorage} from 'reactjs-localstorage';
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
    .then(function(response) {
        if (response.data.message === 'success'){
            let d = response.data.data;
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
    })

    function changeFirstName(e){
        let x = cust;
        x.firstName = e;
        setCust(x)
    }
    function changeLastName(e){
        let x = cust;
        x.lastName = e;
        setCust(x)
    }
    function changeEmail(e){
        let x = cust;
        x.emailAddress = e;
        setCust(x)
    }
    function changePassword(e){
        let x = cust;
        x.address = e;
        setCust(x)
    }
    function changePhoneNumber(e){
        let x = cust;
        x.phoneNumber = e;
        setCust(x)
    }
    function changeAddress(e){
        let x = cust;
        x.address = e;
        setCust(x)
    }
    function changeCity(e){
        let x = cust;
        x.city = e;
        setCust(x)
    }
    function changeState(e){
        let x = cust;
        x.state = e;
        setCust(x)
    }
    function changeCountry(e){
        let x = cust;
        x.country = e;
        setCust(x)
    }
    function done(){
        axios.post('http://localhost:8000/update_customer_info',cust)
            .then(function(res) {
                console.log(res)
                alert(res);                        
            })
            .catch(function(err) {
                console.log(err);
        })}

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
            <input className="form-control" type="text" onChange={(e)=>{changeFirstName(e.target.value)}} placeholder="firstname"/>
            <br></br>
            <label for="nameInput" className="form-label">Last Name</label>
            <input className="form-control" type="text" onChange={(e)=>{changeLastName(e.target.value)}} placeholder="Lastname"/>
            <br></br>
            <label for="nameInput" className="form-label">Email</label>
            <input className="form-control" type="text" onChange={(e)=>{changeEmail(e.target.value)}} placeholder="Email"/>
            <br></br>
            <label for="passwordInput" className="form-label">Password</label>
            <input className="form-control" type="password" onChange={(e)=>{changePassword(e.target.value)}} placeholder="********"/>
            <br></br>
            
            <label for="contactInput" className="form-label">Contact</label>
            <input className="form-control" type="text" onChange={(e)=>{changePhoneNumber(e.target.value)}} placeholder="+92 300 *******" />
            <br></br>
            
            <label for="addressInput" className="form-label">House Address</label>
            <input className="form-control" type="text" onChange={(e)=>{changeAddress(e.target.value)}}  placeholder="House Address"/>
            <br></br>
            
            <br></br>
            
            <label for="addressInput" className="form-label">City</label>
            <input className="form-control" type="text" onChange={(e)=>{changeCity(e.target.value)}}  placeholder="City"/>
            <br></br>
            <label for="contactInput" className="form-label">State</label>
            <input className="form-control" onChange={(e)=>{changeState(e.target.value)}}  type="text" placeholder="State" />
            <br></br>

            <br></br>
            
            <label for="addressInput" className="form-label">Country</label>
            <input className="form-control" type="text" onChange={(e)=>{changeCountry(e.target.value)}} placeholder="Country"/>
            <br></br>
            <div>
            <br/>
            
            <button type="button"style = {{margin: 'auto', width:"100px"}} onClick={done} className="btn btn-success">Apply</button>
            <br></br>
            </div>
            <br></br>
            <button style = {{margin: 'auto', width:"100px"}}type="button" className="btn btn-danger" /*onClick={()=>{deleteaccount()}}*/>Delete My Account</button>
            <br></br>
            <br></br>
        </div>
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
        </div>   
        
    )
}

export default CustomerProfile