module.exports = function(sequelize, DataTypes){
    let alias = "experienciaspe";
    let cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true, 
            autoIncrement: true
        },
        titulo:{
            type: DataTypes.TEXT
        },
        descripcion:{
            type: DataTypes.TEXT
        },
        sala:{
            type: DataTypes.TEXT
        },
        imagenRe:{
            type: DataTypes.TEXT
        },
        imagen:{
            type: DataTypes.TEXT
        }
    }

    let config = {
        tableName: "experienciaspe",
        timestamps: false
    }
    let experienciaspe = sequelize.define(alias,cols, config);

    return experienciaspe
}
