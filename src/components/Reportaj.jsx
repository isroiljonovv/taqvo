import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";

export default function Reportaj() {
    const [reportaj, setReportaj] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/maqollar')
            .then(res => {
                let newSlice = res.data.slice(0,4)
                setReportaj(newSlice)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div className="container mt-5 backConWh" style={{backgroundColor:"white"}}>
            <center>
            <h5>ФОТОРЕПОРТАЖЛАР</h5>
            <div className="row row-cols-2 row-cols-md-4 foto mt-5">
                {
                    reportaj.map(task => (
                        <div key={task.id} className="col mt-2">
                            <img src={task.img} className='hoverImg'  alt="" />
                        </div>
                    ))
                }
            </div>
            <div className="row row-cols-2 row-cols-md-4 foto mt-5">
                {
                    reportaj.map(task => (
                        <div key={task.id} className="col mt-2">
                            <img src={task.img} className='hoverImg'  alt="" />
                        </div>
                    ))
                }
                </div>
                <Link to='/xammaFoto'>
            <button className="btn btn-success mt-3">
                Xammasini Ko'rish
            </button>
                </Link>
            </center>
        </div>
    )
}