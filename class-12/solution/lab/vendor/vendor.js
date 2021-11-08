'use strict';

const faker = require('faker');
const io = require('socket.io-client');

const socket = io.connect('http://localhost:3000/caps');

const store = '1-206-flowers';

socket.emit('join', store);

socket.on('delivered', (payload) => {
  console.log(`Thank you for delivering ${payload.orderID}`);
});