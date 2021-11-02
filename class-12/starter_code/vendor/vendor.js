'use strict';

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000/caps');

socket.on('delivered', (payload) => {
    console.log(`Thanks for delivering ${payload}`);
});