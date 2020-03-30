'use strict';

const facultad = require('./facultad');
const contrato = require('./contrato');
const controllers = [].concat(facultad, contrato);

exports.plugin = {
    pkg: require("./package.json"),
    register: async function (server, options) {
        server.route(controllers);
    }
}