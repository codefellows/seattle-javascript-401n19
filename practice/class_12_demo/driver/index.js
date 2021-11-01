'use strict';

// this is a client!! connect to socket.io-cleint
const io = require('socket.io-client');

const socket = io.connect('http://localhost:3000/caps');

socket.on('pickup', (payload) => {
    console.log('pickup', payload.orderID);
    socket.emit('in-transit', payload);
});