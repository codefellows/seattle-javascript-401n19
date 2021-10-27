'use strict';

const events = require('../util/event-pool.js');
const faker = require('faker');

// delivery variable <- store, orderID, customer, address
setInterval(() => {
    let delivery = {
        store: 'Zorks Bones',
        orderID: faker.uuid(),
        customer: `${faker.name.firstName()} ${faker.name.lastName()}`,
        address: ,
    }
    events.emit('pickup', delivery);
}, 5000);

// listen for delivered event => handleDelivery

// 