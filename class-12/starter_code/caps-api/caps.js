'use strict';

const io = require('socket.io-client');
const express = require('express');
const cors = require('cors');
const notFound = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');

const socket = io.connect('http://localhost:3000/caps');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const PORT = process.env.PORT || 3001;

let delivery = {
    store: 'Bork Biscuits',
    orderID: 2,
    customer: 'Zork',
    address: 'All dogs go to heaven'
}

app.post('/pickup', (req,res) => {
    // post request from postman with a req.body
    if(JSON.stringify(req.body) === '{}') {
        req.body = delivery;
    }
    socket.emit('pickup', req.body);
    socket.emit('join', req.body.store);
    res.status(200).send(`Scheduled delivery for ${req.body}`);
});

// in-transit
// delivered
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`server is up on port ${PORT}`));

module.exports = {
    server: app
};