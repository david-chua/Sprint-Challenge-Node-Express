const express = require('express');

const projects = require('../helpers/projectModel.js');

const server = express.Router();

server.get('/', (req,res) => {
  projects
    .get()
    .then(foundProjects =>{
      res.json(foundProjects);
    })
    .catch(err => {
      return errorHelper(500, 'Internal server error', res);
    })
})

server.post('/', (req,res) => {
  const newProject = {
    name: req.body.name,
    description: req.body.description,
    completed: req.body.completed
  }
  projects
    .insert(newProject)
    .then(response => {
      console.log(response)
      res.json(response)
    })
    .catch(err => {
      return errorHelper(500, 'Internal server error', res);
    });
});

server.delete('/:id', (req,res) => {
  const {id} = req.params;
  projects
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




module.exports = server;
