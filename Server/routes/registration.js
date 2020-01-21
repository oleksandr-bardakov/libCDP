const express = require('express');
const router = express.Router();
const auth = require('../db/models/auth');

router.post('/', (req, res) => {
  req.checkBody('name').isString().isLength({ min: 3, max: 100 });
  req.checkBody('email').isEmail({ min: 5, max: 120 });
  req.checkBody('password').isString().isLength({ min: 1, max: 30 });
  let errors = req.validationErrors();
  if (errors) {
    res.status(404).send({ message: 'Invalid data' });
  } else {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    auth.getUser(name).then((result) => {
      if (!result) {
        auth.registration({ name, email, password }).then(() => {
          res.sendStatus(200);
        })
          .catch(() => {
            res.status(400).send({ message: 'Failed to register' });
          })
      } else {
        throw new Error();
      }
    })
      .catch(() => {
        res.status(404).send({ message: 'User already exist' });
      });
  }
});

module.exports = router;
