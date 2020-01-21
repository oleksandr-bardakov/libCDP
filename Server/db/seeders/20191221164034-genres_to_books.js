'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('genres_to_books', [
      {
        id_book: 1,
        id_ganre: 5,
      },
      {
        id_book: 1,
        id_ganre: 6,
      },
      {
        id_book: 1,
        id_ganre: 8,
      },
      {
        id_book: 2,
        id_ganre: 2,
      },
      {
        id_book: 2,
        id_ganre: 6,
      },
      {
        id_book: 3,
        id_ganre: 4,
      },
      {
        id_book: 3,
        id_ganre: 7,
      },
      {
        id_book: 4,
        id_ganre: 1,
      },
      {
        id_book: 4,
        id_ganre: 7,
      },
      {
        id_book: 5,
        id_ganre: 4,
      },
      {
        id_book: 6,
        id_ganre: 3,
      },
      {
        id_book: 6,
        id_ganre: 6,
      },
      {
        id_book: 7,
        id_ganre: 5,
      },
      {
        id_book: 8,
        id_ganre: 5,
      },
      {
        id_book: 8,
        id_ganre: 6,
      },
      {
        id_book: 9,
        id_ganre: 1,
      },
      {
        id_book: 9,
        id_ganre: 6,
      },
      {
        id_book: 9,
        id_ganre: 2,
      },
      {
        id_book: 10,
        id_ganre: 1,
      },
      {
        id_book: 11,
        id_ganre: 4,
      },
      {
        id_book: 11,
        id_ganre: 7,
      },
      {
        id_book: 12,
        id_ganre: 7,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('genres_to_books', null, {})
  }
};