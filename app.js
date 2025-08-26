#!/usr/bin/env node
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello from Node.js app running in Jenkins pipeline!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
app.get('/feature/:name', (req, res) => {
  const { name } = req.params;
  res.send(`Hello feature ${name}!`);
});

export default app;
