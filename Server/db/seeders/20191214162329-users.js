'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        name: 'admin',
        email: 'admin@akv.com',
        password: 'admin123',
        id_role: 1,
        date_registration: '2019-12-12 10:00',
        deleted: 0,
      },
      {
        name: 'user',
        email: 'user@akv.com',
        password: 'admin123',
        id_role: 2,
        date_registration: '2019-12-13 12:00',
        deleted: 0,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
