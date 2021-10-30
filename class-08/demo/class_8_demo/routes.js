'use strict';

const express = require('express');
const authRouter = express.Router();

// Should probably modularize this
const { Sequelize, DataTypes } = require('sequelize');
const userModel = require('./userModel.js');
const basicAuth = require('./basic-auth-middleware.js');
const bearerAuth = require('./bearer-auth-middleware.js');
const acl = require('./acl.js');
const DATABASE_URL = process.env.DATABASE_URL || 'postgres://localhost:5432/auth_8';

const sequelize = new Sequelize(DATABASE_URL);
const Users = userModel(sequelize, DataTypes);

/*
User1 -> { "username":"Zork", "password":"BestBoi", "role":"admin" }
    - Basic Wm9yazpCZXN0Qm9p
    - Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlpvcmsiLCJpYXQiOjE2MzQ2OTgyMTB9.qvz-ZYbslyHgobgF6irmZFfekcdig9nqbf_7Bpy51-M
User2 -> { "username":"Lemi", "password":"MowBoi", "role":"admin" }
    - Basic TGVtaTpNb3dCb2k=
    - Bearer
User3 -> { "username":"Darek", "password":"zoolander", "role":"writer" }
    - Basic RGFyZWs6em9vbGFuZGVyeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkRhcmVrIiwiaWF0IjoxNjM0Njk4MzQ3fQ.7vHR3dKATUYvzV9f6mx84OWCcQNfFmL5IxnYv0KmTFE
    - Bearer 
User4 -> { "username":"Joker", "password":"quinn", "role":"editor" }
    - Basic Sm9rZXI6cXVpbm4=
    - Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikpva2VyIiwiaWF0IjoxNjM0Njk4NzY0fQ.WThSRFwBj8LDSLPhFevF5vFwRjQdMYMNALTg2_4dLvU
*/

authRouter.post('/register', (req,res) => {
    console.log(req.body);
    Users.create(req.body)
        .then(user => {
            res.status(200).send(user);
        })
        .catch(e => {res.status(403).send('Error creating User')});
});

authRouter.post('/signin', basicAuth(Users), (req,res) => {
    res.status(200).json(req.user);
});

authRouter.get('/user', bearerAuth(Users), (req, res) => {
    res.status(200).json('Secret viewing of the saaaaauce');
});

authRouter.get('/create', bearerAuth(Users), acl('create'), (req, res) => { 
    res.status(200).send('You can create');
});

authRouter.get('/read', bearerAuth(Users), acl('read'), (req, res) => {
    res.status(200).send('You can read');
});

authRouter.get('/update', bearerAuth(Users), acl('update'), (req, res) => {
    res.status(200).send('You can update');
});

authRouter.get('/delete', bearerAuth(Users), acl('delete'), (req, res) => {
    res.status(200).send('You can delete');
});


module.exports = {
    authRouter: authRouter,
    db: sequelize
};