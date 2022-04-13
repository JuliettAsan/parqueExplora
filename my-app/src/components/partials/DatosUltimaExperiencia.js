import React from "react";

function DatosUltimaExperiencia(props) {
    return (
        <React.Fragment>
            <div className="definicion">
                <h3>{props.titulo}</h3>
                <p>{props.descripcion}</p>
                <p>{props.sala}</p>
            </div>
            <img src={props.imagen} alt="experienciaImg" className="experienciaImg" />
        </React.Fragment>
    )
}

export default DatosUltimaExperiencia;