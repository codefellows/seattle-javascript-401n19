'use strict';

const { db } = require('./src/auth/models/index.js');
const server = require('./src/server.js');

// Start up DB Server
db.sync()
  .then(() => {

    // Start the web server
    server.start(process.env.PORT);
  })

