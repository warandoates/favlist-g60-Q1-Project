const express = require('express');
const router = express.Router();

const knex = require('../knex');
const { numValidation, authValidation } = require('./validations');

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
  .get(numValidation, (req, res) => {
    knex('favlists')
      .where('id', req.params.id)
      .first()
      .then(favlist =>
        favlist ? res.json(favlist) : res.status(404).send('Not Found'));
  })
  .post(numValidation, authValidation, (req, res) => {
    knex('favlists')
      .where('id', req.params.id)
      .first()
      .update({
        name: req.body.name,
        description: req.body.description,
        updated_at: new Date().toString()
      }, '*')
      .then(result => {
        res.json(result)
      })
      .catch(err => console.log('this is an error', err));
  })
  .delete(numValidation, authValidation, (req, res) => {
    knex('favlists')
      .where('id', req.params.id)
      .first()
      .del()
      .then(() => res.json('List has been Deleted!'))
      .catch(err => console.log('this is an error', err));
  });


// GET AND POST ROUTES FOR ENTRIES

router.route('/:id/entries')
  .get(numValidation, (req, res) => {
    knex('entries')
      .where('favlistId', req.params.id)
      .then(entries =>
        entries ? res.json(entries) : res.status(404).send('nothing here'));
  })
  .post(numValidation, authValidation, (req, res) => {
    knex('entries')
      .insert({
        favlistId: req.params.id,
        sourceId: req.body.sourceId,
      }, '*')
      .then(result => res.json(result[0]))
      .catch(err => res.status(400).send(err));
  });

module.exports = router;
