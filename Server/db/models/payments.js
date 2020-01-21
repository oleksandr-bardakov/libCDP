const db = require('./index');
const sequelize = require('sequelize');

db.payments.belongsTo(db.books, { foreignKey: 'id_book' });
db.payments.belongsTo(db.users, { foreignKey: 'id_user' });

class Payments {
  getAllPayments() {
    return db.payments.findAll({
      attributes: ['id', 'cost', 'date'],
      include: [
        {
          model: db.books,
          attributes: ['id', 'name', 'autor', 'cost'],
        },
        {
          model: db.users,
          attributes: ['id', 'name', 'email'],
        },
      ],
    });
  }

  getPaymentsById(userId) {
    return db.payments.findById(userId, {
      attributes: ['id', 'payment', 'date'],
      include: [
        {
          model: db.books,
          attributes: ['id', 'name', 'autor', 'cost'],
        },
        {
          model: db.users,
          attributes: ['id', 'name', 'email'],
        },
      ],
    });
  }

  getToopPaymentsBooks() {
    return db.payments.findAll({
      group: ['id_book'],
      attributes: ['id', [sequelize.fn('COUNT', sequelize.col('payments.id_book')), 'paymentCount']],
      limit: 10,
      order: [
        [sequelize.col('paymentCount'), 'DESC'],
      ],
      include: [
        {
          model: db.books,
          attributes: ['name'],
        }
      ],
    });
  }

}

module.exports = new Payments();
