/*
    app-01.js
    Server 1: Everything in a file. Require hapi
    Test: http://localhost:3000
*/

"use strict";

const Hapi = require('@hapi/hapi');

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost"
  });
  server.route({
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return { message: "Hello World!" };
    }
  });
  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", err => {
  console.log(err);
  process.exit(1);
});

init();
