import React from 'react';
import axios from 'axios';
import { reactLocalStorage } from 'reactjs-localstorage';


function History() {
    let userID = reactLocalStorage.get('userID', "", true);
    const [data, setData] = React.useState([]);
    axios.post('https://pacific-sands-58031.herokuapp.com/user/viewallbidproducts', {
        userID: userID
    })
        .then(function (response) {
            if (response.data.message === 'success') {
                let x = data;
                x = response.data.data
                setData(x)
            }
            else {
                alert(response.data.message)
            }
        });
    function Status(sold) {
        if (sold === true) {
            return 'Success';
        }
        else {
            return 'In Progress';
        }
    };
    return (
        <div style={{ margin: "0 auto", textAlign: "center" }}>
            
            <div style={{display: "flex", justifyContent: "center"}}>
            {data.map((d) => (
                <div className="card" style={{width: "20rem", outline: "3px ridge black" ,height: "100%"}}>
                    <h2 style={{ margin: "0 0 15px 0", textAlign: 'left' }}>Item: {d.name}</h2>
                    <h2 style={{ margin: "0 0 15px 0", textAlign: 'left' }}>Bid: {d.cost}</h2>
                    <h2 style={{ margin: "0 0 15px 0", textAlign: 'left' }}>Status: {Status(d.sold)}</h2>
                </div>
            ))}
            </div>
        </div>
    );
};


export default History;
