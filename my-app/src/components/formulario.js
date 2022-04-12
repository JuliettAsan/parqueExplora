import React, { useRef } from "react";
import emailjs from "emailjs-com";
import logoWaForm from "../assets/image/imgPro/movil/FORMULARIO-WHATSAPP.png"

function Formulario (){
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        console.log(form.current)
        emailjs.sendForm("service_ceysym7","template_9kuxums",form.current,"kBHJhtiAqiWOOOnSo")
        .then((result) => {
            console.log(result.text)
        })
        
    }

    window.addEventListener("load", function(){
        let submit = document.querySelector(".button-submit");
        console.log(submit)
        submit.addEventListener("click", function(e){
            var rta = alert("El correo ha sido enviado exitosamente");
                e.preventDefault();
                submit.style.backgroundColor = "grey";
        })
    })

    return(
        <section>
        <article className="informacion">
            <h3>¿Quieres más información?</h3>
            <h2> Déjanos tus datos y te contactaremos</h2>
            <form ref={form} onSubmit={sendEmail}>
                <div>
                    <div className="datos">
                        <span className="details">Nombre</span>
                        <input type="text" name="name" required/>
                    </div>
                    <div className="datos">
                        <span className="details">Teléfono celular</span>
                        <input type="text" name="telefono" required />
                    </div>
                    <div className="datos"> 
                        <span className="details">Cédula</span>
                        <input type="text" name="cedula" required />
                    </div>
                    <div className="datos">
                        <span className="details">Correo electrónico</span>
                        <input type="text" name="correo" required/>
                    </div>
                    <div className="datos">
                        <span className="details">Nombre de institución educativa</span>
                        <input type="text" name="institucion" required/>
                    </div>
                    <div className="datos">
                        <span className="details">Estás interesado en una navegación por el universo para:</span>
                        <select name="category" id="category" className="category">
                            <option value="Preescolar">Preescolar</option>
                            <option value="Primaria">Primaria</option>
                            <option value="Secundaria">Secundaria</option>
                        </select>
                    </div>
                </div>
                <div className="button">
                    <input type="submit" value="Send" class="button-submit" />
                </div>
            </form>
            <img src={logoWaForm} className="imgWa" />
            <p className="mensajeWa">Esríbenos por Whatsapp</p>
            <p className="terminos">Al diligenciar este formulario aceptas seguir recibiendo información
                del Parque Explora y nos autorizas para que incluyamos tus datos
                personales en nuestras bases de datos, en calidad de responsable y
                encargado de los mismos, con la finalidad de enviarte información
                sobre eventos y actividades. También te das por enterado de los
                derechos que tienes de consultarlos, actualizarlos, rectificarlos y
                suprimirlos en cualquier momento, y conoces la política de manejo de
                datos de la Corporación, que se encuentran en la página web
                www.parqueexplora.org/condiciones-legales. En ella se encuentran
                descritos los canales de atención para el ejercicio de tus derechos y la
                presentación de quejas y reclamos. Así mismo comprendes que esta
                autorización es requerida de acuerdo a lo dispuesto por la ley 1581 de
                2012 y sus decretos reglamentarios. Esta autorización la otorgas
                gratuitamente sin ninguna limitación de carácter temporal o territorial.</p>
        </article>
    </section>
    )
}

export default Formulario;