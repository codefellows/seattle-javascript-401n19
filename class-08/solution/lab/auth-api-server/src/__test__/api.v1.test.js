'use strict';

const { server } = require('../server.js');
const { db } = require('../models');
const supertest = require('supertest');
const mockRequest = supertest(server);

beforeAll(async (done) => {
  await db.sync();
  done();
});
afterAll(async (done) => {
  await db.drop();
  done();
});

describe('web server', () => {

  it('should respond with a 404 on an invalid route', () => {

    return mockRequest
      .get('/foobar')
      .then(results => {
        expect(results.status).toBe(404);
      });

  });

  // These tests are wired with async/await --- so much cleaner!
  it('should respond with a 404 on an invalid method', async () => {
    const response = await mockRequest.patch('/api/v1/food');
    expect(response.status).toBe(404);
  });

  it('can create a record', async () => {
    const data = {
      name: 'carrots',
      calories: 25,
      type: 'vegetable'
    };

    const response = await mockRequest.post('/api/v1/food').send(data);
    expect(response.status).toBe(201);

    //Did we get an ID?
    expect(response.body.id).toBeDefined();

    // Is the data we sent in the database?
    Object.keys(data).forEach(key => {
      expect(response.body[key]).toEqual(data[key])
    })
  });

  it('can get list of records', async () => {
    const response = await mockRequest.get('/api/v1/food');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
    expect(response.body.length).toEqual(1);
  });

  it('can get a record', async () => {
    const response = await mockRequest.get('/api/v1/food/1');
    expect(response.status).toBe(200);
    expect(typeof response.body).toEqual('object');
    expect(response.body.id).toEqual(1);
  });

  it('can update a record', async () => {
    const data = { name: "Broccoli" };
    const response = await mockRequest.put('/api/v1/food/1').send(data);
    expect(response.status).toBe(200);
    expect(typeof response.body).toEqual('object');
    expect(response.body.id).toEqual(1);
    expect(response.body.name).toEqual("Broccoli");
  });

  it('can delete a record', async () => {
    const response = await mockRequest.delete('/api/v1/food/1');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(1);

    const getResponse = await mockRequest.get('/api/v1/food');
    expect(getResponse.body.length).toEqual(0);

  });

});
