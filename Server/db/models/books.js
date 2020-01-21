const db = require('./index');
db.users_to_books.belongsTo(db.books, { foreignKey: 'id_book' });
db.books.hasMany(db.genres_to_books, { foreignKey: 'id_book' });
db.genres_to_books.belongsTo(db.genres, { foreignKey: 'id_ganre' });

class Books {
  getAllBooks() {
    return db.books.findAll({
      attributes: ['id', 'name', 'description', 'year', 'autor', 'cost', 'amount', 'deleted'],
      order: ['name'],
      where: {
        deleted: 0,
      },
      include: [
        {
          model: db.genres_to_books,
          attributes: ['id'],
          include: [
            {
              model: db.genres,
              attributes: ['id', 'name',],
            },
          ],
        },
      ],
    });
  }

  getBooksForUser(userId) {
    return db.users_to_books.findAll({
      attributes: ['id'],
      where: {
        id_user: userId,
      },
      include: [
        {
          model: db.books,
          attributes: ['id', 'name', 'description', 'year', 'autor', 'cost', 'amount'],
          order: ['name'],
          include: [
            {
              model: db.genres_to_books,
              attributes: ['id'],
              include: [
                {
                  model: db.genres,
                  attributes: ['id', 'name',],
                },
              ],
            },
          ],
        },
      ],
    });
  }
}

module.exports = new Books();