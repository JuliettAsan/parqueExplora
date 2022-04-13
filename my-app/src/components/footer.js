import React from "react";

//RECURSOS UTILIZADOS
//Iconos
import {FaInstagram} from "react-icons/fa"
import {BsFacebook, BsYoutube, BsFillEnvelopeFill} from "react-icons/bs"
import {AiOutlineArrowUp} from "react-icons/ai"
//Logos
import logoParqueExplora from "../assets/image/imgPro/LogoParqueExp.png"
import logoPlanetario from "../assets/image/imgPro/LogoPlanetario.jpg"

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="find">
                    <h3>Encuéntranos en:</h3>
                    <img src={logoParqueExplora} className="logoParqueFooter" alt="logoParque" />
                    <img src={logoPlanetario} className="logoPlanetario" alt="logoPlanetario" />
                </div>
                <div className="contact">
                    <h3>Contáctanos</h3>
                    <p>Corporación Parque Explora</p>
                    <p>+57(4) 516 83 00</p>
                    <p>comunicaciones@parqueexplora.org</p>
                </div>
                <div className="location">
                    <h3>Ubicación</h3>
                    <p>Carrera 52 # 73 - 75</p>
                    <p>Medellín - Colombia</p>
                    <p>+57(4) 516 83 00</p>
                </div>
            </div>
            <p className="copyright">@ 2020 PARQUE EXPLORA | TODOS LOS DERECHOS RESERVADOS</p>
            <div className="socialMedia">
                <ul className="listSocial">
                    <li><a href="https://www.instagram.com/parqueexplora/"><FaInstagram className="instagram"/></a></li>
                    <li><a href="https://www.facebook.com/ParqueExplora"><BsFacebook className="facebook"/></a></li>
                    <li><a href="https://www.youtube.com/c/parqueexplora"><BsYoutube className="youtube"/></a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;