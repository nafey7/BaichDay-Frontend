import React from 'react';
import axios from 'axios';
import {reactLocalStorage} from 'reactjs-localstorage';


function History() {
    let userID = reactLocalStorage.get('userID', "", true);
    const [data, setData] = React.useState(null);
    axios.post('https://pacific-sands-58031.herokuapp.com/user/viewallbidproducts', {
        userID: userID
    })
    .then(function (response) {
        if(response.data.message === 'success')
        {
            let x = data;
            x = response.data.data
            setData(x)
        }
        else{
            alert(response.data.message)
        }
    })
    const dummydata = [
        {item: "Phone", bid: 3200, status: "Success"},
        {item: "Car", bid: 7000, status: "Failed"},
        {item: "Bike", bid: 4100, status: "In Progress"},
    ];
    console.log(data)
    return (
        <div style={{width: '100%', height: '100%'}}>
            <div className='centered'>
                <h2 style={{margin:"0 0 30px 0", textAlign:'left'}}>Your History</h2>
                {dummydata.map((d) => (
                    <div className="card" style={{width: "22rem", outline: "3px ridge grey"}}>
                        <h2 style={{margin:"0 0 15px 0", textAlign:'left'}}>Item: {d.item}</h2>
                        <h2 style={{margin:"0 0 15px 0", textAlign:'left'}}>Bid: {d.bid}</h2>
                        <h2 style={{margin:"0 0 15px 0", textAlign:'left'}}>Status: {d.status}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default History;