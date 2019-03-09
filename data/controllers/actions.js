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

server.delete('/:id',(req,res) =>{
  const {id} = req.params;
  actions
    .remove(id)
    .then(response => {
      if (response === 0){
        return errorHelper(404, 'No projects found with that ID', res);
      }
      res.json(response)
    })
    .catch(err => {
      return errorHelper(500, "Internal server error", res);
    });
})

server.put('/:id', (req,res) =>{
  const {id} = req.params;
  const updatedAction = {
    project_id: req.body.project_id,
    description: req.body.description,
    notes: req.body.notes,
    completed: req.body.completed
  }
  actions
    .update(id, updatedAction)
    .then(response => {
      if (response === 0){
        return errorHelper(404, 'No projects found with that ID', res);
      }
      res.json(response)
    })
    .catch(err => {
      return errorHelper(500, "Internal server error", res);
    });
})

module.exports = server;
