const ContratoRouter = [
    {
      method: "GET",
      path: "/contrato",
      handler: async () => {
        //const result = await controller.getAll();
        //return result;
        return "Todos los contratos";
      }
    },
    {
      method: "GET",
      path: "/contrato/{id}",
      handler: () => {
        return "Contrato by Id";
      }
    },
  ];
  
  module.exports = ContratoRouter;
  