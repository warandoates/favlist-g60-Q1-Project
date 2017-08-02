const express = require('express');

function validation(req, res, next) {
  isNaN(req.params.id) ? res.status(404).send('Not Found') : next();
}

module.exports = validation;
