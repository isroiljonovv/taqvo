import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function XammaFoto() {
    const [xammaFoto, setFoto] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        axios.get('http://localhost:4000/maqollar')
        .then(res => setFoto(res.data))
        .catch(err => console.log(err))
    },[])
    return(
        <div className="container barchaFoto">
            <center>
            <div className="row row-cols-1 row-cols-md-2">
                {
                    xammaFoto.map(task => (
                        <div className="col">
                            <img style={{width:"100%"}} src={task.img} alt="" />
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