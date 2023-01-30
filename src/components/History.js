import React from 'react';
import axios from 'axios';
import {reactLocalStorage} from 'reactjs-localstorage';


function History() {
    let userID = reactLocalStorage.get('userID', "", true);
    let data = []
    axios.post('https://pacific-sands-58031.herokuapp.com/user/viewallbidproducts', {
        userID: userID
    })
    .then(function (response) {
        if(response.data.message == 'success')
        {
            let dummy = response.data.data
            dummy.map((d) => {
                console.log(d)
            })
        }
    })
    const dummydata = [
        {item: "Phone", bid: 3200, status: "Success"},
        {item: "Car", bid: 7000, status: "Failed"},
        {item: "Bike", bid: 4100, status: "In Progress"},
    ];

    return (
        <div style={{width: '100%', height: '100%'}}>
            <div className='centered'>
                <h2 style={{margin:"0 0 30px 0", textAlign:'left'}}>Your History</h2>
                {dummydata.map((data) => (
                    <div className="card" style={{width: "22rem", outline: "3px ridge grey"}}>
                        <h2 style={{margin:"0 0 15px 0", textAlign:'left'}}>Item:{data.item}</h2>
                        <h2 style={{margin:"0 0 15px 0", textAlign:'left'}}>Bid:{data.bid}</h2>
                        <h2 style={{margin:"0 0 15px 0", textAlign:'left'}}>Status:{data.status}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default History;