import React from "react";
import { Link } from "react-router-dom"
import logo from "../assets/image/imgPro/LogoParqueExp.png"
import { BsSearch } from "react-icons/bs"
import { FiMenu } from "react-icons/fi"

function Header() {
    return (
        <header>
            <div className="main-header">
                <a href="/home"><img src={logo} className="logoParque" alt="Logo Parque Explora" /></a>
            </div>
            <div className="main-navbar">
                <ul className="list">
                    <li className="line"><Link to="/">Inicio</Link></li>
                    <li className="line"><Link to="/navegation">Experimenta</Link></li>
                    <li><Link to="#">Conéctate</Link></li>
                    <li><Link to="#">Prográmate</Link></li>
                    <li className="line"><Link to="/about">Conócenos</Link></li>
                    <li><Link to="#">Suscríbete</Link></li>
                </ul>
            </div>
            <div className="header-search">
                <a href="#"><BsSearch className="search" /></a>
            </div>
            <div className="menu-burger">
                <FiMenu className="menu" />
            </div>
        </header>
    )
}

export default Header;