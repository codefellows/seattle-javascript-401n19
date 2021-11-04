'use strict';

// jest, supertest, 
const { server } = require('./caps.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('CAPS API', () => {
    
    it('should respond with a 404 on an invalid route', async () => {
        const response = await mockRequest.get('/dogo');
        expect(response.status).toBe(404);
      });

    it('should respond with a 404 on an invalid method', async () => {
        const response = await mockRequest.get('/pickup');
        expect(response.status).toBe(404);
      });

      it('can post to pickup', async () => {
        const data = {
            store: "1-206-flowers",
            orderID: 7,
            customer: "Juston Reichel",
            address: "Lake Al, OK"
           };
        const response = await mockRequest.post('/pickup').send(data);
        expect(response.status).toBe(200);
      });

})