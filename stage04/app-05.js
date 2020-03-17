/*
    app-01.js
    Server 4: Configuration with Glue Manifest. Require hapi, Glue
    Test: http://localhost:3000/running/facultad
          http://localhost:3000/running/facultad/22
*/

"use strict";

const Hapi = require('@hapi/hapi');
const Glue = require('@hapi/glue');

const manifest = require('./manifest.json');
const options = {
  relativeTo: __dirname
};
const init = async () => {
  const server = await Glue.compose(manifest, options);
  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", err => {
  console.log(err);
  process.exit(1);
});

init();
