'use strict';

/*
Requirements:

- host a socket.io 

- create a chores Queue

- connect to a family namespace

- listen for events: new chore, getall, received,

- emit -> chore, added

- unique ID for chores
*/
const uuid = require('uuid').v4;
const io = require('socket.io')(3000);

// a keyed queue. there's nor order presumed here, messages get delivered and rmoved from the list as they are received
const queue = {
    chores: {
    }
};

const family = io.of('/family');

family.on('connection', socket => {

    console.log('Family socket connection', socket.id);

    // new chore listener
    socket.on('new chore', payload => {
        // lets create a unique ID
        let id = uuid();
        // add message to queue
        queue[id].chores[id] = payload;
        console.log(queue.chores);
        socket.emit('added');
        family.emit('chore', { id, payload });
    });

    // getall
    socket.on('getall', () => {
        Object.keys(queue.chores).forEach(id => {
            socket.emit('chore', { id, payload: queue.chores[id] });
        })
    });

    // received
    socket.on('received', message => {
        console.log('This chore was recieved', message)
        delete queue.chores[message.id];
    })

});