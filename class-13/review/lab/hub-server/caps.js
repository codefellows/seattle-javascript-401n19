'use strict';

const io = require('socket.io')(3000);
const uuid = require('uuid').v4;

// This will be our message queue that holds 3 events: pickup,
// in-transit, and delivered as well as any subscribers to that event.
// This means we need some way to pass idtentifying information along with our event

// driver is hardcoded in here because he needs to be subscribed reagardless if he is connected, 
//how could we make this dynamic like the vendors?
const message_queue = {
  'pickup': { 'driver': {} },
  'inTransit': {},
  'delivered': {}
}

io.on('connection', (socket) => {
  console.log('connected', socket.id);
  //hardcode driver room
  socket.join('driver');

  // On connection of a client, we want/expect them to subscribe to the events
  // in our message_queue. We are expecting a 'subscribe' event and some data
  // read through vendor.js to see
  socket.on('subscribe', payload => {
    // get event and ClientID from payload
    let { event, clientID } = payload;
    //subscribe them to the proper queue
    //some edge case checking in case message_queue isn't prefilled
    if (!message_queue[event]) { message_queue[event] = {} };
    if (!message_queue[event][clientID]) { message_queue[event][clientID] = {}; }
    console.log('Message_queue after a subscriber', message_queue);
    // Add each subscriber to their own rooms so that they can avoid the broadcast
    socket.join(clientID);
  });

  // socket listener for pickup event.
  // assign a uuid to this event
  // put the event in the pickup driver queue
  // 
  socket.on('pickup', payload => {
    let orderID = uuid();
    //keeping track of specific client requests with clientID
    let { clientID, delivery } = payload;
    // push payload to driver queue at new orderID
    message_queue['pickup']['driver'][orderID] = delivery;
    //FIFO  queue -> add event to queue, then cycle through queue emitting events and waiting for received
    // send to driver room, driver needs to listen for 'pickup' event
    io.in('driver').emit('pickup', { clientID, orderID, payload:delivery });
  });

  // in transit event listener
  socket.on('inTransit', payload => {
    // payload is orderID, clientID and delivery
    //push event to proper queue[clientID][orderID] = payload
    console.log('inTransit payload', payload);
    message_queue['inTransit'][payload.clientID][payload.orderID] = payload.payload;
    // emit to client room the inTransit event
    console.log('message_queue after inTransit event', message_queue);
    socket.to(payload.clientID).emit('inTransit', payload);
  });

  // delivered event lisntener
  socket.on('delivered', payload => {
    message_queue['delivered'][payload.clientID][payload.orderID] = payload.payload;
    socket.in(payload.clientID).emit('inTransit', payload);
  });

  // get all event listener
  socket.on('getAll', payload => {
    // by event and clientID, get all orders from queue 
    // Example: message_queue['pickup']['1-206-flowers']
    // emit each event to clientID room

  });

  // received event listener
  socket.on('received', payload => {
    // on a received event w/ event, clientID, and orderID
    // find proper queue and delete that order
  })
});