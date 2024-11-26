const express = require('express');

const fs = require('fs');

const database = process.argv[2];

async function countStudents(path) {
  try {
    const data = await fs.promises.readFile(path, 'utf-8');
    const rows = data.trim().split('\n');
    rows.shift();
    let resString = `Number of students: ${rows.length}\n`;
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
    resString += `Number of students in CS: ${cs.length}. List: ${cs.join(', ')}\n`;
    resString += `Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`;
    return resString;
  } catch (e) {
    throw new Error('Cannot load the database');
  }
}

const app = express();

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  const response = 'This is the list of our students\n';
  countStudents(database)
    .then((data) => {
      res.status(200).end(`${response}${data}`);
    })
    .catch((e) => {
      res.status(404).end(`${response}${e.message}`);
    });
});

app.listen(1245, () => { });

module.exports = app;
