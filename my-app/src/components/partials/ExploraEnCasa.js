import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import DatosExploraCasa from "./DatosExploraCasa";

function ExploraEnCasa() {
    const [explora, setExplora] = useState([]);
    useEffect(() => {
        fetch("https://encasa.parqueexplora.org/wp-json/wp/v2/posts")
            .then(rta => rta.json())
            .then(datos => {
                let subArray = datos.slice(datos.length - 3, datos.length)
                let resultado = subArray.map(dato => {
                    return dato.yoast_head_json
                })
                setExplora(resultado);
            })
    }, []);
    return (
        <section>
            <article className="obj2">
                <h3><a href="https://encasa.parqueexplora.org/">Visita Explora en Casa</a></h3>
                <p>Podrás encontrar:</p>
                <ul>
                    {
                        explora.map((data, index) => {
                            return <DatosExploraCasa
                                titulo={data.title}
                                descripcion={data.description}
                            />
                        })
                    }
                </ul>
            </article>
        </section>
    )
}

export default ExploraEnCasa;