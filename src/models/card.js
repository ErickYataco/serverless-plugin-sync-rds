'use strict';

const Sequelize = require("sequelize");

class Card extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        accountId: Sequelize.STRING,
        status:{
          type:   Sequelize.ENUM,
          values: ['1', '2','3', '4'],
          comment: "['created', 'actived','disabled', 'used']"
        },
        amount: Sequelize.DECIMAL,
        balance: Sequelize.DECIMAL,
      },
      { 
        modelName: 'card',
        timestamps: true,      
        paranoid: true,
        sequelize 
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Order)  
    
  }

}

module.exports = Card

