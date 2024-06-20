'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Log extends Model {
    static associate(models) {
      Log.belongsTo(
        models.Spot, {
        foreignKey: 'spotId',
        onDelete: 'CASCADE'
      }),
      Log.belongsTo(
        models.User, {
        foreignKey: 'userId',
        onDelete: 'SET DEFAULT'
      })
    }
  }
  Log.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Users',
        key: 'id',
      },
      onDelete: 'SET NULL'
    },
    spotId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Spots',
        key: 'id'
      },
      onDelete: 'CASCADE'
    },
    action: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [0, 20]
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [0, 100]
      }
    }
  }, {
    sequelize,
    modelName: 'Log',
  });
  return Log;
};
