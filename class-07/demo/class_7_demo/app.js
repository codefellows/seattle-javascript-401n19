'use strict';

// 3rd party resources
const express = require('express');
const morgan = require('morgan');
const { Sequelize, DataTypes } = require('sequelize');
const userModel = require('./userModel.js');
const basicAuth = require('./basic-auth-middleware.js');
const bearerAuth = require('./bearer-auth-middleware.js');
const DATABASE_URL = process.env.DATABASE_URL || 'postgres://localhost:5432/auth_7';

const app = express();

const sequelize = new Sequelize(DATABASE_URL);
const Users = userModel(sequelize, DataTypes);

app.use(morgan('dev'));
app.use(express.json());

/* 
1. First I register 2 new users by POSTing json to /register with Postman
    a. req.body = { "username":"Zork", "password":"BestBoi" }
    b. req.body = { "username":"Lemi", "password":"SneakBoi" }
2. Second, I sign in with the credentials base-64 encoded. I want to verify that I recieve a token back
    ZORK
    a. req.headers.authorization = "Basic Wm9yazpCZXN0Qm9p"
    b. token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlpvcmsiLCJpYXQiOjE2MzQ0MTU5NjR9.sMSmhGaYI9-AmFQIbPT3YC_ygt5VXGzSxOnMVgJW-w4
    LEMI
    c. req.headers.authorization = "Basic TGVtaTpTbmVha0JvaQ=="
    d. token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkxlbWkiLCJpYXQiOjE2MzQ0MTUyMDZ9.WtNrPJlDs1CQbtzlty9tfmMc_PXTjyDL8TFJQYKWIVY
3. Thirdly, with the token now in hand, I want to access a route(/user) and authenticate with the token.
    a. req.headers.authorization = "Bearer ${Lemi token}"
*/

app.post('/register', (req,res) => {
    console.log('1. Creating a new User req.body:', req.body,);
    Users.create(req.body)
        .then(user => {
            res.status(200).send(user);
        })
        .catch(e => {res.status(403).send('Error creating User')});
});

app.post('/signin', basicAuth(Users), (req,res) => {
    console.log('2. I want to sign in with BASIC auth, and get a token back:', req.user, req.user.token);
    res.status(200).json(req.user);
});

app.get('/user', bearerAuth(Users), (req,res) => {
    console.log('3. I am authenticated with my token!', req.user);
    res.status(200).json('Secret viewing of the saaaaauce');
});

sequelize.sync()
    .then(() => {
        app.listen(3001, () => console.log(`Server up on Port 3001`))
    })
    .catch(e => console.error('Could not start sever', e.message))