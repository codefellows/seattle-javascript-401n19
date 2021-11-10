'use strict';

const io = require('socket.io-client');
const express = require('express');
const cors = require('cors');
const faker = require('faker');

const socket = io.connect('http://localhost:3000/caps');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const PORT = process.env.PORT || 3001;

/*
{
  "store": "1-206-flowers",
  "orderID": "65c17431-d1f5-432c-890f-d81788e38c1c",
  "customer": "Juston Reichel",
  "address": "Lake Al, OK"
 }
*/

app.post('/pickup', (req, res) => {

  let delivery = req.body || {
    store: '1-206-flowers',
    orderID: faker.random.uuid(),
    customer: `${faker.name.firstName()} ${faker.name.lastName()}`,
    address: `${faker.address.city()}, ${faker.address.stateAbbr()}`,
  };

  socket.emit('subscribe', { event: 'delivered', clientID: store, });
  res.status(200).send('scheduled');

});

app.listen(PORT, () => { });
