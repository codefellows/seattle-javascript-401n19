'use strict';

// I want to add routes here to trigger events instead of setInterval or setTimeout

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
    "store": "xTreats4Bork",
    "orderID": 1,
    "customer": "Zork Boi",
    "address": "All dogs go to heaven"
}
*/

let delivery = {
    store: '1-206-flowers',
    orderID: faker.datatype.uuid(),
    customer: `${faker.name.firstName()} ${faker.name.lastName()}`,
    address: `${faker.address.city()}, ${faker.address.stateAbbr()}`,
  };

// route for triggering pickup event
app.post('/pickup', (req, res) => {
// set req.body to random data if not provided in the request
    console.log(req.body);
    socket.emit('pickup', req.body);
    res.status(200).send(`Scheduled delivery for ${req.body}`);

  });

  app.post('/delivered', (req,res) => {
    socket.emit('delivered', req.body)
    res.status(200).send(`Delivered order: ${req.body}`);
  }); 

  app.listen(PORT, () => console.log(`Server up on port: ${PORT}`) );
  