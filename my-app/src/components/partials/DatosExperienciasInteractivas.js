import React from "react";

function DatosExperienciasInteractivas(props) {
    return (
        <div className="interactivas">
            <ul>
                <p className="tituloApi">{props.titulo}</p>
                <li className="descripcionApi">{props.descripcion}</li>
                <li className="salaApi">sala {props.sala}</li>
                <li className="imagenesApi"><img src={props.imagen} /></li>
                <li className="imagenesApi"><img src={props.imagenRe} /></li>
            </ul>
        </div>
    )
}

export default DatosExperienciasInteractivas;