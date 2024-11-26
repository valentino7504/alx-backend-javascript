const fs = require('fs');

async function countStudents(path) {
  try {
    const data = await fs.promises.readFile(path, 'utf-8');
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
    console.log(`Number of students in CS: ${cs.length}. List: ${cs.join(', ')}`);
    console.log(`Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`);
  } catch (e) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
