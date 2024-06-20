'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SpotMedia extends Model {
    static associate(models) {
      SpotMedia.belongsTo(
        models.Spot, {
        foreignKey: 'spotId',
        onDelete: 'CASCADE',
        onDelete: 'CASCADE'
      })
    }
  }
  SpotMedia.init({
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true,
      }
    },
    spotId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Spots',
        key: 'id'
      },
      onDelete: 'CASCADE'
    }
  }, {
    sequelize,
    modelName: 'SpotMedia',
  });
  return SpotMedia;
};
