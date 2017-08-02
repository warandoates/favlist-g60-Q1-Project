const express = require('express');
const router = express.Router();
const knex = require('../knex');
const { numValidation, authValidation } = require('./validations');

router.route('/:id')
  .get(numValidation, (req, res) => {
    knex('entries')
      .where('id', req.params.id)
      .first()
      .then(entry =>
        entry ? res.json(entry) : res.status(404).send('Not Found'));
  })
  .post(numValidation, authValidation, (req, res) => {
    knex('entries')
      .where('id', req.params.id)
      .first()
      .update({
        sourceId: req.body.sourceId,
        updated_at: new Date().toString()
      }, '*')
      .then(result => {
        res.json(result)
      })
      .catch(err => console.log('this is an error', err));
  })
  .delete(numValidation, authValidation, (req, res) => {
    knex('entries')
      .where('id', req.params.id)
      .first()
      .del()
      .then(() => res.json('Entry has been Deleted!'))
      .catch(err => console.log('this is an error', err));
  });


// GET AND POST ROUTES FOR COMMENTS

router.route('/:id/comments')
  .get(numValidation, (req, res) => {
    knex('comments')
      .where('entryId', req.params.id)
      .then(comments =>
        comments ? res.json(comments) : res.status(404).send('nothing here'));
  })
  .post(numValidation, (req, res) => {
    knex('comments')
      .insert({
        entryId: req.params.id,
        comment: req.body.comment,
        author: req.body.author
      }, '*')
      .then(result => res.json(result[0]))
      .catch(err => res.status(400).send(err));
  });

router.route('/:id/votes')
  .post(numValidation, (req, res) => {
    if (req.body.type !== 'up' && req.body.type !== 'down') {
      res.send('Incorrect Type Specified')
    }
    let currentVote;
    knex('entries')
      .where('id', req.params.id)
      .first()
      .then(entry => {
        currentVote = entry.votes;
        req.body.type === 'up' ? currentVote += 1 : currentVote -= 1;
      })
      .then(() => {
        knex('entries')
          .where('id', req.params.id)
          .first()
          .update({
            votes: currentVote
          }, '*')
          .then(result => {
            res.json(result)
          })
      })
  })

module.exports = router;
