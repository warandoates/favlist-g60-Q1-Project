const express = require('express');

const numValidation = (req, res, next) => {
  isNaN(req.params.id) ? res.status(404).send('Not Found; Not a number') : next();
}

const authValidation = (req, res, next) => {
  req.headers.admin !== 'true' ? res.status(403).send('YOU ARE FORBIDDEN') : next();
}

module.exports = { numValidation, authValidation };
