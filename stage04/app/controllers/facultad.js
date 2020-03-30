'use strict';

const db = require('../models');

module.exports = {
    get: async () => {
        const result = await db.models.Facultad.findAll();
        return result;
    },
    getById: async (id) => {
        const result = await db.models.Facultad.findAll({ where: { facultad_id: id } });
        return result;
    }
}