'use strict';
const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const config = require('../../config/config.json');

const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: config.development.dialect,
    operatorsAliases: false,
  });

const db = {};

fs
  .readdirSync(__dirname + '/baseModels')
  .filter((file) => {
    return (file.indexOf(".") !== 0) && (file !== "index.js") && (file !== "migrations") && (file !== "redshift-migrations");
  })
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname + '/baseModels', file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Op = Sequelize.Op;

module.exports = db;