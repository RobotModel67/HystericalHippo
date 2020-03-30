/*
    app-01.js
    Server 1: Everything in a file. Require hapi, sequelizer, mysql2
    Test: http://localhost:3000/facultad
          http://localhost:3000/facultad/1
*/

"use strict";

const Hapi = require('@hapi/hapi');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('mysql://root:@localhost:3306/alicia');

/*
const sequelize = new Sequelize('alicia', 'root', null,
  {
    host: 'localhost',
    dialect: 'mysql'
  });
*/

const Facultad = sequelize.define('facultad',
  {
    facultad_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoincrement: true
    },
    facultad: {
      type: Sequelize.STRING,
    },
    nombre_decano: {
      type: Sequelize.STRING,
    },
    documento_decano: {
      type: Sequelize.STRING,
    },
    firma: {
      type: Sequelize.STRING,
    }
  },
  {
    tableName: 'facultad',
    timestamps: false,
  })

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost"
  });
  server.route([{
    method: "GET",
    path: "/facultad",
    handler: async (request, h) => {
      const result = await Facultad.findAll({}).catch(console.error());
      return result;
    }
  },{
    method: "GET",
    path: "/facultad/{id}",
    handler: async (request, h) => {
      var id = request.params.id;
      const result = await Facultad.findAll({ where: { facultad_id: id}});
      return result;
    }
  },{
    method: "POST",
    path: "/facultad",
    handler: async (request, h) => {
      //var id = request.params.id;
      const result = await Facultad.create(request.payload);
      return result;
    }
  }]);
  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", err => {
  console.log(err);
  process.exit(1);
});

init();
