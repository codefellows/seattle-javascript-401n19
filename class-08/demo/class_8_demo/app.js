'use strict';

// 3rd party resources
const express = require('express');
const morgan = require('morgan');
const { db, authRouter } = require('./routes.js');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(authRouter);

db.sync()
    .then(() => {
        app.listen(3001, () => console.log(`Server up on Port 3001`))
    })
    .catch(e => console.error('Could not start sever', e.message))