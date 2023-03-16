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

            <div style={{ display: "flex", justifyContent: "center" }}>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Cost</th>
                        <th>Status</th>
                    </tr>

                    {data.map((d) => (
                        <tr>
                            <td>{d.name}</td>
                            <td>{d.cost}</td>
                            <td>{Status(d.sold)}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    );
};


export default History;
