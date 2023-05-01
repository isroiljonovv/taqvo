import React from "react";
import Logo from '../images/logo.png'

export default function BackIm() {

    return (
        <div className="backImg">
            <div className="container">


                <div className="row imRow pt-5">
                    <div className="col color">
                        <h4>1440 йил 19 рабъус сони</h4>
                        <p className="text-secondary">2018 йил 26 декабрь, чоршанба</p>
                    </div>
                    <div className="col-auto">
                        <input type="text" placeholder="Қидирув" />
                        <p>тип версияси</p>
                    </div>
                </div>

                <center style={{ color: "white" }}>
                    <img src={Logo} alt="" />
                    <h1>ТAQVO.uz</h1>
                    <p className="text-secondary">Тақво истаган қалблар сахафиса</p>
                    <p>намоз вақтлари :    </p>
                    
                   <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Shaharlar
                    </a>
                        <ul class="dropdown-menu" style={{float:"right"}} aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">Toshkent</a></li>
                            <li><a className="dropdown-item" href="#">Namangan</a></li>
                            <li><a className="dropdown-item" href="#">Farg'ona</a></li>
                            <li><a className="dropdown-item" href="#">Samarqand</a></li>
                            <li><a className="dropdown-item" href="#">Buxoro</a></li>
                            <li><a className="dropdown-item" href="#">Xiva</a></li>
                            <li><a className="dropdown-item" href="#">Nukus</a></li>
                            <li><a className="dropdown-item" href="#">Termiz</a></li>
                        </ul>
                   
                    <div className="krugDiv">
                        <p>06:13 <br />
                            Тонг
                        </p>
                    </div>
                    <div className="krugDiv">
                        <p>07:34 <br />
                            Қуеш
                        </p>
                    </div>
                    <div className="krugDiv">
                        <p>12:13 <br />
                            Пешин
                        </p>
                    </div>
                    <div className="krugDiv">
                        <p>15:12 <br />
                            Аср
                        </p>
                    </div>
                    <div className="krugDiv">
                        <p>16:52 <br />
                            Шом
                        </p>
                    </div>
                    <div className="krugDiv">
                        <p>18:14 <br />
                            Хуфтон
                        </p>
                    </div>

                    <hr className="borHr" style={{ backgroundColor: "green" }} />

                    <div className="miniDiv" style={{paddingBottom:"25px"}}>
                        <p style={{ color: "green" }}> Абу Хурайра розиаллоху анху ривоят қилинади</p>
                        <p>Расулуллох соллалоху алайхи ва саллам шундай дедилар</p>
                        <h5>"Ким илм излаш йўлини тутсаб Аллох таоло унга жаннат йулини енгил қилиб қуйади"</h5>
                        <p style={{ color: "green" }} >Термизий ривояти</p>
                    </div>
                </center>
            </div>
        </div>
    )
}