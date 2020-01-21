const express = require('express');
const router = express.Router();
const db = require('../db/models/index');
const books = require('../db/models/books');

router.get('/', (req, res) => {
  books.getAllBooks()
    .then((result) => {
      res.send(result);
    })
    .catch(() => {
      res.status(404).send({ message: 'Something went wrong' });
    });
});

router.get('/:userId', (req, res) => {
  req.checkParams('userId').isString();
  let errors = req.validationErrors();
  if (errors) {
    res.status(404).send({ message: 'Something went wrong' });
  } else {
    const { userId } = req.params;
    books.getBooksForUser(userId)
      .then((result) => {
        res.send(result);
      })
      .catch(() => {
        res.status(404).send({ message: 'Something went wrong' });
      });
  }
});

router.post('/buy', (req, res) => {
  const bookId = req.body.id;
  const userId = req.body.userId;
  const cost = req.body.cost;
  const amount = req.body.amount;
  db.users_to_books.create({
    id_user: userId,
    id_book: bookId,
  })
    .then(() => {
      db.books.update({
        amount: amount - 1,
      }, {
        where: {
          id: bookId,
        },
      })
        .then(() => {
          db.payments.create({
            id_user: userId,
            id_book: bookId,
            cost: cost,
            date: new Date(),
          })
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
        .catch(() => {
          res.status(404).send({ message: 'Impossible to buy a book' });
        });
    })
    .catch(() => {
      res.status(404).send({ message: 'Something went wrong' });
    });
});

router.post('/return', (req, res) => {
  const bookId = req.body.bookId;
  const userToBookId = req.body.id;
  const amount = req.body.amount;
  db.users_to_books.destroy({
    where: {
      id: userToBookId,
    }
  }).then(() => {
    db.books.update({
      amount: amount + 1,
    }, {
      where: {
        id: bookId,
      },
    }).then(() => {
      res.sendStatus(200);
    }).catch(() => {
      res.status(404).send({ message: 'Something went wrong' });
    });
  }).catch(() => {
    res.status(404).send({ message: 'Something went wrong' });
  });
});

module.exports = router;