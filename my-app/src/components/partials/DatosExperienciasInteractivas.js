import React from "react";

function DatosExperienciasInteractivas(props) {
    return (
        <div className="interactivas">
            <ul>
                <li>{props.titulo}</li>
                <li>{props.descripcion}</li>
                <li>{props.sala}</li>
                <li><img src={props.imagenRe} /></li>
                <li><img src={props.imagen} /></li>
            </ul>
        </div>
    )
}

export default DatosExperienciasInteractivas;