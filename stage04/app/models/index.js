'use strict';

const facultad = require('./facultad');
const registro = require('./registro');
const models = [].concat(facultad, registro);


const Sequelize = require('sequelize');
const settings = require('./settings');
const dbSettings = settings[settings.env];
const database = new Sequelize(dbSettings.db.url);

models.forEach(model => {
    model(database, Sequelize.DataTypes);
});

module.exports = database;