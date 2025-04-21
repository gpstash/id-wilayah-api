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
    children: {
      '31.74': {
        value: 'Jakarta Selatan',
        children: {
          '31.74.04': {
            value: 'Pasar Minggu',
            children: {
              '31.74.04.1001': {
                value: 'Pasar Minggu',
              },
              '31.74.04.1002': {
                value: 'Jati Padang',
              },
              '31.74.04.1003': {
                value: 'Cilandak Timur',
              },
              '31.74.04.1004': {
                value: 'Ragunan',
              },
              '31.74.04.1005': {
                value: 'Pejaten Timur',
              },
              '31.74.04.1006': {
                value: 'Pejaten Barat',
              },
              '31.74.04.1007': {
                value: 'Kebagusan',
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
      { code: '11', value: 'ACEH' },
      { code: '12', value: 'SUMATERA UTARA' },
      { code: '13', value: 'SUMATERA BARAT' },
      { code: '14', value: 'RIAU' },
      { code: '15', value: 'JAMBI' },
      { code: '16', value: 'SUMATERA SELATAN' },
      { code: '17', value: 'BENGKULU' },
      { code: '18', value: 'LAMPUNG' },
      { code: '19', value: 'KEPULAUAN BANGKA BELITUNG' },
      { code: '21', value: 'KEPULAUAN RIAU' },
      { code: '31', value: 'DKI JAKARTA' },
      { code: '32', value: 'JAWA BARAT' },
      { code: '33', value: 'JAWA TENGAH' },
      { code: '34', value: 'DAERAH ISTIMEWA YOGYAKARTA' },
      { code: '35', value: 'JAWA TIMUR' },
      { code: '36', value: 'BANTEN' },
      { code: '51', value: 'BALI' },
      { code: '52', value: 'NUSA TENGGARA BARAT' },
      { code: '53', value: 'NUSA TENGGARA TIMUR' },
      { code: '61', value: 'KALIMANTAN BARAT' },
      { code: '62', value: 'KALIMANTAN TENGAH' },
      { code: '63', value: 'KALIMANTAN SELATAN' },
      { code: '64', value: 'KALIMANTAN TIMUR' },
      { code: '65', value: 'KALIMANTAN UTARA' },
      { code: '71', value: 'SULAWESI UTARA' },
      { code: '72', value: 'SULAWESI TENGAH' },
      { code: '73', value: 'SULAWESI SELATAN' },
      { code: '74', value: 'SULAWESI TENGGARA' },
      { code: '75', value: 'GORONTALO' },
      { code: '76', value: 'SULAWESI BARAT' },
      { code: '81', value: 'MALUKU' },
      { code: '82', value: 'MALUKU UTARA' },
      { code: '91', value: 'PAPUA' },
      { code: '92', value: 'PAPUA BARAT' },
      { code: '93', value: 'PAPUA SELATAN' },
      { code: '94', value: 'PAPUA TENGAH' },
      { code: '95', value: 'PAPUA PEGUNUNGAN' },
    ]);
  });

  it('GET /states/:stateCode/cities returns cities', async () => {
    const res = await app.request('/states/31/cities');
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body).toEqual([
      { code: '31.01', value: 'KAB. ADM. KEP. SERIBU' },
      { code: '31.71', value: 'KOTA ADM. JAKARTA PUSAT' },
      { code: '31.72', value: 'KOTA ADM. JAKARTA UTARA' },
      { code: '31.73', value: 'KOTA ADM. JAKARTA BARAT' },
      { code: '31.74', value: 'KOTA ADM. JAKARTA SELATAN' },
      { code: '31.75', value: 'KOTA ADM. JAKARTA TIMUR' },
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
      { code: '31.74.01', value: 'Tebet' },
      { code: '31.74.02', value: 'Setiabudi' },
      { code: '31.74.03', value: 'Mampang Prapatan' },
      { code: '31.74.04', value: 'Pasar Minggu' },
      { code: '31.74.05', value: 'Kebayoran Lama' },
      { code: '31.74.06', value: 'Cilandak' },
      { code: '31.74.07', value: 'Kebayoran Baru' },
      { code: '31.74.08', value: 'Pancoran' },
      { code: '31.74.09', value: 'Jagakarsa' },
      { code: '31.74.10', value: 'Pesanggrahan' },
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
      { code: '31.74.04.1001', value: 'Pasar Minggu' },
      { code: '31.74.04.1002', value: 'Jati Padang' },
      { code: '31.74.04.1003', value: 'Cilandak Timur' },
      { code: '31.74.04.1004', value: 'Ragunan' },
      { code: '31.74.04.1005', value: 'Pejaten Timur' },
      { code: '31.74.04.1006', value: 'Pejaten Barat' },
      { code: '31.74.04.1007', value: 'Kebagusan' },
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
