import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams, Link } from 'react-router-dom'


export default function AloxidaCard() {
    const { id } = useParams()

    const [aloxida, setAloxida] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:4000/maqollar/${id}`)
            .then(res => setAloxida(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div className="container">
            <div className="card myCard mb-5">
                <div className="row g-0">

                    <div className="col-md-4">
                        <img src={aloxida.img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8 mt-5">
                        <div className="card-body">
                            <h5 className="card-title">{aloxida.glavniy}</h5>
                            <span className="card-text">{aloxida.data}</span>
                            <span className="card-text">{aloxida.korilgan}</span>
                            <p className="card-text">{aloxida.type}</p>
                            <Link to='/'>
                            <button className="btn btn-danger">orqaga</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}