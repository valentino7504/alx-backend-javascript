import fs from 'fs';

const readDatabase = async (path) => {
  try {
    const data = await fs.promises.readFile(path, 'utf-8');
    const rows = data.trim().split('\n');
    rows.shift();
    const studentData = {};
    for (let i = 0; i < rows.length; i += 1) {
      const [firstName,,, field] = rows[i].split(',');
      if (!Object.keys(studentData).includes(field)) studentData[field] = [];
      studentData[field].push(firstName);
    }
    return studentData;
  } catch (e) {
    throw new Error('Cannot load the database');
  }
};

export default readDatabase;
module.exports = readDatabase;
