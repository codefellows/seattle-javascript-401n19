'use strict';

require('dotenv').config();
const middleware = require('../middleware/bearer.js');
const { db, users } = require('../models');
const jwt = require('jsonwebtoken');

let testUsers = {
  admin: { username: 'admin', password: 'password', role: 'admin' },
};

// // Pre-load our database with fake users
beforeAll(async (done) => {
  await db.sync();
  await users.create(testUsers.admin);
  done();
});
afterAll(async (done) => {
  await db.drop();
  done();
})

describe('Auth Middleware', () => {

  // Mock the express req/res/next that we need for each middleware call
  const req = {};
  const res = {
    status: jest.fn(() => res),
    send: jest.fn(() => res)
  }
  const next = jest.fn();
  describe('user authentication', () => {

    it('fails a login for a user (admin) with an incorrect token', () => {

      req.headers = {
        authorization: 'Bearer thisisabadtoken',
      };

      return middleware(req, res, next)
        .then(() => {
          expect(next).not.toHaveBeenCalled();
          expect(res.status).toHaveBeenCalledWith(403);
        });

    });

    it('logs in a user with a proper token', () => {

      const user = { username: 'admin' };
      const token = jwt.sign(user, process.env.SECRET || 'secretstring');

      req.headers = {
        authorization: `Bearer ${token}`,
      };

      return middleware(req, res, next)
        .then(() => {
          expect(next).toHaveBeenCalledWith();
        });

    });

  });

});
