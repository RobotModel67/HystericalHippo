'use strict';

const db = require('../models');

module.exports = {
    get: async () => {
        const result = await db.models.Registro.findAll();
        return result;
    },
    getById: async (id) => {
        const result = await db.models.Registro.findAll({ where: { id_registro: id } });
        return result;
    }
}