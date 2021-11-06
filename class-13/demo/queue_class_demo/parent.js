'use strict';

const client = require('socket.io-client');
const socket = client.connect('http://localhost:3000/family');

/*
- conect to hub
- have a way to enter chores from CLI
- emit a new chore

- on added, disconnect
*/

// CLI post a new chore form the command line -> node parent.js clean-bathroom
const chore = process.argv[2];
// console.log('CLI ARgs', process.argv, 'chore', chore);

socket.emit('new chore', chore);

// After we add a chore, the server responds back.
// Since we know it was added to thes list, we can exit
socket.on('added', () => {
    socket.disconnect();
})