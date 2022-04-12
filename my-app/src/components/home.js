import React from "react";
import ExperienciasInteractivas from "./partials/ExperienciasInteractivas";
import ExploraEnCasa from "./partials/ExploraEnCasa";
import UltimaExperiencia from "./partials/UltimaExperiencia";

function Home() {
    return (
        <main>
            <UltimaExperiencia />
            <ExploraEnCasa />
            <ExperienciasInteractivas />
        </main>
    )
}

export default Home;