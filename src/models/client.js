'use strict';
const Sequelize = require("sequelize");

class Client extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: Sequelize.STRING,

      },
      { 
        modelName: 'client',
        timestamps: true,      
        paranoid: true,
        sequelize 
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Order)      
  }

}

module.exports = Client

