const express = require('express');
const router = express.Router();

router.route('/')
  .get((req, res) => {
    res.send('this will retrieve all favlists!');
  })
  .post((req, res) => {
    res.send('this will create a favlist!!!');
  });

router.route('/:id')
  .get((req, res) => {
    res.send('this will retrieve a specific favlist');
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
