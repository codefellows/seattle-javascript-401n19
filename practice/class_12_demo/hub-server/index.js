'use strict';

const io = require('socket.io')(3000);

io.on('connection', (socket) => {
  console.log('CORE', socket.id);
});

const caps = io.of('/caps');

caps.on('connection', (socket) => {
    
    console.log('Connected', socket.id);

    // Listen for room creation and joining
    socket.on('join', room => {
        console.log('registered as', room);
        socket.join(room);
      });
    
    // Listen for pickup event
    socket.on('pickup', (payload) => {
        logIt('pickup', payload);
        caps.emit('pickup', payload);
      });

    // listen for in transit event
    socket.on('in-transit', (payload) => {
        logIt('pickup', payload);
        caps.emit('pickup', payload);
      });
    // listen for delivered event
    socket.on('delivered', (payload) => {
        logIt('pickup', payload);
        caps.emit('pickup', payload);
      });
});

function logIt(event, payload) {
    let time = new Date();
    console.log({ time, event, payload });
  }