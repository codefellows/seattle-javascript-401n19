'use strict';

// connecting to socket io as a client
const io = require('socket.io-client');
// connect to the HUB!!!
const socket = io.connect('http://localhost:3000/caps');

socket.on('pickup', (payload) => {

    setTimeout(() => {
        console.log('pickup', payload.orderID);
        socket.emit('in-transit', payload);
    }, 2000);

    setTimeout(() => {
        console.log('delivered', payload.orderID);
        socket.emit('delivered', payload);
    }, 2000);
});