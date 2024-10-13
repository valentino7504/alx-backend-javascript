export default function updateStudentGradeByCity(students, city, newGrades) {
  const cityStudents = students.filter((student) => student.location === city);
  return cityStudents.map((student) => {
    let grade = newGrades.findIndex((grade) => grade.studentId === student.id);
    if (grade === -1) {
      grade = 'N/A';
    } else {
      grade = newGrades[grade].grade;
    }
    return { ...student, grade };
  });
}
