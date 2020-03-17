/*
    app-02.js
    Server 2: Routes in separate files. Require hapi
    Test: http://localhost:3000/facultad
          http://localhost:3000/facultad/54
          http://localhost:3000/contrato
          http://localhost:3000/contrato/101
*/

"use strict";

const Hapi = require('@hapi/hapi');
const Routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost"
  });
  server.route(Routes);
  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", err => {
  console.log(err);
  process.exit(1);
});

init();
