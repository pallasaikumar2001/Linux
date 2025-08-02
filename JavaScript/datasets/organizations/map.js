const data = require("./organisation.json");

const divisions = data.organisation.divisions || [];
const allemployees = divisions.flatMap(division => 
  division.departments ? division.departments.flatMap(department => 
    department.employees ? department.employees.map(employee => employee.name) : []
  ) : []
);
console.log(allemployees);
