import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import { Link } from "react-router-dom";


export default function QoshishSav(){
    const [qoshIn, setQoshIn] = useState([])
    const navigate = useNavigate()
    function addNew(){
        if(qoshIn.value == ''){
            <p>savolni yozing</p>
        }else{
            axios.post('http://localhost:4000/savol', {
                savol : qoshIn
            })
            .then(res => {
                window.location.reload()
                qoshIn = ''
            })
        }
          
    }
    return(
        <>
            <center>
                <div className="widIn">
                
                <input 
                 value={qoshIn}
                 type="text" 
                 className="mt-5"
                onChange={e => setQoshIn(e.target.value)}
                 placeholder
                 ='savolni yozing'
                 id="yoz"
                 required={false}
                 /> <br />
                <button onClick={addNew}  className="btn btn-success mt-3">Qoshish</button> 
                </div>
            <Link to='/'>
                <button className="btn btn-danger mt-5">orqaga</button>
            </Link>
            </center>
        </>
    )
}