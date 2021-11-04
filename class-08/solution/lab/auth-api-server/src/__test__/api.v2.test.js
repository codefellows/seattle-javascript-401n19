'use strict';

const { server } = require('../server.js');
const { db, users } = require('../models');
const jwt = require('jsonwebtoken');
const supertest = require('supertest');
const mockRequest = supertest(server);

beforeAll(async (done) => {
  await db.sync();
  await users.create({ username: 'test', password: 'test', role: 'admin' });
  done();
});
afterAll(async (done) => {
  await db.drop();
  done();
});

describe('web server', () => {

  const token = jwt.sign({ username: 'test'}, process.env.SECRET || 'secretstring');

  it('should respond with a 404 on an invalid route', () => {

    return mockRequest
      .get('/foobar')
      .then(results => {
        expect(results.status).toBe(404);
      });

  });

  // These tests are wired with async/await --- so much cleaner!
  it('should respond with a 404 on an invalid method', async () => {
    const response = await mockRequest.patch('/api/v2/food');
    expect(response.status).toBe(404);
  });

  it('can create a record', async () => {
    const data = {
      name: 'carrots',
      calories: 25,
      type: 'vegetable'
    };

    const response = await mockRequest.post('/api/v2/food')
      .set({ Authorization: `Bearer ${token}`})
      .send(data);
    expect(response.status).toBe(201);

    //Did we get an ID?
    expect(response.body.id).toBeDefined();

    // Is the data we sent in the database?
    Object.keys(data).forEach(key => {
      expect(response.body[key]).toEqual(data[key])
    })
  });

  it('can get list of records', async () => {
    const response = await mockRequest.get('/api/v2/food')
      .set({ Authorization: `Bearer ${token}`})
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
    expect(response.body.length).toEqual(1);
  });

  it('can get a record', async () => {
    const response = await mockRequest.get('/api/v2/food/1')
      .set({ Authorization: `Bearer ${token}`});
    expect(response.status).toBe(200);
    expect(typeof response.body).toEqual('object');
    expect(response.body.id).toEqual(1);
  });

  it('can update a record', async () => {
    const data = { name: "Broccoli" };
    const response = await mockRequest.put('/api/v2/food/1')
      .set({ Authorization: `Bearer ${token}`})
      .send(data);
    expect(response.status).toBe(200);
    expect(typeof response.body).toEqual('object');
    expect(response.body.id).toEqual(1);
    expect(response.body.name).toEqual("Broccoli");
  });

  it('can delete a record', async () => {
    const response = await mockRequest.delete('/api/v2/food/1')
      .set({ Authorization: `Bearer ${token}`});
    expect(response.status).toBe(200);
    expect(response.body).toEqual(1);

    const getResponse = await mockRequest.get('/api/v2/food')
      .set({ Authorization: `Bearer ${token}`});
    expect(getResponse.body.length).toEqual(0);
  });

});
