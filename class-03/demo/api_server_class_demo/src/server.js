'use strict';

// 3rd Party Dependencies (modules)
const express = require('express');
const morgan = require('morgan');

// Our own custom modules
const notFoundHandler = require('./handlers/404.js');
const errorHandler = require('./handlers/500.js');
const personRouter = require('./routes/people.js');

const app = express();

// Express Global Middleware
app.use(express.json());
app.use(morgan('dev'));

// Route
app.use(personRouter);

// Our Error Handlers -- need to be the last things defined!
// These use the external modules we required above
app.use('*', notFoundHandler);
app.use(errorHandler);

// Export an object with the express app and separate method that can start the server
module.exports = {
  server: app,
  start: port => {
    if (!port) { throw new Error('Missing Port'); }
    app.listen(port, () => console.log(`Listening on ${port}`));
  },
};
