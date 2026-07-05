const fs = require('fs');
const path = require('path');
const Papa = require('papaparse');

const REQUIRED_COLUMNS = [
  'sport',
  'athlete_or_team',
  'event_or_match',
  'opponent_or_country',
  'date',
  'result',
  'competition',
  'world_standard_type',
  'world_standard_value',
  'source_url'
];

const VALID_SPORTS = ['football', 'athletics', 'rugby', 'basketball', 'olympics'];

function validateDate(dateStr) {
  if (!dateStr) return true;
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(dateStr)) return false;
  const date = new Date(dateStr);
  return !isNaN(date.getTime());
}

function validateURL(url) {
  if (!url) return false;
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

function validateCSV(filePath) {
  const errors = [];
  const warnings = [];
  
  if (!fs.existsSync(filePath)) {
    return { valid: false, errors: [`File not found: ${filePath}`], warnings: [] };
  }
  
  const csvContent = fs.readFileSync(filePath, 'utf-8');
  const result = Papa.parse(csvContent, { header: true, skipEmptyLines: true });
  
  if (result.errors.length > 0) {
    result.errors.forEach(err => errors.push(`CSV parse error: ${err.message}`));
  }
  
  const headers = result.meta.fields || [];
  
  REQUIRED_COLUMNS.forEach(col => {
    if (!headers.includes(col)) {
      errors.push(`Missing required column: ${col}`);
    }
  });
  
  result.data.forEach((row, index) => {
    const rowNum = index + 2;
    
    if (!row.sport || !VALID_SPORTS.includes(row.sport.toLowerCase())) {
      errors.push(`Row ${rowNum}: Invalid sport "${row.sport}". Must be one of: ${VALID_SPORTS.join(', ')}`);
    }
    
    if (!row.date) {
      warnings.push(`Row ${rowNum}: Missing date`);
    } else if (!validateDate(row.date)) {
      errors.push(`Row ${rowNum}: Invalid date format "${row.date}". Expected YYYY-MM-DD`);
    }
    
    if (!row.source_url) {
      errors.push(`Row ${rowNum}: Missing source_url`);
    } else if (!validateURL(row.source_url)) {
      errors.push(`Row ${rowNum}: Invalid URL "${row.source_url}"`);
    }
    
    if (!row.athlete_or_team) {
      warnings.push(`Row ${rowNum}: Missing athlete_or_team`);
    }
    
    if (!row.result) {
      warnings.push(`Row ${rowNum}: Missing result`);
    }
  });
  
  return {
    valid: errors.length === 0,
    errors,
    warnings,
    rowCount: result.data.length,
    data: result.data
  };
}

if (require.main === module) {
  const filePath = process.argv[2] || path.join(__dirname, '../../data/solomon_islands_sports.csv');
  const result = validateCSV(filePath);
  
  console.log('\n=== Solomon Islands Sports Data Validation ===\n');
  console.log(`File: ${filePath}`);
  console.log(`Rows: ${result.rowCount}`);
  console.log(`Valid: ${result.valid ? 'YES' : 'NO'}`);
  
  if (result.errors.length > 0) {
    console.log(`\nErrors (${result.errors.length}):`);
    result.errors.forEach(err => console.log(`  ❌ ${err}`));
  }
  
  if (result.warnings.length > 0) {
    console.log(`\nWarnings (${result.warnings.length}):`);
    result.warnings.forEach(warn => console.log(`  ⚠️  ${warn}`));
  }
  
  if (result.valid) {
    console.log('\n✅ All validation checks passed!');
  } else {
    console.log('\n❌ Validation failed. Please fix the errors above.');
    process.exit(1);
  }
}

module.exports = { validateCSV, validateDate, validateURL, REQUIRED_COLUMNS, VALID_SPORTS };
