'use strict';
require('./apps/driver.js');
require('./apps/vendor.js');
const events = require('./lib/events.js');

console.log('Events', events);

events.on('pickup', (payload) => logEvent('pickup', payload));
events.on('in-transit', (payload) => logEvent('in-transit', payload));
events.on('delivered', (payload) => logEvent('delivered', payload));
console.log('before', events);


function logEvent(event, payload) {
  let time = new Date();
  console.log('EVENT', { event, time, payload });
}