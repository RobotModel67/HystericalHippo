/*
exports.configureRoutes = server => {
  return server.route([
    {
      method: "GET",
      path: "/facultades",
      handler: () => {
        return "Todas las facultades";
      }
    }
    // otras rutas...
  ]);
};
*/
const controller = require('../controllers/facultad');

const FacultadRouter = [
  {
    method: "GET",
    path: "/facultad",
    handler: async () => {
      const result = await controller.getAll();
      return result;
      //return "Todas las facultades";
    }
  },
  {
    method: "GET",
    path: "/facultad/{id}",
    handler: () => {
      return "Facultades by Id";
    }
  },
];

module.exports = FacultadRouter;