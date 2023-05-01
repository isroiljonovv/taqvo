import React from "react";
import MyImg from '../images/ilo.jpg'


export default function Foyda(){
    return(
        <div className="container foo mt-5">
            <h5 style={{color:"green"}} >Фойдали Хаволалар</h5>
            <center>
                <img src={MyImg} alt="" />
            </center>
        </div>
    )
}