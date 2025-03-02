'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Autors', [
      {
        nombre: 'Gabriel García Márquez',
        nacionalidad: 'Colombiana',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'J.K. Rowling',
        nacionalidad: 'Británica',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Stephen King',
        nacionalidad: 'Estadounidense',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Isabel Allende',
        nacionalidad: 'Chilena',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Autors', null, {});
  }
};
