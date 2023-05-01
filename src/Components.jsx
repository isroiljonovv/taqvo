import React from "react";
import BackIm from "./components/BackIm";
import Cards from "./components/Cards";
import Kutubxona from "./components/EKutubXona";
import Foyda from "./components/Foyda";
import Reportaj from "./components/Reportaj";
import Savol from "./components/Savol";
import VideoR from "./components/Video";


export default function Components(){
    return(
        <div>
            <BackIm/>
        <div className="container">
            <Cards/>
        </div>
        <Kutubxona/>
        <div className="container">
        <Reportaj/>
        <VideoR/>
        <Savol/>
        <Cards/>
        <Foyda/>
        </div>
        </div>
    )
}