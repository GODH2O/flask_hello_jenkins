const request = require('supertest');
const express = require('express');
import app from './app.js';

const app = express();
app.get('/', (req, res) => res.send('Hello from Node.js app running in Jenkins pipeline!'));

test('GET / should return Hello message', async () => {
  const res = await request(app).get('/');
  expect(res.statusCode).toBe(200);
  expect(res.text).toBe('Hello from Node.js app running in Jenkins pipeline!');
});
test('GET /feature/:name should return personalized feature message', async (t) => {
  const res = await request(app).get('/feature/kokouvi');
  assert.strictEqual(res.status, 200);
  assert.strictEqual(res.text, 'Hello feature kokouvi!');
});
