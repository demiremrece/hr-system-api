/* eslint-disable no-undef */
const request = require('supertest');
const server = require('./server');

describe('Test Lepaya courses endpoints', () => {
  it('GET /lepaya-courses/id ---> specific course by ID', () => request(server)
    .get('/api/lepaya-courses/ef131a0c-3006-4a38-8cfd-085fa08f8361')
    .expect('Content-Type', /json/)
    .expect(200)
    .then((response) => {
      expect(response.body.result).toEqual(expect.objectContaining({
        id: expect.any(String),
        title: expect.any(String),
        learners: expect.any(Array),
        trainer: expect.any(Object),
      }));
    }));

  it('GET /lepaya-courses/id ---> 404 if not found', () => request(server)
    .get('/api/lepaya-courses/test-unknown-id')
    .expect(404));
});
