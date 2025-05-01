# LokaID

<p align="center">
  <img src="public/images/LokaID-logo.png" alt="LokaID Logo" width="120" />
</p>

---

## Description

A simple API for accessing Indonesian wilayah (administrative region) data—provinces, cities, districts, and villages. Built with Hono and designed for easy integration, this service makes it a breeze to fetch and validate Indonesian address data in your apps. Perfect for anyone needing up-to-date, structured wilayah info—whether you're building forms, dashboards, or address validation tools.

[Use the API](https://lokaid.gilangpratama.id)

## Features

- **Secure**: Protected against directory traversal attacks with strict input validation
- **Structured Responses**: Standardized JSON response format across all endpoints
- **Fast**: Efficiently serves address data with minimal overhead
- **Robust Error Handling**: Graceful error responses for all scenarios

## Data Structure

- The address data files (`states.json`, `cities/*.json`, `districts/*.json`, `villages/*.json`) only include `code` and `value` for each state, city, district, and village.

## Available Endpoints

- `GET /states` — List all provinces (states)
- `GET /states/:stateCode` — Get province details by code
- `GET /states/:stateCode/cities` — List all cities/regencies in a province
- `GET /cities/:cityCode` — Get city/regency details by code
- `GET /cities/:cityCode/districts` — List all districts in a city/regency
- `GET /districts/:districtCode` — Get district details by code
- `GET /districts/:districtCode/villages` — List all villages in a district
- `GET /villages/:villageCode` — Get village details by code
- `GET /health` — Health check for the API

---

## Directories

- `/src` - Application source code
- `/src/routes` - API routes
- `/src/services` - Business logic and integrations
- `/src/types` - Type definitions
- `/src/utils` - Utilities and helpers
- `/scripts` - Project scripts
- `/raw` - Raw data/assets

---

## How to Use

### Install dependencies

```sh
bun install
```

### Prepare Data (Scripts)

To generate the up-to-date JSON data files from the raw source, run:

```sh
bun scripts/split-base-json.js
```

This ensures all data files are in sync with the latest structure and ready for use by the API.

### Validate Data Output

To validate that the split JSON files match the raw data, run:

```sh
bun scripts/validate-split-output.js [states|cities|districts|villages]
```

- You can specify one or more arguments (e.g. `states cities`).
- If no arguments are given, all will be checked.
- The script logs every code/value check and reports mismatches or missing entries.

### Development

```sh
bun run dev
```

### Deploy

```sh
bun run deploy
```

### Type Generation

For generating/synchronizing types based on your Worker configuration:

```sh
bun run cf-typegen
```

### Testing

```sh
bun run test
```

---

## Contributing

Contributions are welcome! Please open issues or submit pull requests. Ensure your code follows the linting and formatting rules:

```sh
bun run lint
bun run lint:fix
```

---

## License

This project is licensed under the terms of the MIT License. See the [LICENSE](./LICENSE) file for details.

---

## Data Source Notice

The file [`raw/base.txt`](./raw/base.txt) is derived from [`wilayah.sql`](https://github.com/cahyadsn/wilayah/blob/master/db/wilayah.sql) in the [cahyadsn/wilayah](https://github.com/cahyadsn/wilayah) repository, which is licensed under the MIT License. Please refer to their [repository](https://github.com/cahyadsn/wilayah) for more information and the original data.
