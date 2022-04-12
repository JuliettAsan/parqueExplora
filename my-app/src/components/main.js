import React from "react";
import logoWa from "../assets/image/imgPro/movil/INTRO-WHATSAPP.png"
import obj1 from "../assets/image/imgPro/movil/OBJETIVO-NUM-1.png"
import obj2 from "../assets/image/imgPro/movil/OBJETIVO-NUM-2.png"
import obj3 from "../assets/image/imgPro/movil/OBJETIVO-NUM-3.png"
import caracteristicas1 from "../assets/image/imgPro/movil/CARACTERISTICAS-1.png"
import caracteristicas2 from "../assets/image/imgPro/movil/CARACTERISTICAS-2.png"
import Formulario from "./formulario";


function Main() {
    return (
        <React.Fragment>
            <main>
                {/*Los datos colocados son provenientes del doc base "Texto Landing"*/}
                <section>
                    <article className="intro">
                        <h4>Navegación por el universo para colegios</h4>
                        <p>En este viaje en vivo conoceremos los logros y descubrimientos que hicieron mujeres y hombres
                            inquietos por observar los misterios del cosmos. Acompañados por la curiosidad y el asombro,
                            seremos testigos de la diversidad de objetos que hay en nuestro universo y, a través de historias,
                            viajaremos por lugares ya conocidos y por conocer.</p>
                        <div className="wa">
                            <img src={logoWa} alt="Logo wa" />
                            <p className="escribe">Escríbenos por Whatsapp</p>
                        </div>
                    </article>
                </section>
                <section>
                    <article className="obj">
                        <h3>¿Cuáles son los <u>objetivos de estos encuentros?</u></h3>
                        <ul>
                            <li><img src={obj1} /><p>Motivar la observación del cielo e incentivar la curiosidad sobre algunos
                                temas relacionados con la Astronomía como planetas, estrellas y galaxias.</p></li>
                            <li><img src={obj2} /><p>Fortalecer la divulgación de la Astronomía a través de entornos digitales
                                que permitan mantener la conexión con estudiantes y maestros.</p></li>
                            <li><img src={obj3} /><p>Mostrar la Tierra como un planeta muy especial que nos conecta con su
                                familia planetaria y el universo en general</p></li>
                        </ul>
                    </article>
                </section>
                <section>
                    <article className="caracteristicas">
                        <div className="imagenesCaracteristicas">
                            <img src={caracteristicas1} />
                            <img src={caracteristicas2} className="imgCa1" />
                        </div>
                        <h3><u>Características</u></h3>
                        <ul>
                            <li>Para estudiantes de 1 a 11</li>
                            <li>Incluye viaje por el universo + actividad experimental</li>
                            <li>Grupos de 20 personas acompañados por un mediador</li>
                            <li>1 sesión de 90 minutos </li>
                            <li>Conexión privada por Zoom </li>
                        </ul>
                    </article>
                </section>
                <Formulario/>
            </main>
        </React.Fragment>
    )
}

export default Main