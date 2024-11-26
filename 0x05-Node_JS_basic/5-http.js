const fs = require('fs');
const http = require('http');

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

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('This is the list of our students\n');
    countStudents(database)
      .then((data) => {
        res.end(data);
      })
      .catch((e) => {
        res.statusCode = 404;
        res.end(e.message);
      });
  }
}).listen(1245);

module.exports = app;
