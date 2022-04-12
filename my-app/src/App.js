import React from "react";
import "./assets/css/app.css"
//Routes es el componente que envuelve todas las rutas, y es en reemplazo
//Switch que es lo que se usaba en la versión 5.0 de react
//Route es que hace que muestre cada componente dependiendo de la ruta
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import LandingNavegation from "./components/landingNavegation";
import About from "./components/about";
import Footer from "./components/footer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/navegation" element={<LandingNavegation />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<p>404 - Not found</p>} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
