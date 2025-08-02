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


//1️⃣ Find the total salary paid to all employees.

let totalsal=employees.reduce((sum,emp)=>sum+emp.salary,0);
console.log(totalsal);

// 2️⃣ Find the average salary of employees.

let avgsal=employees.reduce((avg,emp)=>avg+emp.salary,0);
console.log(avgsal/employees.length)


// 3️⃣ Find the highest salary among employees.

let highestsal=employees.reduce((high,emp)=>emp.salary>high ? high=emp.salary:high,0)
console.log(highestsal)


// 4️⃣ Count how many employees are in each department.

let deptcount=employees.reduce((count,emp)=>{
    count[emp.department]=(count[emp.department] ||0)+1;
    return count;
},{})
console.log(deptcount);


//5️⃣ Get the name of the employee with the highest salary.

let enamehighsal=employees.reduce((highest,emp)=>emp.salary>highest.salary ? emp:highest);
console.log(enamehighsal);