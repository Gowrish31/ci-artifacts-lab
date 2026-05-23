const express = require('express');

const app = express();

app.get('/health', (req, res) => {
  res.json({ status: 'ok', version: '1.0.0', timestamp: new Date().toISOString() });
});

app.get('/', (req, res) => {
  res.json({ message: 'ci-artifacts-lab API', docs: '/health' });
});

app.get('/version', (req, res) => {
  res.json({ version: '1.0.0', node: process.version });
});

module.exports = app;
