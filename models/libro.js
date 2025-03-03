'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Libro extends Model {
    static associate(models) {
      Libro.belongsTo(models.Autor, { foreignKey: 'autorId', as: 'autor' });
      Libro.belongsTo(models.Genero, { foreignKey: 'generoId', as: 'genero' });
    }
  }
  Libro.init({
    titulo: DataTypes.STRING,
    precio: DataTypes.DECIMAL,
    stock: DataTypes.INTEGER,
    autorId: DataTypes.INTEGER,
    generoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Libro',
  });
  return Libro;
};
