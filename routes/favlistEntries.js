const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.route('/:id')
  .get((req, res) => {
    knex('entries')
      .where('id', req.params.id)
      .first()
      .then(entry =>
        entry ? res.json(entry) : res.status(404).send('Not Found'));
  })
  .post((req, res) => {
    knex('entries')
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
  .delete((req, res) => {
    knex('entries')
      .where('id', req.params.id)
      .first()
      .del()
      .then(() => res.json('Entry has been Deleted!'))
      .catch(err => console.log('this is an error', err));
  });

// router.route('/')
//   .get((req, res) => {
//     knex('entries')
//     .orderBy('name')
//     .then(favLists => res.json(favLists))
//     .catch(err => res.sendStatus(404));
//   })

  router.route('/:id/comments')
    .get((req, res) => {
      knex('comments')
        .where('entryId', req.params.id)
        .then(comments =>
          comments ? res.json(comments) : res.status(404).send('nothing here'));
    })
    .post((req, res) => {
      knex('comments')
        .insert({
          entryId: req.params.id,
          comment: req.body.comment,
          author: req.body.author
        }, '*')
        .then(result => res.json(result[0]))
        .catch(err => res.status(400).send(err));
    });

module.exports = router;
