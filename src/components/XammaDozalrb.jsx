import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";


export default function XammaDoz() {
    const [xammaDoz, setXammaDoz] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/maqollar')
            .then(res => setXammaDoz(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div className="container">
            {
                xammaDoz.map(task => (
                    <div key={task.id} className="card xammaCard mt-5" style={{ width: "18rem" }}>
                        <img src={task.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{task.glavniy}</h5>
                            <span classNameName="text-secondary" style={{ marginRight: "15px" }}>{task.korilgan}</span>
                            <span classNameName="text-secondary">{task.data}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}