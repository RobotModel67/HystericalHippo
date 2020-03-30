'use strict'

module.exports = function (sequelize, DataTypes) {
    var Registro = sequelize.define("Registro",
        {
            id_registro: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoincrement: true
            },
            numero_contrato: {
                type: DataTypes.STRING,
            },
            documento: {
                type: DataTypes.STRING,
            },
            tipo_documento: {
                type: DataTypes.STRING,
            },
            ciudad_documento: {
                type: DataTypes.STRING,
            },
            docente: {
                type: DataTypes.STRING,
            },
            categoria: {
                type: DataTypes.STRING,
            },
            asignatura: {
                type: DataTypes.STRING,
            },
            grupo: {
                type: DataTypes.STRING,
            }
        },
        {
            tableName: 'registro',
            timestamps: false,
        }
    )
    return Registro;
}
