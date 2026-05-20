import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import app from './app.js';

beforeAll(() => app.ready());
afterAll(() => app.close());

describe('GET /', () => {
  it('returns 200', async () => {
    const res = await app.inject({ method: 'GET', url: '/' });
    expect(res.statusCode).toBe(200);
  });

  it('returns Hello, World!', async () => {
    const res = await app.inject({ method: 'GET', url: '/' });
    expect(res.body).toBe('Hello, World!');
  });
});
