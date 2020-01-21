const express = require('express');
const router = express.Router();
const filters = require('../db/models/filters');

router.get('/', (req, res) => {
  const filtersData = {};
  filters.getRoles()
    .then((roles) => {
      filtersData.roles = roles;
    })
    .then(() => {
      filters.getGenres()
        .then((genres) => {
          filtersData.genres = genres;
        })
        .then(() => {
          res.send(filtersData);
        })
        .catch(() => {
          res.status(404).send({ message: 'Something went wrong while receiving filters' });
        });
    })
    .catch(() => {
      res.status(404).send({ message: 'Something went wrong while receiving filters' });
    });
});

module.exports = router;
