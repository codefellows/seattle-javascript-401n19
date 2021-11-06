'use strict';

const supertest = require('supertest');
const server = require('../../../src/server.js').server;
const { db } = require('../../../src/auth/models/index.js');

const mockRequest = supertest(server);

let users = {
  admin: { username: 'admin', password: 'password' },
  editor: { username: 'editor', password: 'password' },
  user: { username: 'user', password: 'password' },
};

beforeAll(async (done) => {
  await db.sync();
  done();
});
afterAll(async (done) => {
  await db.drop();
  done();
});

describe('Auth Router', () => {

  Object.keys(users).forEach(userType => {

    describe(`${userType} users`, () => {

      it('can create one', async () => {

        users[userType].role = userType;
        const response = await mockRequest.post('/signup').send(users[userType]);
        const user = response.body;

        expect(response.status).toBe(201);
        expect(user.id).toBeDefined();
        expect(user.username).toEqual(users[userType].username)

      });

      it('can signin with basic', async () => {

        const response = await mockRequest.post('/signin')
          .auth(users[userType].username, users[userType].password);

        const user = response.body;
        expect(response.status).toBe(200);
        expect(user.id).toBeDefined();
        expect(user.username).toEqual(users[userType].username)

      });

    });

    describe('bad login', () => {
      it('fails with known user and wrong password ', async () => {

        const response = await mockRequest.post('/signin')
          .auth('admin', 'xyz')
        const user = response.body;

        expect(response.status).toBe(500);
        expect(user.id).not.toBeDefined();

      });

      it('fails with unknown user', async () => {

        const response = await mockRequest.post('/signin')
          .auth('nobody', 'xyz')
        const user = response.body;

        expect(response.status).toBe(500);
        expect(user.id).not.toBeDefined();

      });
    })

  });

});
