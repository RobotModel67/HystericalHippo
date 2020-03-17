const facultadRoutes = require("./facultad");
const contratoRoutes = require("./contrato");

const Routes = facultadRoutes.concat(contratoRoutes);

module.exports = Routes;
