// Script to split raw/base.txt into multiple granular files for optimized API loading
const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, '../raw/base.txt');
const outStates = path.join(__dirname, '../src/data/states.json');
const outCities = path.join(__dirname, '../src/data/cities');
const outDistricts = path.join(__dirname, '../src/data/districts');
const outVillages = path.join(__dirname, '../src/data/villages');

for (const dir of [outCities, outDistricts, outVillages]) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

// Parse raw/base.txt into structured data
const lines = fs.readFileSync(srcPath, 'utf8').split(/\r?\n/).filter(Boolean);
const data = {};

for (const line of lines) {
  // Match e.g. "11.01.01.2017","Indra Damai"
  const match = line.match(/^"([^"]+)"\s*,\s*"([^"]+)"$/);
  if (!match) continue;
  const [_, code, value] = match;

  // Province
  if (/^\d{2}$/.test(code)) {
    data[code] = { value, children: {} };
  }
  // City/Regency
  else if (/^\d{2}\.\d{2}$/.test(code)) {
    const prov = code.slice(0, 2);
    if (data[prov]) data[prov].children[code] = { value, children: {} };
  }
  // District
  else if (/^\d{2}\.\d{2}\.\d{2}$/.test(code)) {
    const prov = code.slice(0, 2);
    const city = code.slice(0, 5);
    if (data[prov] && data[prov].children[city]) data[prov].children[city].children[code] = { value, children: {} };
  }
  // Village
  else if (/^\d{2}\.\d{2}\.\d{2}\.(\d{4})$/.test(code)) {
    const prov = code.slice(0, 2);
    const city = code.slice(0, 5);
    const district = code.slice(0, 8);
    if (data[prov] && data[prov].children[city] && data[prov].children[city].children[district]) {
      data[prov].children[city].children[district].children[code] = { value };
    }
  }
}

// 1. Generate states.json
const states = Object.entries(data).map(([code, province]) => ({
  code,
  value: province.value,
}));
fs.writeFileSync(outStates, JSON.stringify(states, null, 2), 'utf8');

// 2. Generate cities/<state-id>.json
for (const [provinceCode, province] of Object.entries(data)) {
  const children = province.children || {};
  const cities = Object.entries(children).map(([cityCode, city]) => ({
    code: cityCode,
    value: city.value,
  }));
  fs.writeFileSync(
    path.join(outCities, `${provinceCode}.json`),
    JSON.stringify(cities, null, 2),
    'utf8'
  );
  // 3. Generate districts/<city-id>.json
  for (const [cityCode, city] of Object.entries(children)) {
    const districts = Object.entries(city.children || {}).map(([districtCode, district]) => ({
      code: districtCode,
      value: district.value,
    }));
    fs.writeFileSync(
      path.join(outDistricts, `${cityCode}.json`),
      JSON.stringify(districts, null, 2),
      'utf8'
    );
    // 4. Generate villages/<district-id>.json
    for (const [districtCode, district] of Object.entries(city.children || {})) {
      const villages = Object.entries(district.children || {}).map(([villageCode, village]) => ({
        code: villageCode,
        value: village.value,
      }));
      fs.writeFileSync(
        path.join(outVillages, `${districtCode}.json`),
        JSON.stringify(villages, null, 2),
        'utf8'
      );
    }
  }
}

console.log(`Split complete: ${states.length} states, ${Object.keys(data).length} city files, ${fs.readdirSync(outDistricts).length} district files, ${fs.readdirSync(outVillages).length} village files.`);
