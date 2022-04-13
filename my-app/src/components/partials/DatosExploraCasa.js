import React from "react";
import obj from "../../assets/image/imgPro/web/FORMULARIO-PLANETA-2.png"


function DatosExploraCasa(props) {
    return (
        <React.Fragment>
            <li><img src={obj} /><p>{props.titulo}</p><p className="descripcionExplora">{props.descripcion}</p></li>
        </React.Fragment>
    )
}

export default DatosExploraCasa;