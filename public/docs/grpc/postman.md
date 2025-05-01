# Using LokaID gRPC API with Postman

This guide provides step-by-step instructions on how to interact with the LokaID gRPC API using Postman.

## Introduction

The LokaID gRPC implementation is designed to be easily accessible from HTTP clients like Postman. Unlike traditional gRPC services that require specialized clients, our implementation supports both:

1. Standard gRPC binary format
2. JSON over HTTP for easier testing

This guide focuses on the JSON over HTTP approach which is ideal for testing with Postman.

## Setting Up Postman

1. **Download and Install Postman**: If you haven't already, download Postman from [https://www.postman.com/downloads/](https://www.postman.com/downloads/)

2. **Create a New Collection**: 
   - Click on "Collections" in the sidebar
   - Click the "+" button to create a new collection
   - Name it "LokaID gRPC API"

## Base URL

All gRPC endpoints are accessible at:

```
https://lokaid.gilangpratama.id/grpc/{method}
```

Where `{method}` is one of the available API methods (listed below).

## Example Requests

### 1. Health Check

To check if the API is working:

1. Create a new request in your collection
2. Set the method to **POST**
3. Enter URL: `https://lokaid.gilangpratama.id/grpc/HealthCheck`
4. Go to the "Headers" tab and add:
   - Key: `Content-Type` 
   - Value: `application/json`
5. Go to the "Body" tab, select "raw" and choose "JSON" from the dropdown
6. Enter an empty JSON object: `{}`
7. Click "Send"

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

1. Create a new request in your collection
2. Set the method to **POST**
3. Enter URL: `https://lokaid.gilangpratama.id/grpc/GetAllStates`
4. Go to the "Headers" tab and add:
   - Key: `Content-Type` 
   - Value: `application/json`
5. Go to the "Body" tab, select "raw" and choose "JSON" from the dropdown
6. Enter an empty JSON object: `{}`
7. Click "Send"

You should receive a response with all states in Indonesia.

### 3. Get a Specific State

To retrieve information about a specific state:

1. Create a new request in your collection
2. Set the method to **POST**
3. Enter URL: `https://lokaid.gilangpratama.id/grpc/GetState`
4. Go to the "Headers" tab and add:
   - Key: `Content-Type` 
   - Value: `application/json`
5. Go to the "Body" tab, select "raw" and choose "JSON" from the dropdown
6. Enter the request JSON:
   ```json
   {
     "state_code": "11"
   }
   ```
7. Click "Send"

You should receive a response with details about the requested state.

### 4. Get Cities in a State

To retrieve all cities in a specific state:

1. Create a new request in your collection
2. Set the method to **POST**
3. Enter URL: `https://lokaid.gilangpratama.id/grpc/GetCitiesInState`
4. Go to the "Headers" tab and add:
   - Key: `Content-Type` 
   - Value: `application/json`
5. Go to the "Body" tab, select "raw" and choose "JSON" from the dropdown
6. Enter the request JSON:
   ```json
   {
     "state_code": "11"
   }
   ```
7. Click "Send"

You should receive a response with all cities in the specified state.

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

## Error Handling

If an error occurs, the API will return a standard error response:

```json
{
  "error": "Error message",
  "status": 404,
  "timestamp": "2023-05-01T12:34:56.789Z"
}
```

Common error codes:
- `400`: Bad Request - Missing or invalid parameters
- `404`: Not Found - The requested resource was not found
- `500`: Internal Server Error - Something went wrong on the server

## Creating a Postman Collection

You can import the following JSON to create a complete Postman collection with all endpoints:

```json
{
  "info": {
    "name": "LokaID gRPC API",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "HealthCheck",
      "request": {
        "method": "POST",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "url": {
          "raw": "https://lokaid.gilangpratama.id/grpc/HealthCheck",
          "protocol": "https",
          "host": ["lokaid", "gilangpratama", "id"],
          "path": ["grpc", "HealthCheck"]
        },
        "body": {
          "mode": "raw",
          "raw": "{}",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        }
      }
    },
    {
      "name": "GetAllStates",
      "request": {
        "method": "POST",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "url": {
          "raw": "https://lokaid.gilangpratama.id/grpc/GetAllStates",
          "protocol": "https",
          "host": ["lokaid", "gilangpratama", "id"],
          "path": ["grpc", "GetAllStates"]
        },
        "body": {
          "mode": "raw",
          "raw": "{}",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        }
      }
    },
    {
      "name": "GetState",
      "request": {
        "method": "POST",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "url": {
          "raw": "https://lokaid.gilangpratama.id/grpc/GetState",
          "protocol": "https",
          "host": ["lokaid", "gilangpratama", "id"],
          "path": ["grpc", "GetState"]
        },
        "body": {
          "mode": "raw",
          "raw": "{\n  \"state_code\": \"11\"\n}",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        }
      }
    },
    {
      "name": "GetCitiesInState",
      "request": {
        "method": "POST",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "url": {
          "raw": "https://lokaid.gilangpratama.id/grpc/GetCitiesInState",
          "protocol": "https",
          "host": ["lokaid", "gilangpratama", "id"],
          "path": ["grpc", "GetCitiesInState"]
        },
        "body": {
          "mode": "raw",
          "raw": "{\n  \"state_code\": \"11\"\n}",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        }
      }
    },
    {
      "name": "GetCity",
      "request": {
        "method": "POST",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "url": {
          "raw": "https://lokaid.gilangpratama.id/grpc/GetCity",
          "protocol": "https",
          "host": ["lokaid", "gilangpratama", "id"],
          "path": ["grpc", "GetCity"]
        },
        "body": {
          "mode": "raw",
          "raw": "{\n  \"city_code\": \"1101\"\n}",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        }
      }
    },
    {
      "name": "GetDistrictsInCity",
      "request": {
        "method": "POST",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "url": {
          "raw": "https://lokaid.gilangpratama.id/grpc/GetDistrictsInCity",
          "protocol": "https",
          "host": ["lokaid", "gilangpratama", "id"],
          "path": ["grpc", "GetDistrictsInCity"]
        },
        "body": {
          "mode": "raw",
          "raw": "{\n  \"city_code\": \"1101\"\n}",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        }
      }
    },
    {
      "name": "GetDistrict",
      "request": {
        "method": "POST",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "url": {
          "raw": "https://lokaid.gilangpratama.id/grpc/GetDistrict",
          "protocol": "https",
          "host": ["lokaid", "gilangpratama", "id"],
          "path": ["grpc", "GetDistrict"]
        },
        "body": {
          "mode": "raw",
          "raw": "{\n  \"district_code\": \"110101\"\n}",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        }
      }
    },
    {
      "name": "GetVillagesInDistrict",
      "request": {
        "method": "POST",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "url": {
          "raw": "https://lokaid.gilangpratama.id/grpc/GetVillagesInDistrict",
          "protocol": "https",
          "host": ["lokaid", "gilangpratama", "id"],
          "path": ["grpc", "GetVillagesInDistrict"]
        },
        "body": {
          "mode": "raw",
          "raw": "{\n  \"district_code\": \"110101\"\n}",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        }
      }
    },
    {
      "name": "GetVillage",
      "request": {
        "method": "POST",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "url": {
          "raw": "https://lokaid.gilangpratama.id/grpc/GetVillage",
          "protocol": "https",
          "host": ["lokaid", "gilangpratama", "id"],
          "path": ["grpc", "GetVillage"]
        },
        "body": {
          "mode": "raw",
          "raw": "{\n  \"village_code\": \"1101012001\"\n}",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        }
      }
    }
  ]
}
```

To import this collection:
1. Click on "Import" in the top left of Postman
2. Paste the JSON above
3. Click "Import"

## Advanced Usage: Using gRPC Binary Format

For those who want to use the actual gRPC binary format:

1. Set the Content-Type header to `application/grpc+proto`
2. Format your request body as a binary message according to the gRPC standard:
   - 1 byte compression flag (usually 0)
   - 4 bytes message length (big-endian)
   - Protocol Buffer encoded message

This is significantly more complex and recommended only for advanced users or specialized clients. 