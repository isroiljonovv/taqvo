import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export default function XammaSav(){
    const [xamma, setXamma] = useState([])
    useEffect(() => {
        axios.get('http://localhost:4000/savol')
        .then(res => setXamma(res.data))
        .catch(err => console.log(err))
    }, [])
    return(
        <div className="container mt-3">
            <center>
                <h4>Barcha Savollar</h4>
                <div className="row row-cols-1 row-cols-md-2">
                {
                    xamma.map(task => (
                        <div key={task.id} className="col mt-2" style={{paddingRight:"50px"}}>
                        <div className="card" style={{width: "70%"}}>
                            <div className="card-body">
                                <p className="card-title"> Савол : {task.savol}</p>
                            </div>
                        </div>
                    </div>
                    ))
                }
                </div>
                <Link to='/'>
                <button className="btn btn-danger">Orqaga</button>
                </Link>
            </center>
        </div>
    )
}