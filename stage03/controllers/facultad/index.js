"use strict";

exports.plugin = {
  pkg: require("./package.json"),
  register: async function(server, options) {
    server.route({
      method: "GET",
      path: "/facultad",
      handler: function(request, h) {
        return { message: "FacultadController, Todas las facultades" };
      }
    });

    server.route({
      method: "GET",
      path: "/facultad/{id}",
      handler: function(request, h) {
        const id = request.params.id;
        return { message: `FacultadController, Facultad ${id}` };
      }
    });

    // etc ...
    //await someAsyncMethods();
  }
};
