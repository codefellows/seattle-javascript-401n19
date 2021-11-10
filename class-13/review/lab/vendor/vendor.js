'use strict';

const faker = require('faker');
const io = require('socket.io-client');

const socket = io.connect('http://localhost:3000');
// how could we get input for the store name?
const store = process.argv.splice(2)[0];

// subscribe to delivered event with payload
socket.emit('subscribe', { event: 'delivered', clientID: store, });
// subscribe to in-transit event with payload
socket.emit('subscribe', { event:'inTransit', clientID: store });

// inTransit listener
socket.on('inTransit', data => {
  console.log(`Your package ${data.orderID} is in-transit`);
  // add a received event back to server
  socket.emit('received', { orderID: data.orderID, event: 'inTransit', clientID: data.clientID });
});
// Delivered Listener
socket.on('delivered', data => {
  console.log(`Your package ${data.orderID} has been delivered`);
  // add a received event back to server
  socket.emit('received', { orderID: data.orderID, event: 'delivered', clientID: data.clientID });
});

let delivery = {
  store: store,
  orderID: faker.random.uuid(),
  customer: `${faker.name.firstName()} ${faker.name.lastName()}`,
  address: `${faker.address.city()}, ${faker.address.stateAbbr()}`
}
// emit pickup event but with clientID/store iuncluded
socket.emit('pickup', { clientID: store, delivery });