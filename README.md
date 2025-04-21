# Address Service Hono CF Worker ![Awesome](https://awesome.re/badge.svg)

---

## Fork Information and Differences

This repository is a fork of the original address service project, adapted for deployment on Cloudflare Workers using the [Hono](https://hono.dev/) framework. Differences include:

- Cloudflare Workers compatibility
- Usage of Hono for routing and middleware
- Updated scripts and configuration for deployment

---

## Description

A robust, scalable, and type-safe address service built with Hono and deployed on Cloudflare Workers. Provides RESTful APIs for address validation, normalization, and lookup. Designed for high performance, easy integration, and global availability.

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

This project is licensed under the [GNU General Public License v3.0](./LICENSE).
