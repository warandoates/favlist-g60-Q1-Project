const express = require('express');
const router = express.Router();

router.route('/:id')
  .get((req, res) => {
    res.send('this will retrieve acomment by id!');
  })
  .post((req, res) => {
    res.send('this will update a comment');
  })
  .delete((req, res) => {
    res.send('this will delete a comment');
  });

module.exports = router;
