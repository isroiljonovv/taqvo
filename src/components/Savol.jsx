import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios'
import {Link} from 'react-router-dom'
import ArabP from '../images/arab.jpg'


export default function Savol() {
    const [savol, setSavol] = useState([])


    useEffect(() => {
        axios.get('http://localhost:4000/savol')
            .then(res => {
                let newSlice = res.data.slice(0,3)
                setSavol(newSlice)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div className="container mt-5">
            <center>
                <div className="borderDiv mt-5">
                    <div className="row rowBack row-cols-1 row-cols-md-2">
                        <div className="col mt-5">
                            <span style={{ marginRight: "15px" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16">
                                    <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                                </svg>
                            </span>
                            <span>
                                <span>САВОЛ ВА ЖАВОБ</span>
                            </span>
                        </div>
                        <div className="col mt-5">
                           <img src={ArabP} alt="" />
                        </div>
                    </div>

                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 bottomRow" >

                        {
                            savol.map(task => (
                                <div key={task.id} className="col mt-2" style={{paddingRight:"50px"}}>
                                    <div className="card" style={{width: "100%"}}>
                                        <div classname="card-body">
                                            <p className="card-title">Савол : {task.savol}</p>
                                            <a href="#" style={{color:"green"}}>Жавобни оқинг</a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }


                    </div>

                </div>
                <Link to='/savQosh'>
                    <button className="mt-3 btn btn-success" style={{marginRight:"15px"}}>Savol Qo'shish</button>
                </Link>
                <Link to='/xammaSav'>
                <button className="mt-3 btn btn-success">Savollarni ko'rish</button>
                </Link>
               </center>
        </div>
    )
}