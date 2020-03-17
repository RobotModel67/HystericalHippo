/*
    app-03.js
    Server 3: Routes as Controllers. Require hapi
    Test:   http://localhost:3000/facultad
            http://localhost:3000/facultad/126
*/

"use strict";

const Hapi = require('@hapi/hapi');

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost"
  });

  //await server.register(require('./controllers/facultad'));
  await server.register({
    plugin: require("./controllers/facultad"),
    options: {
      version: "v1.0",
    },
    routes: {
      prefix: '/plugins'      
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
