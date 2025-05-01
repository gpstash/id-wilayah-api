import type { Hono } from 'hono';
import { describe, it, expect, beforeAll, afterAll, vi } from 'vitest';
import type { CloudflareBindings } from '../types';
import { applyGlobalHandlers } from '../utils/appHandlers';
import { createRoutes } from './index'; 

let app: Hono<{Bindings: CloudflareBindings}>;
let originalConsoleError: typeof console.error;

// Type guard for objects with a 'data' property
function hasDataProp(obj: unknown): obj is { data: unknown } {
  return typeof obj === 'object' && obj !== null && 'data' in obj;
}

// Type guard for objects with 'status' and 'version'
function hasStatusAndVersion(obj: unknown): obj is { status: unknown; version: unknown } {
  return typeof obj === 'object' && obj !== null && 'status' in obj && 'version' in obj;
}

// Type guard for objects with 'status' and nested 'data.version', avoiding any
function hasDataWithVersion(obj: unknown): obj is { status: unknown; data: { version: unknown } } {
  if (
    typeof obj === 'object' && obj !== null &&
    'status' in obj && 'data' in obj
  ) {
    const data = (obj as { data: unknown }).data;
    return typeof data === 'object' && data !== null && 'version' in data;
  }
  return false;
}

beforeAll(() => {
  // Save original console.error
  originalConsoleError = console.error;
  // Mock console.error to prevent logs in test output
  console.error = vi.fn();

  app = createRoutes()
  applyGlobalHandlers(app);
});

afterAll(() => {
  // Restore original console.error
  console.error = originalConsoleError;
});

describe('API Integration: Address Routes', () => {
  it('GET /states returns all states', async () => {
    const res = await app.request('/states');
    expect(res.status).toBe(200);
    const body = await res.json();
    let states: unknown;
    if (hasDataProp(body)) {
      states = body.data;
    } else {
      states = body;
    }
    expect(states).toEqual([
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

  it('GET /states/:stateCode returns a single state', async () => {
    const res = await app.request('/states/31');
    expect(res.status).toBe(200);
    const body = await res.json();
    let state: unknown;
    if (hasDataProp(body)) {
      state = body.data;
    } else {
      state = body;
    }
    expect(state).toEqual({ code: '31', value: 'DKI JAKARTA' });
  });

  it('GET /states/:stateCode returns 404 for not found', async () => {
    const res = await app.request('/states/99');
    expect(res.status).toBe(404);
    const body = await res.json();
    if (hasDataProp(body)) {
      expect((body as { data: { error: string } }).data.error).toMatch(/not found/);
    } else {
      expect((body as { error: string }).error).toMatch(/not found/);
    }
  });

  it('GET /states/:stateCode/cities returns cities', async () => {
    const res = await app.request('/states/31/cities');
    expect(res.status).toBe(200);
    const body = await res.json();
    let cities: unknown;
    if (hasDataProp(body)) {
      cities = body.data;
    } else {
      cities = body;
    }
    expect(cities).toEqual([
      { code: '31.01', value: 'KAB. ADM. KEP. SERIBU' },
      { code: '31.71', value: 'KOTA ADM. JAKARTA PUSAT' },
      { code: '31.72', value: 'KOTA ADM. JAKARTA UTARA' },
      { code: '31.73', value: 'KOTA ADM. JAKARTA BARAT' },
      { code: '31.74', value: 'KOTA ADM. JAKARTA SELATAN' },
      { code: '31.75', value: 'KOTA ADM. JAKARTA TIMUR' },
    ]);
  });

  it('GET /cities/:cityCode returns a single city', async () => {
    const res = await app.request('/cities/31.74');
    expect(res.status).toBe(200);
    const body = await res.json();
    let city: unknown;
    if (hasDataProp(body)) {
      city = body.data;
    } else {
      city = body;
    }
    expect(city).toEqual({ code: '31.74', value: 'KOTA ADM. JAKARTA SELATAN' });
  });

  it('GET /cities/:cityCode returns 404 for not found', async () => {
    const res = await app.request('/cities/99.99');
    expect(res.status).toBe(404);
    const body = await res.json();
    if (hasDataProp(body)) {
      expect((body as { data: { error: string } }).data.error).toMatch(/not found/);
    } else {
      expect((body as { error: string }).error).toMatch(/not found/);
    }
  });

  it('GET /cities/:cityCode/districts returns districts', async () => {
    const res = await app.request('/cities/31.74/districts');
    expect(res.status).toBe(200);
    const body = await res.json();
    let districts: unknown;
    if (hasDataProp(body)) {
      districts = body.data;
    } else {
      districts = body;
    }
    expect(districts).toEqual([
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

  it('GET /districts/:districtCode returns a single district', async () => {
    const res = await app.request('/districts/31.74.04');
    expect(res.status).toBe(200);
    const body = await res.json();
    let district: unknown;
    if (hasDataProp(body)) {
      district = body.data;
    } else {
      district = body;
    }
    expect(district).toEqual({ code: '31.74.04', value: 'Pasar Minggu' });
  });

  it('GET /districts/:districtCode returns 404 for not found', async () => {
    const res = await app.request('/districts/99.99.99');
    expect(res.status).toBe(404);
    const body = await res.json();
    if (hasDataProp(body)) {
      expect((body as { data: { error: string } }).data.error).toMatch(/not found/);
    } else {
      expect((body as { error: string }).error).toMatch(/not found/);
    }
  });

  it('GET /districts/:districtCode/villages returns villages', async () => {
    const res = await app.request('/districts/31.74.04/villages');
    expect(res.status).toBe(200);
    const body = await res.json();
    let villages: unknown;
    if (hasDataProp(body)) {
      villages = body.data;
    } else {
      villages = body;
    }
    expect(villages).toEqual([
      { code: '31.74.04.1001', value: 'Pasar Minggu' },
      { code: '31.74.04.1002', value: 'Jati Padang' },
      { code: '31.74.04.1003', value: 'Cilandak Timur' },
      { code: '31.74.04.1004', value: 'Ragunan' },
      { code: '31.74.04.1005', value: 'Pejaten Timur' },
      { code: '31.74.04.1006', value: 'Pejaten Barat' },
      { code: '31.74.04.1007', value: 'Kebagusan' },
    ]);
  });

  it('GET /villages/:villageCode returns a single village', async () => {
    const res = await app.request('/villages/31.74.04.1001');
    expect(res.status).toBe(200);
    const body = await res.json();
    let village: unknown;
    if (hasDataProp(body)) {
      village = body.data;
    } else {
      village = body;
    }
    expect(village).toEqual({ code: '31.74.04.1001', value: 'Pasar Minggu' });
  });

  it('GET /villages/:villageCode returns 404 for not found', async () => {
    const res = await app.request('/villages/99.99.99.9999');
    expect(res.status).toBe(404);
    const body = await res.json();
    if (hasDataProp(body)) {
      expect((body as { data: { error: string } }).data.error).toMatch(/not found/);
    } else {
      expect((body as { error: string }).error).toMatch(/not found/);
    }
  });

  it('GET /health returns ok', async () => {
    const res = await app.request('/health');
    expect(res.status).toBe(200);
    const body = await res.json();
    if (hasStatusAndVersion(body)) {
      expect(body.status === 200 ? 'ok' : body.status).toBe('ok');
      expect(body.version).toBeDefined();
    } else if (hasDataWithVersion(body)) {
      expect(body.status).toBe(200);
      expect(body.data.version).toBeDefined();
    } else {
      throw new Error('Unexpected health response shape');
    }
  });

  it('returns 404 for unknown route', async () => {
    const res = await app.request('/not-found');
    expect(res.status).toBe(404);
    const body = await res.json();
    if (hasDataProp(body)) {
      expect((body as { data: { error: string } }).data.error).toMatch(/not found/i);
    } else {
      expect((body as { error: string }).error).toMatch(/not found/i);
    }
  });
});
