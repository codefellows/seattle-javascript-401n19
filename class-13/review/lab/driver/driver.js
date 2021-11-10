'use strict';

// CLIENT
const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');

//subscribe driver to pickup events with caps server
socket.emit('subscribe', { event: 'pickup', clientID: 'driver', });

socket.on('pickup', data => {
  // data = {
  //   clientID: {},
  //   messageID: {},
  //   payload: {}
  // } -> data.clientID, data.orderID, data.payload
  console.log('Driver pickup', data.orderID, data.payload);
  // socket.emit('received', { messageID, event:'pickup', clientID: 'driver' });
  pickup(data);
});

function pickup(data) {
  setTimeout(() => {
    socket.emit('inTransit', data);
    deliver(data);
  }, 1000);
};

function deliver(data) {
  setTimeout(() => {
    socket.emit('delivered', data);
  }, 1500);
};

