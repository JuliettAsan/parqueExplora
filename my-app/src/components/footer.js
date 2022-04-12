import React from "react";

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="find">
                    <h3>Encuéntranos en:</h3>
                    <img src="image/imgPro/LogoParqueExp.png" className="logoParqueFooter" alt="logoParque" />
                    <img src="image/imgPro/logoPlanetario.jpg" className="logoPlanetario" alt="logoPlanetario" />
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
                    <li><a href="https://www.instagram.com/parqueexplora/"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="https://www.facebook.com/ParqueExplora"><i className="fab fa-facebook"></i></a></li>
                    <li><a href="https://www.youtube.com/c/parqueexplora"><i className="fab fa-youtube"></i></a></li>
                </ul>
            </div>
            <div className="others">
                <ul><a href="/home"><i className="fas fa-arrow-up"></i></a></ul>
                <ul><a href=""><i className="fas fa-envelope"></i></a></ul>
            </div>
        </footer>
    )
}

export default Footer;