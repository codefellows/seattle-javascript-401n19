'use strict';

const client = require('socket.io-client');
const socket = client.connect('http://localhost:3000/family');

// on connect, get all
socket.emit('getall');

// on a chore, console log and emit a received
socket.on('chore', message => {
    console.log('I have to do this chore', message.payload);
    socket.emit('received', message);
});