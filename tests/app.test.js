const request = require('supertest');
const app = require('../src/app');

describe('API', () => {
  test('GET /health returns 200', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
  });

  test('GET /health body contains status: ok', async () => {
    const res = await request(app).get('/health');
    expect(res.body).toHaveProperty('status', 'ok');
  });

  test('GET / returns 200', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });

  test('GET /version returns 200', async () => {
    const res = await request(app).get('/version');
    expect(res.statusCode).toBe(200);
  });

  test('GET /version body has version field', async () => {
    const res = await request(app).get('/version');
    expect(res.body).toHaveProperty('version');
  });
});
