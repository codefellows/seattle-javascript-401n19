'use strict'

// 3rd party Dependencies (modules)
const express = require('express');
const morgan = require('morgan');

const app = express();

// Error handlers, Routes, and our own modules
const notFoundHandler = require('./error_handlers/404.js');
const errorHandler = require('./error_handlers/500.js');

// const foodRoutes = require('./routes/food.js');
const clothesRoutes = require('./routes/clothes.js');

// Global Middleware
app.use(morgan('dev')); // This is a 3rd party logger
app.use(express.json());

// Use our routes
// app.use(foodRoutes);
app.use(clothesRoutes);

// Error handlers -- need to be define last!!
app.use('*', notFoundHandler);
app.use(errorHandler);

// Export an object with the express app and start method
module.exports = {
    server: app,
    start: port => {
        if (!port) { throw new Error('Missing Port'); }
        app.listen(port, () => console.log(`Litening on port ${port}`));
    },
};