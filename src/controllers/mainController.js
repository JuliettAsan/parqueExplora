const db = require("../database/models");
const fetch = require('node-fetch');
const Op = db.Sequelize.Op;


const mainController = {

    //CRUD DE EXPERIENCIAS

    // Método get para obtener todas las experiencias

    totalExperiencias: async (req, res) => {
        // Link de la API utilizada https://serpapi.com/
        const apiKey = "7e3e141025814aa135c651264a08fc8952b446e975c08a0b590b03e8978fa283";

        // Obtiene los titulos de las exp de la BD
        let titulos = []
        await db.experienciaspe
            .findAll()
            .then(exp => {
                for (let i = 0; i < exp.length; i++) {
                    titulos.push(exp[i].titulo.replace(/ /g, "+"))
                }
            })
        
        // Obtiene las img del API externo dado el titulo de la exp
        let imagenesApiExterno = []
        for (let i = 0; i < titulos.length; i++) {
            imagenesApiExterno.push(await fetch(`https://serpapi.com/search.json?q=${titulos[i]}&tbm=isch&ijn=0&api_key=${apiKey}`)
                .then(rta => rta.json())
                // Elige de manera aleatoria uno de los resultados del API
                .then(r => r.images_results[Math.floor(Math.random() * r.images_results.length)].thumbnail))
        }

        await db.experienciaspe
            .findAll()
            .then(exp => {
                const data = exp.map((exp, index) => {
                    return {
                        id: exp.id,
                        titulo: exp.titulo,
                        descripcion: exp.descripcion,
                        sala: exp.sala,
                        //Trae la img del API externo según su posición
                        imagenRe: imagenesApiExterno[index],
                        imagen: `/image/${exp.imagen}`,
                    }
                })
                res.json({
                    total: exp.length,
                    status: 200,
                    data,
                })
            })
    },

    // Método post para insertar una experiencia

    instertarExperiencia: (req, res) => {
        db.experienciaspe
            .create(req.body)
            .then(exp => {
                return res.json({
                    data: exp,
                    status: 200,
                    created: "Ok, acabas de ingresar una nueva experiencia"
                })
            })
    },

    // Método put para actualizar una experiencia

    actualizarExperiencia: (req, res) => {
        db.experienciaspe
            .update({
                ...req.body
            }, {
                where: {
                    id: req.params.id
                }
            })
            .then(exp => {
                return res.json({
                    status: 200,
                    created: "Ok, la experiencia fue actualizada"
                })
            })
    },

    // Método delete para borrar una experiencia por ID   

    eliminarExperiencia: (req, res) => {
        db.experienciaspe
            .destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(rta => {
                return res.json({
                    rta,
                    delete: "Eliminaste la experiencia"
                })
            })
    },

    // Método get para obtener una experiencia por ID

    detalleExperiencia: async (req, res) => {
        await db.experienciaspe
            .findByPk(req.params.id)
            .then(exp => {
                return res.json({
                    data: exp,
                    imagen: `/image/${exp.imagen}`,
                })
            })
    },

    // Método get para obtener todas las experiencias filtradas por sala

    buscarSalas: (req, res) => {
        db.experienciaspe
            .findAll({
                where: {
                    sala: { [Op.like]: '%' + req.query.keyword + '%' }
                }
            })
            .then(exp => {
                if (exp.length > 0) {
                    return res.json({ exp })
                }
                return res.json("lo sentimos, no existen salas relacionadas");
            })
    },
}

module.exports = mainController;