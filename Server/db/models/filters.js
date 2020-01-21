const db = require('./index');

class Filters {
  getRoles() {
    return db.roles.findAll();
  }

  getGenres() {
    return db.genres.findAll();
  }
}

module.exports = new Filters();
