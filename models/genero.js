'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Genero extends Model {
    static associate(models) {
      Genero.hasMany(models.Libro, { foreignKey: 'generoId', as: 'libros' });
    }
  }
  Genero.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Genero',
  });
  return Genero;
};
