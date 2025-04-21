// Node.js script to convert base.txt to base.json in nested address format
const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, '../raw/base.txt');
const outputPath = path.join(__dirname, '../src/data/base.json');

/**
 * Parse addresses from raw text into a hierarchical structure with types
 * @param {string} raw - Raw text content from the address file
 * @returns {Object} - Hierarchical address tree with types
 */
function parseAddresses(raw) {
  const lines = raw.trim().split(/\r?\n/);
  const tree = {};

  // Determine the level based on code format
  function getAddressType(code) {
    const parts = code.split('.');
    switch (parts.length) {
      case 1: return 'STATE';     // e.g., "11"
      case 2: return 'CITY';      // e.g., "11.01"
      case 3: return 'DISTRICT';  // e.g., "11.01.01"
      default: return 'VILLAGE';  // e.g., "11.01.01.2001"
    }
  }

  // Process each line in the file
  for (const line of lines) {
    const match = /^'([^']+)'\s*,\s*'([^']+)'$/.exec(line);
    if (!match) {
      console.warn(`Skipping invalid line format: ${line}`);
      continue;
    }
    
    const [, code, name] = match;
    const parts = code.split('.');
    
    // Track our position in the tree
    let currentNode = tree;
    let currentPath = '';
    
    // Build the path step by step (11, 11.01, 11.01.01, etc.)
    for (let i = 0; i < parts.length; i++) {
      // Update the current path
      currentPath = currentPath ? `${currentPath}.${parts[i]}` : parts[i];
      
      // If we're at the exact code we're processing, set its value
      if (currentPath === code) {
        // Create the node if it doesn't exist
        if (!currentNode[currentPath]) {
          currentNode[currentPath] = {
            value: name,
            type: getAddressType(currentPath)
          };
          
          // Add children object if this isn't a leaf node
          if (i < parts.length - 1) {
            currentNode[currentPath].children = {};
          }
        } else {
          // If node exists, update its value (in case it was created as a parent earlier)
          currentNode[currentPath].value = name;
        }
        break;
      } 
      // Otherwise we're building a parent node
      else {
        // Create parent node if it doesn't exist
        if (!currentNode[currentPath]) {
          currentNode[currentPath] = {
            value: '', // Will be filled when we process the actual line for this code
            type: getAddressType(currentPath),
            children: {}
          };
        }
        
        // Ensure children exists
        if (!currentNode[currentPath].children) {
          currentNode[currentPath].children = {};
        }
        
        // Move to the children for the next iteration
        currentNode = currentNode[currentPath].children;
      }
    }
  }
  
  return tree;
}

try {
  console.log(`Reading from ${inputPath}...`);
  const raw = fs.readFileSync(inputPath, 'utf8');
  console.log(`Parsing ${raw.split('\n').length} lines...`);
  
  const tree = parseAddresses(raw);
  
  // Create directory if it doesn't exist
  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  console.log('Writing to output file...');
  fs.writeFileSync(outputPath, JSON.stringify(tree, null, 2), 'utf8');
  console.log(`Successfully exported to ${outputPath}`);
  
  // Print sample of the first state for verification
  const firstStateKey = Object.keys(tree)[0];
  if (firstStateKey) {
    const firstState = tree[firstStateKey];
    console.log('\nSample output structure:');
    console.log(JSON.stringify({
      [firstStateKey]: {
        value: firstState.value,
        type: firstState.type,
        children: firstState.children ? 
          Object.keys(firstState.children).length + ' cities' : 
          'No children'
      }
    }, null, 2));
  }
} catch (error) {
  console.error('Error processing addresses:', error);
  process.exit(1);
}
