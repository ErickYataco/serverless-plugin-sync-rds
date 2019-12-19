'use strict';

const Sequelize = require("sequelize");

class Order extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        }, 
        status:{
          type:   Sequelize.ENUM,
          values: ['1', '2', '3','4'],
          comment: "['created', 'actived', 'disable','partial']"
        },
      },
      { 
        modelName: 'order',
        timestamps: true,      
        paranoid: true,
        sequelize 
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Card)
    this.belongsTo(models.Client)
  }

}

module.exports = Order
