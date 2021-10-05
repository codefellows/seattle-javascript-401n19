'use strict';

const { server } = require('../src/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);
const { db } = require('../src/models/index.js');

beforeAll(async () => {
  await db.sync();
});
afterAll(async () => {
  await db.drop();
});

describe('web server', () => {

  it('should respond with a 404 on an invalid route', () => {
    return mockRequest
      .get('/foobar')
      .then(results => {
        expect(results.status).toBe(404);
      });
  });

  // // These tests are wired with async/await --- so much cleaner!
  it('should respond with a 404 on an invalid method', async () => {
    const response = await mockRequest.put('/clothes');
    expect(response.status).toBe(404);
  });

  it('can create a clothes record', async () => {
    const data = {
      name: 'shirt',
      color: 'yellow',
      size: 25
    };

    const response = await mockRequest.post('/clothes').send(data);
    expect(response.status).toBe(200);

    //Did we get an ID?
    expect(response.body.id).toBeDefined();

    // Is the data we sent in the database?
    Object.keys(data).forEach(key => {
      expect(data[key]).toEqual(response.body[key]);
    });
  });

  it('can get list of clothes records', async () => {
    const response = await mockRequest.get('/clothes');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
    expect(response.body.length).toEqual(1);
  });

  it('can get a clothes record', async () => {
    const response = await mockRequest.get('/clothes/1');
    expect(response.status).toBe(200);
    expect(typeof response.body).toEqual('object');
    expect(response.body.id).toEqual(1);
  });

  it('can update a clothes record', async () => {
    const data = { name: "Pants" };
    const response = await mockRequest.put('/clothes/1').send(data);
    expect(response.status).toBe(200);
    expect(typeof response.body).toEqual('object');
    expect(response.body.id).toEqual(1);
    expect(response.body.name).toEqual("Pants");
  });

  it('can delete a clothes record', async () => {
    const response = await mockRequest.delete('/clothes/1');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(1);

    const getResponse = await mockRequest.get('/clothes');
    expect(getResponse.body.length).toEqual(0);

  });

});
