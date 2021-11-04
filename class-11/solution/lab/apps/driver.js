'use strict';

const events = require('../lib/events.js');

events.on('pickup', handleDelivery);

function handleDelivery(payload) {
  setTimeout(() => {
    console.log(`DRIVER: picked up ${payload.orderID}`);
    events.emit('in-transit', payload);
  }, 1000);

  setTimeout(() => {
    console.log(`DRIVER: delivered up ${payload.orderID}`);
    events.emit('delivered', payload);
  }, 3000)
}