'use strict'

const Hapi = require('@hapi/hapi');
const facultad = require('./facultad');
const contrato = require('./contrato');


const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: "localhost"
    });

    server.route(facultad);
    server.route(contrato);

    await server.start();
    console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", err => {
    console.log(err);
    process.exit(1);
});

init();
