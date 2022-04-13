import React from "react";
import logoWa from "../assets/image/imgPro/movil/INTRO-WHATSAPP.png"

function About() {
    return (
        <main>
            {/*Los datos colocados son provenientes del doc base "Texto Landing"*/}
            <section>
                <article className="intro">
                    <h4>¿Qué es Parque Explora?</h4>
                    <p>El Parque Explora, es un museo interactivo de ciencias en la ciudad de Medellín, Colombia,
                        formado por un acuario con énfasis en la Amazonia, un planetario, un taller público de experimentación
                        -Exploratorio- y un parque con más de 300 experiencias orientadas a la apropiación social del conocimiento.
                        Tiene 22 mil metros cuadrados de área interna y 15 mil de plazas públicas, con jardines nativos que lo
                        convierten en un atractivo parque.</p>
                    <p>El Parque Explora está comprometido con la protección de la vida en su más cautivante expresión: la diversidad.
                        Es un museo de ciencias incluyente diseñado para anular barreras de diverso tipo: físicas, actitudinales, informativas,
                        culturales…La biodiversidad pasa por lo humano. Y por nuestra relación con los otros. El Acuario nos incluye y pone
                        de presente que la  fragilidad de la vida del agua es, también, la nuestra.</p>
                    <div className="wa">
                        <img src={logoWa} alt="Logo wa" />
                        <p className="escribe">Escríbenos por Whatsapp</p>
                    </div>
                </article>
            </section>
        </main>
    )
}

export default About;