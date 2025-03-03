'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Autor extends Model {
    static associate(models) {
      Autor.hasMany(models.Libro, { foreignKey: 'autorId', as: 'libros' });
    }
  }
  Autor.init({
    nombre: DataTypes.STRING,
    nacionalidad: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Autor',
  });
  return Autor;
};
