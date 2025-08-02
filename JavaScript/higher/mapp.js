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


// 1️⃣ Extract a list of all employee names.

let enames=employees.map(emp=>emp.name)
console.log(enames);


// 2️⃣ Create a new array with employee names and their respective salaries.

let enamesal=employees.map(emp=>`${emp.name}:${emp.salary}`)
console.log(enamesal);


//3️⃣ Convert all employee names to uppercase.

let enamecap=employees.map(emp=>emp.name.toUpperCase());
console.log(enamecap);


//4. Adding "Senior" tag for employees above 30

let snremp=employees.map(emp=>
    emp.age>30 ? {...emp, name: emp.name+"(senior)"} : null
)
console.log(snremp)


// 5️⃣ Format salaries to include currency, e.g., "$50,000".

let formatsal=employees.map(emp=>`$${emp.salary.toLocaleString()}`);
console.log(formatsal)
