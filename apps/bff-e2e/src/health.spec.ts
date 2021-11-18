import * as request from 'supertest';

describe('HealthController', () => {
  it(`GET /health/basic`, () => {
    return request('http://localhost:3333')
      .get('/health')
      .expect(200)
      .expect((res) => {
        expect(res.body.status).toBe('pass');
      });
  });
});
