# LokaID

<p align="center">
  <img src="public/images/LokaID-logo.png" alt="LokaID Logo" width="120" />
</p>

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Overview

LokaID is a lightweight, high-performance API for Indonesian administrative region data. It provides structured access to provinces, cities, districts, and villages through both REST and gRPC interfaces.

🔗 **Live API**: [https://lokaid.gilangpratama.id](https://lokaid.gilangpratama.id)

## Key Features

- **Comprehensive Data**: Complete coverage of Indonesian administrative regions
- **Dual API Support**: Both REST and gRPC interfaces with identical functionality
- **High Performance**: Optimized for speed with minimal overhead
- **Robust Security**: Protected against common attack vectors with strict validation
- **Developer-Friendly**: Consistent response formats with clear documentation
- **Resource Efficient**: Dynamic data loading to optimize memory usage

## REST API

### Endpoints

| Endpoint | Description |
|----------|-------------|
| `GET /states` | List all provinces |
| `GET /states/:stateCode` | Get province details by code |
| `GET /states/:stateCode/cities` | List all cities in a province |
| `GET /cities/:cityCode` | Get city details by code |
| `GET /cities/:cityCode/districts` | List all districts in a city |
| `GET /districts/:districtCode` | Get district details by code |
| `GET /districts/:districtCode/villages` | List all villages in a district |
| `GET /villages/:villageCode` | Get village details by code |
| `GET /health` | Health check endpoint |

## gRPC API

The gRPC implementation offers the same functionality as the REST API with enhanced performance benefits.

### Endpoint Structure

```
https://lokaid.gilangpratama.id/grpc/{method}
```

### Content Type Options

- `application/json`: Standard JSON for broad compatibility
- `application/grpc+proto`: For both JSON and binary Protocol Buffer payloads

### Available Methods

- `GetAllStates`
- `GetState`
- `GetCitiesInState`
- `GetCity`
- `GetDistrictsInCity`
- `GetDistrict`
- `GetVillagesInDistrict`
- `GetVillage`
- `HealthCheck`

### Client Implementation Example

```typescript
import { GrpcClient } from './utils/grpcClient';

// Initialize client
const client = new GrpcClient('https://lokaid.gilangpratama.id/grpc');

// Fetch all provinces
const statesResponse = await client.getAllStates();
console.log(statesResponse.states);

// Get specific province
const stateResponse = await client.getState('11');
console.log(stateResponse.state);

// Get cities in a province
const citiesResponse = await client.getCitiesInState('11');
console.log(citiesResponse.cities);
```

The client handles both JSON and binary responses and manages error scenarios gracefully. For a complete implementation, see `src/examples/grpc-client-example.ts`.

### Protocol Buffers

Protocol Buffer definitions are available in `src/proto/lokaid.proto` for generating clients in other languages.

## Documentation

Comprehensive documentation is available in both English and Indonesian:

- [API Home](https://lokaid.gilangpratama.id)
- [REST API Docs](https://lokaid.gilangpratama.id/docs/rest)
- [gRPC API Docs](https://lokaid.gilangpratama.id/docs/grpc)
- [Postman Guide for gRPC](https://lokaid.gilangpratama.id/docs/grpc/postman.html)

## Data Structure

The data is organized hierarchically with the following format:

- **States/Provinces**: `states.json` with `code` and `value` fields
- **Cities**: `cities/*.json` with `code` and `value` fields
- **Districts**: `districts/*.json` with `code` and `value` fields
- **Villages**: `villages/*.json` with `code` and `value` fields

## Project Structure

```
/
├── src/                # Application source code
│   ├── routes/         # API route definitions
│   ├── services/       # Business logic
│   ├── types/          # TypeScript type definitions
│   ├── utils/          # Helper utilities
│   └── proto/          # Protocol Buffer definitions
├── scripts/            # Data processing scripts
├── raw/                # Raw source data
├── public/             # Static assets and documentation
└── README.md           # This file
```

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) runtime

### Installation

```sh
# Clone the repository
git clone https://github.com/yourusername/lokaid.git
cd lokaid

# Install dependencies
bun install
```

### Data Preparation

Generate the JSON data files from raw sources:

```sh
bun scripts/split-base-json.js
```

### Data Validation

Verify the integrity of the generated data:

```sh
bun scripts/validate-split-output.js [states|cities|districts|villages]
```

You can specify one or more data types to validate.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.