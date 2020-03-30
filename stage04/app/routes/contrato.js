'use strict';

const contrato = require('../controllers/contrato');  

module.exports = [
  {
    method: "GET",
    path: "/contrato",
    handler: async (request, h) => {
      const result = await contrato.get();
      return result;
    }
  },
  {
    method: "GET",
    path: "/contrato/{id}",
    handler: async (request, h) => {
      const id = request.params.id;
      const result = await contrato.getById(id);
      return result;
    }
  },
];

