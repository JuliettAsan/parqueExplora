const db = require("../database/models");
const Op = db.Sequelize.Op;

const mainController = {
    //CRUD DE EXPERIENCIAS

    // Método get para obtener todas las experiencias

    totalExperiencias: async(req, res) => {
        await db.experienciaspe
        .findAll()
            .then(exp => {
                return res.json({
                    total: exp.length,
                    data: exp,
                    status: 200,
                })
            })
    },

    // Método post para insertar una experiencia
    
    instertarExperiencia:(req, res) => {
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

    actualizarExperiencia:(req, res) => {
        db.experienciaspe
        .update({
            ...req.body
            },{
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

    eliminarExperiencia:(req, res) => {
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

    detalleExperiencia: async(req, res) => {
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

    buscarSalas:(req, res) => {
        db.experienciaspe
        .findAll({
            where: {
                sala: { [Op.like]: '%' + req.query.keyword + '%'}
                }
            })
            .then(exp => {
                if (exp.length > 0){
                    return res.json({exp})
                }
                return res.json("lo sentimos, no existen salas relacionadas");
            })
    }
}

module.exports = mainController;