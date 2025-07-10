// Challenge: Imagine an employee management system for a company. Use template strings to display information about each employee, such as name, position, and salary. Then, use destructuring to extract this data from employee objects.

// Create employee object

let employee = { name: "John", position: "Front-End Developer", salary: 5000 };

// Destructuring using the same name of variable

let { name, position, salary } = employee;

// Output

console.log(name);
console.log(position);
console.log(salary);
