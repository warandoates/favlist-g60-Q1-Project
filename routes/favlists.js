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
      .insert({
        name: req.body.name,
        description: req.body.description
       }, '*')
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
    knex('favlists')
      .where('id', req.params.id)
      .first()
      .update({
        name: req.body.name,
        description: req.body.description
      }, '*')
      .then(result => {
        res.json(result)
      })
      .catch(err => console.log('this is an error', err));
  })
  .delete((req, res) => {
    knex('favlists')
      .where('id', req.params.id)
      .first()
      .del()
      .then(() => res.json('List has been Deleted!'))
      .catch(err => console.log('this is an error', err));
  });

router.route('/:id/entries')
  .get((req, res) => {
    knex('entries')
      .where('favlistId', req.params.id)
      .then(entries =>
        entries ? res.json(entries) : res.status(404).send('nothing here'));
  })
  .post((req, res) => {
    knex('entries')
      .insert({
        favlistId: req.params.id,
        name: req.body.name,
        description: req.body.description
      }, '*')
      .then(result => res.json(result[0]))
      .catch(err => res.status(400).send(err));
  });

module.exports = router;
