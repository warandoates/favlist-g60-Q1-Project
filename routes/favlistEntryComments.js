const express = require('express');
const router = express.Router();
const knex = require('../knex');
const { numValidation } = require('./validations');

router.route('/:id')
  .get(numValidation, (req, res) => {
    knex('comments')
      .where('id', req.params.id)
      .first()
      .then(comment =>
        comment ? res.json(comment) : res.status(404).send('Not Found'));
  })
  .post(numValidation, (req, res) => {
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
  .delete(numValidation, (req, res) => {
    knex('comments')
      .where('id', req.params.id)
      .first()
      .del()
      .then(() => res.json('Comment has been Deleted!'))
      .catch(err => console.log('this is an error', err));
  });

module.exports = router;
