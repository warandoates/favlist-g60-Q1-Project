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
        description: req.body.description
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
      res.send('this will retrieve a comment to a specifc entry');
    })
    .post((req, res) => {
      res.send('this create a comment to a specifc entry');
    });

module.exports = router;
