const express = require('express');
const logger = require('morgan');
const actionRouter = require('./data/controllers/actions.js');
const projectRouter = require('./data/controllers/projects.js');

const server = express();
const parser = express.json();
const logMiddleware = logger('dev');

server.use(parser,logMiddleware);

server.use('/api/projects', projectRouter);
server.use('/api/actions', actionRouter);

server.get('/', (req,res,next) => {
  res.send(`
    <h2> Sprint Challenge </h2>
    <p> Node/Exress</p>
    `
  )
});


module.exports = server;
