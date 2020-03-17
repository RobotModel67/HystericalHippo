const FacultadRouter = [
    {
      method: "GET",
      path: "/facultad",
      handler: async () => {
        return "Todas las facultades";
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