var express = require('express');
var router = express.Router();
const db = require('../db/models/index');
const checkPermission = require('../utils/checkPermission');
const books = require('../db/models/books');

router.put('/', function (req, res) {
  if (checkPermission(req.headers.authorization)) {
    const id = req.body.id;
    const name = req.body.name;
    const description = req.body.description;
    const year = req.body.year;
    const autor = req.body.autor;
    const cost = req.body.cost;
    const amount = req.body.amount;
    db.books.update({
      name,
      description,
      year,
      autor,
      cost,
      amount,
    }, {
      where: {
        id: id,
      },
    })
      .then(() => {
        books.getAllBooks()
          .then((result) => {
            res.send(result);
          })
          .catch(() => {
            res.status(404).send({ message: 'Something went wrong' });
          });
      })
      .catch(() => res.status(404).send({ message: 'Failed to update book' }));
  } else {
    res.sendStatus(403);
  }
});

router.post('/', function (req, res) {
  if (checkPermission(req.headers.authorization)) {
    const name = req.body.name;
    const description = req.body.description;
    const year = req.body.year;
    const autor = req.body.autor;
    const cost = req.body.cost;
    const amount = req.body.amount;
    const genres = req.body.genres;
    db.books.create({
      name,
      description,
      year,
      autor,
      cost,
      amount,
      deleted: 0,
    })
      .then((result) => {
        genres.forEach(id => {
          db.genres_to_books.create({
            id_book: result.dataValues.id,
            id_ganre: id,
          })
        });
      })
      .then(() => {
        books.getAllBooks()
          .then((result) => {
            res.send(result);
          })
          .catch(() => {
            res.status(404).send({ message: 'Something went wrong' });
          });
      })
      .catch(() => res.status(404).send({ message: 'Failed to add book' }));
  } else {
    res.sendStatus(403);
  }
});

router.delete('/', function (req, res) {
  if (checkPermission(req.headers.authorization)) {
    const id = req.body.id;
    db.books.update({
      deleted: 1,
    }, {
      where: {
        id: id,
      },
    })
      .then(() => {
        books.getAllBooks()
          .then((result) => {
            res.send(result);
          })
          .catch(() => {
            res.status(404).send({ message: 'Something went wrong' });
          });
      })
      .catch(() => res.status(404).send({ message: 'Failed to delete book' }));
  } else {
    res.sendStatus(403);
  }
});

module.exports = router;