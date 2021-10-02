'use strict';

// Require server and databse
const server = require('./src/server.js');
const { db } = require('./src/models/index.js');

// Sync db and start server. Catch any errors and send thenm to the console
db.sync()
  .then(() => {
    server.start(3000);
  })
  .catch(console.error);