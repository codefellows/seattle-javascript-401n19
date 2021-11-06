'use strict';

const Events = require('events');
const events = new Events();

// Export ONE instance of events that all modules can share
// this is called a ... "singleton"
// global variable that all modules can see and use
module.exports = events;