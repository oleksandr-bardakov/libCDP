
var express = require('express');
var router = express.Router();
const checkPermission = require('../utils/checkPermission');
const payments = require('../db/models/payments');

router.get('/', function (req, res) {
  if (checkPermission(req.headers.authorization)) {
    payments.getAllPayments()
      .then((result) => {
        res.send(result);
      })
      .catch(() => {
        res.status(404).send({ message: 'Something went wrong' });
      });
  } else {
    res.sendStatus(403);
  }
});

router.get('/top', function (req, res) {
  if (checkPermission(req.headers.authorization)) {
    payments.getToopPaymentsBooks()
      .then((result) => {
        res.send(result);
      })
      .catch(() => {
        res.status(404).send({ message: 'Something went wrong' });
      });
  } else {
    res.sendStatus(403);
  }
});

module.exports = router;
