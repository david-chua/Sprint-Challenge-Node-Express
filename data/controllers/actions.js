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

server.get('/:id', (req,res) => {
  const {id} = req.params;
  actions
    .get(id)
    .then(foundProjects =>{
      res.json(foundProjects);
    })
    .catch(err => {
      return errorHelper(500, 'Internal server error', res);
    })
})

server.post('/', (req,res) => {
  const newAction = {
    project_id: req.body.project_id,
    description: req.body.description,
    notes: req.body.notes,
    completed: req.body.completed
  }
  actions
    .insert(newAction)
    .then(response => {
      res.json(response)
    })
    .catch(err => {
      return errorHelper(500,
      'Internal sever error', res);
    });
});

module.exports = server;
