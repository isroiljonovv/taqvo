import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function Cards() {
    const [birMap, setBirMap] = useState([])
    const [ikkiMap, setIkkiMap] = useState([])


    useEffect(() => {
        axios.get('http://localhost:4000/maqollar')
            .then(res => {
                let newSlice = res.data.slice(0, 4)
                setBirMap(newSlice)
            })
            .catch(err => console.log(err))
    }, [])
    useEffect(() => {
        axios.get('http://localhost:4000/maqollar')
            .then(res => {
                let newSlice = res.data.slice(0, 3)
                setIkkiMap(newSlice)
            })
            .catch(err => console.log(err))
    }, [])



    return (
        <div className="container  mt-5">
            <div className="row myBacRowWhit">
                <div className="col">
            <h5 className="mt-5">СЎНГИ МАКОЛЛАР</h5>

                    {
                        birMap.map(task => (
                            <div key={task.id} class="card myCard mb-5 mt-2">
                                <div class="row g-0">
                                    
                                    <div class="col-md-4">
                                        <img src={task.img}class="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">{task.glavniy}</h5>
                                            <span class="card-text">{task.data}</span>
                                            <span class="card-text">{task.korilgan}</span>
                                            <p class="card-text">{task.type}</p>
                                            <Link to={`/aloxida/${task.id}`}>
                                            <a class="card-text" style={{ color: "green" }}>Батафсил</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))
                    }
                <Link to='/xammaMaq'>
                <button className="btn btn-success">БАРЧА МАҚОЛЛАР</button>
                </Link>
                </div>


                <div className="col myBorCon" style={{paddingLeft:"10%"}}>

                    <h5 className="mt-5">ДОЛЗАРБ</h5>
                    {
                        ikkiMap.map(task => (
                            <div key={task.id} className="card mt-5 maqRight" style={{width: "18rem"}}>
                                <img src={task.img} class="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h4 className="card-title">{task.glavniy}</h4>
                                        <span className="text-secondary" style={{marginRight:"15px"}}>{task.korilgan}</span>
                                        <span className="text-secondary">{task.data}</span>
                                    </div>
                            </div>
                        ))
                    }
                    <Link to='/xammaDoz'>
                    <button className="btn btn-success mt-5" style={{float:"left"}}>БАРЧА МАҚОЛЛАР</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}