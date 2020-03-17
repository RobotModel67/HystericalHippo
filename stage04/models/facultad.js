"use strict";
module.exports = (sequelize, DataTypes) => {
  const Facultad = sequelize.define(
    "Facultad",
    {
      facultad_id: DataTypes.INTEGER,  
      facultad: DataTypes.STRING,
      nombre_decano: DataTypes.STRING,
      nombre_decano: DataTypes.STRING,
      nombre_decano: DataTypes.STRING,
    },
    {}
  );
  Facultad.associate = function(models) {
    // associations can be defined here
  };
  return Facultad;
};
