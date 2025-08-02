let employees = [
    { name: "Alice", age: 25, department: "HR", salary: 50000 },
    { name: "Bob", age: 30, department: "Engineering", salary: 80000 },
    { name: "Charlie", age: 28, department: "Engineering", salary: 75000 },
    { name: "David", age: 35, department: "Finance", salary: 90000 },
    { name: "Eve", age: 40, department: "HR", salary: 60000 },
    { name: "Frank", age: 27, department: "Engineering", salary: 72000 },
    { name: "Grace", age: 29, department: "Marketing", salary: 65000 },
    { name: "Hank", age: 32, department: "Finance", salary: 95000 }
];


//1️⃣ Find all employees in the "Engineering" department.

let engineers=employees.filter(emp=>emp.department==="Engineering");
console.log(engineers)


//2️⃣ Create a new array with employee names and their respective salaries.

let enamesal=employees.filter(emp=>emp.salary>75000)
console.log(enamesal)


//3️⃣ Find employees who are younger than 30 years.

let youngers=employees.filter(emp=>emp.age<30);
console.log(youngers)


//4️⃣ Get employees working in HR or Finance.

let hrfinance=employees.filter(emp=>emp.department==='HR' || emp.department==="Finance");
console.log(hrfinance)


//5️⃣ Find employees whose names start with "A".

let nameA=employees.filter(emp=>emp.name.startsWith("A"));
console.log(nameA)