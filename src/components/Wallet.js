import React from "react";
import { useNavigate } from "react-router-dom";

export default function Wallet() {
    let navigate = useNavigate();

    return (
        <div className="container">
            <div className="row">
                <h1>My Wallet</h1>
            </div>
            <div className="row">
                <h3>My Balance</h3>
            </div>
            <div className="row">
                <h2>$ 0.00</h2>
            </div>
            <button className="btn btn-success" onClick={() =>{navigate("/payment")}}>Add Balance</button>
        </div>
    );
}