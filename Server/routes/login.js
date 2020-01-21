const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const auth = require('../db/models/auth');
const pasportConfig = require('../config/pasportConfig.json');

router.post('/', function (req, res, next) {
  req.checkBody('name').isString().isLength({ min: 3, max: 100 });
  req.checkBody('password').isString().isLength({ min: 1, max: 30 });
  let validError = req.validationErrors();
  if (validError) {
    res.statusMessage = JSON.stringify(validError);
    res.status(404).send({ message: 'invalid name / password' });
  } else {
    const name = req.body.name;
    const password = req.body.password;

    auth.login(name, password).then((userData) => {
      if (!userData || userData.dataValues.deleted === 1) {
        throw new Error();
      }
      const token = jwt.sign(
        { role: userData.dataValues.role.name },
        pasportConfig.secret,
        { expiresIn: pasportConfig.tokenLife }
      );
      const sendData = {
        userData,
        token,
      }
      res.send(sendData);
    })
      .catch(() => {
        res.status(404).send({ message: 'Invalid name or password' });
      });
  }
})

module.exports = router;
