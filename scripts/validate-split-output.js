// validate-split-output.js
// Validates that all states, cities, districts, and villages in split JSON files match raw/base.txt
// Usage: node scripts/validate-split-output.js

const fs = require('fs');
const path = require('path');

const RAW_PATH = path.join(__dirname, '../raw/base.txt');
const DATA_PATH = path.join(__dirname, '../src/data');

// Helper to parse base.txt
function parseBaseTxt(filePath) {
  const lines = fs.readFileSync(filePath, 'utf8').split(/\r?\n/).filter(Boolean);
  const entries = { states: {}, cities: {}, districts: {}, villages: {} };
  for (const line of lines) {
    const match = line.match(/^"([^\"]+)"\s*,\s*"([^\"]+)"$/);
    if (!match) continue;
    const [_, code, value] = match;
    if (/^\d{2}$/.test(code)) entries.states[code] = value;
    else if (/^\d{2}\.\d{2}$/.test(code)) entries.cities[code] = value;
    else if (/^\d{2}\.\d{2}\.\d{2}$/.test(code)) entries.districts[code] = value;
    else if (/^\d{2}\.\d{2}\.\d{2}\.(\d{4})$/.test(code)) entries.villages[code] = value;
  }
  return entries;
}

function loadJson(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function validateStates(statesJson, refStates) {
  let ok = true;
  const checked = new Set();
  for (const s of statesJson) {
    if (!refStates[s.code] || refStates[s.code] !== s.value) {
      console.error(`State mismatch: ${s.code} -> ${s.value}, expected: ${refStates[s.code]}`);
      ok = false;
    } else {
      console.log(`[OK] State: ${s.code} = ${s.value}`);
    }
    checked.add(s.code);
  }
  for (const code of Object.keys(refStates)) {
    if (!checked.has(code)) {
      console.error(`State missing: ${code} -> ${refStates[code]}`);
      ok = false;
    }
  }
  if (Object.keys(refStates).length !== statesJson.length) {
    console.error(`State count mismatch: expected ${Object.keys(refStates).length}, got ${statesJson.length}`);
    ok = false;
  }
  return ok;
}

function validateDir(dir, refMap, type) {
  let ok = true;
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'));
  let count = 0;
  const foundCodes = new Set();
  for (const file of files) {
    const arr = loadJson(path.join(dir, file));
    for (const item of arr) {
      if (!refMap[item.code] || refMap[item.code] !== item.value) {
        console.error(`${type} mismatch: ${item.code} -> ${item.value}, expected: ${refMap[item.code]}`);
        ok = false;
      } else {
        console.log(`[OK] ${type}: ${item.code} = ${item.value}`);
      }
      foundCodes.add(item.code);
      count++;
    }
  }
  // Check for missing codes
  for (const code of Object.keys(refMap)) {
    if (!foundCodes.has(code)) {
      console.error(`${type} missing: ${code} -> ${refMap[code]}`);
      ok = false;
    }
  }
  return ok;
}

function main() {
  const ref = parseBaseTxt(RAW_PATH);
  let ok = true;
  // Accept CLI args for specific checks
  const args = process.argv.slice(2).map(a => a.toLowerCase());
  const doStates = args.length === 0 || args.includes('states');
  const doCities = args.length === 0 || args.includes('cities');
  const doDistricts = args.length === 0 || args.includes('districts');
  const doVillages = args.length === 0 || args.includes('villages');

  if (doStates) {
    console.log('--- Checking States ---');
    if (!validateStates(loadJson(path.join(DATA_PATH, 'states.json')), ref.states)) ok = false;
  }
  if (doCities) {
    console.log('--- Checking Cities ---');
    if (!validateDir(path.join(DATA_PATH, 'cities'), ref.cities, 'City')) ok = false;
  }
  if (doDistricts) {
    console.log('--- Checking Districts ---');
    if (!validateDir(path.join(DATA_PATH, 'districts'), ref.districts, 'District')) ok = false;
  }
  if (doVillages) {
    console.log('--- Checking Villages ---');
    if (!validateDir(path.join(DATA_PATH, 'villages'), ref.villages, 'Village')) ok = false;
  }
  if (ok) {
    console.log('All codes and values match base.txt. Validation successful!');
  } else {
    console.error('Validation failed. See errors above.');
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}
