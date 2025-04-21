# ID Wilayah API

---

## Description

A simple API for accessing Indonesian wilayah (administrative region) data—provinces, cities, districts, and villages. Built with Hono and designed for easy integration, this service makes it a breeze to fetch and validate Indonesian address data in your apps. Perfect for anyone needing up-to-date, structured wilayah info—whether you're building forms, dashboards, or address validation tools.

## Data Structure

- The address data files (`states.json`, `cities/*.json`, `districts/*.json`, `villages/*.json`) only include `code` and `value` for each state, city, district, and village.
- This change reduces data size and improves API response performance.
- All API responses, validation logic, and tests use only `code` and `value`.

## Available Endpoints

- `GET /states` — List all provinces (states)
- `GET /states/:stateCode/cities` — List all cities/regencies in a province
- `GET /cities/:cityCode/districts` — List all districts in a city/regency
- `GET /districts/:districtCode/villages` — List all villages in a district
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
pnpm install
```

### Prepare Data (Scripts)

To generate the up-to-date JSON data files from the raw source, run:

```sh
bun scripts/convert-addresses.js
bun scripts/split-base-json.js
```

This ensures all data files are in sync with the latest structure and ready for use by the API.

### Development

```sh
pnpm run dev
```

### Deploy

```sh
pnpm run deploy
```

### Type Generation

For generating/synchronizing types based on your Worker configuration:

```sh
pnpm run cf-typegen
```

### Testing

```sh
pnpm run test
```

---

## Contributing

Contributions are welcome! Please open issues or submit pull requests. Ensure your code follows the linting and formatting rules:

```sh
pnpm run lint
pnpm run lint:fix
```

---

## License

This project is licensed under the terms of the MIT License. See the [LICENSE](./LICENSE) file for details.

---

## Data Source Notice

The file [`raw/base.txt`](./raw/base.txt) is derived from [`wilayah.sql`](https://github.com/cahyadsn/wilayah/blob/master/db/wilayah.sql) in the [cahyadsn/wilayah](https://github.com/cahyadsn/wilayah) repository, which is licensed under the MIT License. Please refer to their [repository](https://github.com/cahyadsn/wilayah) for more information and the original data.
