const express = require('express');

const actions = require('../helpers/actionModel.js');

const server = express.Router();

const errorHelper = (status, message, res) => {
  res.status(status).json({err: message });
}

server.get('/', (req,res) => {
  actions
    .get()
    .then(foundProjects =>{
      res.json(foundProjects);
    })
    .catch(err => {
      return errorHelper(500, 'Internal server error', res);
    })
})


module.exports = server;
