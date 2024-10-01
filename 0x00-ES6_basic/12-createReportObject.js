export default function createReportObject(employeesList) {
  const allEmployees = {};
  const employees = Object.entries(employeesList);
  for (const [dept, employeeList] of employees) {
    allEmployees[dept] = [...employeeList];
  }
  const report = {
    allEmployees,
    getNumberOfDepartments(allEmployees) {
      return `${Object.keys(allEmployees).length}`;
    },
  };
  return report;
}
