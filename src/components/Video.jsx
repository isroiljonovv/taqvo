import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

export default function VideoR() {
    const [video, setVideo] = useState([])
    
    useEffect(() => {
        axios.get('http://localhost:4000/maqollar')
        .then(res => {
            let newSlice = res.data.slice(0,3)
            setVideo(newSlice)
        })
        .catch(err => console.log(err))
    }, [])
    return (
        <div className="conatiner backConWh mt-5" style={{backgroundColor:"white"}}>
            <center>
                <h5>ВИДЕОРЕПОРТАЖЛАР</h5>
                <div className="row row-cols-1 row-cols-md-3 foto mt-5">
                    {
                        video.map(task => (
                            <div key={task.id} className="col mt-2">
                                <img src={task.img} className='hoverImg' alt="" />
                            </div>
                        ))
                    }
                </div>
                <Link to='/xammaFoto'>
                <button className="btn btn-success mt-5 ">
                    Xammasini Ko'rish
                </button>
                </Link>
            </center>
        </div>
    )
}