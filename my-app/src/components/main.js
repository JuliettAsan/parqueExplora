import React from "react";
import logoWa from "../assets/image/imgPro/movil/INTRO-WHATSAPP.png"
import obj1 from "../assets/image/imgPro/movil/OBJETIVO-NUM-1.png"
import obj2 from "../assets/image/imgPro/movil/OBJETIVO-NUM-2.png"
import obj3 from "../assets/image/imgPro/movil/OBJETIVO-NUM-3.png"
import caracteristicas1 from "../assets/image/imgPro/movil/CARACTERISTICAS-1.png"
import caracteristicas2 from "../assets/image/imgPro/movil/CARACTERISTICAS-2.png"
import logoWaForm from "../assets/image/imgPro/movil/FORMULARIO-WHATSAPP.png"


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
                <section>
                    <article className="informacion">
                        <h3>¿Quieres más información?</h3>
                        <h2> Déjanos tus datos y te contactaremos</h2>
                        <form>
                            <div>
                                <div className="datos">
                                    <span className="details">Nombre</span>
                                    <input type="text" name="name" />
                                </div>
                                <div className="datos">
                                    <span className="details">Teléfono celular</span>
                                    <input type="text" name="telefono" />
                                </div>
                                <div className="datos">
                                    <span className="details">Cédula</span>
                                    <input type="text" name="cedula" />
                                </div>
                                <div className="datos">
                                    <span className="details">Correo electrónico</span>
                                    <input type="text" name="correo" />
                                </div>
                                <div className="datos">
                                    <span className="details">Nombre de institución educativa</span>
                                    <input type="text" name="institucion" />
                                </div>
                                <div className="datos">
                                    <span className="details">Estás interesado en una navegación por el universo para:</span>
                                    <select name="category" id="category" className="category">
                                        <option value="Preescolar">Preescolar</option>
                                        <option value="Primaria">Primaria</option>
                                        <option value="Secundaria">Secundaria</option>
                                    </select>
                                </div>
                            </div>
                            <div className="button">
                                <input type="submit" value="Enviar" />
                            </div>
                        </form>
                        <img src={logoWaForm} className="imgWa" />
                        <p className="mensajeWa">Esríbenos por Whatsapp</p>
                        <p className="terminos">Al diligenciar este formulario aceptas seguir recibiendo información
                            del Parque Explora y nos autorizas para que incluyamos tus datos
                            personales en nuestras bases de datos, en calidad de responsable y
                            encargado de los mismos, con la finalidad de enviarte información
                            sobre eventos y actividades. También te das por enterado de los
                            derechos que tienes de consultarlos, actualizarlos, rectificarlos y
                            suprimirlos en cualquier momento, y conoces la política de manejo de
                            datos de la Corporación, que se encuentran en la página web
                            www.parqueexplora.org/condiciones-legales. En ella se encuentran
                            descritos los canales de atención para el ejercicio de tus derechos y la
                            presentación de quejas y reclamos. Así mismo comprendes que esta
                            autorización es requerida de acuerdo a lo dispuesto por la ley 1581 de
                            2012 y sus decretos reglamentarios. Esta autorización la otorgas
                            gratuitamente sin ninguna limitación de carácter temporal o territorial.</p>
                    </article>
                </section>
            </main>
        </React.Fragment>
    )
}

export default Main