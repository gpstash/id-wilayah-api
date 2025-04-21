import type { Hono } from 'hono';
import { describe, it, expect, beforeAll } from 'vitest';
import { AddressService } from '../services/AddressService';
import type { AddressNode } from '../types';
import { applyGlobalHandlers } from '../utils/appHandlers';
import { createRoutes } from './index';

// Minimal mock address data
const mockData: Record<string, AddressNode> = {
  '31': {
    value: 'DKI Jakarta',
    type: 'State',
    children: {
      '31.74': {
        value: 'Jakarta Selatan',
        type: 'City',
        children: {
          '31.74.04': {
            value: 'Kebayoran Baru',
            type: 'District',
            children: {
              '31.74.04.1001': {
                value: 'Gandaria Utara',
                type: 'Village',
              },
            },
          },
        },
      },
    },
  },
};

let app: Hono;

beforeAll(() => {
  const service = new AddressService(mockData);
  app = createRoutes(service);
  applyGlobalHandlers(app);
});

describe('API Integration: Address Routes', () => {
  it('GET /states returns all states', async () => {
    const res = await app.request('/states');
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body).toEqual([
      { code: '31', value: 'DKI Jakarta', type: 'State' },
    ]);
  });

  it('GET /states/:stateCode/cities returns cities', async () => {
    const res = await app.request('/states/31/cities');
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body).toEqual([
      { code: '31.74', value: 'Jakarta Selatan', type: 'City' },
    ]);
  });

  it('GET /states/:stateCode/cities returns 404 for not found', async () => {
    const res = await app.request('/states/99/cities');
    expect(res.status).toBe(404);
    const body = await res.json();
    expect(body.error).toMatch(/not found/);
  });

  it('GET /cities/:cityCode/districts returns districts', async () => {
    const res = await app.request('/cities/31.74/districts');
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body).toEqual([
      { code: '31.74.04', value: 'Kebayoran Baru', type: 'District' },
    ]);
  });

  it('GET /cities/:cityCode/districts returns 404 for not found', async () => {
    const res = await app.request('/cities/99.99/districts');
    expect(res.status).toBe(404);
    const body = await res.json();
    expect(body.error).toMatch(/not found/);
  });

  it('GET /districts/:districtCode/villages returns villages', async () => {
    const res = await app.request('/districts/31.74.04/villages');
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body).toEqual([
      { code: '31.74.04.1001', value: 'Gandaria Utara', type: 'Village' },
    ]);
  });

  it('GET /districts/:districtCode/villages returns 404 for not found', async () => {
    const res = await app.request('/districts/99.99.99/villages');
    expect(res.status).toBe(404);
    const body = await res.json();
    expect(body.error).toMatch(/not found/);
  });

  it('GET /health returns ok', async () => {
    const res = await app.request('/health');
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.status).toBe('ok');
    expect(body.version).toBeDefined();
  });

  it('returns 404 for unknown route', async () => {
    const res = await app.request('/not-found');
    expect(res.status).toBe(404);
    const body = await res.json();
    expect(body.error).toMatch(/not found/i);
  });
});
