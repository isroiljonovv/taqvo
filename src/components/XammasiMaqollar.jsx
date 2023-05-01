import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";



export default function XammaMaqol() {
    const [xammaMaq, setXammaMaq] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/maqollar')
        .then(res => setXammaMaq(res.data))
        .catch(err => console.log(err))
    }, [])
    return (
        <div className="container">
            {
                xammaMaq.map(task => (
                    <div key={task.id} className="card myCard mb-5 mt-5">
                        <div className="row g-0">

                            <div className="col-md-4">
                                <img src={task.img} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{task.glavniy}</h5>
                                    <span className="card-text">{task.data}</span>
                                    <span className="card-text">{task.korilgan}</span>
                                    <p className="card-text">{task.type}</p>
                                    <a className="card-text" style={{ color: "green" }}>Батафсил</a>
                                </div>
                            </div>
                        </div>
                    </div>

                ))
            }
        </div>
    )
}