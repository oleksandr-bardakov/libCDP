var express = require('express');
var router = express.Router();
const db = require('../db/models/index');
const checkPermission = require('../utils/checkPermission');

const users = require('../db/models/users');

router.get('/', function (req, res) {
  if (checkPermission(req.headers.authorization)) {
    users.getAllUsers()
      .then((items) => {
        res.send(items);
      })
      .catch(() => {
        res.sendStatus(404);
      });
  } else {
    res.sendStatus(403);
  }
});

router.put('/', function (req, res) {
  if (checkPermission(req.headers.authorization)) {
    const id = req.body.id;
    const roleId = req.body.roleId;
    users.changeRoleForUser({ roleId, id })
      .then(() => {
        users.getAllUsers()
          .then((items) => {
            res.send(items);
          })
          .catch(() => {
            res.sendStatus(404);
          });
      })
      .catch(() => res.sendStatus(404));
  } else {
    res.sendStatus(403);
  }
});

router.delete('/', function (req, res) {
  if (checkPermission(req.headers.authorization)) {
    const id = req.body.id;
    db.users.update({
      deleted: 1,
    }, {
      where: {
        id: id,
      },
    })
      .then(() => {
        users.getAllUsers()
          .then((result) => {
            res.send(result);
          })
          .catch(() => {
            res.status(404).send({ message: 'Something went wrong' });
          });
      })
      .catch(() => res.status(404).send({ message: 'Failed to delete user' }));
  } else {
    res.sendStatus(403);
  }
});

module.exports = router;