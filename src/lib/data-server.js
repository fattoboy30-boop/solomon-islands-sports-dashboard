const fs = require('fs');
const path = require('path');
const Papa = require('papaparse');

const DATA_FILE = path.join(process.cwd(), 'data', 'solomon_islands_sports.csv');

function loadData() {
  if (!fs.existsSync(DATA_FILE)) {
    console.error('Data file not found:', DATA_FILE);
    return [];
  }

  const csvContent = fs.readFileSync(DATA_FILE, 'utf-8');
  const result = Papa.parse(csvContent, {
    header: true,
    skipEmptyLines: true,
    dynamicTyping: true
  });

  return result.data;
}

module.exports = { loadData };
