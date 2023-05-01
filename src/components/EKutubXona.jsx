import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import MyImg from '../images/carIm.jpg'


export default function Kutubxona() {
    const [kitob, setKitob] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/kitoblar')
        .then(res => {
            setKitob(res.data)
        })
        .catch(err => console.log(err))
    }, [])
    return (
        <div className="bacComp mt-5">
            <div className="container qoraCon ">
                <center>
                    <h4 style={{ paddingTop: "100px" }}>ЭЛЕКТРОН КУТУБХОНА</h4>
                    <p >БИЗ СИЗГА ҚУЙДАГИ КИТОБЛАРНИ ОҚИБ ЧИҚИШНИ ТАВСИЯ ЭТАМИЗ</p>


                    <div id="carouselExampleIndicators" className="carousel slide " data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row">
                            {
                                kitob.map(task => (
                                <>
                                <div className="col">
                                <img src={task.img} className="d-block " alt="..."/>
                                </div>
                                </>
                                ))
                            }
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </center>
            </div>
        </div>
    )
}