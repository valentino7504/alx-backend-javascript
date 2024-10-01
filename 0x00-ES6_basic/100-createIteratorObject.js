export default function createIteratorObject(report) {
  const arr = [];
  for (const employees of Object.values(report.allEmployees)) {
    arr.push(...employees);
  }
  return arr;
}
