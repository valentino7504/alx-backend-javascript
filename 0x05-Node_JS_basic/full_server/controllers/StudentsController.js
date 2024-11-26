import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    const path = process.argv[2];
    let responseText = 'This is the list of our students';
    readDatabase(path)
      .then((data) => {
        const sortFn = (a, b) => {
          if (a.toLowerCase() < b.toLowerCase()) return -1;
          if (a.toLowerCase() > b.toLowerCase()) return 1;
          return 0;
        };
        const keys = Object.keys(data).sort(sortFn);
        for (let i = 0; i < keys.length; i += 1) {
          const field = keys[i];
          const students = data[field];
          responseText += `\nNumber of students in ${field}: ${students.length}. `;
          responseText += `List: ${students.join(', ')}`;
        }
        response.status(200).send(responseText);
      }).catch((err) => {
        responseText += `\n${err.message}`;
        response.status(500).send(responseText);
      });
  }

  static getAllStudentsByMajor(request, response) {
    const path = process.argv[2];
    const { major } = request.params;
    readDatabase(path)
      .then((data) => {
        if (!['CS', 'SWE'].includes(major)) {
          return response.status(500).send('Major parameter must be CS or SWE');
        }
        return response.status(200).send(`List: ${data[major].join(', ')}`);
      })
      .catch((err) => response.status(500).send(err.message));
  }
}

export default StudentsController;
module.exports = StudentsController;
