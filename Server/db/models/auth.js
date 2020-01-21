const db = require('./index');

db.users.belongsTo(db.roles, { foreignKey: 'id_role' });

class Auth {
  login(name, password) {
    return db.users.findOne({
      attributes: ['id', 'name', 'email', 'date_registration', 'deleted'],
      where: {
        name,
        password,
      },
      include: [{
        model: db.roles,
      }]
    })
  }

  getUser(name) {
    return db.users.findOne({
      where: {
        name,
      },
    })
  }

  registration(body) {
    return db.users.create({
      name: body.name,
      email: body.email,
      password: body.password,
      id_role: 2,
      date_registration: new Date(),
      deleted: 0,
    })
  }

}

module.exports = new Auth();
