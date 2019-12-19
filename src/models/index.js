'use strict';
const mysql2            = require('mysql2')
const Sequelize         = require('sequelize');
const OrderModel        = require('./order');
const CardModel         = require('./card');
const ClientModel       = require('./client');

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mysql',
        dialectModule: mysql2,
        logging: false,
        pool: {
            max: 5,
            min: 0,
            idle: 20000,
            handleDisconnects: true
        },
        dialectOptions: {
            requestTimeout: 100000
        },
        // define: {
        //     freezeTableName: truex
        // }
    }
);

const models = {
  Order         : OrderModel.init(sequelize, Sequelize),
  Card          : CardModel.init(sequelize, Sequelize),
  Client        : ClientModel.init(sequelize, Sequelize),      
};

Object.values(models)
  .filter(model => typeof model.associate === "function")
  .forEach(model => model.associate(models));

const db = {
  ...models,
  sequelize
};

module.exports = db;