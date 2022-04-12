import React from "react";

function DatosUltimaExperiencia(props) {
    return (
        <React.Fragment>
            <div class="definicion">
                <h3>{props.titulo}</h3>
                <p>{props.descripcion}</p>
                <p>{props.sala}</p>
            </div>
            <img src={props.imagen} alt="experienciaImg" class="experienciaImg" />
        </React.Fragment>
    )
}

export default DatosUltimaExperiencia;