import React from "react";
import { Link } from "react-router-dom"
import logo from "../assets/image/imgPro/LogoParqueExp.png"
//import FontAwesomeIcon from "https://fonts.googleapis.com/css2?family=Anek+Tamil:wght@200;300;400;800&display=swap"; 

function Header() {
    return (
        <header>
            <div className="main-header">
                <a href="/home"><img src={logo} className="logoParque" alt="Logo Parque Explora" /></a>
            </div>
            <div className="main-navbar">
                <ul className="list">
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/navegation">Experimenta</Link></li>
                    <li><Link to="#">Conéctate</Link></li>
                    <li><Link to="#">Prográmate</Link></li>
                    <li><Link to="/about">Conócenos</Link></li>
                    <li><Link to="#">Suscríbete</Link></li>
                </ul>
            </div>
            <div className="header-search">
                <a href="#"><i className="fa fa-bars burger"></i></a>
            </div>
            <div className="menu-burger">
                <i className="fa fa-bars burger"></i>
            </div>
        </header>
    )
}

export default Header;