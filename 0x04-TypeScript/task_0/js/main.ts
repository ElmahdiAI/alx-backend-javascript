interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const student1: Student = {
    firstName: 'Mehdi',
    lastName: 'AI',
    age: 22,
    location: 'Khouribga',
};

const student2: Student = {
    firstName: 'Ahmed',
    lastName: 'karim',
    age: 22,
    location: 'Gaza'
};
const studentsList: Student[] = [student1, student2];

// Render the table in Vanilla JavaScript
const body = document.querySelector('body');
const table = document.createElement('table');
const tableHead = document.createElement('thead');
const tableBody = document.createElement('tbody');

// Create table headers
const headers = ['First Name', 'Location'];
const headerRow = document.createElement('tr');
headers.forEach((header) => {
    const th = document.createElement('th');
    th.textContent = header;
    headerRow.appendChild(th);
});
tableHead.appendChild(headerRow);

// Create table rows for each student
studentsList.forEach((student) => {
    const row = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;

    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tableBody.appendChild(row);
});

table.appendChild(tableHead);
table.appendChild(tableBody);
body?.appendChild(table);
