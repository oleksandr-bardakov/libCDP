'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('genres', [
      {
        name: 'Detective',
      },
      {
        name: 'Science fiction',
      },
      {
        name: 'Post-apocalyptic',
      },
      {
        name: 'Mystery',
      },
      {
        name: 'Children’s books',
      },
      {
        name: 'Fantasy',
      },
      {
        name: 'Romance',
      },
      {
        name: 'Fairy tales',
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('genres', null, {})
  }
};
