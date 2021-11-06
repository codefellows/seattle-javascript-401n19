'use strict';

const events = require('../event-pool.js');
const eyesCover = require('./arms-handler.js');

// events.on('light', (payload) => {
//     if (payload.brightness >= 90) {
//         console.log('Covering Eyes');
//     }
// });

events.on('light', eyesCover);