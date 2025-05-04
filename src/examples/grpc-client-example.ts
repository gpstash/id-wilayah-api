import { GrpcClient } from '../utils/grpcClient';

// Define response types for better type safety
interface AddressData {
  code: string;
  value: string;
}

interface HealthResponse {
  status: string;
  version: string;
  timestamp: string;
}

interface StatesResponse {
  states: AddressData[];
}

interface StateResponse {
  state: AddressData;
}

interface CitiesResponse {
  cities: AddressData[];
}

interface CityResponse {
  city: AddressData;
}

interface DistrictsResponse {
  districts: AddressData[];
}

interface DistrictResponse {
  district: AddressData;
}

interface VillagesResponse {
  villages: AddressData[];
}

interface VillageResponse {
  village: AddressData;
}

/**
 * Test diagnostic function to try different URL variants
 */
async function diagnoseConnection(baseUrl: string): Promise<void> {
  console.log('=== Running connection diagnostics ===');
  
  // Try different URL formats
  const urlVariants = [
    baseUrl,
    baseUrl.endsWith('/') ? baseUrl : baseUrl + '/',
    baseUrl.replace('/grpc', '/grpc/'),
    baseUrl.replace('https://', 'http://')
  ];
  
  for (const url of urlVariants) {
    try {
      console.log(`Testing URL: ${url}`);
      const client = new GrpcClient(url);
      const healthResult = await client.healthCheck();
      console.log('SUCCESS! Response:', healthResult);
      console.log(`URL ${url} works correctly`);
      return; // Exit after finding a working URL
    } catch (error) {
      console.error(`Failed with URL ${url}:`, error instanceof Error ? error.message : 'Unknown error');
    }
  }
  
  console.log('All URL variants failed. Check server configuration or network connectivity.');
}

/**
 * Example of using the gRPC client
 * This code can be run in a browser or Node.js environment
 */
async function main(): Promise<void> {
  // Base URL for the gRPC service
  const baseUrl = 'https://lokaid.gilangpratama.id/grpc';
  
  // First run diagnostics
  await diagnoseConnection(baseUrl);
  
  // Create a client with the URL that worked in diagnostics
  const client = new GrpcClient(baseUrl);
  
  try {
    // Check health first to verify connection
    console.log('\nChecking health...');
    const healthResult = await client.healthCheck() as HealthResponse;
    console.log('Health result:', healthResult);
    
    // Get all states
    console.log('\nGetting all states...');
    const statesResult = await client.getAllStates() as StatesResponse;
    console.log('Raw states result:', statesResult);
    
    if (statesResult.states && statesResult.states.length > 0) {
      console.log(`Found ${statesResult.states.length.toString()} states`);
      
      // Print first few states for debugging
      console.log('\nFirst 5 states:');
      statesResult.states.slice(0, 5).forEach((state, index) => {
        console.log(`[${index}] Code: "${state.code}", Value: "${state.value}"`);
      });
      
      // Find DKI Jakarta state (code 31) or use first state with a valid code
      const jktState = statesResult.states.find(state => state.code === '31');
      const validState = statesResult.states.find(state => state.code && state.code !== '0');
      
      const stateToUse = jktState || validState || statesResult.states[0];
      
      if (stateToUse && stateToUse.code) {
        console.log(`\nUsing state with code: ${stateToUse.code} (${stateToUse.value})`);
        
        // Get state details 
        console.log('\nGetting state details for:', stateToUse.code);
        try {
          const stateResult = await client.getState(stateToUse.code) as StateResponse;
          console.log('State details:', stateResult.state);
          
          // Continue with cities in this state
          try {
            console.log('\nGetting cities for state:', stateToUse.code);
            const citiesResult = await client.getCitiesInState(stateToUse.code) as CitiesResponse;
            
            if (citiesResult.cities && citiesResult.cities.length > 0) {
              console.log(`Found ${citiesResult.cities.length.toString()} cities`);
              
              // Find first city with a valid code
              const validCity = citiesResult.cities.find(city => city.code && city.code !== '0');
              
              if (validCity) {
                console.log('\nGetting city details for:', validCity.code);
                const cityResult = await client.getCity(validCity.code) as CityResponse;
                console.log('City details:', cityResult.city);
                
                // Continue with districts...
              } else {
                console.log('No valid cities found with proper codes');
              }
            } else {
              console.log('No cities found in this state');
            }
          } catch (cityError) {
            console.error('Error getting cities:', cityError instanceof Error ? cityError.message : 'Unknown error');
          }
        } catch (stateError) {
          console.error('Error getting state details:', stateError instanceof Error ? stateError.message : 'Unknown error');
        }
      } else {
        console.log('No valid states found with proper codes');
      }
    } else {
      console.log('No states found in the response');
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error:', error.message);
    } else {
      console.error('Unknown error occurred');
    }
  }
}

// Run the example
// Note: This will actually be executed only if you run this file directly
// For browser usage, you'd incorporate this code into your application
// Use Node.js detection instead of window to avoid TypeScript errors
if (typeof process !== 'undefined' && process.versions.node) {
  console.log('Running in', process.versions.node);
  void main();
} 