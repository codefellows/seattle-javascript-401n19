'use strict';

const faker = require('faker');
const events = require('../lib/events.js');

setInterval(() => {
  let delivery = {
    store: '1-206-flowers',
    orderID: faker.random.uuid(),
    customer: `${faker.name.firstName()} ${faker.name.lastName()}`,
    address: `${faker.address.city()}, ${faker.address.stateAbbr()}`
  }
  events.emit('pickup', delivery);
}, 5000)

events.on('delivered', handleDelivery);

// Imagine this updating a sreen instead of a boring console.log()
function handleDelivery(payload) {
  console.log(`VENDOR: Thank you for delivering ${payload.orderID}`);
}