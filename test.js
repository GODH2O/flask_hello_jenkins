const request = require('supertest');
const express = require('express');

const app = express();
app.get('/', (req, res) => res.send('Hello from Node.js app running in Jenkins pipeline!'));

test('GET / should return Hello message', async () => {
  const res = await request(app).get('/');
  expect(res.statusCode).toBe(200);
  expect(res.text).toBe('Hello from Node.js app running in Jenkins pipeline!');
});
