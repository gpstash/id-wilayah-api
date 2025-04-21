// Script to split src/data/base.json into multiple granular files for optimized API loading
const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, '../src/data/base.json');
const data = JSON.parse(fs.readFileSync(srcPath, 'utf8'));

const outStates = path.join(__dirname, '../src/data/states.json');
const outCities = path.join(__dirname, '../src/data/cities');
const outDistricts = path.join(__dirname, '../src/data/districts');
const outVillages = path.join(__dirname, '../src/data/villages');

for (const dir of [outCities, outDistricts, outVillages]) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
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

console.log(
  'Split complete:',
  states.length, 'states,',
  fs.readdirSync(outCities).length, 'city files,',
  fs.readdirSync(outDistricts).length, 'district files,',
  fs.readdirSync(outVillages).length, 'village files.'
);
