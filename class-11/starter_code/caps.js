'use strict';

// require our events and modules
const events = require('./util/event-pool.js');
const vendor = require('./modules/vendor.js');
// const driver

// Event listeners => callback
// events on: pickup, in-transit, delivered
events.on('pickup', (payload) => logEvent('pickup', payload));

// callback function
function logEvent(event, payload) {
    // console log event, time, payload
};