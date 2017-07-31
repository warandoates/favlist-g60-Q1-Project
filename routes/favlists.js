const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.route('/')
  .get((req, res) => {
    knex('favlists')
      .orderBy('name')
      .then(favLists => res.json(favLists))
      .catch(err => res.sendStatus(404));
  })
  .post((req, res) => {
    knex('favlists')
      .insert({ name: req.body.name }, '*')
      .then(result => res.json(result[0]))
      .catch(err => res.sendStatus(400));
  });

router.route('/:id')
  .get((req, res) => {
    knex('favlists')
      .where('id', req.params.id)
      .first()
      .then(favlist =>
        favlist ? res.json(favlist) : res.status(404).send('Not Found'));
  })
  .post((req, res) => {
    res.send('this will update a specific favlist');
  })
  .delete((req, res) => {
    res.send('this will delete a specific favlist');
  });

router.route('/:id/entries')
  .get((req, res) => {
    res.send('this will retrieve all entries to a specific list');
  })
  .post((req, res) => {
    res.send('this will create an entry to a specific list');
  });

module.exports = router;
