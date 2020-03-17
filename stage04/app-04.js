/*
    app-01.js
    Server 4: Configura with Glue. Require hapi, Glue
    Test: http://localhost:3000/test/facultad
          http://localhost:3000/test/facultad/21
*/

"use strict";

const Hapi = require('@hapi/hapi');
const Glue = require('@hapi/glue');

const manifest = {
  server: {
    host: 'localhost',
    port: 3000
  },
  register: {
    plugins: [
      {
        plugin: require('./controllers/facultad'),
        options: { host: 'localhost' },
        routes: { prefix: '/test' }
      },
    ]
  }
}
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
