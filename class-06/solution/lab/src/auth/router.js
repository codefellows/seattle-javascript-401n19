'use strict';

const express = require('express');
const authRouter = express.Router();

const { User } = require('./models/index.js');
const basicAuth = require('./basic-auth-middleware.js');

authRouter.post('/signup', async (req, res, next) => {
  console.log(User.create, req.body);
  try {
    let record = await User.create(req.body);
    res.status(201).json(record);
  } catch (e) {
    next(e.message);
  }
});

authRouter.post('/signin', basicAuth, (req, res, next) => {
  res.status(200).json(req.user);
});

module.exports = authRouter;
