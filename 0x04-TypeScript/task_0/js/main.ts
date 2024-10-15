interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
};

const student1: Student = {
  firstName: 'Valentino',
  lastName: 'Theodore',
  age: 18,
  location: 'Ogun'
};
const student2: Student = {
  firstName: 'Godswill',
  lastName: 'Akpabio',
  age: 48,
  location: 'Lagos'
};

const studentsList: Array<Student> = [student1, student2];
const table: HTMLTableElement = document.createElement('table');
const thead: HTMLTableSectionElement = document.createElement('thead');
const tbody: HTMLTableSectionElement = document.createElement('tbody');
table.append(thead, tbody);

const headerRow: HTMLTableRowElement = thead.insertRow();
const nameCell: HTMLTableCellElement = headerRow.insertCell(0);
const locCell: HTMLTableCellElement = headerRow.insertCell(1);

nameCell.textContent = 'Name';
locCell.textContent = 'Location';


document.querySelector('body').append(table);

table.style.border = '1px solid black';

studentsList.forEach((student) => {
  const row = tbody.insertRow();
  const firstNameCell = row.insertCell(0);
  const locationCell = row.insertCell(1);
  firstNameCell.style.border = '1px solid black';
  locationCell.style.border = '1px solid black';

  firstNameCell.innerHTML = student.firstName;
  locationCell.innerHTML = student.location;
})
