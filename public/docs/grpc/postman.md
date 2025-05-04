# Using LokaID gRPC API with Postman

This guide provides step-by-step instructions on how to interact with the LokaID gRPC API using Postman's native gRPC client.

## Introduction

The LokaID gRPC implementation is designed to be accessible through:

1. Native gRPC clients (recommended)
2. JSON over HTTP for easier testing 

This guide focuses on using Postman's built-in gRPC client for the best experience.

## Setting Up Postman for gRPC

1. **Download and Install Postman**: If you haven't already, download Postman from [https://www.postman.com/downloads/](https://www.postman.com/downloads/)

2. **Create a New gRPC Request**:
   - Click on "New" button
   - Select "gRPC Request"
   - Enter Server URL: `lokaid.gilangpratama.com:443` (with TLS enabled)
   - Click "Save" to create the gRPC request

3. **Import or Use Server Reflection**:
   - Option 1: In the gRPC request view, use server reflection (automatically detected)
   - Option 2: Import the proto file manually
     - Click on "Service definition" tab
     - Select "Import a .proto file" 
     - Upload the `lokaid.proto` file
   - Select the `lokaid.AddressService` service

## Using Native gRPC in Postman

### 1. Health Check

To check if the API is working:

1. From your gRPC request, select the `HealthCheck` method
2. Leave the message empty `{}`
3. Click "Invoke" to send the request

You should receive a response like:
```json
{
  "status": "OK",
  "version": "1.0.0",
  "timestamp": "2023-05-01T12:34:56.789Z"
}
```

### 2. Get All States

To retrieve all available states/provinces:

1. From your gRPC request, select the `GetAllStates` method
2. Leave the message empty `{}`
3. Click "Invoke"

### 3. Get a Specific State

To retrieve information about a specific state:

1. From your gRPC request, select the `GetState` method
2. Enter the message:
   ```json
   {
     "state_code": "31"
   }
   ```
3. Click "Invoke"

### 4. Get Cities in a State

To retrieve all cities in a specific state:

1. From your gRPC request, select the `GetCitiesInState` method
2. Enter the message:
   ```json
   {
     "state_code": "31"
   }
   ```
3. Click "Invoke"

## Available Methods

The following methods are available in the LokaID gRPC API:

| Method | Description | Required Parameters |
|--------|-------------|---------------------|
| `HealthCheck` | Check API health | None |
| `GetAllStates` | Get all states/provinces | None |
| `GetState` | Get a specific state | `state_code` |
| `GetCitiesInState` | Get cities in a state | `state_code` |
| `GetCity` | Get a specific city | `city_code` |
| `GetDistrictsInCity` | Get districts in a city | `city_code` |
| `GetDistrict` | Get a specific district | `district_code` |
| `GetVillagesInDistrict` | Get villages in a district | `district_code` |
| `GetVillage` | Get a specific village | `village_code` |

## Troubleshooting

If you encounter a problem with a gRPC request, try these troubleshooting steps:

- **Server unavailable**: Check if TLS is required. Toggle the lock icon in Postman.
- **Server reflection failed**: You may need to manually import the proto file.
- **Cannot connect**: Make sure you're using the Postman Desktop Agent for gRPC connections.

## Alternative: Using REST API with JSON

If you prefer to use the REST interface instead of native gRPC, you can still interact with the service through our JSON-over-HTTP compatibility layer:

### Base URL

```
https://lokaid.gilangpratama.com/grpc/{method}
```

Where `{method}` is one of the available API methods (GetState, GetAllStates, etc.).

This is available for testing purposes, but we recommend using the native gRPC client for the best experience. 