const db = require('./index');

db.users.belongsTo(db.roles, { foreignKey: 'id_role' });
db.users.hasMany(db.users_to_books, { foreignKey: 'id_user' });
db.users_to_books.belongsTo(db.books, { foreignKey: 'id_book' });

class Users {
  getAllUsers() {
    return db.users.findAll({
      attributes: ['id', 'name', 'email', 'date_registration', 'deleted'],
      order: ['name'],
      include: [
        {
          model: db.roles,
        },
        {
          model: db.users_to_books,
          attributes: ['id'],
          include: [
            {
              model: db.books,
              attributes: ['name', 'description', 'year', 'autor'],
              order: ['name'],
            },
          ],
        },
      ],
    });
  }

  changeRoleForUser(body) {
    return db.users.update({
      id_role: body.roleId,
    }, {
      where: {
        id: body.id,
      },
    })
  }
}

module.exports = new Users();
