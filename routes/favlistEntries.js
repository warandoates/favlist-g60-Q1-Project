const express = require('express');
const router = express.Router();

router.route('/:id')
  .get((req, res) => {
    res.send('this will retrieve entry by id!');
  })
  .post((req, res) => {
    res.send('this will update an entry');
  })
  .delete((req, res) => {
    res.send('this will delete an entry');
  });

  router.route('/:id/comments')
    .get((req, res) => {
      res.send('this will retrieve a comment to a specifc entry');
    })
    .post((req, res) => {
      res.send('this create a comment to a specifc entry');
    });

module.exports = router;
