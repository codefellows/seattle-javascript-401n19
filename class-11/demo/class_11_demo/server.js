'use strict';

const events = require('./event-pool.js');

// require body parts, users, carts, fog



events.on('light-detected', (payload) => {
    events.emit('light', { brightness: payload })
});