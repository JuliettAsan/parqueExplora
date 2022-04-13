import React, { useEffect, useState } from "react";
import DatosExperienciasInteractivas from "./DatosExperienciasInteractivas";

function ExperienciasInteractivas() {
    const [todaExperiencias, setTodasExperiencias] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3300/api")
            .then(rta => rta.json())
            .then(datos => {
                setTodasExperiencias(datos.data);
            })
    }, []);
    return (
        <section>
            <h3 className="titulo"><u>Experiencias interactivas</u></h3>
            <article className="interactivo">
                {
                    todaExperiencias.map((data, index) => {
                        return <DatosExperienciasInteractivas
                            data={data.i}
                            titulo={data.titulo}
                            descripcion={data.descripcion}
                            sala={data.sala}
                            imagenRe={data.imagenRe}
                            imagen={`http://localhost:3300${data.imagen}`}
                        />
                    })
                }
            </article>
        </section>
    )
}

export default ExperienciasInteractivas;