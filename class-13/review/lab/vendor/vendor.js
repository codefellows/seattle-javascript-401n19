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

// in transit listener
socket.on('inTransit', data => {
  // add a received event back to server
  console.log('Package is in transit', data);
});
// Setup listener for event, 'delivered', expecting a messageID and a payload()
// socket.on('delivered', data => {
//   let { messageID, payload } = data;
//   this.socket.emit('received', { messageID, event: 'delivered', clientID: store });
//   fn(payload);
// });

let delivery = {
  store: store,
  orderID: faker.random.uuid(),
  customer: `${faker.name.firstName()} ${faker.name.lastName()}`,
  address: `${faker.address.city()}, ${faker.address.stateAbbr()}`
}
// emit pickup event but with clientID/store iuncluded
socket.emit('pickup', { clientID: store, delivery });