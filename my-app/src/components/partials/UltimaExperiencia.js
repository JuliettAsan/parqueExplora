import React, { useEffect, useState } from "react";
import DatosUltimaExperiencia from "./DatosUltimaExperiencia";

function UltimaExperiencia() {
    const [experiencias, setExperiencias] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3300/api")
            .then(rta => rta.json())
            .then(datos => {
                setExperiencias(datos.data[datos.data.length - 1]);
            })
    }, []);
    return (
        <section class="exp">
            {
                <DatosUltimaExperiencia
                    titulo={experiencias.titulo}
                    descripcion={experiencias.descripcion}
                    sala={experiencias.sala}
                    imagen={experiencias.imagenRe}
                />
            }
        </section>
    )
}

export default UltimaExperiencia;