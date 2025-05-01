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
- **Dynamic Loading**: Only loads needed data files as required, optimizing memory usage and startup time

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

## gRPC Support

This project now supports both REST and gRPC APIs for accessing location data. The gRPC implementation is designed to be compatible with Cloudflare Workers and provides the same functionality as the REST API.

### gRPC Endpoint

The gRPC service is available at:

```
https://lokaid.gilangpratama.id/grpc/{method}
```

The API uses a simplified endpoint structure with direct method calls, making it more intuitive and easier to use than traditional gRPC implementations.

### Flexible Content Types

The gRPC API supports multiple ways to send requests:

1. **JSON over HTTP**: Send requests with `Content-Type: application/json` for standard JSON handling
2. **JSON with gRPC Content Type**: Send JSON payloads with `Content-Type: application/grpc+proto` - useful for clients that need to maintain gRPC protocol compatibility
3. **True Binary gRPC**: Send binary Protocol Buffer payloads with `Content-Type: application/grpc+proto` for maximum efficiency

This flexibility allows you to choose the approach that best suits your application needs, from simple HTTP clients to specialized gRPC libraries.

### Using gRPC with Postman

We've created a detailed guide on how to use the gRPC API with Postman:

- [gRPC Postman Guide](https://lokaid.gilangpratama.id/docs/grpc/postman.html)

This guide includes:
- Step-by-step instructions for setting up Postman
- Example requests for all available methods
- Error handling information
- A ready-to-import Postman collection with all endpoints

### Available Methods

The following gRPC methods are available:

- `GetAllStates` - Get all states/provinces
- `GetState` - Get a specific state by its code
- `GetCitiesInState` - Get all cities in a state
- `GetCity` - Get a specific city by its code
- `GetDistrictsInCity` - Get all districts in a city
- `GetDistrict` - Get a specific district by its code
- `GetVillagesInDistrict` - Get all villages in a district
- `GetVillage` - Get a specific village by its code
- `HealthCheck` - Health check

### Error Handling

The gRPC API provides robust error handling:

- If a required field is missing or invalid, you'll receive a descriptive error message
- The validation allows for legitimate falsy values (e.g., empty strings) while properly checking for missing fields
- Error responses include a status code, timestamp, and detailed message to help with troubleshooting

For more details on error handling, see the [gRPC Postman Guide](https://lokaid.gilangpratama.id/docs/grpc/postman.html#error-handling).

### Using the gRPC Client

A JavaScript/TypeScript client is provided for easy integration. Here's a simple example:

```typescript
import { GrpcClient } from './utils/grpcClient';

// Create a client
const client = new GrpcClient('https://lokaid.gilangpratama.id/grpc');

// Get all states
const statesResponse = await client.getAllStates();
console.log(statesResponse.states);

// Get a specific state
const stateResponse = await client.getState('11');
console.log(stateResponse.state);

// Get cities in a state
const citiesResponse = await client.getCitiesInState('11');
console.log(citiesResponse.cities);
```

The client is fully tested and handles various edge cases gracefully:
- Processing both JSON and binary responses
- Handling network errors and server errors
- Properly formatting request data for each endpoint

For a complete example, see `src/examples/grpc-client-example.ts`.

### gRPC Protocol Buffers

The Protocol Buffer definitions are available in `src/proto/lokaid.proto`. You can use these definitions to generate clients in other languages.

## Documentation

The API comes with comprehensive documentation:

- **Homepage** - Overview and key features of the API
- **REST API Documentation** - Details about REST endpoints, parameters, and response formats
- **gRPC API Documentation** - Information about gRPC services, Protocol Buffers, and client implementation

The documentation is available in both Indonesian and English languages and can be accessed at:

- [Homepage](https://lokaid.gilangpratama.id)
- [REST API Documentation](https://lokaid.gilangpratama.id/docs/rest/)
- [gRPC API Documentation](https://lokaid.gilangpratama.id/docs/grpc/)

Each documentation page includes:
- Detailed explanations of endpoints/methods
- Code examples
- Interactive test capabilities (for REST API)
- Implementation guides

## SEO and Discoverability

The project includes several features to enhance its discoverability and search engine optimization:

- **Sitemap**: XML sitemap available at `/sitemap.xml` with all pages and languages
- **Robots.txt**: Properly configured robots.txt file
- **Structured Data**: Rich structured data for better search engine understanding
- **Meta Tags**: Comprehensive meta tags for SEO and social sharing
- **Multilingual Support**: Proper hreflang annotations for language variants
- **Semantic HTML**: Semantically structured HTML for better accessibility and indexing

These features make LokaID more discoverable and improve its rankings in search results.

---

## Directories

- `/src` - Application source code
- `/src/routes` - API routes
- `/src/services` - Business logic and integrations
- `/src/types` - Type definitions
- `/src/utils` - Utilities and helpers
- `/scripts` - Project scripts
- `/raw` - Raw data/assets
- `/public` - Static assets and documentation
- `/public/docs` - API documentation pages

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

- You can specify one or more arguments (e.g. `