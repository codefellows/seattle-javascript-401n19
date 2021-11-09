'use strict';

const io = require('socket.io')(3000);

io.on('connection', (socket) => {
  console.log('CORE', socket.id);
});

const caps = io.of('/caps');
caps.on('connection', (socket) => {

  console.log('Connected', socket.id);

  socket.on('join', room => {
    console.log('registered as', room);
    socket.join(room);
  });

  socket.on('pickup', (payload) => {
    logIt('pickup', payload);
    caps.emit('pickup', payload);
  });

  socket.on('in-transit', (payload) => {
    logIt('in-transit', payload);
    caps.to(payload.store).emit('in-transit', payload);
  });

  socket.on('delivered', (payload) => {
    logIt('delivered', payload);
    caps.to(payload.store).emit('delivered', payload);
  });

});

function logIt(event, payload) {
  let time = new Date();
  console.log({ time, event, payload });
}