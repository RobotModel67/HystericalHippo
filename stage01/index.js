"use strict";

const Hapi = require("@hapi/hapi");
//const { configureRoutes } = require("./routes/facultades");
//const facultadRoutes = require("./routes/facultad");
//const contratoRoutes = require("./routes/contrato");
const Routes = require("./routes");

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost"
  });

  /*
    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {

            return {message: 'Hello World!'};
        }
    });
    */

  /*
|      await configureRoutes(server);
    */
  //server.route(facultadRoutes);
  //server.route(contratoRoutes);
  server.route(Routes);

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", err => {
  console.log(err);
  process.exit(1);
});

init();
