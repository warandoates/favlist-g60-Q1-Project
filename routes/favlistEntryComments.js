const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.route('/:id')
  .get((req, res) => {
    knex('comments')
      .where('id', req.params.id)
      .first()
      .then(comment =>
        comment ? res.json(comment) : res.status(404).send('Not Found'));
  })
  .post((req, res) => {
    knex('comments')
      .where('id', req.params.id)
      .first()
      .update({
        comment: req.body.comment,
        author: req.body.author,
        updated_at: new Date().toString()
      }, '*')
      .then(result => {
        result === 1 ? res.json(result) : res.status(404).send('Cannot Update')
      })
      .catch(err => console.log('this is an error', err));
  })
  .delete((req, res) => {
    knex('comments')
      .where('id', req.params.id)
      .first()
      .del()
      .then(() => res.json('Comment has been Deleted!'))
      .catch(err => console.log('this is an error', err));
  });

  router.route('/')
    .get((req, res) => {
      knex('comments')
      .orderBy('name')
      .then(favLists => res.json(favLists))
      .catch(err => res.sendStatus(404));
    })

module.exports = router;
