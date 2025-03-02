'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Obtenemos los IDs de los autores y géneros insertados
    const autores = await queryInterface.sequelize.query(
      `SELECT id, nombre FROM "Autors";`
    );
    const generos = await queryInterface.sequelize.query(
      `SELECT id, nombre FROM "Generos";`
    );

    // Extraemos los resultados de las consultas
    const autoresRows = autores[0];
    const generosRows = generos[0];

    // Función para encontrar el ID de un autor por su nombre
    const getAutorId = (nombre) => {
      const autor = autoresRows.find(a => a.nombre.includes(nombre));
      return autor ? autor.id : null;
    };

    // Función para encontrar el ID de un género por su nombre
    const getGeneroId = (nombre) => {
      const genero = generosRows.find(g => g.nombre === nombre);
      return genero ? genero.id : null;
    };

    await queryInterface.bulkInsert('Libros', [
      {
        titulo: 'Cien años de soledad',
        precio: 25.99,
        stock: 50,
        autorId: getAutorId('Gabriel García'),
        generoId: getGeneroId('Realismo Mágico'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'Harry Potter y la piedra filosofal',
        precio: 19.99,
        stock: 75,
        autorId: getAutorId('Rowling'),
        generoId: getGeneroId('Fantasía'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'It',
        precio: 22.50,
        stock: 30,
        autorId: getAutorId('King'),
        generoId: getGeneroId('Terror'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'La casa de los espíritus',
        precio: 18.75,
        stock: 40,
        autorId: getAutorId('Allende'),
        generoId: getGeneroId('Realismo Mágico'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'El resplandor',
        precio: 21.99,
        stock: 25,
        autorId: getAutorId('King'),
        generoId: getGeneroId('Terror'),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Libros', null, {});
  }
};
