'use strict';

// 3rd Party Dependencies (modules)
const express = require('express');
const morgan = require('morgan');

// Our own custom modules
const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');

const catRoutes = require('./routes/cat.js');
const dogRoutes = require('./routes/dog.js');

const app = express();

app.use(express.json());
app.use(morgan('dev')); // This is a 3rd party logger

//Use routes

app.use(catRoutes);
app.use(dogRoutes);

app.use('*', notFoundHandler);
app.use(errorHandler);

// Export an object with the express app and separate method that can start the server
module.exports = {
    server: app,
    start: port => {
      if (!port) { throw new Error("Missing Port"); }
      app.listen(port, () => console.log(`Listening on ${port}`));
    },
  };
  