'use strict';

const facultad = require('../controllers/facultad');

const FacultadRouter = [
    {
      method: "GET",
      path: "/facultad",
      handler: async (request, h) => {
        const result = await facultad.get();
        return result;
      }
    },
    {
      method: "GET",
      path: "/facultad/{id}",
      handler: async (request, h) => {
        const id = request.params.id;
        const result = await facultad.getById(id);
        return result;
      }
    },
  ];
  
  module.exports = FacultadRouter;