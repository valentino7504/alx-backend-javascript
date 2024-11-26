const fs = require('fs');

function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  const data = fs.readFileSync(path,
    { encoding: 'utf-8', flag: 'r' });
  const rows = data.trim().split('\n');
  rows.shift();
  console.log(`Number of students: ${rows.length}`);
  const cs = [];
  const swe = [];
  for (let i = 0; i < rows.length; i += 1) {
    const splitRow = rows[i].split(',');
    if (splitRow[3] === 'CS') {
      cs.push(splitRow[0]);
    } else {
      swe.push(splitRow[0]);
    }
  }
  process.stdout.write(`Number of students in CS: ${cs.length}. `);
  process.stdout.write(`List: ${cs.join(', ')}\n`);
  process.stdout.write(`Number of students in SWE: ${swe.length}. `);
  process.stdout.write(`List: ${swe.join(', ')}\n`);
}

module.exports = countStudents;
