import React from "react";
import { useNavigate } from "react-router-dom";
import { reactLocalStorage } from 'reactjs-localstorage';

export default function Wallet() {
    const navigate = useNavigate();
    const amount = reactLocalStorage.get('wallet');
    
    return (
        <div className="container" style={{ boxShadow: '0px 7px 8px -4px rgb(0 0 0 / 20%), 0px 12px 17px 2px rgb(0 0 0 / 14%), 0px 5px 22px 4px rgb(0 0 0 / 12%)', backgroundColor: "#d9d9d9", width: "70%", height: "auto", padding: "2rem", whiteSpace: 'nowrap', overflow: 'hidden' }}>
            
            <div className="container" style={{ textAlign: "left"}}>
                <div className="row">
                    <h1 style={{ textAlign: "center", color: 'black', fontSize: '50px', fontWeight: "bolder", marginTop: "2%"}}>My Wallet</h1>
                </div>
                <br></br>
                <br></br>
                <div className="row mt-5" style={{ marginLeft: "2%"}}>
                    <h3 style={{ fontSize: "2rem"}}>My Balance</h3>
                </div>
                <div className="row mb-5" style={{ marginTop: "-1%",  marginLeft: "2%"}}>
                    <h2 style={{ fontSize: "10rem", fontWeight: "bolder", color: "#3b3b3b" }}>${amount}</h2>
                </div>
                <div className="row" style={{marginLeft: "2%", }}>
                    <button className="btn btn-success" onClick={() => { navigate("/payment") }} style={{ fontSize: "1.5rem", fontWeight: "bolder", padding: "1rem 2rem", borderRadius: "0.5rem", width: "20%" }}>Add Balance</button>
                </div>
            </div>
        </div>
    );
}
