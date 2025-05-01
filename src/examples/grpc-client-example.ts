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
 * Example of using the gRPC client
 * This code can be run in a browser or Node.js environment
 */
async function main(): Promise<void> {
  // Create a new client pointing to the local dev server
  // Use this for local testing
  const client = new GrpcClient('https://lokaid.gilangpratama.id/grpc');
  
  try {
    // Check health first to verify connection
    console.log('Checking health...');
    const healthResult = await client.healthCheck() as HealthResponse;
    console.log('Health result:', healthResult);
    
    // Get all states
    console.log('\nGetting all states...');
    const statesResult = await client.getAllStates() as StatesResponse;
    console.log(`Found ${statesResult.states.length.toString()} states`);
    
    // If we have states, get the first one
    if (statesResult.states.length > 0) {
      const firstState = statesResult.states[0];
      console.log('\nGetting state details for:', firstState.code);
      const stateResult = await client.getState(firstState.code) as StateResponse;
      console.log('State details:', stateResult.state);
      
      // Get cities in this state
      console.log('\nGetting cities for state:', firstState.code);
      const citiesResult = await client.getCitiesInState(firstState.code) as CitiesResponse;
      
      if (citiesResult.cities.length > 0) {
        console.log(`Found ${citiesResult.cities.length.toString()} cities`);
        
        // Get the first city
        const firstCity = citiesResult.cities[0];
        console.log('\nGetting city details for:', firstCity.code);
        const cityResult = await client.getCity(firstCity.code) as CityResponse;
        console.log('City details:', cityResult.city);
        
        // Get districts in this city
        console.log('\nGetting districts for city:', firstCity.code);
        const districtsResult = await client.getDistrictsInCity(firstCity.code) as DistrictsResponse;
        
        if (districtsResult.districts.length > 0) {
          console.log(`Found ${districtsResult.districts.length.toString()} districts`);
          
          // Get the first district
          const firstDistrict = districtsResult.districts[0];
          console.log('\nGetting district details for:', firstDistrict.code);
          const districtResult = await client.getDistrict(firstDistrict.code) as DistrictResponse;
          console.log('District details:', districtResult.district);
          
          // Get villages in this district
          console.log('\nGetting villages for district:', firstDistrict.code);
          const villagesResult = await client.getVillagesInDistrict(firstDistrict.code) as VillagesResponse;
          
          if (villagesResult.villages.length > 0) {
            console.log(`Found ${villagesResult.villages.length.toString()} villages`);
            
            // Get the first village
            const firstVillage = villagesResult.villages[0];
            console.log('\nGetting village details for:', firstVillage.code);
            const villageResult = await client.getVillage(firstVillage.code) as VillageResponse;
            console.log('Village details:', villageResult.village);
          }
        }
      }
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
  void main();
} 