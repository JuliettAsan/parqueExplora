module.exports = function(sequelize, DataTypes){
    let alias = "experiencias";
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
        tableName: "experiencias",
        timestamps: false
    }
    let experiencias = sequelize.define(alias,cols, config);

    return experiencias
}
