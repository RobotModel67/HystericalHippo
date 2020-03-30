'use strict'

module.exports = function (sequelize, DataTypes) {
    var Facultad = sequelize.define("Facultad",
        {
            facultad_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoincrement: true
            },
            facultad: {
                type: DataTypes.STRING,
            },
            nombre_decano: {
                type: DataTypes.STRING,
            },
            documento_decano: {
                type: DataTypes.STRING,
            },
            firma: {
                type: DataTypes.STRING,
            }
        },
        {
            tableName: 'facultad',
            timestamps: false,
        }
    )
    return Facultad;
}
