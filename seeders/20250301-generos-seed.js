'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Generos', [
      {
        nombre: 'Realismo Mágico',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Fantasía',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Terror',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Ciencia Ficción',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Novela Histórica',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Generos', null, {});
  }
};
